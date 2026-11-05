import Link from "next/link";
import { site, navLinks, services } from "@/lib/site";
import { MapPin, Phone, Mail, Arrow } from "./icons";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <span className="name">{site.businessName}</span>
          <p>GS Lawn Services LLC keeps Murfreesboro-area yards mowed, trimmed, and looking sharp all year — family-owned, hardworking, and proud to serve our neighbors.</p>
          <Link href="/contact" className="btn btn-amber">Request Your Estimate <Arrow size={18} /></Link>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.shortTitle}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Get in touch</h4>
          <ul className="footer-contact">
            <li><Phone size={18} /><a href={`tel:${site.phone}`}>{site.phone}</a></li>
            <li><Mail size={18} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><MapPin size={18} /><span>{site.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; <CurrentYear /> GS Lawn Services LLC. All rights reserved.</span>
        <span>Serving {site.serviceArea}</span>
      </div>
    </footer>
  );
}
