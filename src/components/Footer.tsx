import { Link } from "@tanstack/react-router";
import logo from "@/assets/jenesis-logo.png";

export function Footer() {
  return (
    <footer className="mt-24" style={{ background: "var(--charcoal)", color: "var(--ivory)" }}>
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
            Building strong, sustainable communities through education, economic
            empowerment, and health services across the Western Tidewater region of Virginia.
          </p>
          <div className="mt-6 text-sm text-ivory/85">
            <a href="mailto:jenesiscdc@gmail.com" className="hover:text-gold">jenesiscdc@gmail.com</a>
            <div className="mt-1 text-ivory/65">Western Tidewater Region, Virginia</div>
          </div>
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
          <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/60 mb-4">Get Involved</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/contact" search={{ interest: "Coalition Partner" } as never} className="hover:text-gold">Become a Partner</Link></li>
            <li><Link to="/contact" search={{ interest: "Volunteer" } as never} className="hover:text-gold">Volunteer</Link></li>
            <li><Link to="/contact" search={{ interest: "Sponsor" } as never} className="hover:text-gold">Sponsor</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] uppercase tracking-[0.18em] text-ivory/60 mb-4">Programs & Initiatives</div>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/programs" hash="ceed-promise" className="hover:text-gold">CEED Promise</Link></li>
            <li><Link to="/programs" hash="ceed-corps" className="hover:text-gold">CEED Corps</Link></li>
            <li><Link to="/programs" hash="community-garden" className="hover:text-gold">Community Garden</Link></li>
            <li><Link to="/festival" className="hover:text-gold">Riverfront Soul Festival</Link></li>
            <li><Link to="/datagen-scholar" className="hover:text-gold">DataGen Scholar</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-edge py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ivory/55">
          <div>© {new Date().getFullYear()} Jenesis Community Development Corporation. All rights reserved.</div>
          <div>Designed by Uzair Nasir.</div>
        </div>
      </div>
    </footer>
  );
}
