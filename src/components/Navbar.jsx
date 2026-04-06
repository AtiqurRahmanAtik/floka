import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
    megaMenu: [
      {
        img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=260&q=80",
        label: "Home 1",
        previewHref: "#",
        onepageHref: "#",
      },
      {
        img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=260&q=80",
        label: "Home 2",
        previewHref: "#",
        onepageHref: "#",
      },
      {
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=260&q=80",
        label: "Home 3",
        previewHref: "#",
        onepageHref: "#",
      },
    ],
  },
  { label: "Pages", href: "#pages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
];

// ─── Components ─────────────────────────────────────────────────────────────

function DotGridIcon({ size = 18, color = "currentColor" }) {
  const dots = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={c * 6 + 3} cy={r * 6 + 3} r={1.5} fill={color} />
      );
    }
  }
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {dots}
    </svg>
  );
}

function FlokaLogo() {
  return (
    <a href="#" className="flex items-center gap-2 group select-none">
      <span className="inline-flex items-center justify-center w-[28px] h-[28px] bg-[#1a1a1a] rounded-[5px] group-hover:bg-black transition-colors">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M3 2h9v2.5H5.8v2.3h5.5v2.4H5.8V13H3V2Z" fill="white" />
        </svg>
      </span>
      <span className="text-[#1a1a1a] font-bold tracking-tight text-[18px] font-['DM_Sans']">
        Floka
      </span>
    </a>
  );
}

// ─── Desktop Mega Menu ─────────────────────────────────────────────────────────
function MegaMenu({ items, visible }) {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : -10,
      display: visible ? "block" : "none",
      duration: 0.3,
      ease: "power2.out"
    });
  }, [visible]);

  return (
    <div ref={ref} className="absolute top-full left-1/2 -translate-x-1/2 mt-[2px] bg-white border border-[#e8e8e4] rounded-2xl shadow-2xl p-6 z-50 min-w-[600px] hidden">
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.label} className="group/card">
            <div className="rounded-xl overflow-hidden mb-3 aspect-[4/3] bg-[#f0efea]">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
            </div>
            <p className="text-[#1a1a1a] font-semibold text-[14px] mb-2">{item.label}</p>
            <div className="flex gap-2">
              <a href={item.previewHref} className="text-[11px] text-[#888] border border-[#e8e8e4] rounded-full px-3 py-1 hover:text-black hover:border-black transition-all">Preview</a>
              <a href={item.onepageHref} className="text-[11px] text-[#888] border border-[#e8e8e4] rounded-full px-3 py-1 hover:text-black hover:border-black transition-all">Onepage</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NavItem (Desktop) ─────────────────────────────────────────────────────────
function NavItem({ link }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative h-full flex items-center" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <a href={link.href} className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#3a3a3a] hover:text-black transition-colors font-['DM_Sans'] py-4">
        {link.label}
        {link.megaMenu && (
          <svg width="10" height="10" viewBox="0 0 11 11" className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            <path d="M1.5 3.5L5.5 7.5L9.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </a>
      <span className={`absolute bottom-0 left-0 h-[2.5px] bg-black transition-all duration-300 ease-out ${open ? "w-full" : "w-0"}`} />
      {link.megaMenu && <MegaMenu items={link.megaMenu} visible={open} />}
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation for Mobile Menu
  useEffect(() => {
    if (mobileMenuOpen) {
      gsap.to(overlayRef.current, { opacity: 1, display: "block", duration: 0.3 });
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power4.out" });
    } else {
      gsap.to(overlayRef.current, { opacity: 0, display: "none", duration: 0.3 });
      gsap.to(menuRef.current, { x: "100%", duration: 0.5, ease: "power4.in" });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[75px] flex items-center ${
        scrolled ? "bg-white shadow-md" : "bg-[#f5f5f0] border-b border-[#e8e8e4]"
      }`}>
        <div className="w-full px-6 lg:px-16 flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <FlokaLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 h-full">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </nav>

          {/* Desktop Utilities */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="mailto:info@floka.com" className="text-[14px] font-bold text-[#3a3a3a] hover:text-black font-['DM_Sans'] transition-colors">
              info@floka.com
            </a>
            <div className="h-5 w-[1.5px] bg-[#d1d0ca]" />
            <button className="text-[#3a3a3a] hover:text-black transition-all" aria-label="Menu">
              <DotGridIcon size={20} />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="lg:hidden flex flex-col gap-1.5 p-2 group z-[60]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-[2px] bg-black transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-[2px] bg-black transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-[2px] bg-black transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </header>

      {/* --- MOBILE OVERLAY & MENU --- */}
      <div 
        ref={overlayRef} 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      <div 
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[58] shadow-2xl translate-x-full p-10 flex flex-col justify-between"
      >
        <div className="flex flex-col gap-8 mt-12">
          <p className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase">Navigation</p>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-4xl font-bold tracking-tighter text-[#1a1a1a] hover:text-gray-500 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t pt-8">
          <a href="mailto:info@floka.com" className="text-xl font-bold text-black">info@floka.com</a>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {["TW", "IG", "BE", "LN"].map(soc => (
              <span key={soc} className="text-xs font-black text-gray-400 cursor-pointer hover:text-black">{soc}</span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content overlapping the fixed header */}
      <div className="h-[75px]" aria-hidden="true" />
    </>
  );
}