import photo1 from "@/assets/listing/photo-1.asset.json";
import photo2 from "@/assets/listing/photo-2.asset.json";
import photo3 from "@/assets/listing/photo-3.asset.json";
import photo4 from "@/assets/listing/photo-4.asset.json";
import photo5 from "@/assets/listing/photo-5.asset.json";
import photo6 from "@/assets/listing/photo-6.asset.json";
import photo7 from "@/assets/listing/photo-7.asset.json";
import photo8 from "@/assets/listing/photo-8.asset.json";

export const property = {
  name: "Cozy Minimalist Studio",
  fullName: "Cozy Minimalist Studio | Walk to Gateway & MRT",
  location: "Cubao, Quezon City",
  building: "Aurora Escalades Tower",
  tagline: "Your cozy stay in the heart of Cubao",
  shortLocation: "Cubao, Quezon City",
  description:
    "Designed for comfort and convenience, this cozy studio pairs a clean minimalist interior with the practical essentials for an easy city stay.",
  capacity: 4,
  bedrooms: 1,
  beds: 2,
  bathrooms: 1,
  type: "Entire rental unit",
  rating: 4.96,
  reviewCount: 25,
  email: "host@example.com",
};

export const images = [
  { src: photo1.url, alt: "Cozy studio living and sleeping area with olive cabinetry and warm yellow curtains", width: 1200, height: 2133 },
  { src: photo2.url, alt: "Shared swimming pool at Aurora Escalades Tower", width: 1200, height: 2133 },
  { src: photo3.url, alt: "Compact dining table set for two guests", width: 1200, height: 1600 },
  { src: photo4.url, alt: "Decorative wall clock in the studio", width: 1200, height: 1600 },
  { src: photo5.url, alt: "Cozy dining nook with warm ambient lighting", width: 1200, height: 2133 },
  { src: photo6.url, alt: "Studio kitchenette with refrigerator, sink, and storage", width: 1200, height: 2133 },
  { src: photo7.url, alt: "Kitchen storage stocked with dishes and cups", width: 1200, height: 1600 },
  { src: photo8.url, alt: "View through the studio from the sofa bed toward the kitchenette", width: 1200, height: 2133 },
];

export const heroPhoto = images[0];
export const poolPhoto = images[1];
export const diningPhoto = images[4];
export const kitchenettePhoto = images[5];

export const amenities = [
  "Wi-Fi", "Air conditioning", "Kitchenette", "TV", "Dedicated workspace", "Private bathroom", "Swimming pool", "Elevator access",
];

export const highlights = [
  ["Guests", "4"], ["Bedroom", "1"], ["Beds", "2"], ["Bathroom", "1"], ["Location", "Cubao, QC"],
];

export const nearby = [
  { category: "Shop", name: "Gateway Mall" },
  { category: "Shop", name: "SM Araneta City" },
  { category: "Shop", name: "Ali Mall" },
  { category: "Transit", name: "MRT & LRT stations" },
  { category: "Nearby", name: "Cafés & restaurants" },
];

export const guideSections = [
  { id: "welcome", title: "Welcome", eyebrow: "Start here", text: "A simple overview of your stay and how to reach your host when you need help." },
  { id: "check-in", title: "Check-in instructions", eyebrow: "Arrival", text: "Your confirmed arrival and access details will be shared privately before check-in for a smooth start to your stay." },
  { id: "wifi", title: "Wi-Fi", eyebrow: "Stay connected", text: "The current network name and password will be included in the private guide sent to confirmed guests." },
  { id: "parking", title: "Parking", eyebrow: "Getting here", text: "Please ask the host about current parking options before arrival. Availability is not advertised publicly." },
  { id: "amenities", title: "Building amenities", eyebrow: "At the building", text: "The property includes access to the building swimming pool and elevator. Current access schedules will be confirmed for your stay." },
  { id: "rules", title: "House rules", eyebrow: "A considerate stay", text: "Full building and studio rules are provided to confirmed guests. Please respect shared spaces and keep noise considerate." },
  { id: "nearby", title: "Nearby places", eyebrow: "Around Cubao", text: "Gateway Mall, SM Araneta City, Ali Mall, MRT and LRT connections, cafés, and restaurants are all nearby." },
  { id: "checkout", title: "Checkout instructions", eyebrow: "Before you leave", text: "Your confirmed checkout time and simple departure checklist will be included in your private guest guide." },
  { id: "keys", title: "Key return", eyebrow: "Final step", text: "Key-return instructions are shared privately with confirmed guests to keep building access secure." },
  { id: "emergency", title: "Emergency contacts", eyebrow: "Help", text: "Host and building assistance details will appear in the private guide provided after booking." },
];