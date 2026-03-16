# Content Frontmatter Guide

This document explains how to create and configure content items using markdown files in the `/content` directory.

---

## File Naming

Files are named with a numeric prefix to control display order:

```
1-about.md
2-neonpixels.md
3-slerp.md
```

Lower numbers appear first in the grid.

---

## Frontmatter Structure

Every content file starts with YAML frontmatter between `---` delimiters:

```yaml
---
type: image
slug: my-content-slug
width: normal
title: "My Title"
imageUrl: "https://example.com/image.jpg"
---
```

---

## Required Fields

| Field | Description |
|-------|-------------|
| `type` | The content type (see below) |
| `slug` | URL-friendly identifier for the post |

---

## Content Types

### `image`

A visual card with an image background. Use for photography, visual work, or featured images.

```yaml
---
type: image
slug: mt-fuji-explorations
width: normal
overlayText: "Mt. Fuji Explorations"
imageUrl: "https://images.unsplash.com/photo-..."
---
```

**Common fields:** `imageUrl`, `overlayText`, `title`

---

### `article`

Long-form content with a title, category, and markdown body. The markdown content below the frontmatter becomes the article body.

```yaml
---
type: article
slug: engineering-intent
width: normal
category: "Philosophy"
title: "Engineering Intent"
seoTitle: "Engineering Intent | Architectural Philosophy"
seoDescription: "An exploration of building software with purpose."
---
Your markdown content goes here...
```

**Common fields:** `title`, `category`, `seoTitle`, `seoDescription`

---

### `link`

An external link card. Clicking takes users to the specified URL.

```yaml
---
type: link
slug: github-contributions
title: "Open Source Contributions"
linkUrl: "github.com/jtorres"
width: normal
---
```

**Common fields:** `title`, `linkUrl`

---

### `video`

A video card with a thumbnail image. Typically links to an external video.

```yaml
---
type: video
slug: showreel-2024
width: wide
linkUrl: "showreel.video/2024"
imageUrl: "https://images.unsplash.com/photo-..."
---
```

**Common fields:** `imageUrl`, `linkUrl`

---

### `project`

For showcasing projects with title, subtitle, and description.

```yaml
---
type: project
slug: my-project
width: wide
title: "Project Name"
subtitle: "A brief tagline"
description: "More detailed project description"
imageUrl: "https://example.com/project-image.jpg"
---
```

**Common fields:** `title`, `subtitle`, `description`, `imageUrl`

---

### `text`

A text-only card without images.

```yaml
---
type: text
slug: quick-thought
width: normal
title: "A Quick Thought"
content: "Short text content here"
---
```

**Common fields:** `title`, `content`

---

## Width Options

The `width` field controls how much horizontal space the card takes in the grid:

| Value | Behavior |
|-------|----------|
| `normal` | Standard single-column width |
| `wide` | Spans two columns on larger screens |
| `full` | Spans the entire grid width |

```yaml
width: normal  # Default
width: wide    # Featured content
width: full    # Hero-style content
```

---

## All Available Fields

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Content type: `project`, `image`, `text`, `link`, `video`, `article` |
| `slug` | string | URL identifier (used in `/post/:slug` routes) |
| `width` | string | Grid width: `normal`, `wide`, `full` |
| `title` | string | Main title text |
| `subtitle` | string | Secondary title or tagline |
| `content` | string | Short text content (for text cards) |
| `description` | string | Longer description text |
| `category` | string | Category label (shown on articles) |
| `imageUrl` | string | URL to the card's image |
| `linkUrl` | string | External URL for link/video cards |
| `overlayText` | string | Text displayed over image cards |
| `seoTitle` | string | Custom title for SEO meta tags |
| `seoDescription` | string | Custom description for SEO meta tags |
| `status` | string | Set to `draft` to hide from listings. Omit or use `published` to show |

---

## Examples

### Photography Card

```yaml
---
type: image
slug: kyoto-designers-guide
width: wide
overlayText: "Kyoto — Designer's Guide"
imageUrl: "https://images.unsplash.com/photo-..."
---
```

### Blog Article

```yaml
---
type: article
slug: typescript-at-scale
width: wide
category: "Engineering"
title: "TypeScript at Scale"
---
Your article content in markdown...
```

### External Link

```yaml
---
type: link
slug: x-engineering-logs
title: "Daily Engineering Logs"
linkUrl: "x.com/jasont"
width: normal
---
```

---

## Tips

1. **Slugs should be unique** — Each content item needs a distinct slug for routing
2. **Use `wide` for featured content** — Makes important items stand out in the grid
3. **Images work best with Unsplash** — The `auto=format&fit=crop` params optimize delivery
4. **SEO fields are optional** — Falls back to `title` and first paragraph if not specified
5. **Order matters** — Number prefixes control grid order, lower numbers appear first
