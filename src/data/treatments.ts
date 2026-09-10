export interface TreatmentDuration {
  minutes: number;
  priceTHB: number;
  popular?: boolean;
}

export interface Treatment {
  id: string;
  name: string;
  category: "massage" | "oil" | "specialty" | "packages";
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  durations: TreatmentDuration[];
  image: string;
  tag?: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "thai-traditional",
    name: "Traditional Royal Thai Massage",
    category: "massage",
    shortDescription: "Ancient rhythmic acupressure & passive yogic stretching to restore energetic balance.",
    fullDescription: "An ancient healing art passed down through generations. Our licensed therapists apply targeted palm pressure, thumb kneading, and gentle yogic stretches along energy lines (Sen) to eliminate stiffness, improve flexibility, and awaken full-body vitality.",
    benefits: ["Relieves deep muscle tension", "Increases joint mobility", "Boosts circulation & lymphatic drainage"],
    durations: [
      { minutes: 60, priceTHB: 450 },
      { minutes: 90, priceTHB: 650, popular: true },
      { minutes: 120, priceTHB: 850 }
    ],
    image: "/images/photoshoot/thai-stretch-back.jpg",
    tag: "Most Popular"
  },
  {
    id: "deep-tissue-oil",
    name: "Deep Tissue Aroma Oil Massage",
    category: "oil",
    shortDescription: "Therapeutic warm botanical oils with focused pressure on stubborn knots and trigger points.",
    fullDescription: "Reaches the deepest layers of muscle fibers and connective tissue. Using warm essential botanicals, therapists use elbows, forearms, and deep friction strokes to dissolve chronic shoulder knots and lower back fatigue.",
    benefits: ["Dissolves chronic postural knots", "Releases deep tension", "Restores restorative sleep"],
    durations: [
      { minutes: 60, priceTHB: 600 },
      { minutes: 90, priceTHB: 850, popular: true },
      { minutes: 120, priceTHB: 1100 }
    ],
    image: "/images/service-oil.jpg",
    tag: "Signature"
  },
  {
    id: "foot-reflexology",
    name: "Revitalizing Foot Reflexology",
    category: "massage",
    shortDescription: "Targeted pressure point stimulation along the soles and calves for full-body relief.",
    fullDescription: "Essential relief for city explorers and busy travelers. Begins with a soothing herbal foot wash, followed by precise thumb and reflexology stick stimulation on meridian zones corresponding to the body's internal organs.",
    benefits: ["Instant relief for tired legs & feet", "Stimulates internal organ wellness", "Reduces ankle swelling"],
    durations: [
      { minutes: 60, priceTHB: 400 },
      { minutes: 90, priceTHB: 580, popular: true },
      { minutes: 120, priceTHB: 750 }
    ],
    image: "/images/service-foot.jpg",
    tag: "Best Value"
  },
  {
    id: "aromatherapy-relaxation",
    name: "Pure Botanical Aromatherapy",
    category: "oil",
    shortDescription: "Gentle Swedish long strokes infused with pure organic lavender and lemongrass extracts.",
    fullDescription: "A deeply sensory relaxation experience designed to quiet the mind. Smooth, flowing effleurage strokes combined with custom botanical oils melt away stress and leave your skin nourished and silky.",
    benefits: ["Soothes nervous system", "Nourishes dry skin", "Promotes emotional tranquility"],
    durations: [
      { minutes: 60, priceTHB: 700 },
      { minutes: 90, priceTHB: 950, popular: true },
      { minutes: 120, priceTHB: 1250 }
    ],
    image: "/images/photoshoot/essential-oil-flower.jpg"
  },
  {
    id: "hot-herbal-compress",
    name: "Warm Thai Herbal Compress (Luk Pra Kob)",
    category: "specialty",
    shortDescription: "Steamed organic herbal pouches pressed into tired muscles to relieve aches and inflammation.",
    fullDescription: "A revered traditional therapy. Steamed linen bundles filled with fresh lemongrass, plai, kaffir lime, turmeric, and camphor are pressed rhythmically along meridian lines to soothe sore muscles, ease inflammation, and boost vitality.",
    benefits: ["Eases chronic inflammation & soreness", "Detoxifies via therapeutic perspiration", "Calming herbal aroma"],
    durations: [
      { minutes: 90, priceTHB: 900, popular: true },
      { minutes: 120, priceTHB: 1200 }
    ],
    image: "/images/gallery-7.jpg",
    tag: "Traditional Remedy"
  },
  {
    id: "head-neck-shoulder",
    name: "Head, Neck & Desk-Fatigue Relief",
    category: "specialty",
    shortDescription: "Concentrated upper-body therapy targeting tech-neck, migraines, and tight shoulders.",
    fullDescription: "Specifically engineered for remote workers and office professionals suffering from desk fatigue. Intensely targets the traps, occipital base, scm neck muscles, and scalp.",
    benefits: ["Eliminates tension headaches", "Corrects upper back tightness", "Restores neck mobility"],
    durations: [
      { minutes: 60, priceTHB: 450 },
      { minutes: 90, priceTHB: 650, popular: true }
    ],
    image: "/images/photoshoot/thai-stretch-shoulder.jpg",
    tag: "Office Relief"
  },
  {
    id: "body-scrub-renewal",
    name: "Organic Glow Body Scrub & Polish",
    category: "specialty",
    shortDescription: "Gentle natural exfoliation with crushed jasmine rice and coconut milk for luminous skin.",
    fullDescription: "Gentle buffing removes dead epidermal cells while rich coconut nectar deeply hydrates. Followed by a warm rinse and finishing moisture balm application.",
    benefits: ["Silky smooth radiant skin", "Improves cellular turnover", "Deep hydration"],
    durations: [
      { minutes: 60, priceTHB: 800, popular: true }
    ],
    image: "/images/about-wellbeing.jpg"
  },
  {
    id: "zen-harmony-package",
    name: "Siam Zen Complete Harmony Package",
    category: "packages",
    shortDescription: "Our signature head-to-toe ritual: 60m Thai or Foot + 60m Warm Oil + Herbal Tea.",
    fullDescription: "The ultimate 2-hour retreat. Combines deep tension release with soothing aromatherapy and therapeutic herbal care. Concludes with hot organic pandan tea and fresh dried fruit.",
    benefits: ["Complete mental & physical reset", "Comprehensive whole-body care", "Complimentary herbal welcome tea"],
    durations: [
      { minutes: 120, priceTHB: 1250, popular: true },
      { minutes: 150, priceTHB: 1550 }
    ],
    image: "/images/hero.jpg",
    tag: "Top Rated Package"
  }
];
