import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ArrowRight, ArrowUpRight, Menu } from 'lucide-react';

const TEAM_IMG = 'https://lh3.googleusercontent.com/d/1b8ek71gEEX40cTfi92DEWMi0UiY4acd_';
const SAAS_FEE_IMG = 'https://lh3.googleusercontent.com/d/1rXF5RqLfZ30CPNumn7Ipt0pyIdJU-N0P';
const EGGERBERG_IMG = 'https://lh3.googleusercontent.com/d/1GYOQcCL8KPrgYvq1wXvYT_lz6R50YSxP';
const ERB_IMG = 'https://lh3.googleusercontent.com/d/1c-LSr5LTqPqZzY5HoPoIFjxpobyQ1hHz';
const GREEN_VILLAGE_IMG = 'https://lh3.googleusercontent.com/d/12qxLUc7PW3OnMrDfCgf2-aMGC-Wnt6te';

const CARD_1_IMG = 'https://lh3.googleusercontent.com/d/1dwiOPt1oZlD_M63G4Yks2bQ_ycEYrAl_';
const CARD_2_IMG = 'https://lh3.googleusercontent.com/d/1CY9xtbgV4kBaz5yknrOmwiQBiuW8Gmrl';
const CARD_3_IMG = 'https://lh3.googleusercontent.com/d/1GxjbDQ1746A0mcVYsPvoNlA8Ej35lOlS';
const CARD_4_IMG = 'https://lh3.googleusercontent.com/d/1lcZUHmkYr6C3X42_Y9cvLevZ8BqdN-vw';
const CARD_5_IMG = 'https://lh3.googleusercontent.com/d/1OpOmtdKHAscA888wNcKkBDnfjwI9Gnwv';
const CARD_6_IMG = 'https://lh3.googleusercontent.com/d/144AdCCBtgAMD8Ie1Xf6vadLBiT_ToY7b';
const CARD_7_IMG = 'https://lh3.googleusercontent.com/d/1ZN-0Kp6o-7pxP9QxMsE5eRLc-bA0olG3';
const CARD_8_IMG = 'https://lh3.googleusercontent.com/d/18vF4YcOI2LBit8M1E6pFXcqV7LZ2Zeox';
const CARD_9_IMG = 'https://lh3.googleusercontent.com/d/1Lp_46iHmlXo18Fxk28qqW6ns2IgCvUoJ';
const CARD_10_IMG = 'https://lh3.googleusercontent.com/d/1ROcG4byefsAqlOZunXhOriVploE1fQZO';
const CARD_11_IMG = 'https://lh3.googleusercontent.com/d/1QFEIShmZqIn_7OKHABKHFDui-NNDsFuk';
const CARD_12_IMG = 'https://lh3.googleusercontent.com/d/11_5lfL9tV31LZOr4T4VKzZzsUpS0XGmu';
const CARD_13_IMG = 'https://lh3.googleusercontent.com/d/1S3sS60HKQ-W8yPH2ScTQv6tuvFZVMGwN';
const CARD_14_IMG = 'https://lh3.googleusercontent.com/d/1ApP9QGiGdk989dxYINeLk8s1d7M798TO';
const CARD_15_IMG = 'https://lh3.googleusercontent.com/d/16lRuKDoXZz-efsS5qVYVUTJ--vyluH_J';
const CARD_16_IMG = 'https://lh3.googleusercontent.com/d/1Ih-zHZ8hjWIlg1W199SVgE5PXJDlZkZV';
const CARD_17_IMG = 'https://lh3.googleusercontent.com/d/1iETF504RUgSgGyDtsFpmLokrve9UkygU';
const CARD_18_IMG = 'https://lh3.googleusercontent.com/d/19B8b7qknvMGEwcsb0SCt7m2URoSEKVvf';
const CARD_19_IMG = 'https://lh3.googleusercontent.com/d/1_LHc9jSQlWPkD85lwTpn5UmKBmQqMZ_k';
const CARD_20_IMG = 'https://lh3.googleusercontent.com/d/1XpRO_RiMzUs9CX9Yqwj_DLYCfIlNj7mR';

const architectImg = TEAM_IMG;

const BRAND_RED = '#5c0612';
const FULL_TEXT = 'swissrealplan.';
const HOUSE_IMG = 'https://lh3.googleusercontent.com/d/1Rjz0g-6CDsMaPAY9eVLPimQOho79B_Te';
const BG_IMG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260603_073200_7082add5-f1f8-4873-8696-d6f78a44089b.png&w=1920&q=85';

interface GalleryExpandItem {
  title: string;
  subtitle: string;
  img: string;
  link: string;
}

const GALLERY_EXPAND_ITEMS: GalleryExpandItem[] = [
  {
    title: "Saas fee",
    subtitle: "Viz1",
    img: SAAS_FEE_IMG,
    link: "https://alpenchaletdomino.com/"
  },
  {
    title: "Eggerberg",
    subtitle: "Viz2",
    img: EGGERBERG_IMG,
    link: "https://soleilhome.info/"
  },
  {
    title: "Erb in Visp",
    subtitle: "Viz3",
    img: ERB_IMG,
    link: "https://erbhome.info/"
  },
  {
    title: "Green village in Visp",
    subtitle: "Neu Fix 9 may",
    img: GREEN_VILLAGE_IMG,
    link: "coming-soon"
  }
];

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  img: string;
}

const PROJECTS_LIST: ProjectItem[] = [
  { id: 1, title: 'Wohnsiedlung', category: 'Planung', location: 'Visp, CH', year: '2026', img: CARD_1_IMG },
  { id: 2, title: 'Ferienhaus', category: 'Wohnen', location: 'Staldenried, CH', year: '2023', img: CARD_2_IMG },
  { id: 3, title: 'Wohnhaus', category: 'Wohnen', location: 'Ins, CH', year: '2022', img: CARD_3_IMG },
  { id: 4, title: 'Umbau Wohnhaus', category: 'Sanierung', location: 'Naters, CH', year: '2024', img: CARD_4_IMG },
  { id: 5, title: 'Umbau Wohnhaus', category: 'Sanierung', location: 'Staldenried, CH', year: '2021', img: CARD_5_IMG },
  { id: 6, title: 'Geschäftshaus', category: 'Gewerbe', location: 'Visp, CH', year: '2023', img: CARD_6_IMG },
  { id: 7, title: 'Wohnsiedlung', category: 'Planung', location: 'Brigerbad, CH', year: '2025', img: CARD_7_IMG },
  { id: 8, title: 'Wohnhaus', category: 'Wohnen', location: 'Aarberg, CH', year: '2024', img: CARD_8_IMG },
  { id: 9, title: 'Geschäftshaus', category: 'Gewerbe', location: 'Visp, CH', year: '2022', img: CARD_9_IMG },
  { id: 10, title: 'Gewerbehaus', category: 'Gewerbe', location: 'Visp, CH', year: '2025', img: CARD_10_IMG },
  { id: 11, title: 'Einfamilienhaus', category: 'Wohnen', location: 'Visp, CH', year: '2023', img: CARD_11_IMG },
  { id: 12, title: 'Gewerbehaus', category: 'Gewerbe', location: 'Visp, CH', year: '2024', img: CARD_12_IMG },
  { id: 13, title: 'Geschäftszentrum', category: 'Gewerbe', location: 'Visp, CH', year: '2025', img: CARD_13_IMG },
  { id: 14, title: 'Reihenhäuser', category: 'Planung', location: 'Baltschieder, CH', year: '2026', img: CARD_14_IMG },
  { id: 15, title: 'Einfamilienhaus', category: 'Wohnen', location: 'Baltschieder, CH', year: '2023', img: CARD_15_IMG },
  { id: 16, title: 'Einfamilienhaus', category: 'Wohnen', location: 'Visp, CH', year: '2022', img: CARD_16_IMG },
  { id: 17, title: 'Umbau Einfamilienhaus', category: 'Sanierung', location: 'Sierre, CH', year: '2024', img: CARD_17_IMG },
  { id: 18, title: 'Geschäftshaus', category: 'Gewerbe', location: 'Visp, CH', year: '2023', img: CARD_18_IMG },
  { id: 19, title: 'Umbau Restaurant', category: 'Sanierung', location: 'Binn, CH', year: '2025', img: CARD_19_IMG },
  { id: 20, title: 'Umbau Wohnhaus', category: 'Sanierung', location: 'Ins, CH', year: '2024', img: CARD_20_IMG }
];

