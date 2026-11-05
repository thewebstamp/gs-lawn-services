// Business details and the service list, used across the site.

export const site = {
  "businessName": "GS Lawn Services LLC",
  "tagline": "We Cut Grass, Not Corners",
  "phone": "629-261-1715",
  "email": "gslawnservice2025@gmail.com",
  "address": "Sherborne Court, Murfreesboro, TN 37128",
  "serviceArea": "Murfreesboro, Smyrna, La Vergne, Nashville, Brentwood, and Franklin, TN"
};

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gslawnservicesllc.com";

export const navLinks = [
  {
    "label": "Home",
    "href": "/"
  },
  {
    "label": "Services",
    "href": "/services"
  },
  {
    "label": "About",
    "href": "/about"
  },
  {
    "label": "Gallery",
    "href": "/gallery"
  },
  {
    "label": "Contact",
    "href": "/contact"
  }
];

export const navCta = "Get a Free Estimate";

export type Service = {
  slug: string;
  shortTitle: string;
  heroHeadline: string;
  painPoint: string;
  promise: string;
  whatWeDo: string[];
  ctaLabel: string;
  image: { src: string; alt: string };
  detailImage: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
};

export const services: Service[] = [
  {
    "slug": "lawn-care-mowing",
    "shortTitle": "Lawn Care & Mowing",
    "heroHeadline": "A Lawn That Actually Looks Cared For",
    "painPoint": "An overgrown, unevenly mowed lawn doesn't just look bad — it's a sign your yard isn't getting the regular attention it needs, and it only gets more overwhelming to tackle yourself.",
    "promise": "We mow, edge, and care for your lawn on a schedule that keeps it thick, even, and healthy all season — so you get a yard you're actually proud of, without the weekend labor.",
    "whatWeDo": [
      "Regular mowing and edging on a schedule that fits your lawn",
      "Clean, even cuts with attention to detail every visit",
      "Trimming around beds, trees, and hardscaping",
      "Clippings cleared so your yard looks finished"
    ],
    "ctaLabel": "Get a Lawn Care Estimate",
    "image": {
      "src": "/images/lawn-care-card.jpg",
      "alt": "Lawn mowing in progress in Murfreesboro, TN"
    },
    "detailImage": {
      "src": "/images/lawn-care-hero.jpg",
      "alt": "Wide view of a freshly mowed lawn in Murfreesboro"
    },
    "gallery": [
      {
        "src": "/images/services/lawn-care-1.jpg",
        "alt": "Lawn before mowing and edging"
      },
      {
        "src": "/images/services/lawn-care-2.jpg",
        "alt": "Lawn after mowing and edging"
      }
    ]
  },
  {
    "slug": "landscape-maintenance",
    "shortTitle": "Landscape Maintenance",
    "heroHeadline": "Every Corner of Your Property, Cared For",
    "painPoint": "Beds, borders, and landscaped areas take ongoing upkeep — and when they're neglected, even a freshly mowed lawn can end up looking unfinished.",
    "promise": "We handle the ongoing maintenance that keeps your whole landscape looking intentional, not just the grass — so your property reads as cared for from every angle.",
    "whatWeDo": [
      "Bed and border upkeep",
      "Weed control in landscaped areas",
      "General tidying of landscaped features",
      "Seasonal adjustments as your yard changes"
    ],
    "ctaLabel": "Get a Maintenance Estimate",
    "image": {
      "src": "/images/landscape-maintenance-card.jpg",
      "alt": "Landscape bed maintenance in progress"
    },
    "detailImage": {
      "src": "/images/landscape-maintenance-hero.jpg",
      "alt": "Wide view of a maintained landscape bed in Murfreesboro"
    },
    "gallery": [
      {
        "src": "/images/services/landscape-maintenance-1.jpg",
        "alt": "Overgrown bed before maintenance"
      },
      {
        "src": "/images/services/landscape-maintenance-2.jpg",
        "alt": "Clean, maintained bed after service"
      }
    ]
  },
  {
    "slug": "hedge-bush-trimming",
    "shortTitle": "Hedge & Bush Trimming",
    "heroHeadline": "Nothing Beats a Perfectly Manicured Hedge",
    "painPoint": "Overgrown bushes and hedges can take over a yard fast — and shaping them up right takes more than a pair of garden shears and a free afternoon.",
    "promise": "We trim and shape your hedges and bushes with real attention to detail, so your property looks sharp, tidy, and intentional — we don't just trim bushes, we give them a whole new personality.",
    "whatWeDo": [
      "Precision trimming and shaping of hedges and bushes",
      "Overgrowth control for shrubs of all sizes",
      "Clean, consistent lines across your property",
      "Full debris cleanup after every trim"
    ],
    "ctaLabel": "Get a Trimming Estimate",
    "image": {
      "src": "/images/hedge-trimming-card.jpg",
      "alt": "Hedge trimming in progress"
    },
    "detailImage": {
      "src": "/images/hedge-trimming-hero.jpg",
      "alt": "Wide view of a freshly shaped hedge line in Murfreesboro"
    },
    "gallery": [
      {
        "src": "/images/services/hedge-trimming-1.jpg",
        "alt": "Overgrown hedge before trimming"
      },
      {
        "src": "/images/services/hedge-trimming-2.jpg",
        "alt": "Sharp, shaped hedge after trimming"
      }
    ]
  },
  {
    "slug": "seasonal-fall-cleanup",
    "shortTitle": "Seasonal & Fall Cleanup",
    "heroHeadline": "Cleared Before the First Frost, Every Time",
    "painPoint": "Leaving leaves and seasonal debris on your lawn too long can actually kill the grass underneath — and it piles up faster than most homeowners can keep up with.",
    "promise": "We clear your property completely before the cold weather sets in, so your lawn comes back healthy in spring instead of patchy and stressed.",
    "whatWeDo": [
      "Full leaf and debris removal",
      "Mowing, shredding, and clearing as needed",
      "Timed ahead of the first frost",
      "Complete haul-away of all cleared material"
    ],
    "ctaLabel": "Get a Cleanup Estimate",
    "image": {
      "src": "/images/fall-cleanup-card.jpg",
      "alt": "Fall leaf cleanup in progress"
    },
    "detailImage": {
      "src": "/images/fall-cleanup-hero.jpg",
      "alt": "Wide view of a completed fall cleanup in Murfreesboro"
    },
    "gallery": [
      {
        "src": "/images/services/fall-cleanup-1.jpg",
        "alt": "Yard covered in leaves before cleanup"
      },
      {
        "src": "/images/services/fall-cleanup-2.jpg",
        "alt": "Cleared yard after fall cleanup"
      }
    ]
  },
  {
    "slug": "curb-appeal-enhancement",
    "shortTitle": "Curb Appeal Enhancement",
    "heroHeadline": "Make a Great First Impression, Every Time",
    "painPoint": "Whether you're hosting family, selling your home, or just tired of a yard that doesn't reflect how much you actually care about your property, a lackluster curb appeal is an easy thing to put off fixing.",
    "promise": "We clean up and tighten every detail — lawn, edges, beds, and trim — so your property looks its absolute best from the street.",
    "whatWeDo": [
      "Full front-yard tidy-up and detail pass",
      "Edge and border cleanup for a sharper look",
      "Coordination with mowing and trimming services",
      "A yard that's ready for guests, buyers, or just you"
    ],
    "ctaLabel": "Get a Curb Appeal Estimate",
    "image": {
      "src": "/images/curb-appeal-card.jpg",
      "alt": "Front yard curb appeal detail work"
    },
    "detailImage": {
      "src": "/images/curb-appeal-hero.jpg",
      "alt": "Wide view of a front yard curb appeal refresh in Murfreesboro"
    },
    "gallery": [
      {
        "src": "/images/services/curb-appeal-1.jpg",
        "alt": "Front yard before curb appeal refresh"
      },
      {
        "src": "/images/services/curb-appeal-2.jpg",
        "alt": "Front yard after curb appeal refresh"
      }
    ]
  }
];

export const ogImage = {
  "src": "/images/og-default.jpg",
  "alt": "GS Lawn Services LLC — lawn care and landscaping in Murfreesboro, TN"
};

// Inline style for photo blocks: shows the photo, falls back to green if the file is missing.
export function photo(src: string) {
  return { backgroundImage: `url(${src})` };
}

export function mapUrl() {
  return `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`;
}

export function directionsUrl() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address)}`;
}
