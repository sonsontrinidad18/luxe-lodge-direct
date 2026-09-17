import { createFileRoute, Link } from "@tanstack/react-router";
import { differenceInCalendarDays } from "date-fns";
import { CalendarCheck, Check, MapPin, Minus, Plus, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { heroPhoto, property } from "@/lib/property";

type BookingSearch = { checkIn?: string; checkOut?: string; guests?: number };
export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => {
    const parsed: BookingSearch = {};
    if (typeof search["checkIn"] === "string") parsed.checkIn = search["checkIn"];
    if (typeof search["checkOut"] === "string") parsed.checkOut = search["checkOut"];
    const guests = Number(search["guests"]);
    if (Number.isFinite(guests) && guests > 0) parsed.guests = guests;
    return parsed;
  },
  head: () => ({ meta: [
    { title: `Book Your Cubao Stay | ${property.name}` },
    { name: "description", content: "Choose dates and send a direct booking request for the Cozy Minimalist Studio in Cubao, Quezon City." },
    { property: "og:title", content: `Book ${property.name}` },
    { property: "og:description", content: "Plan a comfortable city stay near Gateway Mall, MRT and LRT." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: BookingPage,
});

function BookingPage() {
  const search = Route.useSearch();
  const [checkIn, setCheckIn] = useState(search.checkIn ?? "");
  const [checkOut, setCheckOut] = useState(search.checkOut ?? "");
  const [guests, setGuests] = useState(search.guests ?? 2);
  const [confirmed, setConfirmed] = useState(false);
  const nights = useMemo(() => !checkIn || !checkOut ? 0 : Math.max(0, differenceInCalendarDays(new Date(`${checkOut}T12:00:00`), new Date(`${checkIn}T12:00:00`))), [checkIn, checkOut]);
  const available = nights > 0;

  if (confirmed) return <><SiteHeader /><main className="grid min-h-[70vh] place-items-center px-4 py-20"><div className="max-w-lg text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-primary text-primary-foreground"><Check /></span><p className="eyebrow mt-8">Request received</p><h1 className="mt-3 font-display text-5xl">Thanks for your interest.</h1><p className="mt-5 leading-7 text-muted-foreground">This is a sample confirmation. No reservation was saved and no payment was taken. Live availability and booking will be connected later.</p><div className="mt-8 flex justify-center gap-3"><Button onClick={() => setConfirmed(false)}>Back to form</Button><Button asChild variant="secondary"><Link to="/">Home</Link></Button></div></div></main><SiteFooter /></>;

  return <><SiteHeader /><main><section className="border-b border-border bg-secondary/55 py-12"><div className="site-container"><p className="eyebrow">Direct booking</p><h1 className="mt-3 font-display text-5xl">Plan your Cubao stay.</h1><p className="mt-4 max-w-xl text-muted-foreground">Tell us your preferred dates and guest count. This preview demonstrates the future booking experience.</p></div></section><section className="section-pad"><form onSubmit={(event) => { event.preventDefault(); setConfirmed(true); }} className="site-container grid gap-10 lg:grid-cols-[1fr_22rem]"><div><h2 className="font-display text-3xl">Dates and guests</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><label><span className="mb-2 block text-sm font-semibold">Check-in</span><input className="field" type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} required /></label><label><span className="mb-2 block text-sm font-semibold">Check-out</span><input className="field" type="date" min={checkIn} value={checkOut} onChange={(event) => setCheckOut(event.target.value)} required /></label></div><div className="mt-5 flex items-center justify-between border border-border p-4"><div><p className="text-sm font-semibold">Guests</p><p className="text-xs text-muted-foreground">Maximum {property.capacity} guests</p></div><div className="flex items-center gap-4"><Button type="button" variant="secondary" size="icon" aria-label="Remove guest" onClick={() => setGuests(Math.max(1, guests - 1))}><Minus className="size-4" /></Button><span className="w-5 text-center font-semibold">{guests}</span><Button type="button" variant="secondary" size="icon" aria-label="Add guest" onClick={() => setGuests(Math.min(property.capacity, guests + 1))}><Plus className="size-4" /></Button></div></div>{checkIn && checkOut && <div className={`mt-5 flex items-center gap-3 border p-4 ${available ? "border-primary bg-secondary" : "border-destructive"}`}><CalendarCheck className="size-5" /><p className="text-sm font-semibold">{available ? `${nights} ${nights === 1 ? "night" : "nights"} selected — availability will be confirmed by the host` : "Choose a checkout date after check-in"}</p></div>}
        <div className="mt-12 border-t border-border pt-10"><h2 className="font-display text-3xl">Guest information</h2><div className="mt-6 grid gap-4 sm:grid-cols-2"><label><span className="mb-2 block text-sm font-semibold">First name</span><input className="field" required /></label><label><span className="mb-2 block text-sm font-semibold">Last name</span><input className="field" required /></label><label><span className="mb-2 block text-sm font-semibold">Email</span><input className="field" type="email" required /></label><label><span className="mb-2 block text-sm font-semibold">Phone</span><input className="field" type="tel" required /></label><label className="sm:col-span-2"><span className="mb-2 block text-sm font-semibold">Message <span className="font-normal text-muted-foreground">(optional)</span></span><textarea className="field min-h-28" placeholder="Arrival time or questions for the host" /></label></div></div></div>
        <aside><div className="sticky top-24 border border-border bg-background p-5 shadow-soft"><img src={heroPhoto.src} alt={heroPhoto.alt} width={heroPhoto.width} height={heroPhoto.height} className="aspect-[4/3] w-full object-cover" /><p className="mt-4 font-display text-2xl">{property.name}</p><p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="size-3.5" />{property.shortLocation}</p><div className="my-5 border-t border-border" /><div className="space-y-2 text-sm text-muted-foreground"><p>{property.type}</p><p>{property.capacity} guests · {property.bedrooms} bedroom · {property.beds} beds</p><p>{property.rating} ★ · {property.reviewCount} reviews</p></div><Button type="submit" className="mt-6 w-full" size="lg" disabled={!available}>Send booking request</Button><p className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0" />No payment is taken in this preview</p></div></aside>
      </form></section></main><SiteFooter /></>;
}