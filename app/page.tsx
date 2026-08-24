"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BarChart3,
  Binary,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Eye,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Leaf,
  Mail,
  Medal,
  MapPin,
  Menu,
  Network,
  Newspaper,
  PenLine,
  Search,
  ShieldCheck,
  Sigma,
  Sparkles,
  Telescope,
  Trophy,
  Users,
  UsersRound,
  Waves,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function BrandIcon({ path, size = 18, color }: { path: string; size?: number; strokeWidth?: number; color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

const FacebookIcon = (props: { size?: number; strokeWidth?: number }) => (
  <BrandIcon
    {...props}
    color="#1877F2"
    path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
  />
);

const LinkedinIcon = (props: { size?: number; strokeWidth?: number }) => (
  <BrandIcon
    {...props}
    color="#0A66C2"
    path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  />
);

const GmailIcon = (props: { size?: number; strokeWidth?: number }) => (
  <BrandIcon
    {...props}
    color="#EA4335"
    path="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.588.328-1.02.822-1.298l.001-.001a1.68 1.68 0 0 1 1.6.14L12 9.977l9.577-5.68a1.634 1.634 0 0 1 1.601-.14c.494.278.822.71.822 1.3z"
  />
);

const profile = {
  name: "Apurbo Kumar",
  title: "Civil Engineering | Data Science & Artificial Intelligence | AI Research | Mathematics",
  summary:
    "Undergraduate researcher exploring Artificial Intelligence, Machine Learning, Computer Vision, Reinforcement Learning and interdisciplinary engineering applications.",
  email: "apurbokumar1355@gmail.com",
  emails: [
    { label: "Personal", address: "apurbokumar1355@gmail.com" },
    { label: "BUET", address: "2004017@ce.buet.ac.bd" },
    { label: "IIT Guwahati", address: "k.apurbo@op.iitg.ac.in" },
    { label: "Math Olympiad", address: "k.apurbo@matholympiad.org.bd" },
  ],
  location: "Bangladesh",
  image: "/apurbo-kumar.jpg",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/apurbo-kumar17", icon: LinkedinIcon },
    { label: "Facebook", href: "https://facebook.com/apurbo.kumar.10844", icon: FacebookIcon },
    { label: "Gmail", href: "mailto:apurbokumar1355@gmail.com", icon: GmailIcon },
  ],
};

const education = [
  {
    id: "buet",
    mark: "BUET",
    university: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "B.Sc. in Civil Engineering",
  },
  {
    id: "iitg",
    mark: "IIT",
    university: "Indian Institute of Technology Guwahati",
    degree: "B.Sc. in Data Science & Artificial Intelligence",
  },
  {
    id: "uopeople",
    mark: "UoPeople",
    university: "University of the People",
    degree: "B.Sc. in Computer Science",
  },
];

const researchItems = [
  {
    id: "r1",
    title:
      "An Offline-First Raspberry Pi-based IoT Health Monitoring System for Low-Connectivity Environments with Realtime Dashboard",
    status: "Published",
    category: "Published",
    authors: "Apurbo Kumar, Collaborators",
    abstract:
      "A resilient offline-first health monitoring system designed for low-connectivity environments, integrating Raspberry Pi, IoT sensors, edge processing, and real-time dashboards.",
    venue: "International Conference",
    keywords: ["IoT", "Healthcare", "Embedded Systems", "Dashboard"],
    link: "https://ieeexplore.ieee.org/document/11619711/figures?fbclid=IwdGRleAT4BRxwZG9mBWV4dG4DYWVtAjExAHNydGMGYXBwX2lkCjY2Mjg1NjgzNzkAAR4Ryi65-unOjXexzYzaYxSfOv7oaAwbRLVy247qSX_pRlhou7OtqRKTxo_EDw_aem_vB6pM7sNfhpCbQYVk6HYnA#figures",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "r2",
    title:
      "PHYSICS-CONSTRAINED MONOTONIC GRADIENT BOOSTING WITH EARTHQUAKE-HELD-OUT VALIDATION AND CONFORMAL UNCERTAINTY FOR SPT-BASED LIQUEFACTION ASSESSMENT",
    status: "Preliminary Accepted",
    category: "Accepted",
    authors: "Apurbo Kumar, Author",
    abstract:
      "A physics-informed dual-stream transformer framework that integrates causal disentanglement, domain generalization, and conformal risk calibration for robust geotechnical assessment.",
    venue: "Preliminary accepted research",
    keywords: ["AI", "Earthquake", "Liquefaction", "Physics-Informed"],
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "r3",
    title:
      "Mitigating Colour Calibration Patch Shortcuts in Dermoscopic Melanoma Classification with Balanced Empirical Risk Minimization",
    status: "Submitted",
    category: "Submitted",
    authors: "Apurbo Kumar, Co-author",
    abstract:
      "Addressing shortcut learning in dermoscopic imaging through balanced empirical risk minimization and calibration-aware evaluation.",
    venue: "Under review",
    keywords: ["Computer Vision", "Medical AI", "Dermoscopy"],
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "r4",
    title:
      "SoftCausalMask: An Interpretable Differentiable Soft-Masking Framework for Spurious Correlation Mitigation",
    status: "Submitted",
    category: "Submitted",
    authors: "Apurbo Kumar, Author",
    abstract:
      "A differentiable soft-masking method to mitigate spurious correlations while preserving model interpretability and robustness.",
    venue: "Under review",
    keywords: ["Interpretability", "Causal Learning", "AI"],
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "r5",
    title: "Quality-Gated Illumination Enhancement for Robust Diabetic Retinopathy Grading in Low-Resource Settings",
    status: "Submitted",
    category: "Submitted",
    authors: "Apurbo Kumar, Co-author",
    abstract:
      "A quality-aware illumination enhancement approach designed to improve the robustness of diabetic retinopathy grading in low-resource clinical imaging settings.",
    venue: "Under review",
    keywords: ["Medical AI", "Computer Vision", "Diabetic Retinopathy"],
    thumbnail:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
];

const researchInterests = [
  { name: "Artificial Intelligence", icon: BrainCircuit, color: "from-cyan-400 to-blue-500" },
  { name: "Machine Learning", icon: Network, color: "from-blue-400 to-indigo-500" },
  { name: "Deep Learning", icon: Cpu, color: "from-violet-400 to-fuchsia-500" },
  { name: "Computer Vision", icon: Eye, color: "from-amber-400 to-orange-500" },
  { name: "Reinforcement Learning", icon: Sparkles, color: "from-emerald-400 to-teal-500" },
  { name: "Generative AI", icon: Code2, color: "from-pink-400 to-rose-500" },
  { name: "Cybersecurity", icon: ShieldCheck, color: "from-slate-300 to-slate-500" },
  { name: "Data Analysis", icon: BarChart3, color: "from-sky-400 to-cyan-500" },
  { name: "Sustainable Engineering", icon: Leaf, color: "from-lime-400 to-green-500" },
  { name: "Environmental Engineering", icon: Waves, color: "from-teal-400 to-blue-500" },
  { name: "AI for Engineering", icon: Building2, color: "from-orange-400 to-amber-500" },
];

const internationalActivities = [
  { title: "International Mathematical Olympiad (IMO) 2026", role: "Deputy Leader", location: "Shanghai, China", category: "Olympiad", icon: Trophy, color: "from-amber-400 to-orange-500" },
  { title: "International Mathematics Summer Camp (IMSC) 2026", role: "Trainer", location: "Beijing, China", category: "Training", icon: GraduationCap, color: "from-cyan-400 to-blue-500" },
  { title: "4th KhIMIO 2026", role: "Country Coordinator", location: "Uzbekistan", category: "Leadership", icon: UsersRound, color: "from-violet-400 to-fuchsia-500" },
  { title: "Recognition associated with Harvard University", role: "AI-Integrated Leader", location: "USA", category: "Research", icon: FlaskConical, color: "from-rose-400 to-pink-500" },
  { title: "Aspire Leaders Program", role: "Aspire Leader", location: "Remote", category: "Leadership", icon: UsersRound, color: "from-violet-400 to-indigo-500" },
  { title: "South Asian Division Champion 2026", role: "Champion", location: "South Asia", category: "Awards", icon: Medal, color: "from-amber-400 to-yellow-500" },
  { title: "International Academic Research Competition", role: "13th Place", location: "International", category: "Research", icon: FlaskConical, color: "from-rose-400 to-orange-500" },
  { title: "Physics Brawl", role: "97th Position among 500+ teams", location: "International", category: "Awards", icon: Trophy, color: "from-amber-400 to-orange-500" },
  { title: "International Data Science Olympiad", role: "Silver Medal", location: "Hong Kong", category: "Awards", icon: Medal, color: "from-slate-300 to-slate-500" },
  { title: "International Astronomy and Astrophysics Competition", role: "Silver Honour — Top 15%", location: "International", category: "Awards", icon: Telescope, color: "from-indigo-400 to-cyan-500" },
  { title: "International Youth Math Challenge", role: "Silver Honour — Top 15%", location: "International", category: "Awards", icon: Medal, color: "from-slate-300 to-blue-400" },
  { title: "iSmart Quiz", role: "Champion — Engineering Category", location: "Engineering Category", category: "Awards", icon: Trophy, color: "from-yellow-400 to-amber-500" },
];

const initiatives = [
  {
    title: "ML & AI Research Lab, Bangladesh",
    role: "Founder",
    description: "Research and training initiative focused on Machine Learning and Artificial Intelligence.",
    achievements: ["AI research training", "Student-led labs", "Collaborative workshops"],
    icon: BrainCircuit,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "International Opportunity Desk",
    role: "Founder",
    description: "Shares international academic, competition, leadership and research opportunities.",
    achievements: ["Opportunity dissemination", "Academic guidance", "Peer networking"],
    icon: Network,
    color: "from-violet-400 to-fuchsia-500",
  },
];

const committeeRoles = [
  { title: "Academic Coordinator & Academic Sub-Committee Member", org: "Bangladesh Mathematical Olympiad" },
  { title: "President and Senior Rover Mate", org: "BUET Rover Scout Group" },
  { title: "President", org: "BUET Brain Teaser Club (Math Club)" },
  { title: "Publication Secretary", org: "SBSC, BUET" },
];

const courses = [
  { name: "Cyber Diplomacy", organization: "United Nations Office for Disarmament Affairs", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" },
  { name: "Applied AI: Deep Learning for Computer Vision", organization: "WorldQuant University", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" },
  { name: "Deep Learning", organization: "WorldQuant University", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" },
  { name: "Computer Vision", organization: "WorldQuant University", image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?auto=format&fit=crop&w=1200&q=80" },
];

const skillGroups = [
  { title: "Programming & Tools", accent: "from-cyan-400 to-blue-500", items: ["Python", "C", "C++", "MATLAB", "Kali Linux", "AutoCAD"] },
  { title: "AI / Research", accent: "from-violet-400 to-fuchsia-500", items: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Computer Vision", "Reinforcement Learning", "Cybersecurity"] },
  { title: "Productivity", accent: "from-amber-400 to-orange-500", items: ["Microsoft PowerPoint", "Microsoft Word", "Microsoft Excel", "Canva", "OpenAI (ChatGPT)", "Anthropic (Claude)", "Google AI (Gemini)", "GitHub Copilot", "Perplexity", "Notion AI"] },
];

const mediaItems = [
  { id: "m0", videoUrl: "https://www.youtube.com/embed/YXNLOH5ZLs0" },
  { id: "m1", videoUrl: "https://www.youtube.com/embed/APad0lSW3qQ" },
  { id: "m2", videoUrl: "https://www.youtube.com/embed/6AMIO_lpSz8" },
  { id: "m3", videoUrl: "https://www.youtube.com/embed/4SZyjZziR8k" },
  { id: "m4", videoUrl: "https://www.youtube.com/embed/SQXUGYtAOAM" },
  { id: "m5", videoUrl: "https://www.youtube.com/embed/SoKqBuO20zU" },
  { id: "m6", videoUrl: "https://www.youtube.com/embed/2QXa6HRRDBo" },
];

const pressFeatures = [
  { id: "p1", outlet: "Prothom Alo", title: "সাংহাইয়ে গণিতের বিশ্বমঞ্চে লাল-সবুজ", date: "Jul 2026", link: "https://www.prothomalo.com/bangladesh/06ufb67klf" },
  { id: "p2", outlet: "Prothom Alo", title: "'আরেক বিশ্বকাপে' অংশ নিতে বাংলাদেশ দল এখন চীনে", date: "Jun 2026", link: "https://www.prothomalo.com/lifestyle/w2j6qf2956" },
  { id: "p3", outlet: "Kalbela", title: "বুয়েটে শুরু হয়েছে ঢাকা জেলা রোভারের দিনব্যাপী ডে ক্যাম্প ২০২৬", date: "2026", link: "https://www.kalbela.com/corporate/314611" },
  { id: "p4", outlet: "Bhorer Dak", title: "বুয়েটে ঢাকা জেলা রোভারের স্কিলড বেইজড 'ডে ক্যাম্প ২০২৬' অনুষ্ঠিত", date: "Aug 2026", link: "https://www.dailybhorerdak.com/news/259206" },
  { id: "p6", outlet: "Prothom Alo", title: "শহরের কোন তিনটি সমস্যা সমাধানের পথ দেখিয়ে পুরস্কার জিতলেন বুয়েটের শিক্ষার্থীরা", date: "Nov 2025", link: "https://www.prothomalo.com/lifestyle/5ofzw6o97o" },
  { id: "p7", outlet: "Bangladesh Pratidin", title: "বুয়েটের অপূর্বের নেতৃত্বে 'নিউরাল নিনজাস' দলের আন্তর্জাতিক সাফল্য", date: "Nov 2025", link: "https://www.bd-pratidin.com/campus-online/2025/11/08/1177257" },
];

const articles = [
  { id: "a1", outlet: "Bigganchinta", title: "এআই কি এখন গণিত অলিম্পিয়াডের প্রশ্ন সমাধান করতে পারে", date: "Aug 2026", link: "https://www.bigganchinta.com/technology/vww1t8fqn9" },
  { id: "a2", outlet: "Bigganchinta", title: "গণিতের পরীক্ষক যখন কম্পিউটার", date: "Aug 2026", link: "https://www.bigganchinta.com/math/8qg6zy1mho" },
];

const navItems = ["Home", "About", "Education", "Research", "International", "Leadership", "Courses", "Skills", "Media", "Press", "Articles", "Contact"];

const orbitSymbols = [BrainCircuit, Sigma, Cpu, Binary, Network, Atom];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setContactStatus("error");
      console.error("Missing EmailJS environment variables. Check .env.local.");
      return;
    }

    setContactStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, { publicKey });
      setContactStatus("sent");
      event.currentTarget.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setContactStatus("error");
    }
  };

  return (
    <>
      <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)] transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-cyan-200/40 bg-linear-to-r from-cyan-600 via-blue-600 to-violet-600 text-white shadow-[0_8px_24px_rgba(37,99,235,0.3)]">
        <div className="section-shell flex items-center justify-between py-3 md:py-4">
          <Link href="#home" className="text-xl font-semibold tracking-tight text-white">Apurbo Kumar</Link>
          <nav className="hidden items-center gap-4 xl:gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`} className="text-sm font-semibold text-white/90 transition-all duration-200 hover:text-white active:scale-95">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button type="button" aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)} className="rounded-xl border border-white/30 bg-white/15 p-2 text-white transition-all duration-200 hover:bg-white/25 active:scale-90 lg:hidden">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <nav className={`${isMenuOpen ? "grid" : "hidden"} border-t border-white/20 bg-slate-950/20 px-4 py-3 lg:hidden`}>
          <div className="section-shell grid gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-white/90 transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="home" className="section-shell grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            <Sparkles size={14} /> Researcher • Engineer • Mentor
          </div>
          <h1 className="animate-text-reveal text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">Apurbo Kumar</h1>
          <div className="animate-text-reveal animate-text-delay-1 mt-4 text-xl font-medium text-slate-700 dark:text-slate-200">
            <span className="gradient-text">{profile.title}</span>
          </div>
          <div className="animate-text-reveal animate-text-delay-2 mt-5 flex min-h-12 flex-col text-lg font-medium text-slate-600 dark:text-slate-300">
            {['AI Research', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Mathematics', 'Engineering', 'International Olympiads'].map((t, i) => (
              <div key={t} style={{ animationDelay: `${i * 140}ms` }} className="animate-pulse">{t}</div>
            ))}
          </div>
          <p className="animate-text-reveal animate-text-delay-3 mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">{profile.summary}</p>
          <div className="animate-text-reveal animate-text-delay-4 mt-8 flex flex-wrap gap-3">
            <a href="#research" className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-500 via-blue-600 to-violet-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 active:scale-95 active:translate-y-0">View Research <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900 hover:text-white active:scale-95 active:translate-y-0">Explore Portfolio <Telescope size={16} /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-200 shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-slate-900 hover:text-white active:scale-95 active:translate-y-0">Contact Me <Mail size={16} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="hero-photo relative">
          <div className="glass relative mx-auto h-72 w-72 overflow-hidden rounded-full p-4 sm:h-96 sm:w-96 lg:h-110 lg:w-110">
            <div className="absolute inset-0 bg-mesh opacity-80" />
            <div className="relative h-full w-full rounded-full border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/80 dark:bg-slate-900/70">
              <img src={profile.image} alt={profile.name} className="animate-photo h-full w-full rounded-full object-cover" />
            </div>
          </div>
          <div className="orbit-ring pointer-events-none absolute inset-0">
            {orbitSymbols.map((Icon, index) => (
              <div key={index} className="orbit-item" style={{ "--orbit-angle": `${(360 / orbitSymbols.length) * index}deg` } as React.CSSProperties}>
                <div className="orbit-icon">
                  <Icon size={18} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="about" className="section-shell py-20 md:py-28">
        <SectionHeading title="Professional Summary" icon={<Sparkles size={18} />} />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass relative overflow-hidden rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
                Apurbo Kumar is an undergraduate student of Civil Engineering at Bangladesh University of Engineering and Technology (BUET), concurrently pursuing another undergraduate degree in Data Science and Artificial Intelligence at the Indian Institute of Technology Guwahati.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300">
                He has participated in national and international academic, research and leadership activities and has experience in mathematics training, artificial intelligence research, organisational leadership and youth initiatives.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300">
                He founded or helped develop initiatives including ML & AI Research Lab, Bangladesh; Math Wallah; and International Opportunity Desk. His research interests span artificial intelligence, machine learning, deep learning, computer vision, reinforcement learning, cybersecurity and interdisciplinary engineering applications.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { label: "Research interests", value: "AI • ML • CV • RL", accent: "from-cyan-400 to-blue-500" },
                { label: "Leadership", value: "Founder-led initiatives", accent: "from-violet-400 to-fuchsia-500" },
                { label: "International", value: "Global academic exposure", accent: "from-amber-400 to-orange-500" },
                { label: "Focus", value: "Engineering + AI", accent: "from-emerald-400 to-teal-500" },
              ].map((item) => (
                <div key={item.label} className="wc-card group relative overflow-hidden rounded-2xl border border-white/20 bg-slate-950/75 p-5 shadow-lg shadow-slate-950/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b ${item.accent}`} />
                  <div className="pl-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">{item.label}</div>
                  <div className="mt-3 pl-2 text-lg font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="education" className="section-shell py-20 md:py-28">
        <SectionHeading title="Education" icon={<GraduationCap size={18} />} />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }} className="glass group relative overflow-hidden rounded-[2rem] border-white/10 bg-slate-950/70 p-8 shadow-xl shadow-slate-950/10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-violet-400/20" />
              <div className="flex items-center gap-4">
                <div className="relative flex min-h-14 min-w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400/25 to-violet-500/30 px-2 text-center text-sm font-black tracking-tight text-cyan-300 ring-1 ring-white/10">
                  {item.mark}
                </div>
                <div className="relative min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">University</p>
                  <h3 className="mt-2 text-xl font-bold leading-tight text-white">{item.university}</h3>
                </div>
              </div>
              <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">Degree</p>
                <p className="mt-2 text-lg font-semibold leading-snug text-white">{item.degree}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="research" className="section-shell py-20 md:py-28">
        <SectionHeading title="Research Interests" icon={<BrainCircuit size={18} />} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((interest, idx) => {
            const Icon = interest.icon;
            return (
            <motion.div key={interest.name} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} whileHover={{ y: -5 }} className="glass group relative overflow-hidden rounded-2xl border-white/10 bg-slate-950/65 p-5 text-center shadow-lg shadow-slate-950/10 transition duration-300">
              <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${interest.color} text-white shadow-lg shadow-slate-950/20 transition duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <div className="font-semibold text-white">{interest.name}</div>
            </motion.div>
            );
          })}
        </div>

        <div className="mt-16">
          <SectionHeading title="Research" icon={<Search size={18} />} />
          <div className="mb-8 flex flex-wrap gap-3">
            {[
              { label: "Published", href: "#paper-r1", classes: "border-emerald-300/25 bg-emerald-400/10 text-emerald-200 hover:border-emerald-300/60 hover:bg-emerald-400/20 hover:shadow-emerald-500/20" },
              { label: "Accepted", href: "#paper-r2", classes: "border-sky-300/25 bg-sky-400/10 text-sky-200 hover:border-sky-300/60 hover:bg-sky-400/20 hover:shadow-sky-500/20" },
              { label: "Submitted", href: "#paper-r3", classes: "border-rose-300/25 bg-rose-400/10 text-rose-200 hover:border-rose-300/60 hover:bg-rose-400/20 hover:shadow-rose-500/20" },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className={`rounded-full border ${item.classes} px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors duration-300 hover:shadow-lg`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.span whileHover={{ y: -3 }} className="rounded-full border border-violet-300/25 bg-violet-400/10 px-5 py-2.5 text-sm font-semibold text-violet-200 backdrop-blur-sm transition-colors duration-300 hover:border-violet-300/60 hover:bg-violet-400/20 hover:shadow-lg hover:shadow-violet-500/20">
              Ongoing
            </motion.span>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {researchItems.map((item, index) => (
              <motion.article id={`paper-${item.id}`} key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -6 }} className="wc-card scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-xl shadow-slate-950/20 transition-shadow hover:border-cyan-300/30 hover:shadow-cyan-950/30">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/15 to-transparent" />
                  <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">{item.category}</span>
                </div>
                <div className="p-6 md:p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">{item.status}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">Research paper</span>
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-white">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium text-cyan-200/80">{item.authors}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.abstract}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">{keyword}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm">
                    <span className="text-slate-400">{item.venue}</span>
                    <a href={item.link ?? "#"} target={item.link ? "_blank" : undefined} rel={item.link ? "noreferrer" : undefined} aria-label={item.link ? `Read published paper: ${item.title}` : `Read more about ${item.title}`} className="inline-flex items-center gap-2 font-medium text-sky-600 underline decoration-sky-400/40 underline-offset-4 transition hover:text-sky-500 hover:decoration-sky-500 dark:text-sky-300 dark:hover:text-sky-200">Read more <ChevronRight size={16} /></a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="international" className="section-shell py-20 md:py-28">
        <SectionHeading title="International Involvement" icon={<Network size={18} />} />
        <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-950/55 p-2 shadow-lg shadow-slate-950/10 backdrop-blur-sm">
          {['All', 'Olympiad', 'Research', 'Leadership', 'Training', 'Awards'].map((item) => (
            <a key={item} href={item === 'All' ? '#international' : `#international-${item.toLowerCase()}`} className={`rounded-xl border px-4 py-2 text-sm font-semibold transition duration-300 ${item === 'All' ? 'border-cyan-300/40 bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/30' : 'border-transparent text-slate-300 hover:border-white/10 hover:bg-white/10 hover:text-white'}`}>{item}</a>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {internationalActivities.map((item, idx) => (
            <motion.div id={internationalActivities.findIndex((activity) => activity.category === item.category) === idx ? `international-${item.category.toLowerCase()}` : undefined} key={`${item.title}-${idx}`} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} whileHover={{ y: -5 }} className="scroll-mt-28 glass group relative overflow-hidden rounded-2xl border-white/10 bg-slate-950/75 p-5 shadow-lg shadow-slate-950/10 transition duration-300 hover:border-cyan-300/25 hover:shadow-cyan-950/20">
              <div className={`absolute -right-6 -top-8 h-24 w-24 rounded-full bg-linear-to-br ${item.color} opacity-15 blur-2xl transition duration-500 group-hover:opacity-30`} />
              <div className="relative mb-5 flex items-start justify-between gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white shadow-lg shadow-slate-950/20 transition duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <item.icon size={21} strokeWidth={1.8} />
                </div>
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.category}</span>
              </div>
              <div className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.role}</div>
              <h3 className="relative mt-3 text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="relative mt-3 flex items-center gap-2 text-sm text-slate-300"><MapPin size={14} className="text-cyan-300" />{item.location}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="leadership" className="section-shell py-20 md:py-28">
        <SectionHeading title="Leadership & Initiatives" icon={<Users size={18} />} />
        <div className="grid gap-6 lg:grid-cols-2">
          {initiatives.map((item,index) => (
            <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index*0.08 }} whileHover={{ y: -6 }} className="glass group relative overflow-hidden rounded-[2rem] border-white/10 bg-slate-950/75 p-7 shadow-xl shadow-slate-950/10 transition duration-300 hover:border-cyan-300/25">
              <div className={`absolute -right-8 -top-8 h-36 w-36 rounded-full bg-linear-to-br ${item.color} opacity-15 blur-3xl transition duration-500 group-hover:opacity-30`} />
              <div className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${item.color} text-white shadow-lg shadow-slate-950/20 transition duration-300 group-hover:scale-110 group-hover:rotate-3`}><item.icon size={26} strokeWidth={1.8} /></div>
              <div className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/80">{item.role}</div>
              <h3 className="relative mt-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="relative mt-4 leading-7 text-slate-300">{item.description}</p>
              <ul className="mt-6 grid gap-2">
                {item.achievements.map((a) => (
                  <li key={a} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-slate-200 transition group-hover:border-cyan-300/20"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300"><Check size={12} strokeWidth={3} /></span>{a}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="courses" className="section-shell py-20 md:py-28">
        <SectionHeading title="Courses & Certifications" icon={<Code2 size={18} />} />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course,index) => (
            <motion.article key={course.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay:index*0.05 }} whileHover={{ y: -6 }} className="wc-card group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-xl shadow-slate-950/20 transition duration-300 hover:border-cyan-300/25 hover:shadow-cyan-950/25">
              <div className="relative h-44 overflow-hidden">
                <img src={course.image} alt={course.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">Certificate</span>
              </div>
              <div className="p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">{course.organization}</div>
                <h3 className="mt-3 text-xl font-bold leading-snug text-white">{course.name}</h3>
                <div className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-400">Professional learning</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-shell py-20 md:py-28">
        <SectionHeading title="Technical Skills" icon={<Telescope size={18} />} />
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass group relative overflow-hidden rounded-[2rem] border-white/10 bg-slate-950/75 p-6 shadow-xl shadow-slate-950/10 transition duration-300 hover:border-white/20">
              <div className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-linear-to-br ${group.accent} opacity-15 blur-3xl transition duration-500 group-hover:opacity-30`} />
              <div className={`relative mb-5 h-1 w-16 rounded-full bg-linear-to-r ${group.accent}`} />
              <h3 className="relative text-xl font-bold text-white">{group.title}</h3>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.12] hover:text-white">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="media" className="section-shell py-20 md:py-28">
        <SectionHeading title="Media, Talks & Interviews" icon={<Sparkles size={18} />} />
        <div className="grid gap-6 md:grid-cols-2">
          {mediaItems.map((media,index) => (
            <motion.div key={media.id} initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:index*0.05 }} whileHover={{ y:-6 }} className="wc-card overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700/80 dark:bg-slate-900/60">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
                <iframe className="aspect-video w-full" src={media.videoUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="press" className="section-shell py-20 md:py-28">
        <SectionHeading title="Newspaper Features" icon={<Newspaper size={18} />} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pressFeatures.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass group relative overflow-hidden rounded-2xl border-white/10 bg-slate-950/75 p-5 shadow-lg shadow-slate-950/10 transition duration-300 hover:border-cyan-300/25 hover:shadow-cyan-950/20"
            >
              <div className="relative mb-5 flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-slate-950/20 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Newspaper size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.date}</span>
              </div>
              <div className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">{item.outlet}</div>
              <h3 className="relative mt-3 text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="relative mt-4 flex items-center gap-2 text-sm font-medium text-sky-300 transition group-hover:text-sky-200">
                Read article <ExternalLink size={14} />
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="articles" className="section-shell py-20 md:py-28">
        <SectionHeading title="Articles & Columns" icon={<PenLine size={18} />} />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass group relative overflow-hidden rounded-2xl border-white/10 bg-slate-950/75 p-5 shadow-lg shadow-slate-950/10 transition duration-300 hover:border-cyan-300/25 hover:shadow-cyan-950/20"
            >
              <div className="relative mb-5 flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-slate-950/20 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <PenLine size={20} strokeWidth={1.8} />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{item.date}</span>
              </div>
              <div className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300/80">{item.outlet}</div>
              <h3 className="relative mt-3 text-lg font-bold leading-snug text-white">{item.title}</h3>
              <p className="relative mt-4 flex items-center gap-2 text-sm font-medium text-sky-300 transition group-hover:text-sky-200">
                Read article <ExternalLink size={14} />
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      <section id="committee" className="section-shell py-20 md:py-28">
        <SectionHeading title="Committee & Organisational Roles" icon={<Building2 size={18} />} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {committeeRoles.map((role, index) => (
            <motion.div key={`${role.title}-${role.org}`} initial={{ opacity: 0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: index*0.04 }} className="glass relative overflow-hidden rounded-2xl p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{role.title}</div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">{role.org}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell py-20 md:py-28">
        <SectionHeading title="Contact" icon={<Mail size={18} />} />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass relative overflow-hidden rounded-[2rem] p-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Let’s connect</h3>
            <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
              {profile.emails.map((item) => (
                <p key={item.address} className="flex items-center gap-3">
                  <Mail size={18} className="shrink-0 text-sky-600 dark:text-sky-300" />
                  <a href={`mailto:${item.address}`} className="min-w-0 break-all hover:text-sky-600 dark:hover:text-sky-300">
                    {item.address}
                    <span className="ml-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{item.label}</span>
                  </a>
                </p>
              ))}
              <p className="flex items-center gap-3"><MapPin size={18} /> <span>{profile.location}</span></p>
              <p className="flex items-center gap-3"><Building2 size={18} /> <span>Bangladesh</span></p>
            </div>
          </div>
          <form onSubmit={handleContactSubmit} className="glass relative overflow-hidden rounded-[2rem] p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</span>
                <input name="from_name" required className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-400" type="text" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
                <input name="reply_to" required className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-400" type="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Subject</span>
              <input name="subject" required className="w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-400" type="text" placeholder="Research collaboration" />
            </label>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
              <textarea name="message" required className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-sky-400 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-400" placeholder="Write your message here..." />
            </label>
            <button type="submit" disabled={contactStatus === "sending"} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-slate-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
              {contactStatus === "sending" ? "Sending..." : "Send message"} <ArrowRight size={16} />
            </button>
            {contactStatus === "sent" && (
              <p className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">Message sent — thank you! I&apos;ll get back to you soon.</p>
            )}
            {contactStatus === "error" && (
              <p className="mt-4 text-sm font-medium text-red-600 dark:text-red-400">Something went wrong sending your message. Please email me directly instead.</p>
            )}
          </form>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/10 bg-linear-to-b from-slate-950 via-slate-950 to-black py-14 text-slate-300">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="section-shell relative">
          <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <div>
              <div className="text-2xl font-black tracking-tight"><span className="gradient-text">Apurbo Kumar</span></div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">Research • Artificial Intelligence • Mathematics • Engineering</p>
            </div>
            <div className="flex items-center gap-3">
              {profile.socials.map((item) => {
                const isExternal = !item.href.startsWith("mailto:");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/15 hover:shadow-lg hover:shadow-cyan-950/30"
                  >
                    <item.icon size={18} strokeWidth={1.8} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
            <span>© {new Date().getFullYear()} Apurbo Kumar. All rights reserved.</span>
            <span className="flex items-center gap-2"><Sparkles size={14} className="text-cyan-400" /> Always exploring new ideas</span>
          </div>
        </div>
      </footer>
      </main>
    </>
  );
}

function SectionHeading({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">{icon}</div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
    </div>
  );
}
