import heroImage from "@/assets/villa-hero.jpg";
import livingImage from "@/assets/villa-living.jpg";
import bedroomImage from "@/assets/villa-bedroom.jpg";
import poolImage from "@/assets/villa-pool.jpg";

export const property = {
  name: "The Canopy House",
  location: "Siargao Island, Philippines",
  tagline: "A private island retreat, designed for unhurried days.",
  shortLocation: "General Luna, Siargao",
  description:
    "A private tropical home where contemporary architecture meets the easy rhythm of island life. Gather around the open living spaces, drift between the pool and garden, and settle into quiet evenings under the palms.",
  capacity: 8,
  bedrooms: 4,
  beds: 5,
  bathrooms: 4.5,
  type: "Entire villa",
  nightlyRate: 420,
  cleaningFee: 85,
  serviceRate: 0.08,
  rating: 4.96,
  reviewCount: 128,
  currency: "USD",
  email: "stay@canopyhouse.example",
  phone: "+63 900 000 0000",
  instagram: "@thecanopyhouse",
};

export const images = [
  { src: heroImage, alt: "The Canopy House and infinity pool at blue hour", width: 1920, height: 1200 },
  { src: livingImage, alt: "Open living room overlooking the pool", width: 1408, height: 1056 },
  { src: bedroomImage, alt: "Primary bedroom with tropical garden views", width: 1008, height: 1312 },
  { src: poolImage, alt: "Infinity pool overlooking the sea at sunset", width: 1408, height: 1008 },
];

export const amenities = ["High-speed Wi-Fi", "Air conditioning", "Chef's kitchen", "Smart TV", "Infinity pool", "Private parking", "24/7 security"];

export const highlights = [
  ["Guests", `Up to ${property.capacity}`], ["Bedrooms", String(property.bedrooms)],
  ["Beds", String(property.beds)], ["Bathrooms", String(property.bathrooms)], ["Property", property.type],
];

export const reviews = [
  { name: "Amelia R.", stay: "Stayed 5 nights · August 2026", quote: "The kind of place that makes you slow down. Every room is considered, and the hosts made everything feel effortless." },
  { name: "Marcus T.", stay: "Stayed 4 nights · July 2026", quote: "Even better than the photographs. Quiet, beautifully kept, and close enough to everything we wanted to explore." },
  { name: "Sofia L.", stay: "Stayed 7 nights · June 2026", quote: "Our family loved the open living spaces and pool. The local recommendations were thoughtful and genuinely excellent." },
];

export const rules = [
  ["Check-in", "From 3:00 PM"], ["Checkout", "By 11:00 AM"],
  ["Quiet hours", "10:00 PM – 7:00 AM"], ["Gatherings", "Registered guests only"],
];

export const nearby = [
  { category: "Explore", name: "Cloud 9 Boardwalk", time: "12 min" },
  { category: "Dine", name: "Island Table", time: "6 min" },
  { category: "Shop", name: "General Luna Market", time: "8 min" },
  { category: "Transit", name: "Sayak Airport", time: "35 min" },
];

export const guideSections = [
  { id: "welcome", title: "Welcome", eyebrow: "Start here", text: "Welcome to The Canopy House. This guide has everything you need for a relaxed stay. Our local host is available throughout your visit." },
  { id: "check-in", title: "Check-in", eyebrow: "Arrival", text: "Check-in begins at 3:00 PM. Your unique gate and door access codes will be shared on the morning of arrival." },
  { id: "wifi", title: "Wi-Fi", eyebrow: "Stay connected", text: "The network name and password are displayed on the welcome card in the living room. High-speed coverage reaches every bedroom." },
  { id: "parking", title: "Parking", eyebrow: "Getting here", text: "Two secure parking spaces are available inside the front gate. Please keep the driveway clear for service access." },
  { id: "amenities", title: "Building amenities", eyebrow: "At the house", text: "The infinity pool, outdoor shower, kitchen, laundry, and garden lounge are reserved exclusively for your group." },
  { id: "rules", title: "House rules", eyebrow: "A thoughtful stay", text: "Please observe quiet hours from 10:00 PM, keep glass away from the pool, and welcome only registered guests." },
  { id: "nearby", title: "Things to do nearby", eyebrow: "Local notes", text: "Surf at Cloud 9, arrange a private island-hopping day, visit the morning market, or ask our host to reserve a table nearby." },
  { id: "checkout", title: "Checkout", eyebrow: "Before you leave", text: "Checkout is by 11:00 AM. Place used towels in the bathrooms, switch off the air conditioning, and send our host a message." },
  { id: "keys", title: "Key return", eyebrow: "Final step", text: "Return the backup key to the lockbox beside the main entrance and scramble the dial after closing it." },
  { id: "emergency", title: "Emergency contacts", eyebrow: "Help", text: "For urgent assistance, contact the local host using the number in your confirmation. For emergencies in the Philippines, call 911." },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: property.currency, maximumFractionDigits: 0 }).format(value);
}