import type { Metadata } from "next";
import Link from "next/link";
import { site, services, photo } from "@/lib/site";
import { Arrow, Quote, ServiceIcon, Heart } from "@/components/icons";
import WorkBreak from "@/components/WorkBreak";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "GS Lawn Services LLC | Murfreesboro, TN Lawn Care & Landscaping",
  description: "Family-owned lawn care, landscape maintenance, and seasonal cleanups for Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, and Franklin, TN. Free estimates.",
  openGraph: {
    title: "GS Lawn Services LLC | Murfreesboro, TN Lawn Care & Landscaping",
    description: "Family-owned lawn care, landscape maintenance, and seasonal cleanups for Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, and Franklin, TN. Free estimates.",
    images: [{ url: "/images/home-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GS Lawn Services LLC | Murfreesboro, TN Lawn Care & Landscaping",
    description: "Family-owned lawn care, landscape maintenance, and seasonal cleanups for Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, and Franklin, TN. Free estimates.",
    images: ["/images/home-hero1.jpg"],
  },
};

const heroImage = {
  "src": "/images/home-hero1.jpg",
  "alt": "GS Lawn Services crew mowing a lawn in Murfreesboro, TN"
};
const breakOne = {
  "src": "/images/home-hero.jpg",
  "alt": "The GS Lawn Services crew at work on a Murfreesboro property"
};
const breakTwo = {
  "src": "/images/work-break-2.jpg",
  "alt": "GS Lawn Services equipment completing a job in Murfreesboro"
};
const featured = [
  {
    "src": "/images/featured-01.jpg",
    "alt": "Freshly mowed and edged lawn in Murfreesboro"
  },
  {
    "src": "/images/featured-02.jpg",
    "alt": "Neatly trimmed hedge line"
  },
  {
    "src": "/images/featured-03.jpg",
    "alt": "Yard cleared of fall leaves before frost"
  },
  {
    "src": "/images/featured-04.jpg",
    "alt": "Front yard curb appeal refresh"
  }
];

const painPoints = [
  {
    "title": "“My lawn looks patchy and overgrown.”",
    "response": "We mow and care for it on a regular schedule, so it stays thick, even, and healthy all season."
  },
  {
    "title": "“My flower beds and borders are a mess.”",
    "response": "We keep every bed, border, and corner of your property looking cared for, week after week."
  },
  {
    "title": "“My hedges and bushes have gotten out of hand.”",
    "response": "We shape them up clean and sharp — nothing beats a perfectly manicured hedge."
  },
  {
    "title": "“Leaves are piling up before winter hits.”",
    "response": "We clear it all before the first frost, so your lawn comes back strong come spring."
  },
  {
    "title": "“My yard just doesn't make a good first impression.”",
    "response": "We tighten up every detail, so your property looks its best from the curb in."
  }
];
const whyItems = [
  {
    "title": "Family-Owned & Local",
    "description": "We're neighbors, not a franchise. We started this business to bring reliable, high-quality care to the community we live in."
  },
  {
    "title": "Bilingual & Easy to Reach",
    "description": "Call, text, or message us in English or Spanish — whichever works best for you."
  },
  {
    "title": "Hard Work, Every Time",
    "description": "Hard work makes a difference, and it shows in every yard we touch. No shortcuts, no half-done jobs."
  },
  {
    "title": "We Cut Grass, Not Corners",
    "description": "Attention to detail is what separates a mowed lawn from a genuinely well-cared-for property. That's what you get with us."
  }
];
const reviews = [
  {
    "quote": "Our lawn had gotten completely out of control. GS came out, mowed, edged, and trimmed everything up, and it looked better than it had in years. Super friendly too.",
    "name": "Homeowner",
    "location": "Murfreesboro, TN",
    "service": "Lawn Care & Mowing"
  },
  {
    "quote": "They gave our hedges a whole new personality — seriously, I didn't know bushes could look that good. Fast, clean work and a fair price.",
    "name": "Homeowner",
    "location": "Smyrna, TN",
    "service": "Hedge & Bush Trimming"
  },
  {
    "quote": "Called them before a big family gathering to spruce up the front yard. They turned it around quick and it made such a difference for curb appeal.",
    "name": "Homeowner",
    "location": "La Vergne, TN",
    "service": "Curb Appeal Enhancement"
  },
  {
    "quote": "Fall cleanup used to take us all weekend. GS cleared every leaf before the first frost like they said they would. One less thing to worry about.",
    "name": "Homeowner",
    "location": "Nashville, TN",
    "service": "Seasonal & Fall Cleanup"
  }
];
const faqItems = [
  {
    "question": "What areas do you serve?",
    "answer": "We serve Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, and Franklin, TN, and the surrounding communities."
  },
  {
    "question": "Do you offer free estimates?",
    "answer": "Yes. Message us, call, or text and we'll get you a free, honest estimate for your property."
  },
  {
    "question": "Do you offer service in Spanish?",
    "answer": "Yes — we have a dedicated Spanish-language line (931-502-8469) in addition to our main English line, so you can reach us in whichever language is easiest."
  },
  {
    "question": "How often will you mow my lawn?",
    "answer": "That depends on the season and your lawn's needs — we'll work out a schedule that keeps your yard looking its best year-round."
  },
  {
    "question": "Can you handle a yard that's gotten really overgrown?",
    "answer": "Absolutely. Overgrown lawns, unruly hedges, and neglected beds are exactly the kind of jobs we love turning around."
  }
];

export default function HomePage() {
  const [featuredReview, ...otherReviews] = reviews;
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Murfreesboro&apos;s Family-Owned Lawn Care Team</span>
            <h1>A Lawn You&apos;re Actually Proud Of</h1>
            <span className="rule" />
            <p className="lead">Overgrown grass, messy hedges, or a yard buried in leaves — we show up, do it right, and treat your property like it&apos;s our own neighborhood.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-amber">Get Your Free Estimate <Arrow size={18} /></Link>
              <Link href="/gallery" className="btn btn-outline">See Our Work</Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-photo photo" style={photo(heroImage.src)} role="img" aria-label={heroImage.alt} />
            <div className="hero-badge">
              <i><Heart size={20} /></i>
              <div><strong>Family-owned</strong><span>Proudly serving Middle Tennessee</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="section pp">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Sound Familiar?</span>
            <h2>Your Yard Shouldn&apos;t Be a Weekend-Long Chore</h2>
            <span className="rule" />
            <p>If any of this sounds like your property, you&apos;re in good hands.</p>
          </div>
          <div className="pp-grid">
            {painPoints.map((p, i) => (
              <div className="pp-card" key={p.title}>
                <span className="pp-num">0{i + 1}</span>
                <div className="pp-icon"><ServiceIcon slug={services[i].slug} size={26} /></div>
                <h3>{p.title}</h3>
                <p>{p.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkBreak image={breakOne.src} caption={"Real neighbors. Real hard work. Real results."} />

      {/* SERVICES PREVIEW */}
      <section className="section sp">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Everything Your Yard Needs, One Local Team</h2>
            <span className="rule" />
            <p>From the first mow of spring to the last leaf of fall, we&apos;ve got it covered.</p>
          </div>
          <div className="sp-grid three">
            {services.map((s, i) => (
              <Link href={`/services/${s.slug}`} className="sp-card" key={s.slug}>
                <div className="sp-media">
                  <div className="sp-img-wrap"><div className="sp-img photo" style={photo(s.image.src)} role="img" aria-label={s.image.alt} /></div>
                  <span className="sp-badge"><ServiceIcon slug={s.slug} size={22} /></span>
                </div>
                <div className="sp-body">
                  <span className="sp-num">0{i + 1}</span>
                  <h3>{s.shortTitle}</h3>
                  <p>{s.heroHeadline}</p>
                  <span className="sp-link">Learn more <Arrow size={18} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="sp-more"><Link href="/services" className="btn btn-green">View All Services <Arrow size={18} /></Link></div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section why">
        <div className="container why-grid">
          <div className="why-intro">
            <span className="eyebrow">Why Us</span>
            <h2>Why Middle Tennessee Homeowners Choose GS Lawn Services</h2>
            <span className="rule" />
            <p>The difference between a mowed lawn and a well-cared-for property is in the details. That&apos;s where we put our time.</p>
          </div>
          <div className="why-items">
            {whyItems.map((w, i) => (
              <div className="why-item" key={w.title}>
                <span className="n">0{i + 1}</span>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkBreak image={breakTwo.src} caption={"Keeping Murfreesboro beautiful, one yard at a time."} />

      {/* REVIEWS */}
      <section className="section rev">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Real Results</span>
            <h2>What Our Neighbors Are Saying</h2>
            <span className="rule" />
            <p>We let the results speak — here&apos;s what it&apos;s like to actually work with us.</p>
          </div>
          <div className="rev-bento">
            <div className="rev-feature">
              <span className="q"><Quote size={34} /></span>
              <blockquote>{featuredReview.quote}</blockquote>
              <div className="rev-meta"><span>{featuredReview.name}</span><span className="dot" /><span className="loc">{featuredReview.location}</span></div>
              <span className="rev-tag">{featuredReview.service}</span>
            </div>
            <div className="rev-stack">
              {otherReviews.map((r) => (
                <div className="rev-card" key={r.quote}>
                  <blockquote>{r.quote}</blockquote>
                  <div className="rev-meta"><span>{r.name}</span><span className="dot" /><span className="loc">{r.location}</span></div>
                  <span className="rev-tag">{r.service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner variant="dark" eyebrow="Ready When You Are" heading={"Ready for a Lawn You Don't Have to Think About?"} subheading={"Join the Middle Tennessee homeowners who've handed off the yard work and started enjoying their weekends again."} ctaLabel={"Get Your Free Estimate"} />

      {/* FEATURED WORK */}
      <section className="section fw">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recent Projects</span>
            <h2>Recent Work Around Middle Tennessee</h2>
            <span className="rule" />
            <p>A few yards we&apos;ve recently helped transform.</p>
          </div>
          <div className="fw-grid">
            {featured.map((f) => (
              <div key={f.src} className="fw-item photo" style={photo(f.src)} role="img" aria-label={f.alt} />
            ))}
          </div>
          <div className="fw-more"><Link href="/gallery" className="btn btn-green">View Full Gallery <Arrow size={18} /></Link></div>
        </div>
      </section>

      <Faq heading={"Frequently Asked Questions"} subheading={"Straight answers to what most homeowners want to know."} items={faqItems} phone={site.phone} />

      <CtaBanner variant="gold" showContact eyebrow="Let's Get Started" heading={"Let's Get Your Yard Handled"} subheading={"Tell us what's going on and we'll give you a clear, honest estimate — no pressure, no surprises."} ctaLabel={"Request Your Free Estimate"} />
    </>
  );
}
