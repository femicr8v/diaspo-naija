Great choice! **Space Grotesk** and **Roboto** pair very well for a clean, modern, and readable aesthetic.

Below is your full **`.md` (Markdown)** instruction document — ready to give to your AI agent (like Cursor AI) or share with a developer to build your Global Nigerian Community MVP using only HTML and CSS, with your color scheme from `design.json` and Google Fonts `Space Grotesk` and `Roboto`.

---

````markdown
# 🧭 AI AGENT INSTRUCTION DOCUMENT – MVP LANDING PAGE

**Project:** Global Nigerian Community Platform  
**Technology Stack:** HTML + CSS only  
**Fonts:** Google Fonts – Space Grotesk (primary), Roboto (secondary)  
**Colors:** From local `design.json` file  
**No frameworks:** No Tailwind, Bootstrap, JS libraries unless stated  
**Pages:** Static (No backend)

---

## ✅ 1. OBJECTIVE

Create a visually engaging and responsive multi-section landing page for a digital platform connecting **Nigerians in the Diaspora** with **Nigerians in Nigeria**. The MVP includes:

- Main landing page (`index.html`)
- Sign-up reassurance and registration page (`signup.html`)
- Success confirmation + Discord redirect page (`success.html`)

---

## 🧱 2. FILE STRUCTURE

```plaintext
project-root/
│
├── index.html                # Landing page
├── signup.html               # Reassurance + sign-up form
├── success.html              # Confirmation page with Discord redirect
├── styles/
│   └── style.css             # All site styling
├── assets/
│   └── icons/                # Illustrations/icons/images
└── design.json               # Color scheme (referenced by developer)
```
````

---

## 🌐 3. LANDING PAGE – `index.html`

This is the public-facing homepage. Layout should be responsive, visually balanced, and clear in messaging.

### ✅ Sections (in order):

#### 1. Navbar

- Left: Logo
- Right: Links → `How It Works`, `Mentorship`, `Testimonials`, `Join Now`
- Sticky at top

#### 2. Hero Section

- Large headline: _“Connecting Nigerians Globally”_
- Subtext: _“A trusted hub bridging Diaspora and Nigeria through verified information, mentorship, and opportunity.”_
- CTA: **Join Now** → Links to `signup.html`

#### 3. Features Section (3 Columns)

- Card 1: Verified Information
- Card 2: Global Mentorship
- Card 3: Investment Opportunities
- Each with an icon and short description

#### 4. How It Works

- 4 Steps:
  1. Sign Up
  2. Join Discord
  3. Build Your Profile _(coming soon)_
  4. Connect and Grow
- Horizontal or vertical layout depending on screen size

#### 5. Audience Blocks

- Left: Nigerians in the Diaspora (pain points + benefits)
- Right: Nigerians in Nigeria (pain points + benefits)

#### 6. Mentorship CTA

- Message: _“Join our mentorship network — as a guide or a learner.”_
- Buttons: `Become a Mentor` | `Find a Mentor`

#### 7. Testimonials

- 2–3 quotes from mock users
- Include name, country, and optional photo avatar

#### 8. FAQ Section

- Use collapsible questions:
  - Is this platform free?
  - Why is Discord used?
  - Can I mentor from abroad?
  - What’s coming next?

#### 9. Newsletter CTA

- Headline: _“Stay in the Loop”_
- Input field for email + submit button (no backend submission)

#### 10. Footer

- Platform name/logo
- Basic links (Terms, Privacy)
- © 2025 All rights reserved

---

## 🧾 4. SIGN-UP PAGE – `signup.html`

Triggered by "Join Now" CTA. Reassures users and collects registration details.

### Content:

#### Header Message:

- Headline: _“Welcome to the Global Nigerian Community!”_
- Subtext: _“You’re one step away from joining a trusted network of Nigerians worldwide.”_

#### Reassurance Section:

- Paragraph explaining the community:
  - Safe, verified, diaspora-friendly platform
  - Designed to help people navigate relocation, careers, mentorship

#### Form:

- Fields:
  - Full Name (text)
  - Email (email)
  - Password (password)
- Social Signup:
  - `Sign up with Google` button
  - `Sign up with LinkedIn` button
- Primary Button: `Create Account`

### Behavior:

- Basic HTML validation
- On form submission:
  - Simulate success with redirect to `success.html`

---

## ✅ 5. SUCCESS PAGE – `success.html`

### Content:

- Message: _“You’ve signed up successfully!”_
- Supporting text: _“Now join our Discord community and begin connecting instantly.”_
- Button: `Go to Discord` → Placeholder link (`https://discord.com/invite/YOUR-LINK`)

### Optional:

- Add countdown timer (5s) with auto-redirect using:
  ```html
  <script>
    setTimeout(() => {
      window.location.href = "https://discord.com/invite/YOUR-LINK";
    }, 5000);
  </script>
  ```

---

## 🎨 6. DESIGN & STYLING NOTES

### Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&family=Space+Grotesk:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

- **Headings:** Space Grotesk
- **Body text:** Roboto

### Colors:

- Load colors from local `design.json`
- Use CSS variables:

```css
:root {
  --primary-color: #from-json;
  --accent-color: #from-json;
  --bg-color: #from-json;
  --text-color: #from-json;
}
```

### Layout:

- Use Flexbox/Grid
- Mobile-first responsiveness
- Max content width: `1200px`
- Section padding: `60px` desktop / `40px` mobile

### Buttons:

- Default button styling with hover states
- Maintain visual hierarchy between primary and secondary actions

---

## 🔐 7. FUNCTIONALITY SUMMARY

- No JavaScript frameworks
- No external libraries (except Google Fonts)
- Form submissions are simulated
- No OAuth implementation required for Google/LinkedIn buttons — just styled buttons
- Redirection is handled via `window.location.href`

---

## ✅ 8. COMPLETION CHECKLIST

| Item                              | Status |
| --------------------------------- | ------ |
| index.html created                | ✅     |
| signup.html created               | ✅     |
| success.html created              | ✅     |
| Responsive layout                 | ✅     |
| Google Fonts integrated           | ✅     |
| Colors used from `design.json`    | ✅     |
| Forms validate correctly          | ✅     |
| Discord redirect functional       | ✅     |
| Newsletter form included          | ✅     |
| No broken sections at mobile size | ✅     |

---

## 📌 NOTES

- Be semantic: Use `<section>`, `<header>`, `<footer>`, `<main>` for structure
- Comment each section in HTML for clarity
- Icons can be pulled from HeroIcons, Font Awesome, or placeholder SVGs

---
