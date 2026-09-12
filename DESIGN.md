# Design System Specification: The Sovereign Executive

## 1. Overview & Creative North Star: "The Digital Gilded Age"
This design system is engineered for a high-stakes ERP environment where data is not just information, but an asset. Our Creative North Star is **"The Digital Gilded Age"**—an aesthetic that balances the gravity of corporate authority with the ethereal lightness of modern luxury. 

We break the "standard ERP template" by rejecting the cluttered, grey-on-grey utility of legacy systems. Instead, we use **intentional asymmetry**, **extreme tonal depth**, and **high-contrast editorial typography**. The interface should feel like an executive's custom-tailored suit: structured, precise, and quietly expensive. We prioritize "negative space" as a functional element to reduce cognitive load in complex data environments.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, obsidian foundation, punctuated by the surgical application of Royal Gold.

### Tonal Foundation
- **Primary Background:** `surface` (#131313) - Provides a vacuum-like depth.
- **Accent/Primary:** `primary` (#F2CA50) - Used for critical actions and brand signatures.
- **The Golden Mean:** `primary_container` (#D4AF37) - Used for state-driven surfaces and high-importance borders.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. We define space through **Background Shifts**. 
- To separate a sidebar from a main stage, place a `surface_container_low` (#1C1B1B) section directly against the `surface` (#131313) background. 
- Use the 0.7rem (`2`) or 1.4rem (`4`) spacing tokens to create "channels" of darkness that act as invisible dividers.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of luxury materials.
- **Base Layer:** `surface_container_lowest` (#0E0E0E) for the outermost application frame.
- **Content Layer:** `surface_container` (#201F1F) for primary data modules.
- **Interaction Layer:** `surface_container_high` (#2A2A2A) for hovered elements or active cards.

### The "Glass & Gold" Rule
For floating panels (modals, dropdowns), use **Glassmorphism**. Apply `surface_variant` (#353534) at 60% opacity with a `20px` backdrop-blur. To add "soul," apply a subtle linear gradient to primary buttons: `primary` (#F2CA50) to `primary_container` (#D4AF37) at a 135-degree angle.

---

## 3. Typography: Editorial Authority
The type system pairs the geometric precision of **Manrope** (Display/Headlines) with the functional clarity of **Inter** (Body/Labels). For Arabic locales, utilize professional Naskh-based fonts that match the x-height and weight of their English counterparts.

| Role | Font Family | Size | Intent |
| :--- | :--- | :--- | :--- |
| **Display-LG** | Manrope | 3.5rem | High-level financial totals/Hero KPIs. |
| **Headline-SM** | Manrope | 1.5rem | Section headers; bold, authoritative. |
| **Title-MD** | Inter | 1.125rem | Data card titles; functional and clear. |
| **Body-MD** | Inter | 0.875rem | Standard data entry and descriptions. |
| **Label-SM** | Inter | 0.6875rem | Micro-metadata and status labels. |

---

## 4. Elevation & Depth: Tonal Layering
We do not use structural lines; we use light.

- **The Layering Principle:** Depth is achieved by "stacking" tones. Place a `surface_container_highest` (#353534) card on a `surface_container_low` (#1C1B1B) section to create a natural "lift."
- **Ambient Shadows:** When a component must float (e.g., a Command Palette), use a shadow color derived from `on_surface` at 4% opacity with a `48px` blur. It should look like a soft glow, not a drop shadow.
- **The "Ghost Border":** For form inputs or accessibility, use `outline_variant` (#4D4635) at 20% opacity. This creates a "suggestion" of a container that respects the dark aesthetic.

---

## 5. Components: The Executive Toolkit

### Data Cards
- **Construction:** No borders. Background: `surface_container`.
- **Corner Radius:** `lg` (0.5rem).
- **Separation:** Use `2` (0.7rem) spacing instead of dividers.
- **Highlight:** A top-left accent of `primary` (2px height) can be used for "Pinned" or "High Priority" cards.

### Buttons
- **Primary:** Background `primary_container` (#D4AF37), Text `on_primary` (#3C2F00). Use `md` (0.375rem) radius.
- **Secondary:** Transparent background, `primary_container` Ghost Border (20% opacity).
- **Tertiary:** Text-only in `primary_fixed_dim`. Use for low-emphasis actions like "Cancel."

### Glowing Status Indicators
- Use a `primary_fixed` (#FFE088) dot for "Active/Stable" states. 
- Apply a `box-shadow: 0 0 8px #F2CA50` to create a "glowing gold" effect that signifies luxury and health.

### Input Fields
- **Background:** `surface_container_highest` (#353534).
- **Border:** None, except on `:focus`, where a 1px `primary` border is applied.
- **Placeholder:** `on_surface_variant` (#D0C5AF) at 50% opacity.

### Navigation (The Glass Sidebar)
- Use a `surface_container_low` (#1C1B1B) background with a 1px right-hand gradient border that fades from `outline_variant` to transparent.

---

## 6. Do’s and Don’ts

### Do
- **Use "Golden" White Space:** Increase padding in headers to 5.5rem (`16`) to create a sense of "Air and Authority."
- **Layer Tones:** Use `surface_container_lowest` for the background of a table and `surface_container` for the rows.
- **Arabic Alignment:** Ensure the Royal Gold accent markers flip correctly for RTL layouts, maintaining the same visual weight.

### Don’t
- **No 100% White:** Never use #FFFFFF. Use `on_surface` (#E5E2E1) for high-contrast text to avoid "retina burn" on dark backgrounds.
- **No Divider Lines:** Do not use `hr` tags. If you must separate content, use a background color shift or a `0.7rem` gap.
- **No Sharp Corners:** Avoid `none` (0px) roundedness unless it's for a full-screen bleed. Stick to `md` and `lg` to soften the "corporate" edge.
- **No Standard Grey Shadows:** Shadows must always be tinted with the background hue to maintain the "Deep Black" richness.