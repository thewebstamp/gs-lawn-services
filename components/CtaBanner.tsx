import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow, Phone, Mail } from "./icons";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  variant?: "dark" | "gold";
  showContact?: boolean;
};

export default function CtaBanner({ eyebrow, heading, subheading, ctaLabel, variant = "gold", showContact = false }: Props) {
  return (
    <section className={"cta cta-" + variant}>
      <div className="container">
        <div className="cta-inner">
          <span className="rule" />
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{heading}</h2>
          <p className="sub">{subheading}</p>
          <Link href="/contact" className={"btn " + (variant === "dark" ? "btn-amber" : "btn-green")}>
            {ctaLabel} <Arrow size={18} />
          </Link>
          {showContact && (
            <div className="cta-contact">
              <a href={`tel:${site.phone}`}><Phone size={17} /> {site.phone}</a>
              <a href={`mailto:${site.email}`}><Mail size={17} /> {site.email}</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
