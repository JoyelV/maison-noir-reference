# Maison Noir Reference

Design and build a premium ecommerce storefront reference called “Maison Noir” for AMnova's Theme Engine.

IMPORTANT ARCHITECTURAL CONSTRAINT

This is a visual/design reference for AMnova, not an independent production ecommerce application.

The purpose of this project is to demonstrate what a sophisticated AMnova theme can look like when implemented through the existing AMnova Theme Engine.

The design must therefore be representable using these existing AMnova concepts:

ThemeSchema

ThemeManifest

regions

templates

registered sections

theme tokens

theme typography/font system

semantic catalog references

merchant catalog data

Do NOT invent a new application architecture.

Do NOT create a backend.

Do NOT create a database.

Do NOT create authentication.

Do NOT create application-specific APIs.

Do NOT create an independent ecommerce data model.

Do NOT create merchant-specific logic.

The resulting project is primarily a high-fidelity visual reference that can later be translated into an AMnova canonical theme package.

THEME CONCEPT

Theme name:

Maison Noir

Category:

Premium Fashion / Apparel / Accessories / Lifestyle

Visual direction:

A sophisticated editorial fashion storefront inspired by modern luxury DTC brands and contemporary fashion magazines.

The experience should feel:

premium

editorial

confident

minimal

sophisticated

tactile

cinematic

fashion-forward

understated rather than flashy

Avoid making it look like a generic Shopify template.

The design should feel intentionally art-directed.

DESIGN LANGUAGE

Use a restrained visual system built around:

warm ivory

soft stone

charcoal

deep black

muted taupe

subtle metallic-inspired accent

generous whitespace

The visual hierarchy should rely heavily on:

typography

spacing

imagery

composition

scale

editorial grids

Avoid excessive gradients.

Avoid excessive rounded cards.

Avoid excessive shadows.

Avoid glassmorphism.

Avoid overly colorful UI.

Avoid the generic "AI-generated SaaS" aesthetic.

The result should resemble a premium fashion editorial translated into ecommerce.

TYPOGRAPHY

Typography is extremely important.

Use:

an elegant serif/display style for major editorial headings

a clean neutral sans-serif for navigation, metadata, buttons and product information

However:

Do NOT depend on Google Fonts or any external font CDN.

The final AMnova implementation will use the existing AMnova font system.

Therefore design the typography so that the font roles can later be represented as theme tokens such as:

font.display

font.body

font.mono where useful

Do not hard-code a third-party font dependency into the architecture.

COLOR TOKENS

Every important visual color must be expressible through theme tokens.

Conceptually define tokens such as:

color.background
color.surface
color.foreground
color.muted
color.border
color.primary
color.primaryForeground
color.accent
color.accentForeground
color.success
color.error


Do not scatter arbitrary colors throughout components.

The design should clearly demonstrate that the entire visual identity can later be controlled by the AMnova theme token system.

STOREFRONT STRUCTURE

Create a polished storefront containing the following conceptual areas.

1. Announcement Bar

Minimal luxury promotional message.

Example style:

"Complimentary delivery on orders over €150"

BUT:

Treat this strictly as visual placeholder copy.

Do not create fake business guarantees or hard-coded merchant claims that would be presented as universal AMnova behavior.

Make it easy for the AMnova implementation to replace/remove the content.

2. HEADER

Create a sophisticated fashion navigation.

Example conceptual navigation:

New Arrivals

Women

Men

Accessories

Collections

Include:

brand wordmark

navigation

search

account

wishlist

cart

Desktop should feel editorial and spacious.

Mobile should collapse into a clean mobile navigation pattern.

The header must be designed so navigation can later be supplied by the AMnova merchant's navigation/menu system.

Do NOT hard-code merchant-specific menu IDs.

3. HERO

Create a large editorial hero.

The hero should feature:

cinematic fashion imagery

oversized editorial typography

strong negative space

restrained CTA treatment

asymmetric composition

premium visual hierarchy

Example conceptual content:

"THE AUTUMN EDIT"

"Quiet forms. Considered materials."

CTA:

"Explore the collection"

The hero should be implementable using existing AMnova hero/banner concepts.

Do not require a new custom renderer.

4. FEATURED COLLECTION

Create an editorial collection showcase.

Use a large visual composition containing several collection tiles.

Example conceptual collections:

The Tailoring Edit

Essential Knitwear

Evening Forms

Objects & Accessories

These must be treated as semantic collection references, not hard-coded database identifiers.

Conceptually:

catalog:collection:<handle>


The visual design should remain valid even when a collection is missing.

For missing collections, show an honest empty state rather than fabricated products.

5. PRODUCT GRID

Create a premium product grid.

Products should visually support:

product image

product name

price

optional compare-at price

subtle metadata

wishlist action

quick view affordance where appropriate

The design should accommodate real merchant catalog data.

Do NOT hard-code:

product IDs

variant IDs

merchant IDs

database IDs

Products should be conceptual placeholders only.

6. NEW ARRIVALS

Create a dedicated editorial "New Arrivals" section.

This should conceptually map to:

catalog:new-arrivals


Do not hard-code a product list.

The section should work when:

products exist

no products exist

products are unavailable

Empty states must be honest.

7. EDITORIAL SPLIT SECTION

Create a high-end split editorial section:

Image on one side.

Editorial copy on the other.

Example:

"THE ART OF THE EVERYDAY"

