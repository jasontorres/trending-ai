
export type CardType = 'project' | 'image' | 'text' | 'link' | 'video' | 'article';

export interface GridItem {
  id: string;
  slug?: string;
  type: CardType;
  title?: string;
  subtitle?: string;
  content?: string; // Short text
  body?: string;    // Markdown body
  description?: string;
  category?: string;
  imageUrl?: string;
  linkUrl?: string;
  overlayText?: string;
  width?: 'normal' | 'wide' | 'full';
  seoTitle?: string;
  seoDescription?: string;
  status?: 'draft' | 'published';
  published_at?: string; // ISO 8601 timestamp
}
