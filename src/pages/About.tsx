import { motion } from 'motion/react';
import { Target, TrendingUp, Users, Award, Zap, Shield, Flame, Terminal, ArrowDownRight } from 'lucide-react';

export default function About() {
  const philosophies = [
    {
      icon: Flame,
      title: "Radical Ownership",
      desc: "We treat your budget like our own. Every dollar is deployed with intention and clinical precision."
    },
    {
      icon: Zap,
      title: "Speed as a Feature",
      desc: "In digital marketing, the slow die. We ship campaigns, tests, and optimizations at a relentless pace."
    },
    {
      icon: Shield,
      title: "Truth in Data",
      desc: "We don't listen to 'hunches'. We listen to clear signals from your data to drive scalable decision-making."
    },
    {
      icon: Terminal,
      title: "Technical Dominance",
      desc: "We build our own tools and scripts to bypass agency bottlenecks and outperform automated defaults."
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-neon/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-neon/5 to-transparent blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-neon">
              <Zap className="h-3 w-3 fill-neon" /> AI-Fueled Growth Engine
            </div>
            <h1 className="mb-8 text-4xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl lg:text-[110px]">
              The Hub of <br /><span className="text-neon neon-text-glow">Digital Alpha.</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-xl text-[#e5e5e5] font-semibold leading-relaxed">
              Nexvora Growth is an elite, data-first laboratory where AI algorithms meet aggressive marketing strategies to build market-dominating brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-neon/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Proposed "Founder Box" UI Structure */}
                <div className="relative overflow-hidden rounded-[2.5rem] border border-neon/30 bg-black/50 backdrop-blur-xl transition-all duration-500 group-hover:border-neon shadow-[0_0_40px_rgba(198,255,0,0.1)] group-hover:shadow-[0_0_60px_rgba(198,255,0,0.2)]">
                  <div className="p-2 sm:p-4">
                    <img 
                      src="/Nexvora-Growth/rohaib-ali.png"
                      alt="Rohaib Ali - Nexvora CEO"
                      className="w-full aspect-[4/5] object-cover rounded-[2rem] opacity-90 group-hover:opacity-100 transition-all duration-700 shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Glassmorphism Title Card integrated inside */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md transition-all duration-500 group-hover:border-neon/40 group-hover:bg-black/80">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neon/60 mb-1">Founder & Visionary</div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-neon neon-text-glow italic">Rohaib Ali</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#e5e5e5] mt-1">CEO & FOUNDER</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="mb-6 inline-block text-[10px] font-black uppercase tracking-[0.3em] text-neon/60">The Architect</div>
              <h2 className="mb-8 text-6xl font-black uppercase tracking-tighter leading-none italic">
                <span className="text-neon neon-text-glow">Building the <br />Future of Alpha.</span>
              </h2>
              <p className="text-xl text-[#e5e5e5] mb-8 leading-relaxed font-semibold">
                Our founder, <span className="text-neon font-bold neon-text-glow">ROHAIB ALI</span>, built Nexvora on a single mission: to replace legacy agency bloat with algorithmic speed. He engineered a growth laboratory that combines AI-driven strategy with aggressive execution to build category-defining brands.
              </p>
              <div className="grid grid-cols-2 gap-6 pb-8 border-b border-white/5 mb-8">
                <div className="border-l-2 border-neon pl-6">
                  <div className="text-4xl font-black text-white italic">CEO</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neon mt-1">& FOUNDER</div>
                </div>
                <div className="border-l-2 border-neon pl-6">
                  <div className="text-4xl font-black text-white italic">$100M+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-neon mt-1">REVENUE SHARPENED</div>
                </div>
              </div>

              {/* Requested Founder Box Style */}
              <div className="flex items-center gap-4 group cursor-pointer border border-white/5 bg-white/[0.02] p-4 rounded-2xl w-fit hover:bg-white/[0.05] transition-all">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 bg-neon/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src="/Nexvora-Growth/rohaib-ali.png" 
                    alt="Rohaib Ali" 
                    className="relative h-[60px] w-[60px] rounded-full object-cover border-2 border-neon"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase text-neon tracking-tight">Rohaib Ali</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-neon/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
              The Codes We <br /><span className="text-gray-500">Live By.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {philosophies.map((phi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-white/5 bg-[#0B0B0B]/80 backdrop-blur-xl p-10 transition-all hover:border-neon/30 hover:bg-white/[0.03]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-neon text-black shadow-neon-glow">
                  <phi.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white group-hover:text-neon transition-colors">
                  {phi.title}
                </h3>
                <p className="text-lg leading-relaxed text-[#e5e5e5] font-semibold">
                  {phi.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Showcase */}
      <section className="py-24 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 md:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-2">Alpha Performance Only.</h2>
            <p className="text-gray-500 font-medium">We don't do "marketing." We do market capture.</p>
          </div>
          
          {/* Requested Founder Box as Signature */}
          <div className="flex items-center gap-3 border-l-0 sm:border-l border-white/10 pl-0 sm:pl-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-neon/20 blur-sm rounded-full" />
              <img 
                src="/Nexvora-Growth/rohaib-ali.png" 
                alt="Rohaib Ali" 
                className="relative h-[60px] w-[60px] rounded-full object-cover border-2 border-neon"
              />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase text-neon m-0 leading-none">Rohaib Ali</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-1 m-0">CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission Extra */}
      <section className="bg-white py-24 text-black">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="mb-8 text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7x">
                Moving Beyond <br />The Agency <br /><span className="text-gray-400 font-normal">Stereotype.</span>
              </h2>
              <p className="mb-8 text-xl font-medium leading-relaxed">
                Most agencies focus on "service delivery." We focus on "value extraction." We aren't here to do your tasks; we're here to grow your business until your competitors wonder what happened.
              </p>
              <div className="space-y-4">
                {[
                  "No monthly minimum status calls without action items.",
                  "Zero hide-the-ball reporting. You see what we see.",
                  "Aggressive experimentation as the default state.",
                  "Direct access to specialists, not account managers."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                    <ArrowDownRight className="h-5 w-5 text-neon bg-black p-1 rounded-sm" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <div className="aspect-square w-full overflow-hidden rounded-[3rem] bg-black shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Nexvora Growth Team Strategy" 
                  className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-12 lg:p-20 bg-gradient-to-t from-black via-black/20 to-transparent">
                  <div className="mb-4 text-xs font-black uppercase tracking-widest text-neon">NEXVORA GROWTH</div>
                  <h3 className="text-4xl font-black uppercase text-white sm:text-5xl">
                    WE ARE THE <br />UNFAIR <br /><span className="text-neon neon-text-glow">ADVANTAGE</span> <br />YOU'VE BEEN <br />LOOKING FOR.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#050505] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-5xl font-black uppercase tracking-tighter sm:text-7xl">
                READY TO <br /><span className="text-neon neon-text-glow">SCALE?</span>
              </h2>
              <p className="mb-12 text-xl text-[#e5e5e5] font-semibold">
                You've seen what we do. Now let us show you what we can do for your specific business goals. No fluff, just strategy.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-whiteAlpha-900">Expert Consultation</h4>
                    <p className="text-gray-500">Direct strategy session with our growth leads.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight text-white">Full Funnel Audit</h4>
                    <p className="text-gray-500">We reveal the leak in your current growth machine.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/5 bg-black p-8 sm:p-12">
              <form 
                action="https://formsubmit.co/nexvoragrowthofficial@gmail.com"
                method="POST"
                className="space-y-6"
              >
                {/* Hidden Settings */}
                <input type="hidden" name="_subject" value="Growth Initialization Request - Nexvora Growth" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. Ali Khan"
                    className="w-full border border-white/10 bg-white/5 p-4 text-white placeholder:text-gray-700 focus:border-neon focus:outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Work Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="nexvoragrowthofficial@gmail.com"
                      className="w-full border border-white/10 bg-white/5 p-4 text-white placeholder:text-gray-700 focus:border-neon focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Monthly Budget</label>
                    <input
                      type="text"
                      name="budget"
                      required
                      placeholder="E.g. $10,000"
                      className="w-full border border-white/10 bg-white/5 p-4 text-white placeholder:text-gray-700 focus:border-neon focus:outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your growth targets..."
                    className="w-full border border-white/10 bg-white/5 p-4 text-white placeholder:text-gray-700 focus:border-neon focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full rounded-xl bg-neon py-5 text-lg font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-[1.02] active:scale-95 shadow-neon-glow disabled:opacity-50 disabled:cursor-not-allowed">
                  Initialize Growth
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
