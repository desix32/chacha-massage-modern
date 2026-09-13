export interface BranchSpecialOffer {
  badge: string;
  highlight: string;
  promoText: string;
}

export interface Branch {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  district: string;
  bts: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappUrl: string;
  hours: string;
  googleMapsUrl: string;
  image: string;
  interiorImages: string[];
  specialOffer?: BranchSpecialOffer;
}

export const BRANCHES: Branch[] = [
  {
    id: "soi13",
    name: "Chacha Massage @ Sukhumvit Soi 13",
    shortName: "@ Soi 13",
    tagline: "Quiet Peaceful Retreat",
    address: "Sukhumvit Soi 13, Khlong Toei Nuea, Watthana, Bangkok 10110",
    district: "Sukhumvit 13 / Nana-Asok",
    bts: "BTS Nana / Asok (6 min walk)",
    phone: "+66 80 453 0982",
    phoneRaw: "+66804530982",
    whatsapp: "+66804530982",
    whatsappUrl: "https://wa.me/66804530982?text=Hello%20Chacha%20Massage%20Soi%2013,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session.",
    hours: "9:00 AM – 1:00 AM Daily",
    googleMapsUrl: "https://maps.google.com/?q=Sukhumvit+Soi+13+Bangkok",
    image: "./images/soi13-interior.jpg",
    interiorImages: ["./images/soi13-interior.jpg", "./images/gallery-3.jpg", "./images/gallery-4.jpg"],
    specialOffer: {
      badge: "Official Signboard Rates",
      highlight: "Foot 350 THB • Thai 400 THB",
      promoText: "Direct street pricing from illuminated signboard. Open early & late."
    }
  },
  {
    id: "soi11",
    name: "Chacha Massage @ Sukhumvit Soi 11",
    shortName: "@ Soi 11",
    tagline: "Vibrant Urban Sanctuary",
    address: "Sukhumvit Soi 11, Khlong Toei Nuea, Watthana, Bangkok 10110",
    district: "Nana / Sukhumvit 11",
    bts: "BTS Nana (4 min walk)",
    phone: "+66 80 453 0982",
    phoneRaw: "+66804530982",
    whatsapp: "+66804530982",
    whatsappUrl: "https://wa.me/66804530982?text=Hello%20Chacha%20Massage%20Soi%2011,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session.",
    hours: "10:00 AM – Midnight Daily",
    googleMapsUrl: "https://maps.google.com/?q=Sukhumvit+Soi+11+Bangkok",
    image: "./images/soi11-front.jpg",
    interiorImages: ["./images/soi11-room.jpg", "./images/soi11-interior.jpg", "./images/photoshoot/team-full-reception.jpg"],
    specialOffer: {
      badge: "Night Life Haven",
      highlight: "Aroma Therapy & Late Night Care",
      promoText: "Perfect post-dinner relaxation in the heart of Soi 11."
    }
  },
  {
    id: "ambassador",
    name: "Chacha Massage @ Ambassador Hotel",
    shortName: "@ Ambassador",
    tagline: "Hotel Luxury & Wellness",
    address: "Ambassador Hotel Bangkok, 171 Sukhumvit 11, Bangkok 10110",
    district: "Sukhumvit 11 / Nana",
    bts: "BTS Nana (3 min walk)",
    phone: "+66 80 453 0982",
    phoneRaw: "+66804530982",
    whatsapp: "+66804530982",
    whatsappUrl: "https://wa.me/66804530982?text=Hello%20Chacha%20Massage%20Ambassador,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session.",
    hours: "10:00 AM – 11:00 PM Daily",
    googleMapsUrl: "https://maps.google.com/?q=Ambassador+Hotel+Bangkok",
    image: "./images/ambassador-front.jpg",
    interiorImages: ["./images/ambassador-interior-1.jpg", "./images/ambassador-interior-2.jpg"],
    specialOffer: {
      badge: "Executive Spa Suites",
      highlight: "Hot Oil Herbal Compress Synergy",
      promoText: "Quiet hotel enclave with spacious couple private suites."
    }
  },
  {
    id: "soi15",
    name: "Chacha Massage @ Sukhumvit Soi 15",
    shortName: "@ Soi 15",
    tagline: "Flagship Tranquil Oasis",
    address: "Sukhumvit Soi 15, Khlong Toei Nuea, Watthana, Bangkok 10110",
    district: "Sukhumvit / Asok",
    bts: "BTS Asok & MRT Sukhumvit (5 min walk)",
    phone: "+66 80 453 0982",
    phoneRaw: "+66804530982",
    whatsapp: "+66804530982",
    whatsappUrl: "https://wa.me/66804530982?text=Hello%20Chacha%20Massage%20Soi%2015,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20session.",
    hours: "10:00 AM – 11:30 PM Daily",
    googleMapsUrl: "https://maps.google.com/?q=Sukhumvit+Soi+15+Bangkok",
    image: "./images/soi15-gallery.jpg",
    interiorImages: ["./images/soi15-gallery.jpg", "./images/gallery-1.jpg", "./images/gallery-2.jpg"],
    specialOffer: {
      badge: "Tranquil Oasis",
      highlight: "Deep Tissue & Herbal Steam",
      promoText: "Tucked off Sukhumvit near Terminal 21 with lush quiet ambience."
    }
  }
];
