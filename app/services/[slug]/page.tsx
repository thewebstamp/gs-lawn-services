import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, photo } from "@/lib/site";
import { Arrow, Check } from "@/components/icons";
import CtaBanner from "@/components/CtaBanner";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  const title = `${s.shortTitle} in Murfreesboro, TN | GS Lawn Services LLC`;
  const description = `${s.heroHeadline}. ${s.painPoint}`;
  return {
    title,
    description,
    openGraph: { title, description, images: [{ url: s.detailImage.src, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [s.detailImage.src] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="sd-hero photo" style={photo(s.detailImage.src)} role="img" aria-label={s.detailImage.alt}>
        <div className="container">
          <div className="sd-panel">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link> <span>/</span> <Link href="/services">Services</Link> <span>/</span> <span className="cur">{s.shortTitle}</span>
            </nav>
            <h1>{s.heroHeadline}</h1>
            <Link href="/contact" className="btn btn-amber">{s.ctaLabel} <Arrow size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ps-grid">
          <div className="ps-panel ps-problem">
            <span className="tag">The Problem</span>
            <p>{s.painPoint}</p>
          </div>
          <div className="ps-panel ps-solution">
            <span className="tag">How We Fix It</span>
            <p>{s.promise}</p>
          </div>
        </div>
      </section>

      <section className="section chk">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What&apos;s Included</span>
            <h2>What You Get</h2>
            <span className="rule" />
          </div>
          <ul className="chk-list">
            {s.whatWeDo.map((item) => (
              <li className="chk-item" key={item}>
                <i><Check size={16} /></i>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Work</span>
            <h2>{s.shortTitle} Results</h2>
            <span className="rule" />
          </div>
          <div className="sg-grid">
            {s.gallery.map((g) => (
              <div key={g.src} className="photo" style={photo(g.src)} role="img" aria-label={g.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="section os">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Explore More</span>
            <h2>Other Services</h2>
            <span className="rule" />
          </div>
          <div className="os-row">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="os-link">
                {o.shortTitle} <Arrow size={16} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner variant="gold" showContact heading={`Ready for ${s.shortTitle}?`} subheading="Tell us about your property and we'll give you a clear, honest estimate. No pressure, no obligation." ctaLabel={s.ctaLabel} />
    </>
  );
}
