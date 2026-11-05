import type { Metadata } from "next";
import { site, mapUrl, directionsUrl } from "@/lib/site";
import { Phone, Mail, MapPin, Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us | GS Lawn Services LLC",
  description: "Call, text, or email GS Lawn Services LLC for a free estimate in Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, or Franklin, TN. English and Spanish lines available.",
  openGraph: {
    title: "Contact Us | GS Lawn Services LLC",
    description: "Call, text, or email GS Lawn Services LLC for a free estimate in Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, or Franklin, TN. English and Spanish lines available.",
    images: [{ url: "/images/contact-hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | GS Lawn Services LLC",
    description: "Call, text, or email GS Lawn Services LLC for a free estimate in Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, or Franklin, TN. English and Spanish lines available.",
    images: ["/images/contact-hero.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">Get In Touch</span>
          <h1>Let&apos;s Talk About Your Yard</h1>
          <p className="lead">Call, text, or email us directly — we&apos;ll get back to you with a clear, honest estimate. No pressure, no obligation.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Reach Us Directly</span>
            <h2>Talk to a real person</h2>
            <span className="rule" />
          </div>
          <div className="cc-grid">
            <a className="cc-card" href={`tel:${site.phone}`}>
              <i><Phone size={24} /></i>
              <small>Call or Text</small>
              <strong>{site.phone}</strong>
              <span>English &amp; Spanish (Spanish line: 931-502-8469)</span>
            </a>
            <a className="cc-card" href={`mailto:${site.email}`}>
              <i><Mail size={24} /></i>
              <small>Email</small>
              <strong>{site.email}</strong>
              <span>We reply as quickly as we can</span>
            </a>
            <a className="cc-card" href={directionsUrl()} target="_blank" rel="noopener noreferrer">
              <i><MapPin size={24} /></i>
              <small>Based In</small>
              <strong>{site.address}</strong>
              <span>Tap for directions</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map">
            <iframe src={mapUrl()} title="Map showing GS Lawn Services LLC location" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="map-card">
              <h3>{site.businessName}</h3>
              <p>Serving {site.serviceArea}.</p>
              <a className="btn btn-green" href={directionsUrl()} target="_blank" rel="noopener noreferrer">Get Directions <Arrow size={16} /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
