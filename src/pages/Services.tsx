import { motion } from 'motion/react';
import { 
  Search, MousePointer2, Share2, Mail, PenTool, Zap, 
  BarChart3, Rocket, Layers, ChevronRight, ArrowRight, Cpu,
  MessageSquare, Video, Fingerprint, Globe, CheckCircle2
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Services() {
  const { openModal } = useModal();

  const coreServices = [
    {
      icon: Share2,
      title: "Social Media Marketing (SMM)",
      desc: "Dominate the feed with high-impact organic and paid social strategies.",
      features: [
        "Facebook, Instagram, TikTok campaigns",
        "Content creation (posts, reels, stories)",
        "Page growth & engagement strategy"
      ]
    },
    {
      icon: MousePointer2,
      title: "Paid Advertising",
      desc: "Performance-driven ad campaigns designed for aggressive scaling and ROI.",
      features: [
        "Meta Ads (Facebook & Instagram)",
        "Google Ads (Search, Display, YouTube)",
        "ROI-focused campaigns & scaling"
      ]
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      desc: "Rank higher and command more organic traffic with technical precision.",
      features: [
        "On-page & technical SEO",
        "Keyword research",
        "Website ranking improvement"
      ]
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      desc: "Strategic content that builds authority and converts readers into leads.",
      features: [
        "Blog writing",
        "Copywriting (ads, websites)",
        "Brand storytelling"
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      desc: "Automated sequences that nurture leads and maximize customer lifetime value.",
      features: [
        "Automated email sequences",
        "Lead nurturing funnels",
        "Newsletter campaigns"
      ]
    },
    {
      icon: Layers,
      title: "Web Ops & Funnels",
      desc: "High-conversion landing pages and end-to-end sales funnels.",
      features: [
        "Landing pages",
        "Sales funnels",
        "Conversion optimization"
      ]
    }
  ];

  const aiServices = [
    {
      icon: Cpu,
      title: "AI Content Creation",
      desc: "Hyper-efficient content production powered by custom-trained AI models.",
      features: [
        "AI-generated ad copy",
        "Social media captions",
        "Blog & script writing"
      ]
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Automation",
      desc: "24/7 intelligent customer interaction and lead qualification on autopilot.",
      features: [
        "WhatsApp / website chatbots",
        "Customer support automation",
        "Lead qualification bots"
      ]
    },
    {
      icon: Zap,
      title: "AI Ads Optimization",
      desc: "Real-time campaign adjustments using predictive machine learning scripts.",
      features: [
        "Smart audience targeting",
        "Predictive analytics",
        "Auto A/B testing"
      ]
    },
    {
      icon: Video,
      title: "AI Video & Imagery",
      desc: "Dynamic visual assets generated for high-performing video ads and reels.",
      features: [
        "AI video ads (Reels, Shorts)",
        "Product creatives",
        "Branding visuals"
      ]
    },
    {
      icon: BarChart3,
      title: "AI Data Analytics",
      desc: "Deep insights into customer behavior with predictive revenue forecasting.",
      features: [
        "Customer behavior tracking",
        "Sales prediction",
        "Performance dashboards"
      ]
    },
    {
      icon: Fingerprint,
      title: "AI Personalization",
      desc: "Dynamic website and email content tailored to every individual user.",
      features: [
        "Personalized ads & emails",
        "Dynamic website content",
        "Smart recommendations"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Deep Audit",
      desc: "We analyze your current metrics, competitors, and market gaps to find hidden opportunities."
    },
    {
      number: "02",
      title: "Blueprint",
      desc: "A custom growth roadmap built for your specific goals—no cookie-cutter strategies here."
    },
    {
      number: "03",
      title: "Execution",
      desc: "Our specialists launch high-performance campaigns using proprietary scaling systems."
    },
    {
      number: "04",
      title: "Optimization",
      desc: "Continuous testing and data-driven adjustments to squeeze every cent of ROI from your budget."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-neon/5 blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="max-w-4xl"
          >
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neon"
            >
              <Zap className="h-3 w-3 fill-neon" /> Our Capabilities
            </motion.div>
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="mb-8 text-4xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl lg:text-[100px]"
            >
              Growth <br /><span className="text-neon neon-text-glow">Built on Strategy.</span>
            </motion.h1>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="max-w-2xl text-base sm:text-xl text-[#e5e5e5] font-semibold"
            >
              We don't just "do marketing". We build revenue-generating machines tailored to your specific business model. Stop guessing, start scaling with precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
              Core <span className="text-neon">Growth Services</span>
            </h2>
            <div className="h-1 w-20 bg-neon"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col rounded-[2rem] border border-white/5 bg-[#0B0B0B] p-10 transition-all hover:border-neon/50 hover:shadow-[0_0_50px_rgba(57,255,20,0.15)]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-neon text-black shadow-neon-glow transition-transform group-hover:scale-110">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white group-hover:text-neon">
                  {service.title}
                </h3>
                <p className="mb-8 text-[#e5e5e5] font-semibold leading-relaxed">
                  {service.desc}
                </p>
                <ul className="mb-8 mt-auto space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                      <ChevronRight className="h-3 w-3 text-neon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-neon transition-all hover:gap-3"
                >
                  Configure Service <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
          alt="Digital Marketing Analytics and Strategy"
          className="h-full w-full object-cover grayscale opacity-40 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl lg:text-7xl">
                Where Data Meets <br /><span className="text-neon neon-text-glow">Aggressive Execution.</span>
              </h3>
              <p className="mt-6 text-lg font-bold uppercase tracking-[0.3em] text-neon/60">
                Proprietary Scaling Systems
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="bg-[#050505] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full bg-neon/5 blur-[150px] -z-10" />
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neon">
              <Cpu className="h-3 w-3" /> Next-Gen Technology
            </div>
            <h2 className="mb-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              AI-Powered <span className="text-neon neon-text-glow">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-[#e5e5e5] font-semibold">
              Future-proof your business by integrating advanced artificial intelligence into your marketing stack for unmatched efficiency and scale.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col rounded-[2rem] border border-white/5 bg-black/40 backdrop-blur-sm p-10 transition-all hover:border-neon/50 hover:shadow-[0_0_60px_rgba(57,255,20,0.2)]"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-neon/30 bg-black text-neon shadow-[0_0_20px_rgba(57,255,20,0.1)] transition-transform group-hover:scale-110 group-hover:bg-neon group-hover:text-black group-hover:shadow-neon-glow">
                  <service.icon className="h-8 w-8 text-current" />
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white group-hover:text-neon">
                  {service.title}
                </h3>
                <p className="mb-8 text-[#e5e5e5] font-semibold leading-relaxed italic">
                  {service.desc}
                </p>
                <ul className="mb-8 mt-auto space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-gray-500">
                      <CheckCircle2 className="h-3 w-3 text-neon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 transition-all hover:text-neon hover:gap-3"
                >
                  DEPLOY AI MISSION <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="bg-white py-24 text-black overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl">
                Our Proven <span className="text-gray-400">Scale Framework.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm font-bold uppercase tracking-widest text-gray-500">
              Four steps from current state to market dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <div className="mb-6 text-6xl font-black text-gray-100">{step.number}</div>
                <h4 className="mb-4 text-xl font-black uppercase tracking-tight">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden h-[2px] w-12 bg-gray-100 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="rounded-[3rem] border border-neon/20 bg-neon/5 p-12 lg:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-neon/10 blur-[80px]" />
            <h2 className="relative z-10 mb-8 text-4xl font-black uppercase tracking-tight sm:text-6xl">
              Specialized in <br/><span className="text-neon neon-text-glow">High-Value Vertical Scaling.</span>
            </h2>
            <div className="relative z-10 flex flex-wrap justify-center gap-4">
              {["SaaS & Tech", "E-commerce Brands", "Legal Services", "Fintech", "Healthcare Systems"].map((industry, i) => (
                <div key={i} className="rounded-full border border-white/10 bg-black/40 px-6 py-3 text-xs font-black uppercase tracking-widest text-gray-300">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-neon px-8 py-20 text-center text-black lg:py-32">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="mb-8 text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl">
                Stop Burning Budget. <br /> Start Owning Results.
              </h2>
              <p className="mb-12 text-lg font-bold opacity-70">
                Most agencies focus on "awareness". We focus on revenue. Ready to see the difference?
              </p>
              <button
                onClick={openModal}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-black px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95"
              >
                Get My Growth Strategy
                <Rocket className="h-6 w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
