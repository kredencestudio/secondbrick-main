import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Hammer, Handshake, Layers, ShieldCheck } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import presenceMap from "@/assets/presence-map.png";
import prodevFull from "@/assets/logo-prodev-full.png";
import nawanderLogo from "@/assets/logo-nawander.png";
import leaderNitin from "@/assets/leader-nitin.jpg";
import leaderNamrata from "@/assets/leader-namrata.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Second Brick — Two Legacies. One Shared Vision." },
      { name: "description", content: "Second Brick combines the expertise of PRO-DEV and Nawander Group to deliver exceptional real estate through innovation, integrity and long-term commitment." },
      { property: "og:title", content: "About Second Brick" },
      { property: "og:description", content: "Two legacies. One shared vision — PRO-DEV & Nawander Group." },
    ],
  }),
  component: About,
});

const leaders: Array<{
  name: string;
  group: string;
  bio: string;
  initials: string;
  image?: string | null;
}> = [
  {
    name: "Namrata Malu",
    group: "PRO-DEV",
    bio: "Namrata Malu is a real estate entrepreneur with 15+ years of experience spanning development, investment banking, and hospitality. With a focus on second-home markets, she brings a global perspective to identifying opportunities, developing distinctive properties, and creating compelling propositions that balance lifestyle aspirations, investment potential, and long-term value across diverse markets.",
    initials: "NM",
    image: leaderNamrata,
  },

  {
    name: "Nitinkumar Nawander",
    group: "Nawander Group",
    bio: "Nitin Nawander is a real estate entrepreneur with 20+ years of experience across construction, government projects, and land acquisition. Pairing financial acumen with a veteran businessman’s all-round perspective, he shapes Nawander Group’s strategic growth and leads as President of CREDAI Bidar chapter, after serving as Honorary Secretary of BAI Latur.",
    initials: "NN",
    image: leaderNitin,
  },
];

const cities = [
  { c: "Mumbai", focus: "Coastal & redevelopment", n: "01" },
  { c: "Pune", focus: "Township & residential", n: "02" },
  { c: "Latur", focus: "Emerging growth market", n: "03" },
  { c: "Alibaug", focus: "Coastal luxury", n: "04" },
];

const foundations = [
  {
    title: "Proven Development",
    description: "Decades of experience delivering residential, redevelopment, plotted, commercial, and infrastructure projects.",
    icon: Building2,
  },
  {
    title: "Expertise across asset classes",
    description: "Extensive knowledge across Tier I and Tier II markets, enabling developments that are both relevant and future-ready.",
    icon: Layers,
  },
  {
    title: "End-to-End Execution",
    description: "From land acquisition and planning to approvals, construction, and handover—expertise across the entire development lifecycle.",
    icon: Hammer,
  },
  {
    title: "Strong Industry Relationships",
    description: "Long-standing partnerships with architects, consultants, contractors, financial institutions, and regulatory authorities.",
    icon: Handshake,
  },
  {
    title: "Legacy of Trust",
    description: "Built on a reputation for transparency, quality craftsmanship, timely execution, and lasting customer relationships.",
    icon: ShieldCheck,
  },
];

