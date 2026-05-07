import { Link } from "@tanstack/react-router";
import logo from "@/assets/jenesis-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t" style={{ background: "var(--charcoal)", color: "var(--ivory)", borderColor: "transparent" }}>
      <div className="container-edge py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Jenesis CDC" width={48} height={48} className="h-12 w-12 object-contain bg-ivory rounded-md p-1" />
            <div>
              <div className="font-display text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>Jenesis CDC</div>
              <div className="text-[10px] tracking-[0.18em] uppercase text-ivory/70">Community Development Corporation</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-ivory/75 leading-relaxed max-w-md">
            Jenesis CDC builds strong, sustainable communities through education, economic empowerment, and health services across the Western Tidewater region of Virginia.
          </p>
          <form className="mt-6 flex max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter" className="sr-only">Email</label>
            <input
              id="newsletter"
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-ivory/30 rounded-l-md px-3 py-2.5 text-sm placeholder:text-ivory/50 focus:outline-none focus:border-ivory"
            />
            <button type="submit" className="rounded-r-md px-4 text-sm font-semibold" style={{ background: "var(--gold)", color: "oklch(0.2 0.02 60)" }}>
              Subscribe
            </button>
          </form>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/60 mb-4">Explore</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/programs" className="hover:text-gold">Programs</Link></li>
            <li><Link to="/coalition" className="hover:text-gold">Coalition</Link></li>
            <li><Link to="/community-projects" className="hover:text-gold">Community Projects</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/60 mb-4">Connect</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            <li><Link to="/festival" className="hover:text-gold">Soul Festival</Link></li>
            <li><Link to="/datagen-scholar" className="hover:text-gold">DataGen Scholar</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/60 mb-4">Contact</div>
          <ul className="space-y-2.5 text-sm text-ivory/85">
            <li><a href="mailto:jenesiscdc@gmail.com" className="hover:text-gold">jenesiscdc@gmail.com</a></li>
            <li>Western Tidewater Region, Virginia</li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["Facebook", "Instagram", "LinkedIn"].map((s) => (
              <a key={s} href="#" aria-label={s} className="h-9 w-9 rounded-full border border-ivory/30 flex items-center justify-center text-[11px] hover:border-gold hover:text-gold">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-edge py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/55">
          <div>© {new Date().getFullYear()} Jenesis Community Development Corporation. All rights reserved.</div>
          <div>Designed by a DataGen Scholar.</div>
        </div>
      </div>
    </footer>
  );
}
