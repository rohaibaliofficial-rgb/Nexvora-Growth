import { motion } from 'motion/react';
import {
  Rocket,
  Target,
  BarChart3,
  Search,
  MousePointer2,
  Share2,
  Mail,
  PenTool,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  MessageSquare,
  Cpu,
  Activity,
  Coffee,
  Globe,
  Home as HomeIcon,
  Sparkles,
  Flame,
  Shield
} from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { cn } from '../lib/utils';
import StrategyForm from '../components/StrategyForm';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const { openModal } = useModal();

  const brandLogos = [
    { name: "Against Time LLC", logo: "/Nexvora-Growth/logos/against-time.png" },
    { name: "NovaShield Solutions", logo: "/Nexvora-Growth/logos/novashield.png" },
    { name: "ApexCore Analytics", logo: "/Nexvora-Growth/logos/apexcore.png" },
  ];

  const services = [
    { icon: Cpu, label: 'AI Marketing', desc: 'Automate your campaigns with intelligent ad systems.' },
    { icon: Search, label: 'SEO', desc: 'Dominate search results with technical precision.' },
    { icon: MousePointer2, label: 'PPC Advertising', desc: 'Scale your ROI with data-backed paid strategies.' },
    { icon: Share2, label: 'Social Media', desc: 'Build authority and engagement across all platforms.' },
    { icon: Mail, label: 'Email Automation', desc: 'Nurture leads and maximize lifetime customer value.' },
    { icon: PenTool, label: 'Content Strategy', desc: 'High-converting copy and authority-building content.' },
    { icon: Zap, label: 'Lead Generation', desc: 'Fill your pipeline with high-intent qualified leads.' },
    { icon: BarChart3, label: 'Analytics', desc: 'Full-funnel tracking and predictive revenue models.' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-[50vh] w-[50vw] bg-neon opacity-[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[20%] -z-10 h-[60vh] w-[40vw] bg-neon opacity-[0.02] blur-[100px]" />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center pt-20">
        {/* Background Growth Chart Aesthetic */}
        <svg className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-full opacity-10" viewBox="0 0 1024 300">
          <path d="M0 300 L100 250 L250 270 L400 180 L550 210 L700 80 L850 120 L1024 20" fill="none" stroke="#C8FF00" strokeWidth="4" />
        </svg>

        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center text-center lg:text-left overflow-hidden"
            >
              <div className="mb-6 inline-flex items-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neon shadow-neon-glow lg:self-start">
                ⚡ Performance-Driven Marketing
              </div>
              <h1 className="mb-6 text-4xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl lg:text-[72px]">
                Scale Your <br /><span className="text-neon neon-text-glow">Business</span> <br />Faster.
              </h1>
              <p className="mx-auto mb-6 max-w-md text-lg text-[#e5e5e5] lg:mx-0 font-bold">
                We drive high-performance growth through data-backed strategies. You reap the results. Stop guessing, start scaling.
              </p>
              
              <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-4 lg:mx-0 lg:max-w-none">
                <div>
                  <div className="text-2xl font-black text-neon">94%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Client Retention Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-neon">$12M+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Ad Spend Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-neon">3.5x</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Avg. ROAS Improvement</div>
                </div>
              </div>

              <div className="mt-10 lg:mt-16">
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 lg:text-left">
                  Trusted by Forward-Thinking Brands
                </p>
                <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100 lg:justify-start lg:gap-8">
                  {brandLogos.map((logo, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <img src={logo.logo} alt={logo.name} className="h-5 w-auto brightness-0 invert" />
                      <span className="text-[11px] font-black uppercase tracking-tighter text-white">{logo.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-[450px] w-[450px] rounded-full bg-neon/10 blur-[100px]"></div>
              
              {/* Growth Strategy Badge Aesthetic */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative flex aspect-square w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] flex-col items-center justify-center rounded-full border-[10px] border-black bg-black shadow-[0_0_80px_rgba(200,255,0,0.2)] ring-2 ring-neon/40"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon/20 via-transparent to-transparent opacity-60" />

                <div className="relative z-30 text-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-4xl font-black uppercase tracking-tight text-neon leading-none sm:text-6xl lg:text-7xl"
                  >
                    GROWTH
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="my-1 text-xl font-black uppercase tracking-widest text-white sm:text-3xl lg:text-4xl"
                  >
                    ISN'T LUCK.
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="relative -mt-2 text-3xl text-neon drop-shadow-[0_0_15px_rgba(200,255,0,0.6)] sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                  >
                    It's Strategy.
                  </motion.div>
                </div>

                {/* Rocket and Smoke Container - No overflow hidden to let rocket pop */}
                <div className="absolute inset-0 z-40">
                  {/* Smoke Particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5, y: 100 }}
                      animate={{ 
                        opacity: [0, 0.5, 0], 
                        scale: [0.5, 2, 2.5],
                        y: [120, -60, -200],
                        x: [i * 30 - 100, i * 20 - 70]
                      }}
                      transition={{ 
                        duration: 2.5 + i * 0.5, 
                        repeat: Infinity, 
                        delay: i * 0.4,
                        ease: "easeOut"
                      }}
                      className="absolute bottom-4 left-1/2 h-24 w-24 translate-x-[-50%] rounded-full bg-neon/15 blur-3xl"
                    />
                  ))}

                  {/* The Rocket - Launching high and outside */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      x: [0, 5, 0],
                      rotate: [-15, -12, -15]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="absolute -top-2 right-2 z-50 sm:-top-4 sm:right-4 lg:-top-6 lg:right-[-20px]"
                  >
                    <Rocket className="h-12 w-12 text-white drop-shadow-[0_0_30px_rgba(200,255,0,0.9)] sm:h-20 sm:w-20 lg:h-28 lg:w-28" fill="#000" strokeWidth={1} />
                    {/* Rocket Exhaust Glow - Extreme glow */}
                    <div className="absolute -bottom-6 left-1/3 h-32 w-12 rounded-full bg-gradient-to-t from-transparent via-neon/60 to-neon/90 blur-2xl" />
                  </motion.div>
                </div>

                {/* Call to Action Badge */}
                <button 
                  onClick={openModal}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border-2 border-neon bg-black px-6 py-3 text-[8px] sm:px-10 sm:py-4 sm:text-[10px] font-black uppercase tracking-widest text-neon transition-all hover:scale-105 hover:bg-neon hover:text-black shadow-neon-glow whitespace-nowrap"
                >
                  Start Scaling Now
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="bg-[#0B0B0B] py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 text-4xl font-extrabold uppercase leading-tight sm:text-6xl">
              Not Getting Results from Your <span className="text-neon">Marketing?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-[#e5e5e5] font-semibold">
              Most businesses waste money on ads, struggle with conversions, and lack a clear strategy.
              Without a system, growth becomes slow and unpredictable.
            </p>
            <button
              onClick={openModal}
              className="group inline-flex items-center gap-3 bg-neon px-10 py-5 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-105 neon-glow-hover"
            >
              Fix My Marketing Now <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Bottom Service Rail */}
      <div className="w-full bg-[#0D0D0D] border-y border-white/5 py-4 text-neon overflow-hidden relative z-10">
        <div className="flex animate-marquee whitespace-nowrap items-center justify-around">
          {[
            "AI Powered Solutions", "SEO Strategy", "PPC Advertising", "Lead Generation", "Email Automation", "Content Scaling"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 px-8 text-[11px] font-black uppercase tracking-widest">
              <span>●</span> <span>{item}</span>
            </div>
          ))}
          {/* Duplicate for seamless marquee effect if needed, but here we just fill space */}
          {[
             "AI Powered Solutions", "SEO Strategy", "PPC Advertising", "Lead Generation"
          ].map((item, i) => (
            <div key={i+"-dup"} className="hidden lg:flex items-center gap-2 px-8 text-[11px] font-black uppercase tracking-widest">
              <span>●</span> <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview (Match Image Style) */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">Our <span className="text-neon">Powerhouse</span> Services</h2>
            <p className="mt-4 text-[#e5e5e5] font-semibold">Everything you need to dominate your market.</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-[#0B0B0B] p-8 transition-all hover:border-neon hover:bg-neon/5"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-neon/10 text-neon transition-all group-hover:bg-neon group-hover:text-black group-hover:shadow-[0_0_20px_rgba(198,255,0,0.4)]">
                  <service.icon className="h-8 w-8" />
                </div>
                <span className="text-center text-sm font-bold uppercase tracking-widest text-[#e5e5e5] transition-colors group-hover:text-white">
                  {service.label}
                </span>
                <p className="text-center text-[10px] text-gray-500 font-medium group-hover:text-gray-300">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Free Audit Inclusions */}
      <section className="bg-[#0B0B0B] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Scarcity Trigger */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-red-500 animate-pulse">
              <Zap className="h-3 w-3 fill-red-500" /> Only 4 Free Audits Available This Month
            </div>

            <h2 className="mb-8 text-4xl font-black uppercase leading-tight sm:text-6xl">
              Your Free <span className="text-neon neon-text-glow">Strategy Audit</span> Includes:
            </h2>
            
            <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
              {[
                "Ads Performance Review", "Funnel Analysis", "Website Conversion Check",
                "SEO Opportunities", "Competitor Breakdown", "Growth Plan",
                "Content Strategy", "Budget Optimization", "Scaling Roadmap", "Action Steps"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-neon/30">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-neon" />
                  <span className="text-sm font-semibold text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-8">
              <button
                onClick={openModal}
                className="w-full rounded-full border-2 border-neon bg-black py-6 text-lg font-black uppercase tracking-widest text-neon transition-all hover:bg-neon hover:text-black hover:shadow-neon-glow lg:w-max lg:px-20"
              >
                Claim My Free Audit
              </button>

              {/* Conversion-Boosting Testimonial */}
              <div className="relative max-w-lg rounded-2xl border border-white/5 bg-white/[0.02] p-6 italic">
                <p className="text-sm text-gray-300 leading-relaxed">
                  "The audit alone revealed where we were losing $2k/day in ad spend. We hit a 3.5x ROAS within just 45 days of implementing the roadmap."
                </p>
                <div className="mt-4 flex items-center justify-center gap-2 not-italic">
                  <div className="h-px w-4 bg-neon/30" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-neon">Michael R., CMO at Alpha-Tech</span>
                  <div className="h-px w-4 bg-neon/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">How It Works</h2>
            <p className="mt-4 text-[#e5e5e5] font-semibold">3 simple steps to start growing.</p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {[
              { num: '01', title: 'Submit Details', desc: 'Fill out the form with your business information.' },
              { num: '02', title: 'Deep Analysis', desc: 'We analyze your market, competitors, and funnels.' },
              { num: '03', title: 'Growth Plan', desc: 'You receive a custom strategy to scale your revenue.' }
            ].map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                <span className="mb-[-2rem] block text-8xl font-black text-white/5 sm:text-7xl lg:text-8xl">{step.num}</span>
                <div className="relative z-10 px-4">
                  <h3 className="mb-4 text-2xl font-black uppercase text-neon">{step.title}</h3>
                  <p className="text-[#e5e5e5] font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0B0B0B] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl lg:text-7xl">
                PROVEN <span className="text-neon neon-text-glow">RESULTS</span>
              </h2>
              <p className="mt-4 text-xl font-bold uppercase tracking-[0.2em] text-gray-500">
                Real Growth. Real Clients. Real ROI.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                quote: "Nexvora Growth transformed our ROI in under 90 days. Their strategy was aggressive and exactly what we needed to dominate.",
                name: "Ali Khan",
                role: "CEO, Tech Startup"
              },
              {
                quote: "We scaled from 2K to 50K monthly traffic. Nexvora knows exactly how to dominate digital marketing.",
                name: "Sara Ahmed",
                role: "Founder, E-commerce Brand"
              },
              {
                quote: "Our leads increased 4x within 60 days. Best marketing decision we ever made.",
                name: "Usman Malik",
                role: "Marketing Director"
              },
              {
                quote: "Nexvora Growth helped us break scaling barriers fast. Their execution is sharp, strategic, and results-driven.",
                name: "Shawn Peterson",
                role: "CEO, Against Time LLC"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-black p-10 transition-all hover:border-neon/30"
              >
                {/* Neon Glow on Hover */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon/5 opacity-0 blur-[100px] transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Zap key={s} className="h-4 w-4 fill-neon text-neon drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
                    ))}
                  </div>
                  <blockquote className="mb-8 text-base font-medium leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=39FF14&color=000&bold=true`} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full border border-neon/30"
                    />
                    <div>
                      <h4 className="text-lg font-black uppercase tracking-tighter text-white">{testimonial.name}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-neon drop-shadow-neon">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Meet The Founder (About Section on Home) */}
          <div className="mt-24 pt-24 border-t border-white/5">
            <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="max-w-2xl">
                <div className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-neon/60">The Architect</div>
                <h3 className="mb-6 text-4xl font-black uppercase tracking-tighter text-white">
                  ENGINEERED BY <br /><span className="text-neon neon-text-glow">ROHAIB ALI.</span>
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-[#e5e5e5] font-semibold">
                  Nexvora isn't just an agency; it's a growth laboratory. Every strategy is personally overseen by our founder to ensure absolute algorithmic dominance.
                </p>
                
                {/* Requested Founder Box */}
                <div className="flex items-center gap-3">
                  <img 
                    src="/Nexvora-Growth/rohaib-ali.png" 
                    alt="Rohaib Ali" 
                    className="h-[60px] w-[60px] rounded-full border-2 border-neon object-cover shadow-neon-glow/20"
                  />
                  <div>
                    <h3 className="m-0 text-lg font-black uppercase leading-tight text-white">Rohaib Ali</h3>
                    <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">CEO & Founder</p>
                  </div>
                </div>
              </div>

              {/* Strategy Audit Form Integration */}
              <div className="w-full max-w-md">
                <div className="mb-4 flex items-center gap-2 text-neon">
                  <Zap className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Direct Briefing Line</span>
                </div>
                <StrategyForm 
                  className="rounded-3xl border border-neon/20 bg-white/[0.02] p-6"
                  title="FREE STRATEGY"
                  subtitle="LOCK IN YOUR GROWTH ROADMAP"
                />
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => window.location.href = '#/about'}
                    className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-neon"
                  >
                    Deep dive into our DNA <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-neon/5 opacity-50 blur-[120px]"></div>
        <div className="mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-5xl font-black uppercase leading-tight sm:text-7xl">
              Growth Isn’t Luck. <br /> It’s <span className="text-neon neon-text-glow">Strategy.</span>
            </h2>
            <button
              onClick={openModal}
              className="rounded-full bg-neon px-8 py-4 text-sm sm:px-12 sm:py-6 sm:text-lg font-black uppercase tracking-widest text-black transition-all hover:scale-110 active:scale-95 neon-glow"
            >
              Get My Free Strategy Audit
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
