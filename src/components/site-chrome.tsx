import { Link, useRouterState } from "@tanstack/react-router";
import { Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { property } from "@/lib/property";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/#space", label: "The Space" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/#location", label: "Location" },
  { href: "/guide", label: "Guest Guide" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-sm">
    <div className="site-container flex h-16 items-center justify-between">
      <Link to="/" className="font-display text-xl font-semibold" aria-label={`${property.name} home`}>{property.name}</Link>
      <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
        {links.map((item) => <a key={item.href} href={item.href} className={`text-sm transition-colors hover:text-primary ${pathname === item.href ? "font-semibold text-primary" : "text-muted-foreground"}`}>{item.label}</a>)}
        <Button asChild className="min-h-9 px-4"><Link to="/booking">Book now</Link></Button>
      </nav>
      <div className="flex items-center gap-2 lg:hidden">
        <Button asChild className="min-h-9 px-4"><Link to="/booking">Book now</Link></Button>
        <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
    </div>
    {open && <nav className="absolute inset-x-0 top-16 border-b border-border bg-background px-4 py-3 shadow-soft lg:hidden" aria-label="Mobile navigation">
      {links.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-border/60 px-2 py-3 text-sm last:border-0">{item.label}</a>)}
    </nav>}
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-footer-border bg-footer text-footer-foreground">
    <div className="site-container grid gap-9 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
      <div><p className="font-display text-2xl">{property.name}</p><p className="mt-3 max-w-sm text-sm leading-6 text-footer-muted">A comfortable, thoughtfully designed condo in the heart of Cubao.</p></div>
      <div><p className="footer-label">Location</p><p className="mt-4 flex gap-2 text-sm text-footer-muted"><MapPin className="size-4 shrink-0" />{property.location}</p><p className="mt-3 flex gap-2 text-sm text-footer-muted"><Mail className="size-4 shrink-0" />Contact the host</p></div>
      <div><p className="footer-label">Stay</p><div className="mt-4 grid gap-3 text-sm text-footer-muted"><Link to="/booking">Book your stay</Link><Link to="/guide">Guest guide & house rules</Link><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div></div>
    </div>
    <div className="border-t border-footer-border"><div className="site-container flex flex-col gap-2 py-5 text-xs text-footer-muted sm:flex-row sm:justify-between"><span>© 2026 {property.name}</span><span>General location shown for guest privacy</span></div></div>
  </footer>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{title}</h1><p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p></div>;
}