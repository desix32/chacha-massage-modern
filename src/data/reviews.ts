export interface Review {
  id: string;
  name: string;
  country: string;
  rating: number;
  date: string;
  treatment: string;
  branch: string;
  comment: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Elena Rostova",
    country: "Zurich, Switzerland",
    rating: 5,
    date: "August 2026",
    treatment: "Siam Zen Complete Harmony",
    branch: "@ Soi 15",
    comment: "The best massage experience in Bangkok! Clean, peaceful, and respectful. The therapist identified exactly where my lower back was stiff from my long flight and relieved all pressure. Booking via WhatsApp was effortless."
  },
  {
    id: "rev-2",
    name: "Marcus Becker",
    country: "Frankfurt, Germany",
    rating: 5,
    date: "July 2026",
    treatment: "Traditional Royal Thai Massage",
    branch: "@ Soi 11",
    comment: "Authentic, strong, and highly skilled technique. Not a tourist trap. The pressure was firm as requested and the stretching relieved weeks of computer posture strain. Highly recommend booking in advance!"
  },
  {
    id: "rev-3",
    name: "Sophie & Liam",
    country: "London, UK",
    rating: 5,
    date: "August 2026",
    treatment: "Deep Tissue Aroma Oil",
    branch: "@ Ambassador",
    comment: "We did a couples deep tissue session after walking around Sukhumvit all day. The treatment rooms were serene, fragrant, and pristine. The herbal tea at the end was delicious. We came back twice during our stay."
  },
  {
    id: "rev-4",
    name: "Kenji Takahashi",
    country: "Tokyo, Japan",
    rating: 5,
    date: "September 2026",
    treatment: "Foot Reflexology & Herbal Compress",
    branch: "@ Soi 13",
    comment: "Professional therapists with over 20 years of real mastery. Excellent hygiene and peaceful ambiance away from street noise. Fair, transparent pricing."
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Do I need to book in advance or can I walk in?",
    answer: "Walk-ins are always welcomed subject to availability, but during peak evening hours (5:00 PM – 10:00 PM) we strongly recommend booking 1-2 hours ahead via WhatsApp or our online booking button to guarantee your preferred therapist and private room."
  },
  {
    question: "How do I choose the right massage intensity?",
    answer: "Before your session, you can select your preferred pressure level: Soft, Medium, or Strong. Traditional Thai Massage uses acupressure and stretching without oil. If you prefer smooth gliding strokes and muscle knot relief, Deep Tissue Aroma Oil is ideal."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Cash (Thai Baht), Thai QR Code (PromptPay), and all major Credit/Debit Cards (Visa, Mastercard, JCB, UnionPay). Prices are all-inclusive with zero hidden service fees."
  },
  {
    question: "Can I book a couples session or group?",
    answer: "Yes! All 4 of our branches feature spacious double and triple private treatment rooms so couples and friends can enjoy their treatments in the same serene suite."
  },
  {
    question: "Where are your branches located near public transit?",
    answer: "All four branches are conveniently located within 3 to 6 minutes walking distance from BTS Nana and BTS Asok / MRT Sukhumvit stations in central Bangkok."
  }
];
