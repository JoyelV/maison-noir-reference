import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Heart,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import heroImage from "@/assets/maison-hero.jpg";
import tailoringImage from "@/assets/collection-tailoring.jpg";
import knitwearImage from "@/assets/collection-knitwear.jpg";
import eveningImage from "@/assets/collection-evening.jpg";
import objectsImage from "@/assets/collection-objects.jpg";
import loaferImage from "@/assets/product-loafer.jpg";
import storyImage from "@/assets/story-coat.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noir — Premium Fashion Theme" },
      {
        name: "description",
        content: "Maison Noir is a premium editorial fashion storefront reference for the AMnova Theme Engine.",
      },
      { property: "og:title", content: "Maison Noir — Premium Fashion Theme" },
      {
        property: "og:description",
        content: "A sophisticated editorial storefront reference designed for AMnova.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MaisonNoir,
});

const navigation = ["New Arrivals", "Women", "Men", "Accessories", "Collections"];

const collections = [
  { title: "The Tailoring Edit", reference: "catalog:collection:tailoring-edit", image: tailoringImage, position: "md:col-span-7" },
  { title: "Essential Knitwear", reference: "catalog:collection:essential-knitwear", image: knitwearImage, position: "md:col-span-5 md:mt-28" },
  { title: "Evening Forms", reference: "catalog:collection:evening-forms", image: eveningImage, position: "md:col-span-5 md:ml-12" },
  { title: "Objects & Accessories", reference: "catalog:collection:objects-accessories", image: objectsImage, position: "md:col-span-7 md:-mt-20 md:pl-20" },
];

const products = [
  { name: "Structured Wool Blazer", note: "Reference product · Wool", price: "€420", image: tailoringImage, reference: "catalog:new-arrivals" },
  { name: "Cashmere Crewneck", note: "Reference product · Cashmere", price: "€280", image: knitwearImage, reference: "catalog:new-arrivals" },
  { name: "Column Evening Dress", note: "Reference product · Satin", price: "€390", compareAt: "€460", image: eveningImage, reference: "catalog:new-arrivals" },
  { name: "Sculpted Handle Bag", note: "Reference product · Leather", price: "€340", image: objectsImage, reference: "catalog:new-arrivals" },
];

function MaisonNoir() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <Hero />
      <CollectionShowcase />
      <ProductGrid />
      <EditorialSplit />
      <CollectionStory />
      <ProductPreview />
      <Testimonials />
      <Newsletter />
      <ThemeMapping />
      <Footer />
    </main>
  );
}

function AnnouncementBar() {
  return (
    <div className="flex min-h-8 items-center justify-center bg-primary px-12 py-2 text-center text-[10px] uppercase tracking-[0.18em] text-primary-foreground">
      <span>Reference message · Complimentary delivery copy is merchant configurable</span>
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-30 border-b border-border/50 bg-background">
      <div className="grid h-20 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-8 lg:h-24 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <nav aria-label="Primary navigation" className="hidden min-w-0 items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <a key={item} href="#collections" className="group relative whitespace-nowrap text-[11px] uppercase tracking-[0.12em]">
              {item}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <MobileMenu />
        <a href="#top" className="min-w-0 text-center font-display text-[21px] uppercase tracking-[0.18em] sm:text-2xl" aria-label="Maison Noir home">
          Maison Noir
        </a>
        <div className="flex shrink-0 justify-end gap-1 sm:gap-3">
          <HeaderIcon label="Search"><Search /></HeaderIcon>
          <span className="hidden sm:contents"><HeaderIcon label="Account"><UserRound /></HeaderIcon><HeaderIcon label="Wishlist"><Heart /></HeaderIcon></span>
          <HeaderIcon label="Cart, 0 items"><ShoppingBag /></HeaderIcon>
        </div>
      </div>
    </header>
  );
}

function HeaderIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return <Button variant="ghost" size="icon" aria-label={label} title={label} className="rounded-none [&_svg]:size-[18px]">{children}</Button>;
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation" className="rounded-none lg:hidden"><Menu /></Button></SheetTrigger>
      <SheetContent side="left" className="w-[88%] border-border bg-background p-7 shadow-none">
        <SheetHeader className="border-b border-border pb-6 text-left">
          <SheetTitle className="font-display text-2xl font-normal uppercase tracking-[0.16em]">Maison Noir</SheetTitle>
          <SheetDescription className="text-[10px] uppercase tracking-[0.18em]">Theme navigation reference</SheetDescription>
        </SheetHeader>
        <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">
          {navigation.map((item, index) => <a key={item} href="#collections" className="flex items-baseline justify-between border-b border-border/50 pb-4 font-display text-3xl"><span>{item}</span><span className="font-body text-[10px] text-muted-foreground">0{index + 1}</span></a>)}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[720px] overflow-hidden bg-primary text-primary-foreground md:min-h-[830px]">
      <img src={heroImage} alt="Model in a long black coat in a limestone interior" width={1440} height={1600} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-[70%_35%]" />
      <div className="absolute inset-0 bg-primary/20" />
      <div className="relative flex min-h-[720px] flex-col justify-end px-5 pb-16 sm:px-10 md:min-h-[830px] md:justify-center md:px-14 md:pb-0 lg:px-20">
        <p className="mb-4 text-[10px] uppercase tracking-[0.24em]">Autumn / Winter — Reference 01</p>
        <h1 className="max-w-4xl font-display text-[clamp(3.8rem,9vw,8.8rem)] leading-[0.82] uppercase">The<br />Autumn Edit</h1>
        <div className="mt-8 max-w-xs md:ml-[42%] md:mt-12">
          <p className="font-display text-xl leading-relaxed sm:text-2xl">Quiet forms. Considered materials. A study in proportion and restraint.</p>
          <Button variant="editorialLight" size="lg" className="mt-7 h-12 px-6 text-[10px]">Explore the collection <ArrowRight /></Button>
        </div>
        <a href="#collections" aria-label="Scroll to collections" className="absolute bottom-7 right-6 flex h-10 w-10 items-center justify-center border border-primary-foreground/50 sm:right-10"><ArrowDown className="h-4 w-4" /></a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-t border-border pt-5 md:flex md:justify-between">
      <div className="min-w-0"><p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p><h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">{title}</h2></div>
      {aside && <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">{aside}</p>}
    </div>
  );
}

