---
name: "Portfolio - Martin De Lucca"
description: "A clear, practical, trusted brand system for local-business digital services."
colors:
  action-green: "#15803d"
  action-green-hover: "#166534"
  guidance-cyan: "#0e7490"
  guidance-cyan-hover: "#155e75"
  guidance-cyan-bright: "#22d3ee"
  guidance-cyan-soft: "#a5f3fc"
  light-bg: "#fafafa"
  light-section: "#f4f4f5"
  light-rule: "#e4e4e7"
  light-rule-strong: "#d4d4d8"
  ink: "#18181b"
  dark-bg: "#09090b"
  dark-surface: "#18181b"
  dark-rule: "#27272a"
  muted: "#52525b"
  muted-soft: "#71717a"
  muted-dark: "#a1a1aa"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Outfit, ui-sans-serif, system-ui"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Outfit, ui-sans-serif, system-ui"
    fontSize: "clamp(2.1rem, 4vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Outfit, ui-sans-serif, system-ui"
    fontSize: "clamp(1.3rem, 1.8vw, 1.9rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Outfit, ui-sans-serif, system-ui"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sm: "0.85rem"
  md: "1rem"
  lg: "1.35rem"
  xl: "1.5rem"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  section: "7rem"
components:
  button-whatsapp:
    backgroundColor: "{colors.action-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
    typography: "{typography.label}"
  button-whatsapp-hover:
    backgroundColor: "{colors.action-green-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.5rem"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 0.85rem"
  case-frame:
    backgroundColor: "{colors.light-section}"
    rounded: "{rounded.lg}"
---

# Design System: Portfolio - Martin De Lucca

## 1. Overview

**Creative North Star: "The Clear Counter"**

This system should feel like walking up to a reliable local service counter: the offer is visible, the next step is obvious, and the tone is calm enough for a non-technical business owner to keep reading. The design is not trying to prove complexity. It turns local-business problems into rows, examples, forms, and contact paths that can be understood at a glance.

The visual language is practical calm. Stone and zinc surfaces do most of the work, cyan guides attention, and green is reserved for WhatsApp and action moments. The interface uses rounded pills, clean rules, visible form fields, and restrained tactile motion to make the page feel usable before a visitor has hired Martin.

The system explicitly rejects generic SaaS and startup landing-page cliches, cold corporate styling, generic developer portfolio tropes, and over-technical visuals. It should never look like a product-growth template with fake metrics. It should look like a clear explanation from someone who can build the practical thing the business needs.

**Key Characteristics:**
- Business-first hierarchy: problems, services, proof, and contact paths before technology.
- Restrained neutral surfaces with two functional accents: cyan for guidance, green for action.
- Tactile and obvious components: pill CTAs, row-based service modules, visible form fields, direct links.
- Minimal depth: borders, tonal layers, and small shadows only where they clarify interaction.
- Plain Spanish copy supported by generous spacing and short line lengths.

## 2. Colors

The palette is a restrained local-service palette: quiet stone/zinc foundations, cyan as the navigation and guidance color, and green as the committed WhatsApp/action color.

### Primary
- **WhatsApp Action Green**: The primary action color used only for WhatsApp CTAs, the floating contact button, and free-review prompts. It signals the real conversion path, not decoration.
- **Pressed Business Green**: The hover/active action state. It should be used only as a response to interaction or a stronger CTA state.

### Secondary
- **Guidance Cyan**: The supporting accent for section markers, service numbers, links, focus states, and helper details. It tells the visitor where to look without competing with green CTAs.
- **Deep Guidance Cyan**: The hover state for links and service CTAs in light mode.
- **Bright Guidance Cyan**: The dark-mode guidance accent. It keeps cyan legible on dark zinc surfaces.
- **Soft Guidance Cyan**: The lightest cyan state for dark-mode hovers and small emphasis moments.