function About() {
  const [activeCity, setActiveCity] = useState(0);

  return (
    <>
      {/* HERO — editorial cinematic */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cream">
        <img
          src={heroAbout}
          alt="Interior with arched windows"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/35 to-cream/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/80 via-cream/30 to-transparent" />
        <div className="container-x relative">
          <div className="text-[10px] tracking-[0.35em] uppercase text-brick mb-4">01 / About</div>
          <h1
            className="font-serif reveal-x max-w-5xl"
            style={{
              fontSize: "clamp(2.6rem, 5vw, 4.8rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
            }}
          >
            A partnership built
            <br />
            <em
              className="italic text-brick"
              style={{
                fontSize: "0.96em",
              }}
            >
              experience & excellence.
            </em>
          </h1>
          <p className="mt-10 text-lg leading-relaxed text-muted-foreground max-w-2xl">
            Second Brick combines the expertise of PRO-DEV and Nawander Group to deliver
            exceptional real estate experiences through innovation, integrity, and long-term
            commitment.
          </p>
        </div>
      </section>

      {/* HISTORY — two founding companies */}
      <section id="history" className="pt-16 md:pt-24 pb-6 md:pb-10 bg-cream relative overflow-hidden">
        <div className="container-x">
          <div className="mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-brick mb-4">02 / Our History</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.05 }}>
              Two histories.<br />One shared <em className="italic text-brick">direction</em>.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <article className="group relative overflow-hidden bg-[#2D1E1A] p-8 md:p-10 text-[#FBF1E9] min-h-[320px] rounded-none shadow-lg border border-[#FBF1E9]/10">
              <div className="absolute top-0 right-0 h-32 w-32 border-l border-b border-[#FBF1E9]/15 rounded-bl-full transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 h-14 flex items-center">
                    <img src={prodevFull} alt="PRO-DEV" className="h-12 w-auto object-contain brightness-125 filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]" />
                  </div>
                  <h3 className="mt-4 font-serif text-3xl md:text-4xl text-[#FBF1E9] font-bold tracking-tight">A legacy of renewal.</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-[#FBF1E9]/90 text-sm md:text-base font-normal">
                    Led by founders with nearly three decades of combined experience, PRO-DEV has developed refined, enduring homes across Mumbai and Goa, driven by craftsmanship, uncompromising quality and a promise of on-time delivery.
                  </p>
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden border border-[#6D0D12]/20 bg-[#FBF1E9] p-8 md:p-10 min-h-[320px] rounded-none shadow-md">
              <div className="absolute bottom-0 left-0 h-32 w-32 border-r border-t border-[#6D0D12]/15 rounded-tr-full transition-transform duration-500 group-hover:scale-125 pointer-events-none" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 h-14 flex items-center">
                    <img src={nawanderLogo} alt="Nawander logo" className="h-12 w-auto object-contain" />
                  </div>
                  <h3 className="mt-4 font-serif text-3xl md:text-4xl text-[#3D2822] font-bold tracking-tight">A vision for growth.</h3>
                  <p className="mt-4 max-w-md leading-relaxed text-[#3D2822]/85 text-sm md:text-base font-normal">
                    Rooted in trust and driven by ambition, Nawander Group creates self-sufficient residential communities and townships across Maharashtra, where thoughtful planning meets dependable execution.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FOUNDATIONS — feature cards */}
      <section className="pt-6 md:pt-10 pb-8 md:pb-12 bg-cream text-cocoa relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        <div className="container-x relative">
          <div className="max-w-xl">
            <div className="text-[10px] tracking-[0.35em] uppercase text-brick mb-4">03 / Our Foundation</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.05 }}>The foundation<br />of our <em className="italic text-brick">success</em>.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {foundations.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group relative min-h-[300px] border border-cocoa/15 bg-cream p-6 transition-colors hover:bg-secondary/50">
                <span className="text-[10px] tracking-[0.25em] text-cocoa/45">0{index + 1}</span>
                <div className="mt-8 flex h-11 w-11 items-center justify-center rounded-full bg-brick text-cream shadow-[0_0_24px_rgba(109,13,18,0.3)] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-7 font-serif text-xl text-cocoa">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-cocoa/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP — magazine profiles */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="container-x">
          <div className="max-w-xl mb-12 md:mb-16">
            <div className="text-[10px] tracking-[0.35em] uppercase text-brick mb-4">— 04 / Leadership</div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.05 }}>
              The people behind
              <br />
              the <em className="italic text-brick">promise</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {leaders.map((l, i) => (
              <article key={l.name} className="flex flex-col group">
                <div className="relative aspect-[4/3] max-w-md w-full overflow-hidden bg-cocoa/10">
                  {l.image ? (
                    <img
                      src={l.image}
                      alt={l.name}
                      className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-brick via-brick to-cocoa flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                      <span className="font-serif text-[5rem] sm:text-[6rem] text-cream/95 leading-none">{l.initials}</span>
                    </div>
                  )}
                </div>
                <div className="mt-8">
                  <div className="eyebrow">{l.group}</div>
                  <h3 className="mt-2 font-serif text-3xl sm:text-4xl text-cocoa leading-tight">
                    {l.name}
                  </h3>
                  <div className="mt-5 w-14 h-px bg-brick" />
                  <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">{l.bio}</p>
                  <div className="mt-6 font-serif italic text-2xl text-brick">— {l.initials}.</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENCE — 05 */}
      <section id="presence" className="py-20 md:py-28 bg-cocoa text-cream relative overflow-hidden">
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading + City List */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-[10px] tracking-[0.35em] uppercase text-cream/80 mb-3">— 05 / Presence</div>
                <h2 className="font-serif text-cream" style={{ fontSize: "clamp(2rem, 4.2vw, 3.2rem)", lineHeight: 1.08 }}>
                  Rooted in cities that
                  <br />
                  shape India's real estate story.
                </h2>
              </div>

              <div className="space-y-1 pt-2">
                {cities.map((city, i) => (
                  <button
                    key={city.c}
                    onMouseEnter={() => setActiveCity(i)}
                    onClick={() => setActiveCity(i)}
                    className={`group w-full text-left border-b py-3.5 flex items-baseline gap-5 transition-all ${activeCity === i ? "border-cream/60" : "border-cream/15"}`}
                  >
                    <span className={`text-[10px] tracking-[0.3em] uppercase ${activeCity === i ? "text-cream font-bold" : "text-cream/40"}`}>{city.n}</span>
                    <div className="flex-1">
                      <div className={`font-serif text-2xl sm:text-3xl transition-colors ${activeCity === i ? "text-cream italic" : "text-cream/70"}`}>{city.c}</div>
                      <div className="text-xs sm:text-sm text-cream/65 mt-0.5">{city.focus}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Map in the drawn circle */}
            <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end lg:translate-x-4 pt-2 group">
              <img
                src={presenceMap}
                alt="3D map showing Second Brick's location presence across Mumbai, Pune, Latur and Goa"
                className="w-full max-w-[520px] h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.65)] transition-transform duration-700 group-hover:scale-105"
              />
              <svg viewBox="0 0 400 500" className="hidden absolute inset-0 w-full h-full text-cream/25">
                {/* Stylized Maharashtra outline */}
                <path
                  d="M60,180 Q80,120 140,110 Q210,90 260,130 Q320,150 340,220 Q350,280 320,340 Q290,410 210,430 Q140,440 90,400 Q50,340 60,270 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 4"
                />
                <path
                  d="M60,180 Q80,120 140,110 Q210,90 260,130 Q320,150 340,220 Q350,280 320,340 Q290,410 210,430 Q140,440 90,400 Q50,340 60,270 Z"
                  fill="#FBF1E9"
                  fillOpacity="0.03"
                />
                {/* Pins */}
                {[
                  { x: 110, y: 250, city: "Mumbai" },
                  { x: 180, y: 260, city: "Pune" },
                  { x: 260, y: 300, city: "Latur" },
                  { x: 95, y: 280, city: "Alibaug" },
                ].map((p, i) => (
                  <g key={p.city}>
                    <circle cx={p.x} cy={p.y} r={activeCity === i ? 14 : 6} fill="none" stroke="#6D0D12" strokeWidth="1" opacity={activeCity === i ? 1 : 0.4} className="transition-all duration-500" />
                    <circle cx={p.x} cy={p.y} r="3" fill="#6D0D12" />
                    <text x={p.x + 16} y={p.y + 4} fontSize="10" fill="#FBF1E9" fillOpacity={activeCity === i ? 1 : 0.6} fontFamily="Jost">{p.city}</text>
                  </g>
                ))}
              </svg>
              <div className="hidden absolute bottom-6 left-6 text-cream/60 text-[10px] tracking-[0.3em] uppercase">
                Maharashtra, India
              </div>
              <div className="hidden absolute top-6 right-6 text-cream/60 text-[10px] tracking-[0.3em] uppercase">
                Presence Map · 01
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
