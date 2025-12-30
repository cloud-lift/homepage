# Blog Documentation

The PLN Cloud homepage now supports a multilingual blog in English and Polish.

## Directory Structure

```
content/
├── blog/                      # English blog posts
│   ├── _index.md             # Blog list page
│   └── *.md                  # Individual blog posts
├── pl/
│   ├── _index.md             # Polish homepage
│   └── blog/                 # Polish blog posts
│       ├── _index.md         # Polish blog list page
│       └── *.md              # Individual Polish blog posts
└── _index.md                 # English homepage

layouts/
├── blog/
│   ├── list.html             # Blog listing template
│   └── single.html           # Individual post template
├── pl/
│   └── index.html            # Polish homepage template
└── index.html                # English homepage template

static/css/
├── blog.css                  # Blog-specific styles
├── style.css                 # Main styles
└── mailerlite.css           # Form styles
```

## Creating a New Blog Post

### English Post

Create a new file in `content/blog/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: 2024-12-27
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your post content here...
```

### Polish Post

Create a new file in `content/pl/blog/` with the following frontmatter:

```markdown
---
title: "Tytuł Twojego Posta"
date: 2024-12-27
author: "Imię Autora"
tags: ["tag1", "tag2"]
---

Treść twojego posta tutaj...
```

## Features

- **Multilingual Support**: Full support for English and Polish content
- **Responsive Design**: Mobile-friendly blog layout
- **Navigation**: Easy navigation between homepage and blog
- **Language Switching**: Toggle between English and Polish versions
- **Clean URLs**:
  - English: `/blog/` and `/blog/post-name/`
  - Polish: `/pl/blog/` and `/pl/blog/post-name/`
- **Tags**: Categorize posts with tags
- **Author Attribution**: Display post author
- **Date Formatting**: Automatic date formatting

## URLs

- **English Homepage**: `/`
- **English Blog**: `/blog/`
- **Polish Homepage**: `/pl/`
- **Polish Blog**: `/pl/blog/`

## Styling

All blog styles are in `/static/css/blog.css` and include:
- Typography optimized for reading
- Responsive design
- Syntax highlighting for code blocks
- Tag styling
- Author and date metadata

## Building and Deploying

The blog uses Hugo static site generator. To build:

```bash
cd homepage
hugo
```

To serve locally for development:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313`

## Navigation

The navigation menu includes:
- Home / Strona główna
- Blog
- Language switcher (English/Polski)

## Configuration

All multilingual configuration is in `hugo.toml`:

```toml
[languages]
  [languages.en]
    languageCode = 'en-us'
    languageName = 'English'
    title = 'PLN Cloud'
    weight = 1
    [languages.en.params]
      blog_title = 'Blog'
      blog_description = 'Insights and updates from PLN Cloud'

  [languages.pl]
    languageCode = 'pl-pl'
    languageName = 'Polski'
    title = 'PLN Cloud'
    weight = 2
    [languages.pl.params]
      blog_title = 'Blog'
      blog_description = 'Przemyślenia i aktualności z PLN Cloud'
```
