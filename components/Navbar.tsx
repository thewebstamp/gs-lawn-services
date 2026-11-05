"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, navLinks, navCta } from "@/lib/site";
import { Menu, Close, Phone, Leaf } from "./icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={"nav" + (scrolled || open ? " is-scrolled" : "")}>
      <div className="container nav-bar">
        <Link href="/" className="nav-brand" aria-label={site.businessName}>
          <span className="nav-brand-mark"><Leaf size={20} /></span>
          <span>{site.businessName}</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={"nav-link" + (isActive(l.href) ? " is-active" : "")}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a href={`tel:${site.phone}`} className="nav-phone"><Phone size={18} /> {site.phone}</a>
          <Link href="/contact" className="btn btn-amber nav-cta">{navCta}</Link>
        </div>

        <button className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div className={"nav-panel" + (open ? " is-open" : "")}>
        <div className="container">
          <nav aria-label="Mobile">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="panel-link">{l.label}</Link>
            ))}
          </nav>
          <div className="panel-foot">
            <Link href="/contact" className="btn btn-amber">{navCta}</Link>
            <a href={`tel:${site.phone}`} className="panel-phone"><Phone size={18} /> {site.phone}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
