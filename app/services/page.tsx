import type { Metadata } from "next";
import Link from "next/link";
import { services, photo } from "@/lib/site";
import { Arrow, ServiceIcon, Heart, Globe, Badge, MapPin } from "@/components/icons";
import WorkBreak from "@/components/WorkBreak";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Services | GS Lawn Services LLC",
  description: "Lawn care, landscape maintenance, hedge trimming, seasonal cleanup, and curb appeal services across Middle Tennessee. We cut grass, not corners.",
  openGraph: {
    title: "Our Services | GS Lawn Services LLC",
    description: "Lawn care, landscape maintenance, hedge trimming, seasonal cleanup, and curb appeal services across Middle Tennessee. We cut grass, not corners.",
    images: [{ url: "/images/services-overview-break.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | GS Lawn Services LLC",
    description: "Lawn care, landscape maintenance, hedge trimming, seasonal cleanup, and curb appeal services across Middle Tennessee. We cut grass, not corners.",
    images: ["/images/services-overview-break.jpg"],
  },
};

const breakImage = {
  "src": "/images/services-overview-break.jpg",
  "alt": "GS Lawn Services equipment ready for a job in Murfreesboro"
};
const steps = [
  {
    "title": "Reach Out",
    "description": "Call, text, email, or message us on social media telling us what your yard needs."
  },
  {
    "title": "Free Estimate",
    "description": "We take a look and give you a clear, honest estimate — no pressure, no obligation."
  },
  {
    "title": "We Get to Work",
    "description": "Once you're ready, we show up and get the job done right, with real attention to detail."
  },
  {
    "title": "Enjoy the Results",
    "description": "Your yard is finally handled — and we're here again whenever you need us next."
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">What We Do</span>
          <h1>Everything Your Yard Needs, Handled by One Local Team</h1>
          <p className="lead">No juggling multiple contractors. We cover mowing, maintenance, trimming, cleanup, and curb appeal — all with the same hardworking standard.</p>
        </div>
      </section>

      <section className="section sp">
        <div className="container">
          <div className="section-head">
            <p>Every service below solves a real problem homeowners face across Middle Tennessee. Let us know what applies to you, or reach out and we&apos;ll help you figure out exactly what your yard needs.</p>
          </div>
          <div className="sp-grid">
            {services.map((s, i) => (
              <Link href={`/services/${s.slug}`} className="sp-card" key={s.slug}>
                <div className="sp-media">
                  <div className="sp-img-wrap"><div className="sp-img photo" style={photo(s.image.src)} role="img" aria-label={s.image.alt} /></div>
                  <span className="sp-badge"><ServiceIcon slug={s.slug} size={22} /></span>
                </div>
                <div className="sp-body">
                  <span className="sp-num">0{i + 1}</span>
                  <h3>{s.shortTitle}</h3>
                  <p>{s.painPoint}</p>
                  <span className="sp-link">{s.ctaLabel} <Arrow size={18} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section how">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The Process</span>
            <h2>How It Works</h2>
            <span className="rule" />
            <p>Simple from the first message to the finished job.</p>
          </div>
          <div className="how-grid">
            {steps.map((s, i) => (
              <div className="how-step" key={s.title}>
                <div className="how-num">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkBreak image={breakImage.src} caption={"Ready for jobs of every size, every season."} />

      <section className="trust">
        <div className="container trust-row">
          <div className="trust-item"><i><Heart size={20} /></i><div><b>Family-owned</b><span>Local &amp; hardworking</span></div></div>
          <div className="trust-item"><i><Globe size={20} /></i><div><b>Bilingual</b><span>English &amp; Spanish</span></div></div>
          <div className="trust-item"><i><Badge size={20} /></i><div><b>Free estimates</b><span>No pressure</span></div></div>
          <div className="trust-item"><i><MapPin size={20} /></i><div><b>6 communities</b><span>Across Middle TN</span></div></div>
        </div>
      </section>

      <CtaBanner variant="gold" showContact heading={"Not Sure Which Service You Need?"} subheading={"Tell us what's going on with your yard and we'll help you figure out the right fix — no pressure, no obligation."} ctaLabel={"Get a Free Estimate"} />
    </>
  );
}
