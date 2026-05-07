import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/jenesis-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/coalition", label: "Coalition" },
  { to: "/community-projects", label: "Community Projects" },
  { to: "/events", label: "Events" },
  { to: "/festival", label: "Riverfront Soul Festival" },
  { to: "/datagen-scholar", label: "DataGen Scholar" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "bg-background/95 backdrop-blur" : "bg-background"
      }`}
      style={{ borderColor: "var(--border)" }}
    >
      <div className="container-edge flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Jenesis CDC" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              Jenesis CDC
            </span>
            <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
              Community Development
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[13px] font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/festival" className="text-[13px] font-medium text-charcoal hover:text-primary">
            Sponsor the Festival
          </Link>
          <Link to="/coalition" className="btn-primary !py-2.5 !px-4 text-[13px]">
            Join the Coalition
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="xl:hidden p-2 -mr-2"
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
        <div className="xl:hidden border-t" style={{ borderColor: "var(--border)" }}>
          <div className="container-edge py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2.5 text-sm font-medium text-foreground/85"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link to="/coalition" className="btn-primary">Join the Coalition</Link>
              <Link to="/festival" className="btn-outline">Sponsor the Festival</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
