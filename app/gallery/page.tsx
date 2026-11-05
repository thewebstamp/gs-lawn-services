import type { Metadata } from "next";
import { services } from "@/lib/site";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Work | GS Lawn Services LLC",
  description: "See real lawn transformations, trimmed hedges, and seasonal cleanups completed around Murfreesboro and Middle Tennessee.",
  openGraph: {
    title: "Our Work | GS Lawn Services LLC",
    description: "See real lawn transformations, trimmed hedges, and seasonal cleanups completed around Murfreesboro and Middle Tennessee.",
    images: [{ url: "/images/gallery-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | GS Lawn Services LLC",
    description: "See real lawn transformations, trimmed hedges, and seasonal cleanups completed around Murfreesboro and Middle Tennessee.",
    images: ["/images/gallery-hero.jpg"],
  },
};

const items = [
  {
    "src": "/images/gallery-1.jpg",
    "alt": "Completed project photo 1",
    "category": "lawn-care-mowing"
  },
  {
    "src": "/images/gallery-2.jpg",
    "alt": "Completed project photo 2",
    "category": "landscape-maintenance"
  },
  {
    "src": "/images/gallery-3.jpg",
    "alt": "Completed project photo 3",
    "category": "hedge-bush-trimming"
  },
  {
    "src": "/images/gallery-4.jpg",
    "alt": "Completed project photo 4",
    "category": "seasonal-fall-cleanup"
  },
  {
    "src": "/images/gallery-5.jpg",
    "alt": "Completed project photo 5",
    "category": "curb-appeal-enhancement"
  }
];

export default function GalleryPage() {
  const categories = services.map((s) => ({ slug: s.slug, label: s.shortTitle }));
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">Our Work</span>
          <h1>See the Difference for Yourself</h1>
          <p className="lead">A look at real lawns, trimmed hedges, and seasonal cleanups completed around Middle Tennessee.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GalleryGrid items={items} categories={categories} />
        </div>
      </section>

      <CtaBanner variant="gold" showContact heading={"Like What You See?"} subheading={"Tell us about your yard and let's get your project started."} ctaLabel={"Get a Yard Like This"} />
    </>
  );
}
