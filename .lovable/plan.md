# Maison Noir storefront reference

## Goal
Build a high-fidelity, responsive fashion storefront at `/` that demonstrates how a premium AMnova canonical theme can look without introducing commerce infrastructure or a new application architecture.

## What will be built
- A complete editorial storefront journey: announcement, responsive header, cinematic hero, featured collections, product grid, new arrivals, editorial split, collection story, product-detail preview, testimonial empty/reference state, newsletter, and multi-column footer.
- Local, replaceable fashion imagery created specifically for the reference; no hotlinked assets or external font dependencies.
- Honest placeholder content and visibly neutral/non-functional commerce controls where live merchant data or actions would be required.
- Responsive compositions tuned for 1440px, 768px, and 375px, preserving editorial asymmetry without overflow or clipped controls.

## AMnova compatibility
- Organize page content as section-like React components corresponding to existing concepts such as `AnnouncementBar`, `Header`, `HeroCarousel`/`ImageBanner`, `FeaturedCollection`, `ProductGrid`, `Testimonials`, `Newsletter`, and `Footer`.
- Represent sample catalog sources as semantic references such as `catalog:collection:tailoring-edit` and `catalog:new-arrivals`, never database or merchant identifiers.
- Keep sample content in replaceable configuration objects, with explicit available, unavailable, and empty rendering states.
- Treat the editorial split and collection story as compositions of existing image/banner and text configuration rather than a new renderer.
- Add a compact on-page “Theme mapping” reference near the footer so AMnova reviewers can see how regions, templates, sections, tokens, typography roles, and catalog references correspond to the design.

## Visual system
- Define all colors, font roles, spacing, radii, shadows, and motion centrally in the existing token stylesheet using warm ivory, stone, charcoal, deep black, taupe, and a restrained metallic accent.
- Use a system serif stack for display typography and a neutral system sans stack for interface text, mapping cleanly to `font.display` and `font.body`.
- Use sharp editorial geometry, generous whitespace, thin rules, sparse shadows, tactile image crops, restrained transitions, and reduced-motion support.

## Interaction and safeguards
- Provide usable mobile navigation, wishlist/quick-view visual affordances, size and quantity selectors, accordions, and neutral newsletter handling without simulating backend success.
- Mark review/testimonial copy as reference content and include the honest no-reviews state.
- Keep all cart, account, wishlist, search, and subscription actions presentation-only; no backend, database, authentication, API, or independent catalog model.

## Verification
- Check the live page at desktop, tablet, and exactly 375px mobile.
- Verify no horizontal scrolling, overlap, broken imagery, or inaccessible controls; confirm reduced-motion behavior and current build health.
- Add unique storefront metadata for the home page.
