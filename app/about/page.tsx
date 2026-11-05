import type { Metadata } from "next";
import { photo } from "@/lib/site";
import WorkBreak from "@/components/WorkBreak";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | GS Lawn Services LLC",
  description: "A family-owned Murfreesboro, TN lawn care company built on hard work, reliability, and keeping the community beautiful, one yard at a time.",
  openGraph: {
    title: "About Us | GS Lawn Services LLC",
    description: "A family-owned Murfreesboro, TN lawn care company built on hard work, reliability, and keeping the community beautiful, one yard at a time.",
    images: [{ url: "/images/about-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | GS Lawn Services LLC",
    description: "A family-owned Murfreesboro, TN lawn care company built on hard work, reliability, and keeping the community beautiful, one yard at a time.",
    images: ["/images/about-hero.jpg"],
  },
};

const heroImage = {
  "src": "/images/about-hero.jpg",
  "alt": "GS Lawn Services team and equipment"
};
const teamImage = {
  "src": "/images/about-team.jpg",
  "alt": "GS Lawn Services team on a job site"
};
const breakImage = {
  "src": "/images/about-break.jpg",
  "alt": "The GS Lawn Services crew and equipment on a Murfreesboro property"
};
const values = [
  {
    "title": "Reliability",
    "description": "We show up, we finish the job, and we do it well."
  },
  {
    "title": "Attention to Detail",
    "description": "From a clean edge to a perfectly shaped hedge, we sweat the details that make a yard look genuinely cared for."
  },
  {
    "title": "Community",
    "description": "We're neighbors first. Keeping our community beautiful, one yard at a time, is what we're here for."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-split reverse">
          <div className="photo" style={photo(heroImage.src)} role="img" aria-label={heroImage.alt} />
          <div>
            <span className="eyebrow">Who We Are</span>
            <h1>More Than Just a Lawn Service</h1>
            <p className="lead">A family-owned Murfreesboro team that treats every yard we touch like it belongs to a neighbor — because it usually does.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="story-text">
            <span className="eyebrow">Our Story</span>
            <span className="rule" />
            <p>GS Lawn Services LLC was started by a family who wanted to bring reliable, high-quality lawn and landscape care to Murfreesboro, Tennessee. We&apos;re more than just a lawn service — we&apos;re neighbors, and we built this business to take care of the community we&apos;re part of. Hard work makes a difference, and it shows in every yard we mow, every hedge we shape, and every cleanup we finish before winter hits. We share our transformations because we&apos;re proud of the work we do, and we want our neighbors to see it for themselves. Making the most of today, one task at a time — that&apos;s how we show up, every time.</p>
          </div>
          <div className="story-photo-wrap">
            <div className="story-photo photo" style={photo(teamImage.src)} role="img" aria-label={teamImage.alt} />
          </div>
        </div>
      </section>

      <section className="section val">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Drives Us</span>
            <h2>What You Can Expect From Us</h2>
            <span className="rule" />
          </div>
          <div className="val-grid">
            {values.map((v, i) => (
              <div className="val-card" key={v.title}>
                <span className="n">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkBreak image={breakImage.src} caption={"The same crew, every time you call."} />

      <CtaBanner variant="dark" showContact heading={"Ready to Work With a Team You Can Trust?"} subheading={"Tell us what your yard needs and we'll give you a clear, honest estimate."} ctaLabel={"Work With Us"} />
    </>
  );
}
