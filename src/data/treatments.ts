export interface TreatmentDuration {
  minutes: number;
  priceTHB: number;
  popular?: boolean;
}

export interface BranchPricingOverride {
  durations?: TreatmentDuration[];
  tag?: string;
  promoBadge?: string;
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
  branchOverrides?: Record<string, BranchPricingOverride>;
}

export function getTreatmentForBranch(treatment: Treatment, branchId: string): Treatment {
  if (treatment.branchOverrides && treatment.branchOverrides[branchId]) {
    const override = treatment.branchOverrides[branchId];
    return {
      ...treatment,
      durations: override.durations || treatment.durations,
      tag: override.tag || treatment.tag
    };
  }
  return treatment;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "thai-traditional",
    name: "Traditional Royal Thai Massage",
    category: "massage",
    shortDescription: "Ancient rhythmic acupressure & passive yogic stretching along energy lines (Sen) to restore vitality.",
    fullDescription: "An authentic healing art passed down through generations. Master therapists apply targeted palm pressure, thumb kneading, and gentle assisted yogic stretches along energetic pathways to relieve stiffness, improve flexibility, and rebalance the body.",
    benefits: ["Relieves deep muscle tension & stiffness", "Improves posture & joint flexibility", "Stimulates lymphatic & blood circulation"],
    durations: [
      { minutes: 60, priceTHB: 400 },
      { minutes: 90, priceTHB: 600, popular: true },
      { minutes: 120, priceTHB: 650 }
    ],
    image: "./images/photoshoot/thai-stretch-back.jpg",
    tag: "Signature"
  },
  {
    id: "foot-reflexology",
    name: "Revitalizing Foot Reflexology",
    category: "massage",
    shortDescription: "Targeted reflex zone stimulation along the soles and calves for full-body relief.",
    fullDescription: "Essential soothing care for tired feet and active city explorers. Begins with a cleansing herbal foot wash, followed by precise thumb acupressure and reflexology stick stimulation along meridian points corresponding to internal organs.",
    benefits: ["Instant relief for fatigued feet & calves", "Improves circulation & reduces ankle swelling", "Promotes natural systemic relaxation"],
    durations: [
      { minutes: 60, priceTHB: 350 },
      { minutes: 90, priceTHB: 550, popular: true },
      { minutes: 120, priceTHB: 600 }
    ],
    image: "./images/service-foot.jpg",
    tag: "Best Value"
  },
  {
    id: "head-shoulder-back",
    name: "Head, Shoulder & Back Tension Relief",
    category: "massage",
    shortDescription: "Concentrated upper-body acupressure targeting tech-neck, migraines, and tight traps.",
    fullDescription: "Specifically designed for travelers and desk professionals suffering from postural fatigue. Focuses intensely on the upper trapezius, cervical spine, shoulder blades, and cranial pressure points to release stubborn knots.",
    benefits: ["Dissolves chronic neck & shoulder stiffness", "Alleviates tension headaches & eyestrain", "Restores upper-body mobility"],
    durations: [
      { minutes: 60, priceTHB: 400 },
      { minutes: 90, priceTHB: 600, popular: true },
      { minutes: 120, priceTHB: 650 }
    ],
    image: "./images/photoshoot/thai-stretch-shoulder.jpg",
    tag: "Office Relief"
  },
  {
    id: "oil-massage",
    name: "Therapeutic Oil Massage",
    category: "oil",
    shortDescription: "Deep gliding strokes with warm botanical oils targeting muscle knots and fatigue.",
    fullDescription: "Combines the benefits of smooth Swedish massage techniques with targeted Thai acupressure. Warm essential oils nourish the skin while therapists work into deeper muscle layers to eliminate stress and fatigue.",
    benefits: ["Dissolves stubborn muscular knots", "Nourishes and softens dry skin", "Relieves overall physical fatigue"],
    durations: [
      { minutes: 60, priceTHB: 550 },
      { minutes: 90, priceTHB: 800, popular: true },
      { minutes: 120, priceTHB: 1000 }
    ],
    image: "./images/service-oil.jpg",
    tag: "Popular"
  },
  {
    id: "aroma-massage",
    name: "Pure Botanical Aroma Massage",
    category: "oil",
    shortDescription: "Gentle sensory relaxation infused with pure natural lavender and lemongrass extracts.",
    fullDescription: "A luxurious and peaceful sensory retreat. Smooth, rhythmic effleurage strokes with premium organic essential oils calm the nervous system, release mental stress, and promote deep restful sleep.",
    benefits: ["Calms the nervous system & quiets anxiety", "Promotes restorative deep sleep", "Leaves skin delicately fragrant and hydrated"],
    durations: [
      { minutes: 60, priceTHB: 700 },
      { minutes: 90, priceTHB: 1000, popular: true },
      { minutes: 120, priceTHB: 1200 }
    ],
    image: "./images/photoshoot/essential-oil-flower.jpg"
  },
  {
    id: "coconut-oil-massage",
    name: "Cold-Pressed Coconut Oil Massage",
    category: "oil",
    shortDescription: "100% virgin tropical coconut oil therapy for intense skin hydration and gentle relaxation.",
    fullDescription: "Indulge in organic Thai cold-pressed virgin coconut oil rich in vitamins and antioxidants. Melts effortlessly into the skin with smooth continuous strokes to replenish moisture after sun exposure.",
    benefits: ["Deep cellular hydration for sun-drenched skin", "Rich in natural antioxidants & Vitamin E", "Leaves skin with a radiant tropical glow"],
    durations: [
      { minutes: 60, priceTHB: 700 },
      { minutes: 90, priceTHB: 1000, popular: true },
      { minutes: 120, priceTHB: 1200 }
    ],
    image: "./images/about-wellbeing.jpg",
    tag: "Skin Nourishing"
  },
  {
    id: "lotion-massage",
    name: "Silky Botanical Lotion Massage",
    category: "oil",
    shortDescription: "Smooth, non-greasy moisturizing massage with delicate botanical lotions.",
    fullDescription: "Ideal for guests who prefer lightweight moisture without heavy oil residue. Gentle flowing techniques absorb delicate restorative lotions deeply into the epidermis, leaving you refreshed and non-sticky.",
    benefits: ["Non-greasy, fast-absorbing hydration", "Velvety skin texture", "Soothing and refreshing"],
    durations: [
      { minutes: 60, priceTHB: 700 },
      { minutes: 90, priceTHB: 1000, popular: true },
      { minutes: 120, priceTHB: 1200 }
    ],
    image: "./images/photoshoot/spa-lotions-towels.jpg"
  },
  {
    id: "hot-oil-massage",
    name: "Deep Restorative Hot Oil Massage",
    category: "oil",
    shortDescription: "Therapeutic warm heated essential oils penetrating deep into tired muscles.",
    fullDescription: "Warmed therapeutic oils are drizzled along tension points and massaged with deep firm pressure. Heat expands capillaries, increases oxygen delivery, and eases the most stubborn chronic tightness.",
    benefits: ["Thermal penetration soothes chronic aches", "Accelerates muscle recovery", "Deep sensory warmth and tranquility"],
    durations: [
      { minutes: 60, priceTHB: 1000 },
      { minutes: 90, priceTHB: 1300, popular: true },
      { minutes: 120, priceTHB: 1500 }
    ],
    image: "./images/gallery-1.jpg",
    tag: "Deep Heat Therapy"
  },
  {
    id: "thai-hot-herbal-bag",
    name: "Thai Hot Herbal Compress (Luk Pra Kob)",
    category: "specialty",
    shortDescription: "Steamed organic herbal pouches pressed into tired muscles to relieve aches and inflammation.",
    fullDescription: "A revered centuries-old Royal therapy. Steamed cotton parcels filled with fresh plai, lemongrass, kaffir lime, turmeric, and camphor are pressed rhythmically along energy lines to dissolve muscle soreness and fatigue.",
    benefits: ["Eases chronic inflammation & soreness", "Detoxifies via therapeutic perspiration", "Calming therapeutic herbal aroma"],
    durations: [
      { minutes: 60, priceTHB: 1000 },
      { minutes: 90, priceTHB: 1200, popular: true },
      { minutes: 120, priceTHB: 1400 }
    ],
    image: "./images/gallery-7.jpg",
    tag: "Traditional Remedy"
  },
  {
    id: "hot-oil-herbal-bag",
    name: "Hot Oil & Herbal Compress Ritual",
    category: "specialty",
    shortDescription: "The ultimate therapeutic fusion: warm botanical oils followed by steamed herbal compresses.",
    fullDescription: "Our most comprehensive healing specialty. Begins with deep tissue warm botanical oil therapy to release tight fibers, followed by steaming traditional Thai herbal compresses applied along meridian channels.",
    benefits: ["Synergistic heat and herbal healing", "Dissolves deep chronic stiffness", "Total rejuvenation for mind and body"],
    durations: [
      { minutes: 60, priceTHB: 1000 },
      { minutes: 90, priceTHB: 1500, popular: true },
      { minutes: 120, priceTHB: 1800 }
    ],
    image: "./images/gallery-2.jpg",
    tag: "Master Specialty"
  },
  {
    id: "body-scrub",
    name: "Organic Glow Body Scrub & Polish",
    category: "specialty",
    shortDescription: "Gentle natural exfoliation with crushed jasmine rice and botanical nectar for luminous skin.",
    fullDescription: "Gentle buffing gently sloughs off dull dead epidermal cells while organic botanical nectar intensely hydrates. Concludes with a warm cleansing rinse and protective moisture balm.",
    benefits: ["Instantly silky-smooth luminous skin", "Stimulates cellular turnover", "Deep hydration and skin nourishment"],
    durations: [
      { minutes: 60, priceTHB: 1000 },
      { minutes: 90, priceTHB: 1300, popular: true },
      { minutes: 120, priceTHB: 1500 }
    ],
    image: "./images/hero.jpg",
    tag: "Skin Renewal"
  },
  {
    id: "zen-harmony-package",
    name: "Siam Zen Complete Harmony Package",
    category: "packages",
    shortDescription: "Our signature head-to-toe ritual: 60m Thai or Foot + 60m Warm Oil + Herbal Tea.",
    fullDescription: "The ultimate multi-therapy sanctuary retreat. Combines deep acupressure release with warm botanical oil relaxation. Concludes with complimentary organic herbal tea and seasonal refreshments.",
    benefits: ["Complete mental & physical reset", "Head-to-toe multi-modality wellness", "Complimentary herbal welcome & tea ceremony"],
    durations: [
      { minutes: 120, priceTHB: 1250, popular: true },
      { minutes: 150, priceTHB: 1550 }
    ],
    image: "./images/photoshoot/private-suite-bed.jpg",
    tag: "Top Rated Package"
  }
];
