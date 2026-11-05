import { photo } from "@/lib/site";

export default function WorkBreak({ image, caption }: { image: string; caption: string }) {
  return (
    <section className="break photo" style={photo(image)} role="img" aria-label={caption}>
      <div className="container">
        <div className="break-inner">
          <span className="break-line" />
          <p>{caption}</p>
        </div>
      </div>
    </section>
  );
}
