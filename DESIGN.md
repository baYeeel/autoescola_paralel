---
name: Modern Professionalism
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474f'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#425e91'
  primary: '#002452'
  on-primary: '#ffffff'
  primary-container: '#1b3a6b'
  on-primary-container: '#89a5dd'
  inverse-primary: '#acc7ff'
  secondary: '#964900'
  on-secondary: '#ffffff'
  secondary-container: '#ff8927'
  on-secondary-container: '#642f00'
  tertiary: '#626200'
  on-tertiary: '#ffffff'
  tertiary-container: '#b1b100'
  on-tertiary-container: '#424200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#294678'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#ffb786'
  on-secondary-fixed: '#311400'
  on-secondary-fixed-variant: '#723600'
  tertiary-fixed: '#eaea1b'
  tertiary-fixed-dim: '#cdcd00'
  on-tertiary-fixed: '#1d1d00'
  on-tertiary-fixed-variant: '#494900'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  h1:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  button-text:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is built to balance the heritage of a family-owned business with the precision required of a modern driving academy. The brand personality is **expert and authoritative**, yet deeply **rooted in the local community**. It seeks to evoke a feeling of safety, calmness, and progress.

The visual direction follows a **Corporate / Modern** aesthetic. It prioritizes clarity and high-quality utility, utilizing a structured layout that feels organized and dependable. By combining the stability of deep blues with the energetic warmth of vibrant orange, the system guides students through the complexities of driver education with confidence.

## Colors

The palette is anchored by **Navy Blue (#1B3A6B)**, chosen to represent the school's long-standing experience and professional reliability. **Vibrant Orange (#F5821F)** serves as the primary action color, used sparingly for conversion points and high-priority alerts to ensure they stand out against the calm blue foundation.

Supporting colors include a **Functional Yellow (#EEEE22)**, referencing traditional road signage and legacy brand elements, and a **Pure Red (#FF0000)** for critical errors or warnings. Surfaces use **White** and **Light Gray (#F8F9FA)** to maintain a sense of space and cleanliness, ensuring the interface never feels cluttered or overwhelming for new learners.

## Typography

**Inter** is the sole typeface for this design system, chosen for its exceptional legibility at all sizes and its neutral, systematic character. This choice ensures that technical information regarding driving laws and course details is effortlessly readable.

- **Headlines:** Use tighter letter-spacing and heavier weights to create a strong visual hierarchy.
- **Body Text:** Set with generous line heights to accommodate long-form educational content and FAQ sections.
- **Labels:** Used for micro-copy and metadata, utilizing a medium weight to ensure they remain distinct from body text despite their smaller scale.

## Layout & Spacing

The system employs a **12-column fixed grid** for desktop, centering the content at a maximum width of 1200px to ensure focus and readability. On smaller viewports, the grid transitions to a fluid model with 16px side margins.

A strict **8px spacing rhythm** is maintained throughout the UI. This "base unit" governs everything from padding within components to the vertical rhythm between paragraphs. By adhering to this 8px increment, the layout achieves a mathematical harmony that reinforces the brand's expert and methodical nature.

## Elevation & Depth

Visual hierarchy is established through a combination of **tonal layers** and **ambient shadows**. Surfaces are primarily flat, with elevation used only to denote interactivity or separation of distinct content blocks.

Shadows are soft and diffused, utilizing a very low-opacity tint of the Primary Navy color (#1B3A6B) rather than pure black. This "tinted shadow" technique prevents the UI from looking muddy and keeps the depth feeling integrated with the brand's color story.
- **Level 1 (Cards/Buttons):** A subtle 4px blur with 5% opacity for resting states.
- **Level 2 (Hover/Modals):** A 12px blur with 10% opacity to suggest lift and priority.

## Shapes

The shape language is defined by **Rounded (8px)** corners across all primary UI components. This radius strikes a balance between the "sharp" precision of a technical school and the "soft" friendliness of a family-run business.

- **Primary Radius:** 8px (0.5rem) for buttons, input fields, and small cards.
- **Large Radius:** 16px (1rem) for section containers and large imagery to create a welcoming, modern frame.
- **Full Radius:** Used only for status tags or progress bar caps to create a distinct "pill" shape.

## Components

### Buttons
- **Primary:** Solid Navy Blue with white text. Reserved for the most frequent navigational actions.
- **CTA:** Solid Vibrant Orange with white text. Used exclusively for "Enroll Now," "Book Lesson," or high-conversion triggers.
- **Secondary:** Outlined Navy Blue with 2px borders for less urgent actions.

### Cards
Cards are the primary vessel for course information. They feature a white background, a 1px border in Light Gray (#E9ECEF), and a Level 1 shadow. Headers within cards should use H3 styling for clear identification.

### Accordion Menus
Crucial for the FAQ and "Course Requirements" sections. Accordions use a light gray header background with a Navy Blue chevron icon. When expanded, the background transitions to white to emphasize the content within.

### Input Fields
Forms must be highly accessible. Inputs feature an 8px radius, a 1px Light Gray border, and a 16px internal padding. On focus, the border shifts to Primary Navy with a subtle 2px glow in the same color.

### Additional Components
- **Progress Indicators:** Linear bars using the Navy/Orange combination to show a student's journey through their driving theory.
- **Success Toasts:** Utilizing a green variant (or soft blue) to celebrate completed milestones or bookings.