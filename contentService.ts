
import { GridItem } from './types';

const contentModules = import.meta.glob('./content/**/*.md', { query: '?raw', eager: true });

export function getPortfolioItems(): GridItem[] {
  const items = Object.entries(contentModules).map(([path, module]) => {
    const rawText = typeof module === 'string' ? module : (module as any).default;
    return parseMarkdown(path, rawText);
  });

  // Filter out drafts (status: draft means hidden, missing or other value means published)
  const publishedItems = items.filter(item => item.status !== 'draft');

  // Sort items based on published_at timestamp (most recent first), fall back to filename number
  return publishedItems.sort((a, b) => {
    // If both have published_at, sort by timestamp (most recent first)
    if (a.published_at && b.published_at) {
      return new Date(b.published_at).getTime() - new Date(a.published_at).getTime();
    }

    // If only one has published_at, prioritize it
    if (a.published_at) return -1;
    if (b.published_at) return 1;

    // Fall back to filename number sorting (reverse order for backwards compatibility)
    const getNum = (id: string) => {
      const match = id.match(/(\d+)-/);
      return match ? parseInt(match[1], 10) : 999;
    };
    return getNum(b.id) - getNum(a.id);
  });
}

function parseMarkdown(filename: string, raw: string): GridItem {
  const frontmatterRegex = /^---([\s\S]*?)---/;
  const match = raw.match(frontmatterRegex);

  const item: Partial<GridItem> = {
    id: filename,
  };

  if (match) {
    const yaml = match[1];
    const body = raw.replace(frontmatterRegex, '').trim();

    yaml.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
        if (key) {
          (item as any)[key] = value;
        }
      }
    });

    item.body = body;
  } else {
    // Fallback if no frontmatter
    item.type = 'text';
    item.body = raw;
  }

  return item as GridItem;
}