interface ServiceItem {
  id: string;
  number: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: "studien-analysen",
    number: "01",
    subtitle: "Leistung 1 / 10",
    title: "Studien und Analysen",
    description: "Standortbewertungen, Machbarkeitsstudien und tiefgehende Analysen, die jedem Projekt eine fundierte Grundlage geben. Wir prüfen Topografie, Recht, Markt und Nutzung — bevor die erste Linie gezogen wird.",
    image: CARD_1_IMG
  },
  {
    id: "projektentwicklung",
    number: "02",
    subtitle: "Leistung 2 / 10",
    title: "Projektentwicklung",
    description: "Von der ersten Vision bis zum tragfähigen Konzept. Wir entwickeln Projekte mit Weitsicht, vereinen architektonische Qualität mit wirtschaftlicher Logik und schaffen Räume mit nachhaltigem Wert.",
    image: CARD_2_IMG
  },
  {
    id: "bewilligungsverfahren",
    number: "03",
    subtitle: "Leistung 3 / 10",
    title: "Bewilligungsverfahren",
    description: "Wir begleiten Bauherren durch das gesamte Bewilligungsverfahren — präzise Gesuche, klare Kommunikation mit Behörden und ein souveräner Umgang mit Auflagen und Einsprachen.",
    image: CARD_3_IMG
  },
  {
    id: "ausfuehrungsplanung",
    number: "04",
    subtitle: "Leistung 4 / 10",
    title: "Ausführungsplanung",
    description: "Detailgenaue Pläne, präzise Materialisierung, klare Schnittstellen. Unsere Ausführungsplanung ist die Sprache, die Handwerker und Unternehmer auf der Baustelle führt.",
    image: CARD_4_IMG
  },
  {
    id: "bauleitung-realisierung",
    number: "05",
    subtitle: "Leistung 5 / 10",
    title: "Bauleitung und Realisierung",
    description: "Wir führen die Baustelle mit Schweizer Präzision — Termine, Kosten und Qualität in Balance. Unsere Bauleitung ist der ruhige Taktgeber zwischen Plan und Bauwerk.",
    image: CARD_5_IMG
  },
  {
    id: "umbauten-sanierungen",
    number: "06",
    subtitle: "Leistung 6 / 10",
    title: "Umbauten und Sanierungen",
    description: "Bestehende Substanz weiterdenken: behutsame Umbauten, energetische Sanierungen und Eingriffe, die den Charakter eines Hauses respektieren und seinen Wert neu definieren.",
    image: CARD_6_IMG
  },
  {
    id: "totalunternehmung",
    number: "07",
    subtitle: "Leistung 7 / 10",
    title: "Totalunternehmung",
    description: "Ein Ansprechpartner. Ein Vertrag. Volle Verantwortung. Als Totalunternehmer realisieren wir Projekte zum Festpreis und Festtermin — Sie behalten die Übersicht, wir den Bau.",
    image: CARD_7_IMG
  },
  {
    id: "immobilien",
    number: "08",
    subtitle: "Leistung 8 / 10",
    title: "Immobilien",
    description: "Wir vermarkten Wohn- und Renditeobjekte mit demselben gestalterischen Anspruch, mit dem wir bauen. Diskret, professionell, mit Gespür für Lage, Architektur und Zielgruppe.",
    image: CARD_8_IMG
  },
  {
    id: "investment",
    number: "09",
    subtitle: "Leistung 9 / 10",
    title: "Investment",
    description: "Strukturierte Investments in werthaltige Schweizer Immobilien. Wir identifizieren Chancen, entwickeln Renditeobjekte und begleiten Investoren von der Akquisition bis zur Übergabe.",
    image: CARD_9_IMG
  },
  {
    id: "bauhandel",
    number: "10",
    subtitle: "Leistung 10 / 10",
    title: "Bauhandel",
    description: "Hochwertige Bauelemente aus einer Hand: Küchen, Bäder, Schlafzimmer, Türen und Einbaumöbel. Wir liefern und montieren ausgewählte Produkte führender Hersteller — von der Beratung im Showroom bis zur fertigen Installation vor Ort.",
    image: CARD_10_IMG
  }
];

interface CountUpProps {
  end: number;
  suffix: string;
}

function CountUp({ end, suffix }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          let startTime: number | null = null;
          const duration = 2000;

          function animate(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
    };
  }, [end]);

  return (
    <div ref={elementRef} className="font-sans font-light text-white leading-none tracking-tight text-[clamp(36px,4.5vw,72px)]">
      {count}
      {suffix}
    </div>
  );
}