### Neutral
- **Clear Counter Surface**: The main light canvas. It should stay close to neutral, never beige-heavy or decorative.
- **Quiet Section Surface**: Alternating section and case-frame surface for separating content blocks without visual noise.
- **Hairline Rule**: Default light border and divider color for rows, cards, frames, and FAQ rules.
- **Strong Hairline Rule**: A slightly stronger light divider for closing statements and timeline rules.
- **Working Ink**: Primary text, dark logos, dark buttons, and dark-mode surfaces.
- **Night Counter**: Dark-mode page background.
- **Night Surface**: Dark-mode panels, forms, and cards.
- **Night Rule**: Dark-mode dividers and borders.
- **Plain Copy Gray**: Secondary light-mode body copy.
- **Soft Copy Gray**: Tertiary light-mode copy, footnotes, and helper text.
- **Dark Copy Gray**: Secondary dark-mode body copy.
- **White**: Button text, inverted marks, and light-on-dark contrast.

### Named Rules
**The Green Means Contact Rule.** Green is reserved for WhatsApp, review, and submit moments. Do not use green as a decorative accent in unrelated sections.

**The Cyan Guides Rule.** Cyan marks structure and discovery: section markers, numbers, text links, focus states. Cyan should point; green should convert.

**The Neutral Counter Rule.** Body backgrounds must remain neutral stone/zinc. Do not drift into cream, sand, parchment, or startup pastel surfaces.

## 3. Typography

**Display Font:** Outfit (with ui-sans-serif, system-ui fallback)  
**Body Font:** Outfit (with ui-sans-serif, system-ui fallback)  
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** Outfit gives the site directness and friendly confidence without becoming corporate. JetBrains Mono is used sparingly for labels, numbers, and operational cues; it should support clarity, not cosplay as a developer terminal.

### Hierarchy
- **Display** (800, `clamp(2.25rem, 6vw, 3.75rem)`, 0.95 line-height): Hero headlines and the primary value proposition. Keep the maximum below 6rem and avoid tighter than `-0.04em` tracking.
- **Headline** (800, `clamp(2.1rem, 4vw, 3.8rem)`, 1 line-height): Section headings. Short, plain, and balanced; never stack long technical phrases.
- **Title** (800, `clamp(1.3rem, 1.8vw, 1.9rem)`, 1.1 line-height): Case titles, service headings, and prominent proof points.
- **Body** (400-500, `1rem` to `1.125rem`, 1.6-1.75 line-height): Explanatory copy. Keep line length around 54-68ch so business owners can scan without fatigue.
- **Label** (700, `0.66rem` to `0.72rem`, 0.14-0.22em tracking, uppercase only when short): Section markers, tags, and operational numbers. Use sparingly; repeated labels on every block should be avoided in future additions.

### Named Rules
**The Plain Spanish Rule.** Type exists to make the business promise obvious. Favor short concrete Spanish over technical vocabulary, decorative phrasing, or meta-copy.

**The Mono Is Evidence Rule.** JetBrains Mono is allowed for small labels, numbers, and system-like details. It is forbidden as a lazy shorthand for being technical.

## 4. Elevation

This system uses a hybrid of tonal layering, hairline borders, and restrained tactile shadows. Most surfaces are flat at rest. Depth appears on CTAs, sticky navigation, floating WhatsApp, or framed proof where it clarifies state and clickability. Decorative glassmorphism is not part of the system; backdrop blur is acceptable only for navigation/form legibility over the page.

### Shadow Vocabulary
- **Action Lift** (`0 14px 28px -18px rgba(21, 128, 61, 0.72)`): Used for primary WhatsApp CTAs where clickability must be unmistakable.
- **Floating Contact Lift** (`0 18px 35px -20px rgba(21, 128, 61, 0.9)`): Used only on the fixed WhatsApp button.
- **Tactile Promo Lift** (`0 14px 30px -15px rgba(21, 128, 61, 0.7)`): Used on the contact section's WhatsApp promo button.
- **Panel Glow** (`0 20px 50px -30px rgba(24, 24, 27, 0.5)`): Legacy/occasional panel depth. Use only when a surface needs to read as an interactive module; never combine with heavy borders as decoration.

### Named Rules
**The Flat Until Useful Rule.** Borders and tonal contrast are the default depth tools. Shadows appear only when they make an action or framed proof clearer.

**The No Ghost Cards Rule.** Do not pair a 1px border with a wide soft shadow on generic cards. Pick the border or a tight functional lift, not both.

## 5. Components

