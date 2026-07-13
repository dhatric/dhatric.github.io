# Brand Theme, Color Palette & Styling System

This document specifies the dual-theme color palette, custom CSS variables, and typography parameters configured for this Docusaurus portfolio. This specification is designed to be easily read and parsed by AI coding agents to replicate or maintain the styling system.

---

## 1. Typography
- **Primary Body Font**: `'Inter', sans-serif` (Google Fonts: weights 300, 400, 500, 600)
- **Heading Font**: `'Space Grotesk', sans-serif` (Google Fonts: weights 400, 500, 600, 700)
- **Layout Rules**: Headings (`h1`, `h2`, `h3`, `h4`) utilize `letter-spacing: -0.02em` for a modern, sleek appearance.

---

## 2. Color Palette Specification

The system is configured strictly for **two states** (Light mode and Dark mode) by disabling system preference defaults in `docusaurus.config.ts` via `respectPrefersColorScheme: false`.

### Theme-Wide Colors & Variables

| Variable / Token | Light Theme Value | Dark Theme Value (Default) | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| `--ifm-color-primary` | `#09a3d8` (Deep Light Blue) | `#0BB7F1` (Vibrant Brand Blue) | Brand primary color. Light mode uses a darker tint to satisfy text contrast accessibility guidelines. |
| `--ifm-background-color` | `#F8FAFC` (Slate Off-White) | `#05175B` (Deep Dark Blue) | Global viewport page background. |
| `--ifm-background-surface-color`| `#FFFFFF` (Pure White) | `#081f7a` (Sleek Component Blue) | General container background. |
| `--ifm-navbar-background-color` | `#FFFFFF` (Pure White) | `#05175B` (Deep Dark Blue) | Header navigation background. |
| `--ifm-footer-background-color` | `#05175B` (Deep Dark Blue) | `#030e3a` (Deeper Midnight Blue) | Footer background. |
| `--ifm-font-color-base` | `#05175B` (Deep Dark Blue) | `#FFFFFF` (Pure White) | Body copy base text. |
| `--ifm-heading-color` | `#05175B` (Deep Dark Blue) | `#FFFFFF` (Pure White) | Section and article headings. |
| `--ifm-color-content-secondary` | `#475569` (Slate Gray) | `rgba(255, 255, 255, 0.7)` (Muted White)| Secondary meta information. |
| `--ifm-toc-link-color` | `#475569` (Slate Gray) | `rgba(255, 255, 255, 0.65)` (Muted White)| Table of Contents sidebar link item. |
| `--ifm-menu-color` | `#475569` (Slate Gray) | `rgba(255, 255, 255, 0.75)` (Muted White)| Left-hand sidebar link item. |

---

## 3. Interactive Component Tokens

To align components (like cards and hero blocks) across both modes, custom layout variables are declared in `src/css/custom.css`:

### A. Card Surfacing (`.project-card`, `.competency-card`)
- **`--card-background`**: 
  - Light mode: `#FFFFFF` (pure white)
  - Dark mode: `#081f7a` (surface dark blue)
- **`--card-text-color`**: 
  - Light mode: `#05175B` (deep dark blue)
  - Dark mode: `#FFFFFF` (white)
- **`--card-secondary-text`**:
  - Light mode: `rgba(5, 23, 91, 0.7)`
  - Dark mode: `rgba(255, 255, 255, 0.75)`
- **`--card-border`**:
  - Light mode: `1px solid rgba(9, 163, 216, 0.15)`
  - Dark mode: `1px solid rgba(11, 183, 241, 0.25)`
- **`--card-shadow`**:
  - Light mode: `0 10px 30px rgba(0, 0, 0, 0.04)`
  - Dark mode: `0 10px 30px rgba(0, 0, 0, 0.2)`
- **`--card-hover-shadow`**:
  - Light mode: `rgba(9, 163, 216, 0.15)` (light blue highlight glow)
  - Dark mode: `rgba(11, 183, 241, 0.3)` (vibrant blue glow)
- **`--card-ghost-color`**:
  - Light mode: `rgba(5, 23, 91, 0.04)`
  - Dark mode: `rgba(255, 255, 255, 0.04)` (very faint watermarks)

### B. Landing Hero Banner
- **`--hero-background`**:
  - Light mode: `linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #DBEAFE 100%)`
  - Dark mode: `linear-gradient(135deg, #05175B 0%, #081f7a 50%, #030e3a 100%)`
- **`--hero-text-color`**:
  - Light mode: `#05175B`
  - Dark mode: `#FFFFFF`
- **`--hero-subtitle-color`**:
  - Light mode: `#09a3d8`
  - Dark mode: `#0BB7F1`
- **`--hero-summary-color`**:
  - Light mode: `#334155`
  - Dark mode: `rgba(255, 255, 255, 0.88)`

---

## 4. Re-Implementing in CSS (`src/css/custom.css`)

Coding agents should structure the custom variables inside [custom.css](file:///Users/dhatric/Dev/projects/dhatric.github.io/src/css/custom.css) as follows:

```css
/* ── LIGHT MODE VARIABLES ── */
:root,
html[data-theme='light'] {
  --ifm-color-primary:            #09a3d8;
  --ifm-background-color:         #F8FAFC;
  --ifm-background-surface-color: #FFFFFF;
  --ifm-navbar-background-color:  #FFFFFF;
  --ifm-footer-background-color:  #05175B;
  --ifm-font-color-base:          #05175B;
  --ifm-heading-color:            #05175B;
  --ifm-color-content:            #05175B;
  --ifm-color-content-secondary:  #475569;
  --ifm-toc-link-color:           #475569;
  --ifm-menu-color:               #475569;
  --ifm-menu-color-active:        #09a3d8;
  
  --card-background:     #FFFFFF;
  --card-text-color:     #05175B;
  --card-border:         1px solid rgba(9, 163, 216, 0.15);
  --card-shadow:         0 10px 30px rgba(0, 0, 0, 0.04);
  --card-hover-shadow:   rgba(9, 163, 216, 0.15);
  --card-ghost-color:    rgba(5, 23, 91, 0.04);
  
  --hero-background:     linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #DBEAFE 100%);
  --hero-text-color:     #05175B;
}

/* ── DARK MODE VARIABLES (DEFAULT) ── */
html[data-theme='dark'] {
  --ifm-color-primary:            #0BB7F1;
  --ifm-background-color:         #05175B;
  --ifm-background-surface-color: #081f7a;
  --ifm-navbar-background-color:  #05175B;
  --ifm-footer-background-color:  #030e3a;
  --ifm-font-color-base:          #FFFFFF;
  --ifm-heading-color:            #FFFFFF;
  --ifm-color-content:            #FFFFFF;
  --ifm-color-content-secondary:  rgba(255, 255, 255, 0.7);
  --ifm-toc-link-color:           rgba(255, 255, 255, 0.65);
  --ifm-menu-color:               rgba(255, 255, 255, 0.75);
  --ifm-menu-color-active:        #0BB7F1;

  --card-background:     #081f7a;
  --card-text-color:     #FFFFFF;
  --card-border:         1px solid rgba(11, 183, 241, 0.25);
  --card-shadow:         0 10px 30px rgba(0, 0, 0, 0.2);
  --card-hover-shadow:   rgba(11, 183, 241, 0.3);
  --card-ghost-color:    rgba(255, 255, 255, 0.04);

  --hero-background:     linear-gradient(135deg, #05175B 0%, #081f7a 50%, #030e3a 100%);
  --hero-text-color:     #FFFFFF;
}
```