export default function App() {
  const [typedLength, setTypedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isLifting, setIsLifting] = useState(false);
  const [showHeroText, setShowHeroText] = useState(false);
  const [liftDone, setLiftDone] = useState(false);

  const [navColor, setNavColor] = useState('#5c0612');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowHeight, setWindowHeight] = useState(800);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '', interest: 'Wohnen' });

  const [housePosition, setHousePosition] = useState({ x: 0, y: 0, scale: 1, blur: 0, baseW: 1400 });

  const heroRef = useRef<HTMLDivElement>(null);
  const darkSec1Ref = useRef<HTMLDivElement>(null);
  const darkSec2Ref = useRef<HTMLDivElement>(null);
  const darkSec3Ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'architektur'>('home');
  const architekturCtaRef = useRef<HTMLDivElement>(null);
  const architekturKontaktRef = useRef<HTMLDivElement>(null);

  // Synchronize dynamic desktop state matches
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      setWindowHeight(window.innerHeight);
      if (desktop) {
        setMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!isDesktop && mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [mobileMenuOpen, isDesktop]);

  // Section 1 Preloader timers setup exactly matching requirements
  useEffect(() => {
    const CHAR_INTERVAL = 140;
    const TYPE_START = 600;
    const LIFT_AT = TYPE_START + 6 * CHAR_INTERVAL + 700; // 2140ms

    // Letters typing cascade
    const letterTimers = Array.from({ length: FULL_TEXT.length }, (_, i) => {
      return setTimeout(() => {
        setTypedLength(i + 1);
      }, TYPE_START + i * CHAR_INTERVAL);
    });

    // Cursor dismissal
    const cursorTimer = setTimeout(() => {
      setShowCursor(false);
    }, LIFT_AT - 150);

    // Overlay lifting action
    const liftTimer = setTimeout(() => {
      setIsLifting(true);
    }, LIFT_AT);

    // Hero headline fade-in timing
    const heroTextTimer = setTimeout(() => {
      setShowHeroText(true);
    }, LIFT_AT + 1300);

    // Marking termination structure
    const doneTimer = setTimeout(() => {
      setLiftDone(true);
    }, LIFT_AT + 2100);

    return () => {
      letterTimers.forEach(clearTimeout);
      clearTimeout(cursorTimer);
      clearTimeout(liftTimer);
      clearTimeout(heroTextTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  // Lock scroll, keep on home page, and start at the top when load animation finishes
  useEffect(() => {
    if (!liftDone) {
      // Force home state & top scroll position
      setCurrentPage('home');
      window.scrollTo(0, 0);

      const preventScroll = (e: Event) => {
        e.preventDefault();
        window.scrollTo(0, 0);
      };

      // Register scroll listeners to prevent any screen shifts
      window.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });

      // Save and set body/document hidden overflow
      const oldHtmlOverflow = document.documentElement.style.overflow;
      const oldBodyOverflow = document.body.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('scroll', preventScroll);
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        document.documentElement.style.overflow = oldHtmlOverflow;
        document.body.style.overflow = oldBodyOverflow;
      };
    } else {
      // Completed, always restore & reset layout from very top of home page
      setCurrentPage('home');
      window.scrollTo(0, 0);
    }
  }, [liftDone]);

  // Update house coordinates on scroll/resize exactly matching specifications
  const updateHousePosition = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Specifically detect smaller laptops, standard HD 1280x720p landscape screens, and heights <= 768px in landscape mode
    const is720p = isDesktop && (
      (vw === 1280 && vh === 720) ||
      (vw <= 1366 && vh <= 768)
    );

    const isMobile = !isDesktop && vw < 640;

    // Responsive height-based scale and shift strictly for mobile view
    // At vh <= 667, looks great with standard size and position. At vh >= 896 (e.g. newer models iPhone 14 Pro Max), 14% bigger, 40% to right, and 6% to above.
    let mobileScaleMultiplier = 1.0;
    let mobileXFactor = 0.35;
    let mobileLowerYFactor = 0.03;
    if (isMobile) {
      const r = Math.min(Math.max((vh - 667) / (896 - 667), 0), 1);
      mobileScaleMultiplier = 1.0 + r * 0.14; // 14% bigger at vh >= 896
      mobileXFactor = 0.35 + r * 0.05; // 35% to right at 667px, 40% to right at 896px
      mobileLowerYFactor = 0.03 - r * 0.09; // 3% below (positive offset) at 667px, 6% above (negative offset) at 896px
    }

    // Desktop gets 1400. Tablet gets 1557. Mobile gets 15% smaller (1557 * 0.85 = 1323) scaled by mobileScaleMultiplier
    const baseW = isDesktop ? 1400 : (isMobile ? (1323 * mobileScaleMultiplier) : 1557);

    const imgH = imgRef.current ? imgRef.current.offsetHeight : 0;
    const heroH = heroRef.current ? heroRef.current.offsetHeight : vh;

    const heroRect = heroRef.current ? heroRef.current.getBoundingClientRect() : { top: 0 };
    const darkRect = darkSec1Ref.current ? darkSec1Ref.current.getBoundingClientRect() : { bottom: vh * 2 };

    const triggerPoint = 0;
    const endPoint = -(heroH * 1.25);

    const denom = endPoint - triggerPoint;
    let progress = 0;
    if (denom !== 0) {
      progress = Math.min(Math.max((heroRect.top - triggerPoint) / denom, 0), 1);
    }

    const smoothstep = (val: number) => val * val * (3 - 2 * val);
    const t = smoothstep(smoothstep(progress));

    // Shift 450px to the right (further to the right) in mobile view
    // Keep tablet exactly at 450, desktop at 0, and optimize for mobile screen sizes (use clean 0 base shift to let 35% right shift handle alignment)
    const mobileShift = isDesktop ? 0 : (isMobile ? 0 : 450);

    // Shift the house 10% to the right (baseW * 0.1) on standard HD 1280x720p landscape screens to cover left/right symmetrically and keep it in frame
    // In mobile view (isMobile), we shift by dynamic mobileXFactor (starts at 35% at 667px height, and shifts rightward to 40% as height increases)
    // Otherwise, shift left by 20% on desktop, or keep -18% (vw) on tablet
    const adjX = isDesktop 
      ? (is720p ? (baseW * 0.1) : -(baseW * 0.2)) 
      : (isMobile ? (baseW * mobileXFactor) : -(vw * 0.18));
    const adjY = 0;

    const startX = (vw - baseW) / 2 + mobileShift + adjX;
    
    // In mobile view, lower/raise the image by the dynamic model-adjusted percentage of viewport height (vh) as requested
    const mobileLowerY = isMobile ? (vh * mobileLowerYFactor) : 0;

    // Optimize mobile starts so the center of the image is perfectly framed vertically without excessive empty sky (bring layout down by 100px so it never overlaps text, shift down by 3% of vh)
    const startY = isDesktop ? (is720p ? ((vh - imgH) / 2 + vh * 0.06) : ((vh - imgH) / 2 + 120)) : (isMobile ? (vh - imgH + 100 + mobileLowerY) : (vh - imgH + adjY));
    const finalScale = 1.45;
    const finalX = (vw - baseW * finalScale) / 2 + mobileShift * finalScale + adjX;
    const mobileOffset = !isDesktop ? -120 : 4;
    const finalY = darkRect.bottom - imgH * finalScale + (isDesktop ? 500 : 400) + mobileOffset + adjY + mobileLowerY;

    if (progress <= 0) {
      setHousePosition({ x: startX, y: startY, scale: 1, blur: 0, baseW });
    } else {
      const currentX = startX + t * (finalX - startX);
      const currentY = startY + t * (finalY - startY);
      const currentScale = 1 + t * (finalScale - 1);
      const currentBlur = t * 16;
      setHousePosition({ x: currentX, y: currentY, scale: currentScale, blur: currentBlur, baseW });
    }
  }, [isDesktop]);

  // Combined listener hook
  useEffect(() => {
    updateHousePosition();
    window.addEventListener('resize', updateHousePosition);

    let handleScroll: (() => void) | null = null;
    if (liftDone) {
      handleScroll = updateHousePosition;
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', updateHousePosition);
      if (handleScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [liftDone, updateHousePosition]);

  // Scroll Color tracker for fixed Navigation
  const handleScrollNav = useCallback(() => {
    let navOnDark = false;

    const checkOverlap = (el: HTMLElement | null) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom > 0;
    };

    if (
      checkOverlap(darkSec1Ref.current) || 
      checkOverlap(darkSec2Ref.current) || 
      checkOverlap(darkSec3Ref.current) ||
      checkOverlap(architekturCtaRef.current) ||
      checkOverlap(architekturKontaktRef.current)
    ) {
      navOnDark = true;
    }

    setNavColor(navOnDark ? '#ffffff' : '#5c0612');
  }, []);

  const handleInquiryLink = (serviceTitle: string) => {
    let interestOption = 'Wohnen';
    const lowerTitle = serviceTitle.toLowerCase();
    if (lowerTitle.includes('sanierung') || lowerTitle.includes('umbau')) {
      interestOption = 'Sanierung';
    } else if (lowerTitle.includes('gewerbe') || lowerTitle.includes('handel')) {
      interestOption = 'Gewerbe';
    }

    setContactForm({
      name: '',
      email: '',
      phone: '',
      interest: interestOption,
      message: `Grüezi swissrealplan, ich interessiere mich für die Kompetenz „${serviceTitle}“. Bitte kontaktieren Sie mich.`
    });
    setContactSubmitted(false);
    setCurrentPage('home');
    setTimeout(() => {
      const formEl = document.getElementById('kontakt');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollNav, { passive: true });
    window.addEventListener('resize', handleScrollNav);
    handleScrollNav();

    return () => {
      window.removeEventListener('scroll', handleScrollNav);
      window.removeEventListener('resize', handleScrollNav);
    };
  }, [handleScrollNav]);


  return (
    <div className="min-h-screen text-[#5c0612] overflow-x-clip font-sans relative antialiased selection:bg-[#5c0612] selection:text-[#f5f0ea]">
      {/* Dynamic Font Loader and responsive specification stylesheet overrides */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@400;700;800;900&display=swap');
        
        body {
          background-color: #f5f0ea;
          font-family: 'Inter', sans-serif;
        }
        
        .font-syne {
          font-family: 'Space Grotesk', 'Syne', sans-serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .cursor-blink {
          animation: blink 0.7s step-end infinite;
        }

        @keyframes slowMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: slowMarquee 32s linear infinite;
        }

        /* Desktop Gallery Accordion transition and will-change optimizations */
        .gallery-expand-row {
          display: flex;
          width: 100%;
          height: 70%;
          max-width: 1200px;
          gap: 6px;
        }

        .gallery-expand-item {
          flex-grow: 1;
          flex-shrink: 1;
          flex-basis: 0%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: flex-grow 0.6s cubic-bezier(0.25, 1, 0.3, 1), flex-shrink 0.6s cubic-bezier(0.25, 1, 0.3, 1), transform 0.6s cubic-bezier(0.25, 1, 0.3, 1) !important;
          will-change: flex-grow, flex-shrink, transform;
          position: relative;
        }

        @media (max-width: 639px) {
          .hero-subtitle-desktop { display: none !important; }
          .hero-subtitle-mobile  { display: block !important; }
          .hero-text-block { padding-top: 110px !important; text-align: center !important; }
          .hero-title { 
            font-size: clamp(26px, 8.5vw, 34px) !important; 
            white-space: normal !important; 
            max-width: 320px !important; 
            line-height: 1.15 !important; 
            letter-spacing: -0.03em !important; 
            text-align: center !important; 
            font-weight: 900 !important;
            margin: 0 auto !important;
          }
        }
        
        @media (min-width: 640px) and (max-width: 1023px) {
          .hero-subtitle-desktop { display: none !important; }
          .hero-subtitle-mobile  { display: block !important; }
          .hero-text-block { padding-top: 150px !important; text-align: center !important; }
          .hero-title { font-size: clamp(22px, 5.0vw, 36px) !important; white-space: nowrap !important; letter-spacing: -0.03em !important; text-align: center !important; }
        }
        
        @media (min-width: 1024px) {
          .hero-subtitle-desktop { display: block !important; }
          .hero-subtitle-mobile  { display: none !important; }
          .hero-text-block { padding-top: calc(30vh - 20px) !important; text-align: center !important; }
          .hero-title { font-size: clamp(42px, 5.2vw, 6.2vw) !important; white-space: nowrap !important; letter-spacing: -0.04em !important; text-align: center !important; }
        }

        /* Section 5 Responsive layout behaviors */
        @media (max-width: 1023px) {
          .s2-section {
            height: auto !important;
            min-height: 100vh !important;
            overflow: visible !important;
            padding: 60px 0 !important;
          }
        }

        /* Section 6 Hover Expand Gallery responsive rules */
        @media (max-width: 1023px) {
          .s3-gallery-section {
            height: auto !important;
            min-height: auto !important;
            overflow: visible !important;
          }
          .s3-ticker-wrap {
            position: sticky !important;
            top: 0 !important;
            height: 100vh !important;
            width: 100% !important;
            margin-bottom: -100vh !important;
          }
          .s3-gallery-content {
            height: auto !important;
            align-items: flex-start !important;
            padding: 80px 16px 60px !important;
          }
          .gallery-expand-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            height: auto !important;
            width: 100% !important;
            max-width: 700px !important;
          }
          .gallery-expand-item {
            flex: none !important;
            height: auto !important;
            aspect-ratio: 4/5 !important;
            border-radius: 10px !important;
            transition: transform 0.3s ease !important;
          }
          .gallery-expand-item:hover {
            flex: none !important;
            transform: scale(1.02) !important;
          }
          .gallery-expand-item:last-child:nth-child(odd) {
            grid-column: 1 / -1 !important;
            max-width: calc(50% - 4px) !important;
            justify-self: center !important;
          }
        }

        @media (max-width: 479px) {
          .s3-gallery-content {
            padding: 60px 12px 54px !important;
          }
          .gallery-expand-row {
            gap: 6px !important;
          }
        }
      `}</style>

      {/* Section 1 — Preloader / Intro Overlay */}
      <div 
        id="preloader-overlay"
        className="fixed inset-0 bg-[#5c0612] flex items-center justify-center"
        style={{
          zIndex: 100,
          transform: isLifting ? 'translateY(-100%)' : 'translateY(0%)',
          transition: isLifting && !liftDone ? 'transform 1.5s cubic-bezier(0.45, 0, 0.15, 1)' : 'none',
          pointerEvents: liftDone ? 'none' : 'auto'
        }}
      >
        <div className="flex items-baseline font-syne text-[2.6rem] text-white tracking-[-0.02em]">
          {FULL_TEXT.slice(0, typedLength).split('').map((char, index) => {
            const isDot = char === '.';
            return (
              <span key={index} className={isDot ? 'font-black font-syne' : 'font-bold font-syne'}>
                {char}
              </span>
            );
          })}
          {showCursor && (
            <span 
              id="typewriter-cursor"
              className="inline-block w-[3px] h-[1.1em] rounded bg-white ml-[3px] self-center cursor-blink"
            />
          )}
        </div>
      </div>

      {/* Section 2 — Permanent Navigation Bar with Bauhaus Grid Architecture */}
      <nav 
        id="navbar"
        className="fixed top-0 left-0 right-0 z-50 flex items-stretch h-16 sm:h-20 border-b backdrop-blur-md"
        style={{ 
          borderColor: `${navColor}15`, 
          backgroundColor: navColor === '#ffffff' ? 'rgba(26, 26, 26, 0.82)' : 'rgba(245, 240, 234, 0.82)',
          color: navColor,
          transition: 'color 0.35s cubic-bezier(0.25, 1, 0.3, 1), border-color 0.35s ease, background-color 0.35s ease'
        }}
      >
        {/* Left: Brand name grid cell */}
        <div 
          className="flex items-center px-2 xs:px-4 sm:px-8 border-r"
          style={{ borderColor: `${navColor}15` }}
        >
          <a 
            id="nav-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-syne text-[10px] min-[360px]:text-xs xs:text-sm tracking-[0.1em] xs:tracking-[0.2em] uppercase select-none cursor-pointer flex-shrink-0"
          >
            <span className="font-black" style={{ color: navColor }}>swissrealplan</span>
            <span className="font-extrabold text-[#5c0612]">.</span>
          </a>
        </div>

        {/* Middle structural empty space spacer reminiscent of open plan design */}
        <div className="flex-grow hidden xs:block" />

        {/* Navigation Grid cells (Desktop links or Mobile Hamburger toggle) */}
        {isDesktop ? (
          <div 
            className="flex items-stretch border-l ml-auto xs:ml-0"
            style={{ borderColor: `${navColor}15` }}
          >
            {[
              { label: 'projekte', href: '#portfolio', num: '01' },
              { label: 'portfolio', href: '#listings', num: '02' },
              { label: 'leistungen', href: '#story', num: '03' },
              { label: 'kontakt', href: '#kontakt', num: '04' }
            ].map((item) => {
              const isActive = item.label === 'leistungen' && currentPage === 'architektur';
              const displayLabel = item.label;
              return (
                <a
                  key={item.label}
                  id={`nav-link-${item.label}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.label === 'leistungen') {
                      setCurrentPage('architektur');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setCurrentPage('home');
                      const targetId = item.href.substring(1);
                      setTimeout(() => {
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 80);
                    }
                  }}
                  className="flex flex-col justify-center px-1.5 min-[360px]:px-2.5 xs:px-4 sm:px-6 md:px-8 lg:px-10 border-r last:border-r-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative cursor-pointer group"
                  style={{ 
                    borderColor: `${navColor}15`,
                  }}
                >
                  <span className="font-mono text-[5.5px] sm:text-[9px] tracking-widest opacity-40 group-hover:opacity-80 transition-opacity mb-0.5 uppercase">
                    {item.num} //
                  </span>
                  <span 
                    className="font-syne text-[7.5px] min-[360px]:text-[9.5px] xs:text-[11px] sm:text-xs tracking-[0.05em] min-[360px]:tracking-[0.15em] uppercase font-bold transition-all relative"
                  >
                    {displayLabel}
                    {/* Underlining Bauhaus solid bar accent indicator */}
                    <span 
                      className="absolute -bottom-1 left-0 w-full h-[2px] transition-transform duration-300 origin-left"
                      style={{
                        backgroundColor: navColor,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    />
                  </span>
                </a>
              );
            })}
          </div>
        ) : (
          <div 
            className="flex items-stretch border-l ml-auto cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            style={{ borderColor: `${navColor}15` }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <button className="flex items-center gap-2 px-4 font-syne text-[10px] min-[360px]:text-xs uppercase font-black tracking-widest focus:outline-none">
              <span>{mobileMenuOpen ? 'Schließen' : 'Menü'}</span>
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {!isDesktop && mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 flex flex-col justify-between pt-24 pb-12 px-8 transition-all duration-300"
          style={{ 
            color: navColor === '#ffffff' ? '#ffffff' : '#5c0612',
            backgroundColor: navColor === '#ffffff' ? '#1a1a1a' : '#f5f0ea',
          }}
        >
          {/* Menu links aligned vertically with numbers */}
          <div className="flex flex-col gap-5 mt-6">
            {[
              { label: 'projekte', href: '#portfolio', num: '01' },
              { label: 'portfolio', href: '#listings', num: '02' },
              { label: 'leistungen', href: '#story', num: '03' },
              { label: 'kontakt', href: '#kontakt', num: '04' }
            ].map((item) => {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    if (item.label === 'leistungen') {
                      setCurrentPage('architektur');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      setCurrentPage('home');
                      const targetId = item.href.substring(1);
                      setTimeout(() => {
                        const el = document.getElementById(targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 120);
                    }
                  }}
                  className="flex items-baseline py-4 border-b"
                  style={{ borderColor: `${navColor}15` }}
                >
                  <span className="font-mono text-xs tracking-widest opacity-40 mr-4">
                    {item.num} //
                  </span>
                  <span className="font-syne text-xl tracking-[0.1em] uppercase font-black">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Footer of Mobile Menu */}
          <div className="flex flex-col gap-2 border-t pt-6" style={{ borderColor: `${navColor}15` }}>
            <span className="font-syne text-[10px] tracking-widest uppercase opacity-50">swissrealplan.</span>
            <span className="font-mono text-[9px] opacity-40">Visp &amp; Murten / Schweiz</span>
          </div>
        </div>
      )}

      {/* Section 4 — Scroll-Driven House Animation Layer */}
      <div
        id="scroll-house-wrapper"
        style={{
          position: 'fixed',
          zIndex: 22,
          pointerEvents: 'none',
          willChange: 'transform',
          top: 0,
          left: 0,
          width: '100%',
          minWidth: `${housePosition.baseW || (isDesktop ? 1400 : 1557)}px`,
          transform: `translate(${housePosition.x}px, ${housePosition.y}px) scale(${housePosition.scale})`,
          transformOrigin: 'top left',
          display: currentPage === 'home' ? 'block' : 'none',
        }}
      >
        <div
          id="scroll-house-inner"
          style={{
            width: '100%',
          }}
        >
          <img
            ref={imgRef}
            src={HOUSE_IMG}
            alt="Swissrealplan Luxury Mansion Presentation"
            aria-hidden="true"
            className="w-full h-auto select-none drag-none scale-x-[-1]"
            style={{
              filter: housePosition.blur > 0 ? `blur(${housePosition.blur}px)` : 'none',
              willChange: 'filter'
            }}
            referrerPolicy="no-referrer"
            onLoad={() => {
              updateHousePosition();
            }}
          />
        </div>
      </div>

      {currentPage === 'home' ? (
        <>
          {/* Section 3 — Hero */}
      <section 
        id="hero"
        ref={heroRef}
        className="relative min-h-screen overflow-visible flex flex-col justify-start"
        style={{
          backgroundImage: `url(${BG_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft elegant vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0ea]/20 via-transparent to-[#f5f0ea]/10 pointer-events-none" />

        {/* Hero typography block */}
        <div 
          className="hero-text-block z-10 w-full flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: showHeroText ? 1 : 0,
            transform: showHeroText ? 'translateY(0px)' : 'translateY(-28px)',
            transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s'
          }}
        >
          {/* Main single line centered title */}
          <div className="overflow-hidden w-full flex justify-center">
            <h1 className="hero-title font-syne font-black uppercase text-black tracking-[-0.04em] leading-none text-center">
              WOHNEN IM UNERSETZLICHEN
            </h1>
          </div>

          {/* Desktop and mobile centralized taglines */}
          <div className="hero-subtitle-desktop mt-6 max-w-2xl opacity-80 text-center mx-auto">
            <p className="font-syne font-semibold text-[clamp(12px,1.4vw,18px)] leading-relaxed tracking-wider text-black">
              Herrschaftliche Anwesen, entworfen mit Weitsicht, Anspruch und architektonischer Finesse.
            </p>
          </div>

          <div className="hero-subtitle-mobile mt-4 max-w-xs opacity-[0.65] text-center mx-auto">
            <p className="font-syne font-semibold text-[clamp(12px,3.2vw,15px)] leading-relaxed text-black">
              Herrschaftliche Anwesen, entworfen mit Weitsicht,<br />
              Anspruch und architektonischer Finesse.
            </p>
          </div>
        </div>
      </section>

      {/* Area anchors */}
      <div id="residences" />

      {/* Section 5 — Dark Statement + Stats (sticky wrapper) */}
      <section 
        ref={darkSec1Ref} 
        id="story"
        className="relative z-20 h-[200vh]"
      >
        {/* Tiny 4vh scroll spacer strictly specified */}
        <div className="h-[4vh] bg-[#1a1a1a]" />

        {/* Inner sticky s2-section */}
        <div className="s2-section sticky top-0 h-[100vh] bg-[#1a1a1a] overflow-hidden flex flex-col justify-center">
          
          {/* Background Ambient glow */}
          <div className="absolute inset-x-0 -top-40 h-[400px] bg-gradient-to-b from-[#f5f0ea]/5 to-transparent pointer-events-none" />

          {/* Content wrapper */}
          <div className="s2-content w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              
              {/* Left Column: Portrait of the Architect (5 of 12 columns) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[200px] sm:max-w-[260px] lg:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                  <img 
                    src={architectImg} 
                    alt="Architekt Dietrich Becker" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                    <span className="font-syne text-[8px] sm:text-[10px] tracking-[0.25em] text-white/50 uppercase block font-semibold">Chefarchitekt</span>
                    <h4 className="font-syne text-xs sm:text-sm font-bold text-white uppercase tracking-wider mt-1">Dietrich Becker</h4>
                    <p className="font-mono text-[8px] sm:text-[9px] text-[#e8e4df]/60 mt-0.5">swissrealplan Studio Visp / Murten</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Statement & Stats (7 of 12 columns) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="s2-statement font-syne font-light text-[#e8e4df] leading-[1.3] text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl tracking-tight pb-8 lg:pb-0">
                  Jedes von uns präsentierte Anwesen wird handverlesen<br className="hidden sm:inline" />
                  unter dem Aspekt der Beständigkeit, Verfeinerung<br className="hidden sm:inline" />
                  und des zeitlosen Details. Anspruch ist keine Verzierung.<br className="hidden sm:inline" />
                  Es ist unsere Disziplin.
                </p>

                {/* Stats / Werte row */}
                <div className="s2-stats-row w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                  {/* Stat Col 1 */}
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#e8e4df]/40 block mb-1 uppercase font-semibold">01 / Präzision</span>
                    <h5 className="font-syne text-[11px] sm:text-xs font-semibold text-white tracking-widest uppercase mb-2">Projektplanung</h5>
                    <p className="font-sans text-[11px] sm:text-xs text-white/50 leading-relaxed">
                      Sorgfältige Schweizer Planung und Ausführung sichern den langfristigen Wertbestand Ihrer Immobilien.
                    </p>
                  </div>

                  {/* Stat Col 2 */}
                  <div className="flex flex-col border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#e8e4df]/40 block mb-1 uppercase font-semibold">02 / Individualität</span>
                    <h5 className="font-syne text-[11px] sm:text-xs font-semibold text-white tracking-widest uppercase mb-2">Bespoke Ausbau</h5>
                    <p className="font-sans text-[11px] sm:text-xs text-white/50 leading-relaxed">
                      Individuelle Architektur und hochwertige Bauelemente, ideal auf Ihre Visionen abgestimmt.
                    </p>
                  </div>

                  {/* Stat Col 3 */}
                  <div className="flex flex-col border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#e8e4df]/40 block mb-1 uppercase font-semibold">03 / Diskretion</span>
                    <h5 className="font-syne text-[11px] sm:text-xs font-semibold text-white tracking-widest uppercase mb-2">Begleitung</h5>
                    <p className="font-sans text-[11px] sm:text-xs text-white/50 leading-relaxed">
                      Persönliche, vertrauliche Beratung und Betreuung an unseren Standorten in Visp und Murten.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Anchor */}
      <div id="listings" />

      {/* Section 6 — Hover-Expand Gallery (slides over Section 5 via negative margin-top: -100vh) */}
      <section 
        ref={darkSec2Ref}
        id="portfolio"
        className="s3-gallery-section relative z-25 -mt-[100vh] bg-[#1a1a1a] h-[100vh] overflow-hidden"
      >
        {/* Background slower ticker */}
        <div className="s3-ticker-wrap absolute inset-0 flex items-center overflow-hidden z-0 pointer-events-none opacity-[0.04]">
          <div className="animate-marquee flex whitespace-nowrap">
            <span className="font-syne font-extrabold text-[clamp(100px,14vw,220px)] tracking-[-0.02em] text-white select-none uppercase pr-[0.3em]">
              swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp;
            </span>
            <span className="font-syne font-extrabold text-[clamp(100px,14vw,220px)] tracking-[-0.02em] text-white select-none uppercase pr-[0.3em]">
              swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp; swissrealplan &nbsp;
            </span>
          </div>
        </div>

        {/* Dynamic Gallery Contents */}
        <div className="s3-gallery-content relative z-[1] w-full h-full flex items-center justify-center p-[clamp(24px,4vw,60px)]">
          
          <div className="gallery-expand-row flex w-full h-[70%] max-w-[1200px] gap-1.5">
            {GALLERY_EXPAND_ITEMS.map((item, index) => {
              const isComingSoon = item.link === "coming-soon";
              // Disable hover expand accordion animation for low-height landscapes (e.g. 1280x720p)
              const isHoverAnimEnabled = isDesktop && windowHeight > 768;
              const isTextVisible = !isHoverAnimEnabled || (hoveredIdx === index);
              return (
                <a
                  key={index}
                  href={isComingSoon ? "#" : item.link}
                  target={isComingSoon ? undefined : "_blank"}
                  rel={isComingSoon ? undefined : "noopener noreferrer"}
                  onClick={(e) => {
                    if (isComingSoon) {
                      e.preventDefault();
                      setShowComingSoon(true);
                    }
                  }}
                  className="gallery-expand-item group relative rounded-xl overflow-hidden cursor-pointer block"
                  style={isDesktop ? {
                    flexGrow: isHoverAnimEnabled ? (hoveredIdx === index ? 2.5 : (hoveredIdx !== null ? 0.5 : 1)) : 1,
                    flexShrink: 1,
                    flexBasis: '0%'
                  } : undefined}
                  onMouseEnter={() => isHoverAnimEnabled && setHoveredIdx(index)}
                  onMouseLeave={() => isHoverAnimEnabled && setHoveredIdx(null)}
                >
                  {/* Elegant bottom-up soft vignette to protect white text legibility without overall image dimming */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

                  {/* Cover image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gentle elegant slide text inside expanded element for luxury atmosphere */}
                  <div className={`absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 text-[#f5f0ea] transition-all duration-500 ${
                    isTextVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 pointer-events-none translate-y-4'
                  }`}>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="font-syne font-black tracking-tight uppercase leading-none text-base sm:text-xl lg:text-2xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]">
                          {item.title}
                        </h4>
                      </div>
                      <ArrowUpRight className="opacity-85 flex-shrink-0 mb-0.5 transition-all duration-300 w-5 h-5 sm:w-7 sm:h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

        </div>
      </section>

      {/* Section 7 — Ausgeführte Projekte 20-Projects Grid */}
      <section 
        id="listings" 
        className="relative z-30 bg-[#f5f0ea] pt-24 pb-0 border-t border-black/5"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-syne text-xs uppercase tracking-[0.25em] text-[#5c0612]/60 font-semibold block mb-3">
                Katalog der Ästhetik
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[#5c0612] tracking-[-0.03em] leading-none">
                Ausgeführte Projekte
              </h2>
              <p className="font-syne text-lg md:text-2xl text-[#5c0612]/70 tracking-tight font-light mt-4 max-w-2xl">
                Dreißig Jahre, verdichtet in Stein, Glas und Licht.
              </p>
            </div>
            
            {/* Architectural Filter Menu */}
            <div className="flex flex-wrap gap-2 text-xs font-mono tracking-wider">
              {['Alle', 'Wohnen', 'Gewerbe', 'Sanierung', 'Planung'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 border transition-all duration-300 rounded-full font-medium ${
                    activeCategory === cat
                      ? 'bg-[#5c0612] text-[#f5f0ea] border-[#5c0612]'
                      : 'bg-transparent text-[#5c0612] border-[#5c0612]/20 hover:border-[#5c0612]/50'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 20 Projects Grid - Completely seamless & elegant monochrome-style grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-0">
          {PROJECTS_LIST.filter(p => activeCategory === 'Alle' || p.category === activeCategory).map((proj) => {
            return (
              <div 
                key={proj.id}
                className="group relative aspect-square w-full overflow-hidden cursor-pointer bg-[#5c0612]"
              >
                {/* Image with sophisticated premium monochrome filter effect mimicking the user's photos */}
                <img 
                  src={proj.img} 
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-30 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Minimal Hover Overlay - contains Project description & locations */}
                <div className="absolute inset-0 bg-[#5c0612]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-10">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[9px] tracking-widest text-[#f5f0ea]/60 uppercase block mb-1">
                      {proj.category}
                    </span>
                    <h4 className="font-syne text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider text-[#f5f0ea] leading-tight mb-2">
                      {proj.title}
                    </h4>
                    <span className="font-sans text-[10px] text-[#f5f0ea]/80 block">
                      {proj.location} • {proj.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 8 — Contact Us (Kontakt) */}
      <section 
        ref={darkSec3Ref}
        id="kontakt" 
        className="bg-[#1a1a1a] text-[#f5f0ea] py-24 px-6 md:px-10 lg:px-16 border-t border-white/5 relative z-30"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32 items-stretch">
          
          {/* Left Column: Office locations and information */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-syne text-xs uppercase tracking-[0.25em] text-white/50 block mb-3">
                Unverbindliche Beratung
              </span>
              <h2 className="font-syne text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase text-white tracking-[-0.04em] leading-[1.05] mb-6 break-words">
                Kontaktieren<br />Sie Uns
              </h2>
              <p className="font-sans font-light text-white/60 text-sm max-w-sm leading-relaxed">
                Unsere Spezialisten stehen anspruchsvollen Bauherren weltweit zur Verfügung. Treten Sie mit uns in Kontakt, um Ihre Vision Realität werden zu lassen.
              </p>
            </div>

            {/* Structured offices block */}
            <div className="hidden md:block mt-12 space-y-6">
              <div className="border-l border-white/20 pl-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 block">Office Visp</span>
                <p className="font-sans text-xs text-white/80 mt-1">
                  Terbinerstrasse 28<br />
                  Postfach 26<br />
                  3930 Visp
                </p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 block">Office Murten</span>
                <p className="font-sans text-xs text-white/80 mt-1">
                  Irisweg 14<br />
                  3280 Murten
                </p>
              </div>

              <div className="border-l border-white/20 pl-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/40 block">Kontakt</span>
                <p className="font-mono text-[10px] text-white/60 mt-1">
                  <a href="tel:+41789136572" className="hover:text-white transition-colors">+41 78 913 65 72</a>
                </p>
                <p className="font-mono text-[10px] text-white/60 mt-0.5">
                  <a href="mailto:swiss.realplan.immo@gmx.ch" className="hover:text-white transition-colors">swiss.realplan.immo@gmx.ch</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Interactive Form */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-10">
            {contactSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-6">
                  <ArrowUpRight size={32} className="text-[#f5f0ea] animate-pulse" />
                </div>
                <h3 className="font-syne text-2xl font-bold uppercase tracking-tight text-white mb-3">
                  Anfrage erhalten
                </h3>
                <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed">
                  Vielen Dank für Ihr Vertrauen in <strong>swissrealplan.</strong>. Ein persönlicher Luxury-Portfolio-Berater wird Ihre Anfrage prüfen und sich innerhalb der nächsten 3 Stunden telefonisch oder per E-Mail bei Ihnen melden.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="mt-8 font-mono text-[10px] tracking-widest uppercase text-white/50 hover:text-white underline decoration-white/20 transition-colors"
                >
                  Neue Anfrage senden
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  setContactSubmitted(true); 

                  // Construct and trigger mailto link to route directly to requested email
                  const subject = `Neue Anfrage über swissrealplan: ${contactForm.interest}`;
                  const body = `Name: ${contactForm.name}\nE-Mail: ${contactForm.email}\nTelefon: ${contactForm.phone || 'Nicht angegeben'}\nInteressenbereich: ${contactForm.interest}\n\nNachricht:\n${contactForm.message}`;
                  
                  const mailtoUrl = `mailto:swiss.realplan.immo@gmx.ch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.location.href = mailtoUrl;
                }} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-2">Vor- & Nachname *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Z.B. ALEXANDER MÜLLER"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/20 text-xs focus:outline-none focus:border-white/50 transition-colors uppercase font-mono"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-2">Telefonnummer</label>
                    <input 
                      type="tel" 
                      placeholder="+41 (0) 79 000 00 00"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/20 text-xs focus:outline-none focus:border-white/50 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email field */}
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-2">E-Mail-Adresse *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="MUELLER@PROPRIETARY.COM"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-3 placeholder:text-white/20 text-xs focus:outline-none focus:border-white/50 transition-colors uppercase font-mono"
                    />
                  </div>

                  {/* Interest selector */}
                  <div>
                    <label className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-2">Interessenbereich *</label>
                    <select
                      value={contactForm.interest}
                      onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                      className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-3 text-xs focus:outline-none focus:border-white/50 transition-colors uppercase font-mono"
                    >
                      <option value="Wohnen">Wohnen / Residences</option>
                      <option value="Gewerbe">Gewerbebau</option>
                      <option value="Sanierung">Sanierungen</option>
                      <option value="Planung">Projektierung & Planung</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-2">Nachricht / Anfrage-Details *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="BITTE BESCHREIBEN SIE IHRE ARCHITEKTONISCHEN WAHLEN ODER DIE REF-NUMMERN DER GEWÜNSCHTEN RESIDENZEN..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-[#111] text-white border border-white/10 rounded-lg px-4 py-4 placeholder:text-white/20 text-xs focus:outline-none focus:border-white/50 transition-colors uppercase font-mono"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#f5f0ea] hover:bg-[#e8e4df] text-[#5c0612] py-4 rounded-lg font-syne font-bold uppercase tracking-widest text-xs transition-colors flex items-center justify-center gap-2"
                >
                  Unverbindlich Anfragen
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
        </>
      ) : (
        <>
          {/* Refined Section 3 - Architecture Editorial Hero */}
          <section id="architektur-hero" className="pt-36 sm:pt-44 pb-20 px-6 md:px-10 lg:px-16 max-w-5xl mx-auto border-b border-[#5c0612]/10">
            <div className="space-y-12">
              {/* Header: Title and subtitle tagline stacked vertically */}
              <div className="space-y-6">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#5c0612]/60 font-semibold block animate-fade-in">
                  KOMPETENZBEREICHE
                </span>
                <h1 className="font-syne text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-black uppercase text-[#5c0612] tracking-[-0.04em] leading-[0.95] sm:leading-[0.9] animate-fade-in break-words">
                  Architektur<br />leistungen
                </h1>
                <p className="font-syne text-xl sm:text-2xl md:text-3xl text-[#5c0612]/90 tracking-tight font-light leading-relaxed max-w-3xl animate-fade-in">
                  Von der ersten Skizze bis zur Schlüsselübergabe — zehn Disziplinen, ein kompromissloses Verständnis von Qualität.
                </p>
              </div>

              {/* Sub-details: description stacked clearly below, in horizontal alignment reading order */}
              <div className="pt-4 border-t border-[#5c0612]/5 max-w-2xl">
                <div className="border-l-2 border-[#5c0612]/20 pl-6 space-y-4">
                  <p className="font-sans font-light text-neutral-600 text-sm sm:text-base leading-relaxed">
                    Wir denken Architektur als einen zusammenhängenden, ganzheitlichen Prozess. Jede Leistung greift nahtlos in die nächste, jeder Schritt baut auf dem vorhergehenden auf — präzise, transparent und mit Schweizer Sorgfalt.
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-[#5c0612]/60 uppercase">
                    SEIT 2012 / PRIVATE BAUPLANUNG
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Staggered Swiss Museum Layout of 10 Performances */}
          <section id="services-list" className="py-24 bg-[#fcfbf9]/60">
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-20 lg:gap-y-36">
                {SERVICE_ITEMS.map((service, index) => {
                  const isStaggered = index % 2 !== 0;
                  return (
                    <div 
                      key={service.id} 
                      id={service.id}
                      className={`flex flex-col group transition-transform duration-550 ${isStaggered ? 'md:translate-y-20 lg:translate-y-32' : ''}`}
                    >
                      {/* Image Box with thin elegant border and zoom transition */}
                      <div className="relative aspect-[3/2] sm:aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 shadow-md border border-neutral-200/50 mb-8">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700 ease-out"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        {/* Elegant overlay card index */}
                        <div className="absolute bottom-6 right-6 font-syne text-5xl sm:text-6xl font-light text-white/30 tracking-tighter select-none pointer-events-none">
                          {service.number}
                        </div>
                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded text-[9px] font-mono tracking-widest text-white/90 uppercase">
                          {service.subtitle}
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="pl-1">
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="font-mono text-xs text-[#5c0612]/50 font-bold">{service.number} //</span>
                          <h3 className="font-syne text-xl sm:text-2xl font-bold uppercase text-[#5c0612] tracking-normal leading-tight">
                            {service.title}
                          </h3>
                        </div>
                        
                        <p className="font-sans font-light text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 mt-3">
                          {service.description}
                        </p>
                        
                        <div>
                          <button
                            onClick={() => handleInquiryLink(service.title)}
                            className="inline-flex items-center gap-2 group/btn font-syne text-xs uppercase font-bold tracking-wider py-1.5 text-[#5c0612] cursor-pointer hover:opacity-80 transition-opacity"
                          >
                            <span className="relative py-0.5">
                              Anfragen
                              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#5c0612] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </span>
                            <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Stagger spacer for staggered grid bottom */}
          <div className="h-20 lg:h-40 hidden md:block" />

          {/* Refined Luxury Besprechung CTA Center Banner */}
          <section 
            ref={architekturCtaRef}
            className="bg-[#5c0612] text-[#f5f0ea] py-24 sm:py-32 px-6 md:px-10 lg:px-16 border-t border-white/5 relative z-30 font-sans"
          >
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/60 block">
                GEMEINSAM GESTALTEN
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-[-0.04em] leading-[0.95]">
                Lassen Sie uns Ihr<br />Projekt besprechen
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-[#f5f0ea]/85 tracking-normal font-light max-w-2xl mx-auto leading-relaxed">
                Ob persönliche Machbarkeitsstudie, exklusiver Neubau oder schlüsselfertige Totalunternehmung — wir nehmen uns Zeit, Ihre Vision ganzheitlich zu verstehen.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      const formEl = document.getElementById('kontakt');
                      if (formEl) {
                        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="bg-[#f5f0ea] hover:bg-[#e8e4df] text-[#5c0612] px-10 py-5 rounded-full font-syne font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-xl hover:scale-[1.02] active:scale-95 cursor-pointer inline-flex items-center gap-3"
                >
                  Kontakt aufnehmen
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Slick responsive interactive footnote section anchor */}
      <footer id="inquire" className="relative z-30 bg-[#5c0612] text-[#f5f0ea] py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-white/40 gap-4">
          <div>
            © {new Date().getFullYear()} SWISSREALPLAN PRIVATE LIMITED. ALLE RECHTE VORBEHALTEN.
          </div>
          <div className="flex gap-6 uppercase font-mono">
            <a 
              href="#story" 
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('story')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
              }}
              className="hover:text-white transition-colors"
            >
              Geschichte
            </a>
            <a 
              href="#residences" 
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('residences')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
              }}
              className="hover:text-white transition-colors"
            >
              Residenzen
            </a>
            <a 
              href="#listings" 
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
                setTimeout(() => {
                  document.getElementById('listings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
              }}
              className="hover:text-white transition-colors"
            >
              Projekte
            </a>
          </div>
        </div>
      </footer>

      {showComingSoon && (
        <div id="coming-soon-modal" className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#f5f0ea] border border-[#5c0612]/30 p-8 sm:p-12 rounded-xl max-w-md w-full shadow-2xl relative text-center">
            <button 
              onClick={() => setShowComingSoon(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors p-1"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <span className="font-mono text-[10px] tracking-widest text-[#5c0612] uppercase block mb-3">swissrealplan</span>
            <h3 className="font-syne text-[#5c0612] text-xl sm:text-2xl font-bold uppercase tracking-wider mb-3">In Kürze</h3>
            <p className="font-sans font-light text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              „Green Village in Visp“ befindet sich derzeit in der Planungsphase. Lassen Sie sich benachrichtigen, sobald der Verkauf startet und das digitale Abbild dieser Architektur enthüllt wird.
            </p>
            <button 
              onClick={() => setShowComingSoon(false)}
              className="w-full bg-[#5c0612] hover:bg-[#43040c] text-white py-3.5 px-6 rounded-lg font-syne font-semibold uppercase tracking-widest text-xs transition-colors"
            >
              Schliessen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
