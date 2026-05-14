import { motion } from 'motion/react';
import { ExternalLink, TrendingUp, Zap, BarChart, Target, PieChart, ArrowUpRight, CheckCircle2, Shield, Activity, Coffee, Globe, Cpu, Home, Sparkles, Flame, Briefcase } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function CaseStudies() {
  const { openModal } = useModal();

  const brandLogos = [
    { name: "Against Time LLC", logo: "/Nexvora-Growth/logos/against-time.png", color: "#C8FF00" },
    { name: "NovaShield", logo: "/Nexvora-Growth/logos/novashield.png", color: "#3b82f6" },
    { name: "ApexCore", logo: "/Nexvora-Growth/logos/apexcore.png", color: "#ec4899" },
    { name: "Global Logis", icon: Globe, color: "#06b6d4" },
    { name: "Helix Cloud", icon: Cpu, color: "#6366f1" },
  ];

  const cases = [
    {
      title: "Claims Processing Automation",
      results: "67% Processing Lift",
      category: "Workflow Automation",
      client: "Against Time LLC",
      brandLogo: "/Nexvora-Growth/logos/against-time.png",
      brandColor: "#C8FF00",
      industry: "Insurance / InsurTech",
      duration: "2021–2023",
      challenge: "Manual claims intake was slow, error-prone, and causing significant settlement delays and drop in CSAT scores.",
      solution: "Built a custom claims intake and processing workflow that automated document verification and routed claims automatically.",
      metrics: [
        { label: "Processing Time", val: "-67%" },
        { label: "Manual Errors", val: "-82%" },
        { label: "CSAT Score", val: "4.6/5" }
      ],
      tags: ["Automation", "InsureTech", "Workflow Ops", "Real-time Tracking"],
      stats: [
        { label: "Location", value: "USA" },
        { label: "Capacity", value: "+40%" },
        { label: "Errors", value: "0.2%" }
      ]
    },
    {
      title: "Smart Renewal Engine",
      results: "34% Renewal Lift",
      category: "Subscription Retention",
      client: "NovaShield Solutions",
      brandLogo: "/Nexvora-Growth/logos/novashield.png",
      brandColor: "#3b82f6",
      industry: "SaaS / Subscriptions",
      duration: "2022–2023",
      challenge: "High cancellations during renewal periods and lack of visibility into at-risk accounts for success teams.",
      solution: "Developed a smart retention system tracking churn behavior with automated email/SMS workflows and risk flagging.",
      metrics: [
        { label: "Renewal Rate", val: "+34%" },
        { label: "Churn Rate", val: "9%" },
        { label: "ARR Retained", val: "$1.2M" }
      ],
      tags: ["SaaS Retention", "Churn Prediction", "SMS Marketing", "ARR Growth"],
      stats: [
        { label: "Location", value: "Canada" },
        { label: "Efficiency", value: "3x" },
        { label: "Churn Drop", val: "13%" }
      ]
    },
    {
      title: "RegulaTrack Compliance Suite",
      results: "94% Efficiency Lift",
      category: "Compliance Operations",
      client: "ApexCore Analytics",
      brandLogo: "/Nexvora-Growth/logos/apexcore.png",
      brandColor: "#ec4899",
      industry: "Logistics & Supply Chain",
      duration: "2024–2025",
      challenge: "Manual compliance reporting across disconnected spreadsheets was increasing administrative workload and audit risks.",
      solution: "Built a centralized management platform that consolidated operational data and generated standardized compliance reports.",
      metrics: [
        { label: "Reporting Time", val: "-94%" },
        { label: "Audit Findings", val: "Zero" },
        { label: "Submission Errors", val: "0%" }
      ],
      tags: ["Compliance", "Logistics", "Audit Ready", "Data Consolidation"],
      stats: [
        { label: "Location", value: "UK" },
        { label: "Reporting", value: "4hrs" },
        { label: "Accuracy", value: "100%" }
      ]
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Header section */}
      <section className="relative overflow-hidden pt-20 pb-8 lg:pt-48 lg:pb-16">
        <div className="absolute -bottom-24 -right-24 h-[600px] w-[600px] rounded-full bg-neon/5 blur-[120px]" />
        
        <div className="relative mx-auto max-w-7xl px-4 md:px-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 inline-block rounded-full bg-white/5 border border-white/10 px-4 py-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neon">Mission Logs</span>
            </div>
            <h1 className="mb-8 text-4xl font-black uppercase tracking-tighter sm:text-6xl lg:text-8xl">
              Proven <br /><span className="text-neon neon-text-glow">Growth.</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-xl text-gray-400 font-medium">
              We skip the fluff. These are the technical breakdowns of how we scaled real businesses from plateau to market dominance.
            </p>
          </motion.div>
        </div>

        {/* Brand Logos Ticker */}
        <section className="mt-2 sm:mt-8 border-y border-white/5 bg-transparent py-8 sm:py-14 overflow-hidden relative z-20">
          <div className="mb-6 sm:mb-10 text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-600">Disrupting Markets With Industry Leaders</span>
          </div>
          <div className="relative flex">
            <motion.div 
              animate={{ x: [0, -1920] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex min-w-full shrink-0 items-center justify-around gap-20 px-10"
            >
              {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, idx) => (
                <div key={idx} className="group flex items-center gap-5 grayscale opacity-40 transition-all hover:grayscale-0 hover:opacity-100">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 p-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all group-hover:border-neon/20 group-hover:shadow-[0_0_20px_rgba(198,255,0,0.1)]">
                    {logo.logo ? (
                      <img src={logo.logo} alt={logo.name} className="h-full w-full object-contain brightness-0 invert" />
                    ) : logo.icon ? (
                      <logo.icon className="h-full w-full" style={{ color: logo.color }} />
                    ) : (
                      <Briefcase className="h-full w-full text-neon" />
                    )}
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-white transition-colors group-hover:text-neon">{logo.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </section>

      {/* Cases List - First 3 */}
      <section className="pt-16 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="space-y-24 sm:space-y-48">
            {cases.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
                  {/* Left Column: Context */}
                  <div className="lg:w-7/12">
                     <div className="mb-10 flex flex-wrap gap-4">
                        <span className="flex items-center gap-2 rounded-full bg-neon/10 border border-neon/20 px-5 py-1.5 text-[10px] font-black uppercase tracking-widest text-neon">
                          <Target className="h-3 w-3" /> {cs.category}
                        </span>
                        {cs.tags.map((tag, idx) => (
                          <span key={idx} className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-600" /> {tag}
                          </span>
                        ))}
                     </div>

                     <div className="mb-12">
                        <div className="mb-2 flex items-center gap-4">
                          <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white overflow-hidden">
                            {cs.brandLogo ? (
                              <img src={cs.brandLogo} alt={cs.client} className="h-full w-full object-contain p-2 brightness-0 invert" />
                            ) : cs.brandIcon ? (
                              <cs.brandIcon className="h-6 w-6" style={{ color: cs.brandColor }} />
                            ) : (
                              <Briefcase className="h-6 w-6 text-neon" />
                            )}
                          </div>
                          <h3 className="inline-block bg-neon px-4 py-1.5 text-3xl font-black uppercase text-black italic skew-x-[-10deg]">
                            {cs.client}
                          </h3>
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-3xl mt-4 opacity-50">
                          {cs.industry}
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
                        <div className="space-y-4">
                           <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40">
                             <TrendingUp className="h-3 w-3" /> The Challenge
                           </h4>
                           <p className="text-xl text-gray-300 leading-relaxed font-medium">{cs.challenge}</p>
                        </div>
                        <div className="space-y-4">
                           <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/40">
                             <Zap className="h-3 w-3" /> The Strategy
                           </h4>
                           <p className="text-xl text-gray-300 leading-relaxed font-medium">{cs.solution}</p>
                        </div>
                     </div>

                     <div className="mt-8 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 rounded-[1.5rem] sm:rounded-[2rem] border border-white/5 bg-white/5 p-6 sm:p-10 transition-all group-hover:border-neon/20 group-hover:bg-white/[0.07]">
                        {cs.metrics.map((m, idx) => (
                           <div key={idx} className="text-center sm:text-left first:col-span-2 sm:first:col-span-1">
                            <div className="text-3xl font-black text-neon sm:text-5xl tracking-tighter">{m.val}</div>
                            <div className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-500">{m.label}</div>
                          </div>
                        ))}
                     </div>
                  </div>

                  {/* Right Column: Visualizer */}
                  <div className="lg:w-5/12 pt-12 lg:pt-0">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[4rem] border-2 border-white/5 bg-[#050505] p-12 transition-all group-hover:border-neon/30 group-hover:shadow-[0_0_80px_rgba(198,255,0,0.05)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      
                      <div className="flex h-full flex-col justify-between relative z-10">
                         <div className="flex flex-col gap-10">
                            <div className="flex items-start justify-between gap-6">
                               <div className="min-w-0">
                                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-2">Partner Analysis</div>
                                  <div className="text-3xl font-black uppercase text-white tracking-tighter italic">{cs.client}</div>
                               </div>
                               <div className="shrink-0 rounded-2xl bg-neon p-4 text-black rotate-[12deg] shadow-[0_0_20px_rgba(198,255,0,0.3)]">
                                  <ArrowUpRight className="h-6 w-6 stroke-[3px]" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 sm:gap-6 border-y border-white/5 py-6 sm:py-10">
                               {cs.stats.map((s, idx) => (
                                 <div key={idx} className="text-center first:text-left last:text-right">
                                   <div className="text-xl sm:text-2xl font-black text-white tracking-tighter">{s.value}</div>
                                   <div className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-gray-600 mt-1">{s.label}</div>
                                 </div>
                               ))}
                            </div>
                         </div>

                         <div className="relative py-8 sm:py-12">
                            <motion.div 
                              initial={{ scale: 0.8, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 1 }}
                              className="text-6xl sm:text-8xl font-black leading-none text-neon neon-text-glow italic"
                            >
                               {cs.results.split(' ')[0]}
                            </motion.div>
                            <div className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-black uppercase text-gray-200 tracking-tighter leading-tight">{cs.results.split(' ').slice(1).join(' ')}</div>
                         </div>

                         <button 
                          onClick={openModal}
                          className="group/btn flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-white transition-all hover:text-neon"
                         >
                           Access Technical Deep Dive <ArrowUpRight className="h-5 w-5 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                         </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Why it Works" section */}
      <section className="bg-white py-24 text-black overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-20 text-center">
             <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
               Why Our Results <br /><span className="text-gray-400 font-normal tracking-tighter">Are Mathematically Certain.</span>
             </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             {[
               { icon: Target, title: "Precision Targeting", desc: "We eliminate wasted spend by targeting only the 3% of your market ready to buy right now." },
               { icon: Zap, title: "Agile Creative", desc: "Our team launches and iterates creative tests weekly, not quarterly." },
               { icon: Shield, title: "LTV Focus", desc: "We don't just find buyers; we find high-value users that stay for the long term." }
             ].map((item, i) => (
                <div key={i} className="rounded-3xl border-2 border-gray-100 p-10 transition-all hover:border-black/10 hover:bg-gray-50">
                   <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-neon shadow-xl">
                      <item.icon className="h-7 w-7" />
                   </div>
                   <h3 className="mb-4 text-2xl font-black uppercase tracking-tight">{item.title}</h3>
                   <p className="text-lg text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center">
            <div className="mb-12 inline-block rounded-full bg-neon/10 p-8">
               <Zap className="h-16 w-16 animate-pulse text-neon" />
            </div>
            <h2 className="mb-8 text-5xl font-black uppercase tracking-tighter sm:text-7xl">
              Become The <br /><span className="text-neon neon-text-glow">Next Story.</span>
            </h2>
            <p className="mb-12 text-xl text-gray-400 font-medium">
              We choose our partners carefully. If you have a high-potential business and you're ready to scale aggressively, let's talk numbers.
            </p>
            <button 
              onClick={openModal}
              className="group relative h-20 w-full max-w-sm overflow-hidden rounded-full bg-neon text-[14px] font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-105 active:scale-95 shadow-neon-glow"
            >
              Request My Growth Audit
            </button>
        </div>
      </section>
    </div>
  );
}
