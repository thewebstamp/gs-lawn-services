"use client";

import { useCallback, useEffect, useState } from "react";
import { photo } from "@/lib/site";
import { Close, Arrow } from "./icons";

type Item = { src: string; alt: string; category: string };
type Cat = { slug: string; label: string };

export default function GalleryGrid({ items, categories }: { items: Item[]; categories: Cat[] }) {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState<number | null>(null);
  const shown = filter === "all" ? items : items.filter((i) => i.category === filter);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((a) => (a === null ? a : (a + 1) % shown.length)), [shown.length]);
  const prev = useCallback(() => setActive((a) => (a === null ? a : (a - 1 + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <div className="gal-tabs" role="tablist">
        <button className={"gal-tab" + (filter === "all" ? " is-active" : "")} onClick={() => setFilter("all")}>All Work</button>
        {categories.map((c) => (
          <button key={c.slug} className={"gal-tab" + (filter === c.slug ? " is-active" : "")} onClick={() => setFilter(c.slug)}>
            {c.label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="gal-empty">More photos from this category are coming soon.</p>
      ) : (
        <div className="gal-masonry">
          {shown.map((it, i) => (
            <button key={it.src + i} className="gal-tile" onClick={() => setActive(i)} aria-label={`Open photo: ${it.alt}`}>
              <div className="photo" style={photo(it.src)} />
              <span className="gal-cap">{it.alt}</span>
            </button>
          ))}
        </div>
      )}

      {active !== null && shown[active] && (
        <div className="lb" role="dialog" aria-modal="true" onClick={close}>
          <button className="lb-btn lb-close" aria-label="Close" onClick={close}><Close /></button>
          <button className="lb-btn lb-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <span style={{ transform: "rotate(180deg)", display: "grid" }}><Arrow /></span>
          </button>
          <div className="lb-img photo" style={photo(shown[active].src)} role="img" aria-label={shown[active].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-btn lb-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); next(); }}><Arrow /></button>
          <span className="lb-count">{active + 1} / {shown.length}</span>
        </div>
      )}
    </>
  );
}