### Buttons
- **Shape:** Fully rounded pills (`999px`) for primary and secondary CTAs. The shape makes actions feel obvious and touch-friendly.
- **Primary:** WhatsApp/action buttons use Action Green with white text and compact label typography (`0.875rem`, 600-700). Padding ranges from `0.75rem 1.5rem` for main CTAs to `0.5rem 1rem` for header CTAs.
- **Hover / Focus:** Green deepens on hover. Active states compress slightly using the tactile scale pattern. Focus states should use the existing cyan focus language rather than decorative glow.
- **Secondary / Ghost:** Secondary CTAs are white or translucent white with zinc text, 1px borders, and cyan hover text/border. They must stay secondary to green actions.

### Chips
- **Style:** Status and section chips use pill geometry, small labels, and cyan-tinted backgrounds or cyan text. They are for orientation, not decoration.
- **State:** The small status dot pulses in the hero by default and must stop under reduced motion. Tags in case frames use dark translucent pills with mono uppercase text.

### Cards / Containers
- **Corner Style:** Case frames and form containers use gently rounded corners (`1.35rem` to `1.5rem`). Pills remain fully rounded. Do not push new card radii past this range.
- **Background:** Light frames use Quiet Section Surface or white; dark frames use Night Surface.
- **Shadow Strategy:** Borders and tonal surfaces carry most depth. Shadows are reserved for interactive buttons or distinct framed modules.
- **Border:** Hairline Rule in light mode, Night Rule in dark mode.
- **Internal Padding:** Rows use vertical padding around `1.25rem` to `1.75rem`. Forms and addon blocks use `1.25rem` padding.

### Inputs / Fields
- **Style:** Fields use a 1px rule, white/translucent white background, and `0.85rem` radius. Dark fields use translucent zinc with white text.
- **Focus:** Border shifts to Guidance Cyan with a subtle cyan ring (`0 0 0 3px rgba(6, 182, 212, 0.1)`).
- **Error / Disabled:** Errors should use clear red text with plain copy. Disabled states should reduce opacity but keep text readable.

### Navigation
- **Style, typography, default/hover/active states, mobile treatment.** The header uses a fixed top nav with a small MD mark, a pill-shaped desktop nav group, and a mobile menu that opens into a simple stacked list. Hover states stay quiet: zinc background shifts and cyan text. The scrolled header uses blur and a hairline border only to maintain readability.

### Service Rows
Service rows are the signature content component. They use horizontal row structure on desktop, stacked content on mobile, cyan mono numbers, strong Outfit headings, and direct CTA links. This pattern should remain more important than generic card grids because it matches the promise: two concrete ways to help.

### Case Frames
Case frames are proof containers. They use browser/app-like framing only when showing a real page or system screenshot. The frame supports the evidence; it should never become an abstract decorative dashboard.

## 6. Do's and Don'ts

### Do:
- **Do** lead every new section with a business problem, outcome, or next step before mentioning the technology.
- **Do** reserve Action Green for WhatsApp, review, and submit actions so conversion paths stay unmistakable.
- **Do** use Guidance Cyan for structure, links, numbers, and focus states.
- **Do** keep body copy at 54-68ch where possible and use generous line-height for readability.
- **Do** preserve keyboard access, reduced motion behavior, and WCAG AA contrast in both themes.
- **Do** use row-based service/process structures when the content is sequential or comparative; they are more on-brand than generic identical card grids.

### Don't:
- **Don't** use generic SaaS and startup landing-page cliches: fake metrics, inflated promises, abstract productivity claims, or a hero that could belong to any software company.
- **Don't** use cold corporate styling that feels distant from local businesses.
- **Don't** use generic developer portfolio tropes that center the technology stack more than the client's business problem.
- **Don't** use over-technical visuals, decorative dashboards, or complexity as proof of expertise.
- **Don't** use green for decorative icons, labels, or background flourishes; green means contact.
- **Don't** repeat tiny uppercase tracked eyebrows above every new section by default. One clear label can orient; repeated labels become scaffolding.
- **Don't** use gradient text, side-stripe accent borders, sketchy SVG illustrations, diagonal stripe backgrounds, or glassmorphism as decoration.
- **Don't** combine 1px borders with wide soft shadows on generic cards. The system is flat until depth is useful.
