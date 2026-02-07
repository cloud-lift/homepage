# CloudLift Homepage

Landing page for CloudLift - Polish cloud infrastructure for startups.

## Project Structure

- `layouts/index.html` - Main landing page (static HTML with Tailwind CSS)
- `static/images/` - Logo and photos
- `email-sequence.yaml` - Email nurture sequence for beta subscribers
- `hugo.toml` - Hugo configuration (deployed via Netlify)

## Email Sequence

The `email-sequence.yaml` contains a 10-email nurture sequence focused on gathering feedback about pricing, required services, and pain points.

### Tools for Generating Email Templates

#### Recommended: Loops.so

**Best for:** SaaS startups, simple sequences, developer-friendly

- Website: https://loops.so
- Pricing: Free up to 1,000 contacts, $49/mo for 5,000 contacts
- API docs: https://loops.so/docs/quickstart

**Why Loops:**
- Built specifically for SaaS companies
- Simple "Loops" feature for automated sequences
- Clean API for programmatic setup
- Event-based triggers
- Charges by contacts, not emails sent

**How to use with email-sequence.yaml:**
1. Create a Loop (automation) in Loops.so UI
2. Use their API to sync subscribers from MailerLite or directly
3. Manually copy email content from YAML to their editor

---

#### Alternative: MailerLite (already integrated)

**Best for:** Using existing setup, visual workflow builder

- Website: https://www.mailerlite.com
- Already integrated on landing page
- Python SDK: https://github.com/mailerlite/mailerlite-python

**How to use:**
1. Go to Automation > Create Workflow
2. Trigger: "When subscriber joins a group"
3. Add delays and email steps matching `email-sequence.yaml`
4. Copy email content manually

**API automation setup:**
```python
import mailerlite

client = mailerlite.Client(api_key='YOUR_API_KEY')

# List automations
automations = client.automations.list()
```

---

#### For Custom/Developer Approach: MJML + Resend

**Best for:** Full control, custom infrastructure

**MJML** - Email template framework
- Website: https://mjml.io
- GitHub: https://github.com/mjmlio/mjml
- CLI: `npm install -g mjml`

**Resend** - Transactional email API
- Website: https://resend.com
- Simple API, great DX

**Resendly** - Automation layer for Resend
- Website: https://resend.ly
- Visual automation builder on top of Resend

**Workflow:**
1. Convert YAML emails to MJML templates
2. Compile MJML to HTML: `mjml template.mjml -o output.html`
3. Use Resend API to send, or Resendly for automation

Example MJML template:
```mjml
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>
        <mj-text>Hej!</mj-text>
        <mj-text>{{content}}</mj-text>
        <mj-text>Bartek</mj-text>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
```

---

#### Enterprise Option: Customer.io

**Best for:** Complex automations, large scale, event-driven

- Website: https://customer.io
- API docs: https://docs.customer.io
- Pricing: Starts ~$100/mo

**Features:**
- Visual workflow builder
- Event-based triggers from your app
- Webhooks and API integrations
- Advanced segmentation

---

### Quick Comparison

| Tool | Price (start) | Complexity | API | Best for |
|------|---------------|------------|-----|----------|
| MailerLite | Free | Low | Yes | Already using it |
| Loops.so | Free | Low | Yes | SaaS, simple sequences |
| Resend + Resendly | ~$20/mo | Medium | Yes | Developers, control |
| Customer.io | ~$100/mo | High | Yes | Scale, complex flows |

### Recommendation

**Start with MailerLite** since it's already integrated. Create the automation workflow manually using the UI - it's faster than setting up a new tool.

**Later, consider Loops.so** if you want cleaner UX and better SaaS-focused features.

---

## Deployment

Deployed via Netlify. Hugo builds the static site.

```bash
# Local development
hugo server

# Build
hugo --gc --minify
```

## Assets

- Logo: `/static/images/logo.png`
- Founder photo: `/static/images/photo.jpg`

---

## Styling Guidelines

Uses **Tailwind CSS** via CDN. No custom CSS files needed.

### Color Palette

#### Primary (Slate)
| Name | Tailwind | Hex | Usage |
|------|----------|-----|-------|
| slate-950 | `bg-slate-950` | #020617 | Footer background |
| slate-900 | `bg-slate-900` | #0f172a | Dark sections, cards, inputs |
| slate-800 | `bg-slate-800` | #1e293b | Secondary dark elements |
| slate-700 | `border-slate-700` | #334155 | Dark borders |
| slate-600 | `text-slate-600` | #475569 | Secondary text |
| slate-500 | `text-slate-500` | #64748b | Muted text |
| slate-400 | `text-slate-400` | #94a3b8 | Light text on dark bg |
| slate-300 | `text-slate-300` | #cbd5e1 | Headings on dark bg |
| slate-200 | `border-slate-200` | #e2e8f0 | Light borders |
| slate-100 | `bg-slate-100` | #f1f5f9 | Badges, subtle backgrounds |
| slate-50 | `bg-slate-50` | #f8fafc | Section backgrounds |

#### Accent Colors
| Color | Tailwind | Usage |
|-------|----------|-------|
| Green | `text-green-400`, `bg-green-500` | Success, checkmarks, active states |
| Blue | `bg-blue-100`, `text-blue-600` | Feature icons |
| Purple | `bg-purple-100`, `text-purple-600` | Feature icons |
| Amber | `bg-amber-100`, `text-amber-600` | Feature icons |
| Indigo | `bg-indigo-100`, `text-indigo-600` | Feature icons |

### Typography

- **Font:** System font stack (Tailwind default `font-sans`)
- **Antialiasing:** `antialiased` on body

#### Sizes
| Element | Classes |
|---------|---------|
| Hero H1 | `text-4xl md:text-5xl font-bold` |
| Section H2 | `text-3xl md:text-4xl font-bold` |
| Card H3 | `text-xl font-semibold` or `text-lg font-semibold` |
| Body text | `text-lg` (hero), `text-base` (default) |
| Small text | `text-sm` |

### Buttons

#### Primary (Dark)
```html
<a class="px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
```

#### Primary (Light/CTA)
```html
<a class="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
```

#### Secondary/Outline
```html
<a class="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
```

#### Ghost (on dark bg)
```html
<a class="px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
```

### Cards

#### Light card
```html
<div class="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
```

#### Dark card
```html
<div class="bg-slate-800 rounded-xl p-8 border border-slate-700">
```

#### Feature card (hover effect)
```html
<div class="p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all">
```

### Sections

#### Light section
```html
<section class="py-20 bg-slate-50">
```

#### Dark section
```html
<section class="py-20 bg-slate-900">
```

#### Hero gradient
```css
.gradient-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}
```

### Icons

- Use inline SVG with `stroke="currentColor"`
- Standard sizes: `w-4 h-4`, `w-5 h-5`, `w-6 h-6`
- Icon containers: `w-12 h-12 rounded-xl flex items-center justify-center`
- Color icon bg: `bg-{color}-100` with `text-{color}-600`

### Spacing

- Section padding: `py-20`
- Container: `max-w-6xl mx-auto px-6`
- Card padding: `p-6` or `p-8`
- Gap between items: `gap-4`, `gap-6`, `gap-8`

### Responsive

- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`
- Common patterns:
  - `text-4xl md:text-5xl` - larger text on desktop
  - `grid md:grid-cols-2 lg:grid-cols-4` - responsive grid
  - `hidden md:flex` - hide on mobile