function CollectionShowcase() {
  return (
    <section id="collections" className="px-5 py-24 sm:px-10 md:py-36 lg:px-14">
      <SectionHeading eyebrow="Curated categories" title="The collections" aside="Each composition maps to a semantic collection reference supplied by the merchant catalog." />
      <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-24">
        {collections.map((item, index) => (
          <article key={item.reference} className={item.position}>
            <a href="#new-arrivals" className="group block">
              <div className={`image-reveal ${index === 3 ? "aspect-[6/5]" : "aspect-[4/5]"} bg-muted`}><img src={item.image} alt={`${item.title} reference collection`} width={912} height={1200} loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="font-display text-2xl sm:text-3xl">{item.title}</h3><p className="mt-2 text-[9px] uppercase tracking-[0.15em] text-muted-foreground">{item.reference}</p></div><ArrowRight className="mt-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductGrid() {
  return (
    <section id="new-arrivals" className="bg-card px-5 py-24 sm:px-10 md:py-32 lg:px-14">
      <SectionHeading eyebrow="catalog:new-arrivals" title="New arrivals" aside="Reference products demonstrate populated catalog rendering. When the semantic source is empty, this area displays an honest empty state." />
      <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-5">
        {products.map((product) => <ProductCard key={product.name} {...product} />)}
      </div>
      <div className="mt-16 flex justify-center"><Button variant="editorialOutline" size="lg" className="h-12 px-8 text-[10px]">View all arrivals <ArrowRight /></Button></div>
      <div className="mt-16 border border-dashed border-border px-5 py-5 text-center text-xs text-muted-foreground"><strong className="font-medium text-foreground">Empty state reference:</strong> No products are available in this collection yet.</div>
    </section>
  );
}

type ProductCardProps = (typeof products)[number];
function ProductCard({ name, note, price, compareAt, image }: ProductCardProps) {
  return (
    <article className="group min-w-0">
      <div className="image-reveal relative aspect-[3/4] bg-muted"><img src={image} alt={`${name} reference product`} width={912} height={1200} loading="lazy" className="h-full w-full object-cover" /><Button variant="ghost" size="icon" aria-label={`Save ${name}`} title="Add to wishlist" className="absolute right-2 top-2 rounded-full bg-background/80 opacity-100 backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100"><Heart /></Button><Button variant="editorial" className="absolute inset-x-3 bottom-3 h-10 text-[9px] opacity-0 transition-opacity group-hover:opacity-100">Quick view</Button></div>
      <div className="mt-4"><h3 className="truncate text-sm font-medium">{name}</h3><p className="mt-1 truncate text-[10px] text-muted-foreground">{note}</p><div className="mt-2 flex gap-2 text-xs"><span>{price}</span>{compareAt && <span className="text-muted-foreground line-through">{compareAt}</span>}</div></div>
    </article>
  );
}

function EditorialSplit() {
  return (
    <section className="grid bg-secondary md:grid-cols-2">
      <div className="image-reveal aspect-[4/5] md:aspect-auto md:min-h-[760px]"><img src={objectsImage} alt="Black handbag and silver objects on stone" width={912} height={1200} loading="lazy" className="h-full w-full object-cover" /></div>
      <div className="flex items-center px-6 py-20 sm:px-12 md:px-[12%]">
        <div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Editorial composition · ImageBanner + content</p><h2 className="mt-6 max-w-lg font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">The art of the everyday</h2><p className="mt-8 max-w-sm font-display text-xl leading-relaxed">Objects designed around proportion, material and movement.</p><Button variant="editorialOutline" size="lg" className="mt-10 h-12 px-7 text-[10px]">Discover the edit <ArrowRight /></Button></div>
      </div>
    </section>
  );
}

function CollectionStory() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-primary text-primary-foreground md:min-h-[820px]">
      <img src={storyImage} alt="Model in a charcoal coat outside modern architecture" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.015]" />
      <div className="absolute inset-0 bg-primary/30" />
      <div className="relative flex min-h-[620px] flex-col justify-between p-6 sm:p-12 md:min-h-[820px] md:p-16">
        <p className="text-[10px] uppercase tracking-[0.22em]">Collection story · Autumn study</p>
        <div className="max-w-5xl"><h2 className="font-display text-[clamp(3.6rem,10vw,9rem)] leading-[0.82]">A quieter<br />kind of presence</h2><p className="mt-7 max-w-md text-sm leading-relaxed text-primary-foreground/80">A visual narrative built from merchant-provided media, expressive scale, and restrained editorial copy.</p></div>
      </div>
    </section>
  );
}

function ProductPreview() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("38");
  return (
    <section className="px-5 py-24 sm:px-10 md:py-36 lg:px-14">
      <SectionHeading eyebrow="Product template preview" title="The signature loafer" aside="A visual product-detail state designed for merchant catalog data and standard theme actions." />
      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(340px,.8fr)] lg:gap-20">
        <div className="grid gap-3 sm:grid-cols-2"><div className="aspect-square bg-card sm:row-span-2 sm:aspect-auto"><img src={loaferImage} alt="Black leather signature loafer" width={912} height={912} loading="lazy" className="h-full w-full object-cover" /></div><div className="aspect-square bg-muted"><img src={loaferImage} alt="Signature loafer side profile reference" width={912} height={912} loading="lazy" className="h-full w-full object-cover object-right" /></div><div className="aspect-square bg-secondary"><img src={loaferImage} alt="Signature loafer material detail reference" width={912} height={912} loading="lazy" className="h-full w-full object-cover object-left" /></div></div>
        <div className="lg:sticky lg:top-8 lg:self-start"><p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Reference product · catalog product</p><h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">The Signature Loafer</h2><p className="mt-5 text-lg">€320</p><p className="mt-8 max-w-md text-sm leading-7 text-muted-foreground">A restrained product description area for merchant-supplied copy. Material, construction and origin details remain catalog controlled.</p>
          <fieldset className="mt-9"><legend className="mb-4 flex w-full justify-between text-[10px] uppercase tracking-[0.18em]"><span>Select size</span><span className="text-muted-foreground">Size guide</span></legend><div className="grid grid-cols-5 gap-2">{["36", "37", "38", "39", "40"].map((value) => <Button key={value} variant={size === value ? "editorial" : "editorialOutline"} className="h-11 px-0 text-[10px]" onClick={() => setSize(value)}>{value}</Button>)}</div></fieldset>
          <div className="mt-5 grid grid-cols-[104px_minmax(0,1fr)] gap-3"><div className="grid h-12 grid-cols-3 border border-border"><Button variant="ghost" size="icon" className="h-full w-full rounded-none" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus /></Button><span className="grid place-items-center text-xs" aria-live="polite">{quantity}</span><Button variant="ghost" size="icon" className="h-full w-full rounded-none" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus /></Button></div><Button variant="editorial" className="h-12 text-[10px]">Add to cart</Button></div>
          <Button variant="editorialOutline" className="mt-3 h-12 w-full text-[10px]"><Heart /> Add to wishlist</Button>
          <div className="mt-10 border-t border-border">{["Details", "Care", "Materials", "Shipping information"].map((label) => <details key={label} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between py-5 text-xs uppercase tracking-[0.14em]">{label}<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></summary><p className="pb-5 text-xs leading-6 text-muted-foreground">Merchant-provided information appears here when available.</p></details>)}</div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-y border-border bg-card px-5 py-24 text-center sm:px-10 md:py-32">
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Testimonials section · Empty state</p><p className="mx-auto mt-7 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">“No customer reviews to show yet.”</p><p className="mx-auto mt-6 max-w-md text-xs leading-6 text-muted-foreground">Reference state shown intentionally. Customer quotes appear only when genuine merchant review data is supplied.</p>
    </section>
  );
}

function Newsletter() {
  const [note, setNote] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setNote("Preview only — connect this section to the merchant newsletter action."); }
  return (
    <section className="bg-primary px-5 py-24 text-primary-foreground sm:px-10 md:py-32 lg:px-14"><div className="mx-auto max-w-5xl text-center"><p className="text-[10px] uppercase tracking-[0.22em] text-primary-foreground/60">Private notes · Newsletter reference</p><h2 className="mt-6 font-display text-5xl leading-none sm:text-7xl">A considered correspondence</h2><p className="mx-auto mt-6 max-w-md text-sm leading-6 text-primary-foreground/70">Editorial notes, collection stories, and new arrivals — when configured by the merchant.</p><form onSubmit={submit} className="mx-auto mt-10 grid max-w-xl grid-cols-[minmax(0,1fr)_auto] border-b border-primary-foreground/60"><label htmlFor="newsletter-email" className="sr-only">Email address</label><input id="newsletter-email" type="email" required placeholder="Email address" className="min-w-0 bg-transparent px-1 py-4 text-sm outline-none placeholder:text-primary-foreground/50" /><Button type="submit" variant="ghost" className="rounded-none px-3 text-[10px] uppercase tracking-[0.16em] text-primary-foreground hover:bg-primary-foreground hover:text-primary">Subscribe <ArrowRight /></Button></form>{note && <p className="mt-4 text-xs text-primary-foreground/60" aria-live="polite">{note}</p>}</div></section>
  );
}

