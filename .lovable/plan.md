# Premium Direct-Booking Website

## Goal
Build a polished, mobile-first hospitality website with a photography-led home page, a simple booking journey, a digital guest guide, and an owner-facing dashboard shell. Property-specific content will live in one shared data module so it can be replaced later without rewriting pages.

## Pages and experience
- **Home:** Full-width image-led opening, floating availability search, highlights, amenities, masonry gallery with fullscreen viewer, property story, location preview and nearby categories, guest journey, reviews, rules, booking prompt, and footer.
- **Booking:** Date and guest selection, clear availability feedback, itemized stay pricing, guest details, and an in-page confirmation state. This version will use sample availability and client-side calculations only.
- **Guest guide:** Scannable sections for arrival, access, Wi-Fi, parking, amenities, rules, local recommendations, checkout, keys, and emergency contacts.
- **Admin dashboard:** Responsive owner workspace shell with overview cards and management areas for reservations, guests, availability, pricing, property details, and messages. It will demonstrate the structure without authentication or saved data.

## Visual direction
- Use a warm, sophisticated neutral palette with deep charcoal, soft ivory, stone, and restrained olive accents.
- Pair an editorial display serif with a clean sans-serif for a boutique-hotel feel.
- Give photography priority through a full-bleed opening image, large gallery crops, restrained borders, and generous whitespace.
- Keep corners modest, shadows soft, and animation limited to useful transitions, while respecting reduced-motion settings.

## Shared architecture
- Create a single property configuration and sample-content module for names, rates, capacities, amenities, reviews, rules, local highlights, guide details, and contact placeholders.
- Create shared site navigation, footer, booking controls, section headings, and image/gallery primitives.
- Add route-specific metadata for every public page and dashboard page.
- Use generated local property photography rather than remote image links.

## Interactions and accessibility
- Provide keyboard-accessible navigation, forms, guest controls, gallery dialog, close controls, focus states, labels, and semantic landmarks.
- Make all primary actions work: home availability search transfers selections to booking, booking totals update from the selected stay, the booking form confirms locally, gallery images open fullscreen, and mobile navigation works.
- Treat the property and contact details as clearly marked sample content, not final business information.

## Technical details
- Keep TanStack Start, React 19, TypeScript, Tailwind CSS v4, and semantic design tokens in the global stylesheet.
- Use route files for `/`, `/booking`, `/guide`, and `/admin`; no database, authentication, payment capture, or external map API is added in this phase.
- Use a visual map-style location panel instead of a live map connection, so the site remains ready for a future maps integration.
- Keep server/backend boundaries untouched and organize data so Lovable Cloud can replace sample data later.

## Validation
- Verify the key journeys in the running preview at desktop and mobile widths: navigation, date/guest selection, computed totals, booking confirmation, gallery viewer, and dashboard layout.
- Check that each page has unique title, description, Open Graph title/description, `og:type`, and Twitter card metadata.
