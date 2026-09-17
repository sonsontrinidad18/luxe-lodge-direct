import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BookingSearch({ compact = false }: { compact?: boolean }) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(""); const [checkOut, setCheckOut] = useState(""); const [guests, setGuests] = useState("2");
  const submit = (event: React.FormEvent) => { event.preventDefault(); void navigate({ to: "/booking", search: { checkIn, checkOut, guests: Number(guests) } }); };
  return <form onSubmit={submit} className={`grid bg-background text-foreground ${compact ? "gap-4 p-5 md:grid-cols-[1fr_1fr_.7fr_auto]" : "gap-px border border-border p-2 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_.7fr_auto]"}`}>
    <label className="block px-3 py-2"><span className="eyebrow block">Check-in</span><input aria-label="Check-in" className="mt-1 w-full bg-transparent text-sm outline-none" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required /></label>
    <label className="block border-border px-3 py-2 sm:border-l"><span className="eyebrow block">Check-out</span><input aria-label="Check-out" className="mt-1 w-full bg-transparent text-sm outline-none" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required /></label>
    <label className="block border-border px-3 py-2 lg:border-l"><span className="eyebrow block">Guests</span><select aria-label="Guests" className="mt-1 w-full bg-transparent text-sm outline-none" value={guests} onChange={(e) => setGuests(e.target.value)}>{[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}</select></label>
    <Button type="submit" className="h-full min-h-14"><Search className="size-4" />Check availability</Button>
  </form>;
}