"Objects designed around proportion, material and movement."

CTA:

"Discover the edit"

This section should demonstrate that AMnova themes can combine commerce with editorial storytelling.

8. COLLECTION STORY

Create a full-width visual storytelling section.

Use:

large typography

large imagery

subtle motion/hover treatment

restrained text

Avoid requiring video or external media services.

The design should work with merchant-provided media.

9. PRODUCT DETAIL PREVIEW

Create a premium product detail experience showing:

large product gallery

product title

price

product description

size selector

quantity

add to cart

wishlist

shipping information

accordions for details/care/materials

The data should conceptually come from the AMnova merchant catalog.

Do not invent backend behavior.

Buttons may be visual references only.

10. TESTIMONIAL / SOCIAL PROOF

Create a restrained editorial testimonial section.

Do not fabricate authenticity, certification, manufacturing or medical claims.

Use clearly identifiable placeholder/reference content.

The design should also work when there are no testimonials.

Example empty state:

"No customer reviews to show yet."

Never present fake reviews as real merchant/customer data.

11. NEWSLETTER

Create a premium newsletter section.

Visual behavior should include:

email field

subscribe CTA

elegant typography

IMPORTANT:

Do NOT simulate a successful subscription.

Do not show:

"Thank you for subscribing"

unless an actual submission state exists.

For this visual reference, the form can simply be non-functional or show a neutral placeholder interaction.

The eventual AMnova implementation will connect this to real functionality.

12. FOOTER

Create a sophisticated multi-column footer containing conceptual groups:

Shop

New Arrivals

Women

Men

Accessories

About

Our Story

Journal

Contact

Help

Shipping

Returns

FAQ

Social

Instagram

Pinterest

However, these should be understood as visual navigation placeholders.

The AMnova implementation should ultimately source navigation from the merchant's configured navigation.

Do not hard-code merchant navigation IDs.

RESPONSIVE DESIGN

The design must work extremely well at:

Desktop

Approximately:

1440px

Tablet

Approximately:

768px

Mobile

Exactly consider:

375px

At 375px:

no horizontal scrolling

no clipped content

no tiny text

no unusable buttons

no broken image compositions

no overlapping typography

navigation remains usable

product cards remain readable

hero remains visually impressive

editorial layouts collapse gracefully

Do not simply stack everything vertically.

Preserve the editorial character on mobile.

INTERACTION DESIGN

Use restrained interactions:

image hover transitions

subtle scale

underline transitions

elegant button states

product image transitions

navigation transitions

Avoid excessive animation.

Do not make animation necessary for understanding content.

Respect reduced-motion preferences.

IMAGE REQUIREMENTS

IMPORTANT:

Do NOT use:

Unsplash URLs

Pexels URLs

external stock-photo URLs

remote image CDNs

hotlinked images

Use local placeholder/reference assets where necessary.

The eventual AMnova theme will consume merchant-provided media.

Images should therefore be treated as replaceable theme assets rather than hard-coded external resources.

Do not make the visual design dependent on a specific external image service.

DATA / CONTENT REQUIREMENTS

Do NOT hard-code:

merchant IDs

store IDs

product IDs

collection IDs

database IDs

API endpoints

customer IDs

The design should assume that AMnova supplies:

Merchant
  ↓
Theme configuration
  ↓
Merchant catalog
  ↓
Semantic collection references
  ↓
Theme renderer
  ↓
Customer storefront


AMNOVA COMPATIBILITY

The visual composition should map naturally to existing AMnova sections such as:

Header

AnnouncementBar

HeroCarousel

ImageBanner

FeaturedCollection

ProductGrid

Testimonials

Newsletter

Footer

Do not create a custom renderer for Maison Noir.

If something cannot be represented by an existing AMnova section, identify it as a visual composition that may require composition/configuration rather than inventing an entirely new architecture.

THEME TOKEN ARCHITECTURE

Make the design clearly convertible into an AMnova theme configuration.

Conceptually support:

theme
├── tokens
│   ├── colors
│   ├── typography
│   ├── spacing
│   ├── radius
│   ├── shadows
│   └── motion
│
├── regions
│   ├── header
│   ├── announcement
│   ├── main
│   └── footer
│
├── templates
│   ├── home
│   ├── collection
│   ├── product
│   └── page
│
└── sections
    ├── hero
    ├── collection
    ├── product-grid
    ├── editorial
    ├── testimonials
    ├── newsletter
    └── footer


This is conceptual only.

Do not implement this as a separate AMnova architecture.

CONTENT SAFETY

The theme must avoid:

fabricated customer reviews

fabricated guarantees

fabricated shipping claims

fabricated certifications

fabricated sustainability claims

fabricated authenticity claims

fabricated manufacturer information

fabricated product specifications

fabricated medical claims

fabricated business statistics

Use neutral editorial placeholder copy.

QUALITY BAR

The final result should feel like a premium production design system rather than a demo template.

Prioritize:

visual hierarchy

typography

spacing

image composition

responsive behavior

product presentation

navigation quality

interaction polish

consistency

AMnova Theme Engine compatibility

The most important goal is:

Create a beautiful fashion storefront that looks sophisticated enough to serve as the visual reference for a premium AMnova canonical theme while remaining completely compatible with AMnova's existing Theme Engine architecture.

Do not build a separate ecommerce platform.

Build the Maison Noir visual reference.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7924d618-0348-4602-8c31-5d3304490c71).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
