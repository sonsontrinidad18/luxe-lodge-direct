import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { property } from "@/lib/property";
import { Button } from "@/components/ui/button";

const links = [{ to: "/", label: "The property" }, { to: "/booking", label: "Book" }, { to: "/guide", label: "Guest guide" } ] as const;

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <header className={overlay ? "absolute inset-x-0 top-0 z-40 text-hero-foreground" : "border-b border-border bg-background text-foreground"}>
    <div className="site-container flex h-20 items-center justify-between">
      <Link to="/" className="font-display text-xl font-semibold tracking-normal" aria-label={`${property.name} home`}>{property.name}</Link>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
        {links.map((item) => <Link key={item.to} to={item.to} className={`text-sm transition-opacity hover:opacity-65 ${pathname === item.to ? "font-semibold" : ""}`}>{item.label}</Link>)}
        <Button asChild variant={overlay ? "hero" : "default"}><Link to="/booking">Book your stay</Link></Button>
      </nav>
      <Button variant={overlay ? "heroOutline" : "ghost"} size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="absolute inset-x-3 top-20 z-50 border border-border bg-background p-4 text-foreground shadow-elevated md:hidden" aria-label="Mobile navigation">
      {links.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border px-2 py-4 text-base">{item.label}</Link>)}
      <Button asChild className="mt-4 w-full"><Link to="/booking" onClick={() => setOpen(false)}>Book your stay</Link></Button>
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-footer text-footer-foreground">
    <div className="site-container grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
      <div><p className="font-display text-3xl">{property.name}</p><p className="mt-3 max-w-sm text-sm leading-6 text-footer-muted">A private island retreat for slow mornings, long swims, and time well spent.</p></div>
      <div><p className="footer-label">Find us</p><p className="mt-4 flex gap-2 text-sm text-footer-muted"><MapPin className="size-4 shrink-0" />{property.location}</p><p className="mt-3 flex gap-2 text-sm text-footer-muted"><Mail className="size-4 shrink-0" />{property.email}</p><p className="mt-3 flex gap-2 text-sm text-footer-muted"><Instagram className="size-4 shrink-0" />{property.instagram}</p></div>
      <div><p className="footer-label">Information</p><div className="mt-4 grid gap-3 text-sm text-footer-muted"><Link to="/guide">House rules</Link><a href="#privacy">Privacy policy</a><a href="#terms">Terms</a><Link to="/admin">Owner dashboard</Link></div></div>
    </div>
    <div className="border-t border-footer-border"><div className="site-container flex flex-col gap-2 py-5 text-xs text-footer-muted sm:flex-row sm:justify-between"><span>© 2026 {property.name}</span><span>Sample property details — replace before publishing</span></div></div>
  </footer>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p></div>;
}