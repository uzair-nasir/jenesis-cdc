import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/jenesis-logo.png";

type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; hash?: string; search?: Record<string, string> }[];
};

const nav: NavItem[] = [
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Who We Are", to: "/about" },
      { label: "Mission & Vision", to: "/about", hash: "mission" },
      { label: "Who We Serve", to: "/about", hash: "served" },
      { label: "DataGen Scholar", to: "/datagen-scholar" },
    ],
  },
  {
    label: "Programs",
    to: "/programs",
    children: [
      { label: "CEED Promise", to: "/programs", hash: "ceed-promise" },
      { label: "CEED Corps", to: "/programs", hash: "ceed-corps" },
      { label: "Community Garden", to: "/programs", hash: "community-garden" },
      { label: "Points of Impact", to: "/", hash: "impact" },
    ],
  },
  {
    label: "Coalition",
    to: "/coalition",
    children: [
      { label: "Be Part of the Coalition", to: "/coalition" },
      { label: "Become a Partner", to: "/contact", search: { interest: "Coalition Partner" } },
      { label: "Volunteer", to: "/contact", search: { interest: "Volunteer" } },
      { label: "Strategic Partners", to: "/coalition", hash: "categories" },
    ],
  },
  {
    label: "Events",
    to: "/events",
    children: [
      { label: "Upcoming Events", to: "/events" },
      { label: "Community Garden Days", to: "/events" },
      { label: "Youth Workshops", to: "/events" },
      { label: "Riverfront Soul Festival 2026", to: "/festival" },
    ],
  },
  {
    label: "Riverfront Soul Festival",
    to: "/festival",
    children: [
      { label: "Festival Overview", to: "/festival" },
      { label: "Experience Areas", to: "/festival", hash: "experiences" },
      { label: "Sponsorship Opportunities", to: "/festival", hash: "sponsor" },
      { label: "Contact Festival Team", to: "/contact", search: { interest: "Festival Question" } },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const closeTimer = useRef<number | null>(null);

  useEffect(() => { setOpen(false); setOpenMenu(null); }, [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const enter = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const leave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full transition-shadow"
      style={{
        background: "var(--ivory)",
        borderBottom: `1px solid var(--border)`,
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px -20px rgba(0,0,0,0.18)" : "none",
      }}
    >
      <div className="container-edge flex items-center justify-between gap-6 py-3.5">
        <Link to="/" className="flex items-center gap-3.5 shrink-0">
          <img src={logo} alt="Jenesis CDC" width={52} height={52} className="h-12 w-12 md:h-14 md:w-14 object-contain" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base md:text-[17px] font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Jenesis CDC
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              Community Development Corporation
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            const active = path === item.to || (item.to !== "/" && path.startsWith(item.to));
            return (
              <div key={item.label} className="relative" onMouseEnter={() => item.children && enter(item.label)} onMouseLeave={leave}>
                <Link
                  to={item.to}
                  className="px-3 py-2 inline-flex items-center text-[13px] font-medium tracking-wide transition-colors"
                  style={{ color: active ? "var(--burgundy)" : "var(--foreground)" }}
                >
                  {item.label}
                </Link>
                {item.children && openMenu === item.label && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2"
                    onMouseEnter={() => enter(item.label)}
                    onMouseLeave={leave}
                  >
                    <div
                      className="min-w-[240px] rounded-md border bg-card shadow-[0_18px_40px_-22px_oklch(0.2_0.05_17/0.35)] p-2"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          hash={c.hash}
                          search={c.search as never}
                          className="block px-3 py-2 text-[13px] rounded-sm text-foreground/85 hover:bg-sand hover:text-primary transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link to="/coalition" className="btn-primary !py-2.5 !px-4 text-[13px]">
            Join the Coalition
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t" style={{ borderColor: "var(--border)", background: "var(--ivory)" }}>
          <div className="container-edge py-4 flex flex-col">
            {nav.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  to={item.to}
                  className="block py-2 text-sm font-semibold text-foreground"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-3 border-l mt-1 mb-2 space-y-1" style={{ borderColor: "var(--border)" }}>
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        to={c.to}
                        hash={c.hash}
                        search={c.search as never}
                        className="block py-1.5 text-sm text-foreground/75"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link to="/coalition" className="btn-primary w-full">Join the Coalition</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
