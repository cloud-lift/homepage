# PLN Cloud Landing Page

A modern Hugo-based landing page for collecting waitlist signups for PLN Cloud's closed beta.

## Features

- Modern, responsive design optimized for startups
- MailerLite integration for email collection
- Customizable content via Hugo front matter
- Fallback form when MailerLite is not configured

## Getting Started

### Prerequisites

- [Hugo](https://gohugo.io/installation/) installed on your system

### Running Locally

```bash
cd homepage
hugo server -D
```

Visit `http://localhost:1313` to see your landing page.

### Building for Production

```bash
hugo --minify
```

The static site will be generated in the `public/` directory.

## MailerLite Setup

### Step 1: Create a MailerLite Account

1. Sign up for free at [MailerLite.com](https://www.mailerlite.com/)
2. Complete the onboarding process

### Step 2: Create an Embedded Form

1. In your MailerLite dashboard, go to **Forms** → **Embedded forms**
2. Click **Create embedded form**
3. Choose **Inline form** type
4. Customize the form:
   - Add **Email** field (required)
   - Optionally add **Name** field
   - Customize button text to "Join the Waitlist"
   - Style it to match your brand (or leave default - we'll override with CSS)
5. Click **Done** and then **Publish**

### Step 3: Get Your Account ID

1. Go to **Settings** → **Integrations** → **Developer API**
2. Copy your **Account ID** (looks like: `123456`)

### Step 4: Get Your Form ID

1. Go back to **Forms** → **Embedded forms**
2. Click on your newly created form
3. Click **</> Embed** button
4. Look for the embed code, which contains something like:
   ```html
   <div class="ml-embedded" data-form="AbCdEf"></div>
   ```
5. Copy the value from `data-form` (e.g., `AbCdEf`)

### Step 5: Configure Hugo

Edit `hugo.toml` and add your MailerLite credentials:

```toml
[params]
  mailerlite_account_id = "123456"  # Your Account ID
  mailerlite_form_id = "AbCdEf"     # Your Form ID
```

### Step 6: Test It

1. Restart your Hugo server:
   ```bash
   hugo server -D
   ```
2. Visit your site and test the signup form
3. Check your MailerLite dashboard to confirm the subscriber was added

## Customizing Content

Edit `content/_index.md` to customize:

- Hero title and description
- Feature cards (icons, titles, descriptions)

Example:

```yaml
---
title: "PLN Cloud - Developer-Friendly Cloud for Startups"
hero_title: "Ship Faster with Developer-First Cloud Infrastructure"
hero_description: "Your custom description here..."
features:
  - icon: "🚀"
    title: "Your Feature"
    description: "Feature description..."
---
```

## Customizing Styles

Edit `static/css/style.css` to customize:

- Colors (see `:root` CSS variables)
- Typography
- Spacing and layout
- Responsive breakpoints

### Color Scheme

The default color scheme uses a purple gradient. To change it, modify these CSS variables in `static/css/style.css`:

```css
:root {
    --primary-color: #2563eb;      /* Primary brand color */
    --primary-hover: #1d4ed8;      /* Hover state */
    --background: #ffffff;          /* Background color */
    --text-primary: #1e293b;       /* Primary text */
    --text-secondary: #64748b;     /* Secondary text */
}
```

## MailerLite Form Styling

The MailerLite embedded form automatically inherits your site's styles. If you need to further customize the MailerLite form appearance, you can:

1. Add custom CSS targeting `.ml-embedded` classes in `static/css/style.css`
2. Or use MailerLite's form builder to match your design

## Fallback Form

If you haven't configured MailerLite yet, the site will show a basic HTML form. This form currently shows a success message but doesn't actually save emails. Configure MailerLite to enable real email collection.

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - Build command: `hugo --minify`
   - Publish directory: `public`
4. Add environment variables if needed

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Framework Preset: Hugo
4. Build settings will be auto-detected

### Deploy to GitHub Pages

1. Create `.github/workflows/hugo.yml`:
   ```yaml
   name: Deploy Hugo site to Pages

   on:
     push:
       branches: ["main"]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: peaceiris/actions-hugo@v2
           with:
             hugo-version: 'latest'
         - run: hugo --minify
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./public
   ```

## License

Copyright © 2025 PLN Cloud. All rights reserved.