function ThemeMapping() {
  const groups = [
    ["Regions", "announcement · header · main · footer"],
    ["Templates", "home · collection · product · page"],
    ["Typography", "font.display · font.body · font.mono"],
    ["Catalog", "semantic references · merchant data"],
  ];
  return <aside className="bg-ink-soft px-5 py-12 text-primary-foreground sm:px-10 lg:px-14" aria-label="AMnova theme mapping"><div className="grid gap-8 border-y border-primary-foreground/20 py-8 sm:grid-cols-2 lg:grid-cols-4">{groups.map(([title, copy]) => <div key={title}><p className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/50">Theme mapping · {title}</p><p className="mt-3 font-display text-xl">{copy}</p></div>)}</div><p className="mt-5 text-[10px] leading-5 text-primary-foreground/50">Visual reference only. All copy, navigation, media, products, collections, and actions are replaceable ThemeSchema and merchant configuration inputs.</p></aside>;
}

function Footer() {
  const groups = [
    { title: "Shop", links: ["New Arrivals", "Women", "Men", "Accessories"] },
    { title: "About", links: ["Our Story", "Journal", "Contact"] },
    { title: "Help", links: ["Shipping", "Returns", "FAQ"] },
    { title: "Social", links: ["Instagram", "Pinterest"] },
  ];
  return <footer className="bg-primary px-5 pb-10 pt-20 text-primary-foreground sm:px-10 lg:px-14"><div className="grid gap-14 md:grid-cols-[1.1fr_2fr]"><div><p className="font-display text-4xl uppercase tracking-[0.14em]">Maison Noir</p><p className="mt-4 max-w-xs text-xs leading-6 text-primary-foreground/50">A premium fashion storefront reference for AMnova’s Theme Engine.</p></div><nav className="grid grid-cols-2 gap-10 sm:grid-cols-4" aria-label="Footer navigation">{groups.map((group) => <div key={group.title}><p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-primary-foreground/45">{group.title}</p><ul className="space-y-3">{group.links.map((link) => <li key={link}><a href="#top" className="text-xs text-primary-foreground/80 underline-offset-4 hover:underline">{link}</a></li>)}</ul></div>)}</nav></div><div className="mt-20 flex flex-col gap-3 border-t border-primary-foreground/20 pt-6 text-[9px] uppercase tracking-[0.14em] text-primary-foreground/40 sm:flex-row sm:justify-between"><span>Maison Noir · AMnova theme reference</span><span>Navigation and policy content are merchant configured</span></div></footer>;
}