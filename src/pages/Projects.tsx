import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, Calendar, MapPin, Briefcase, CheckCircle2, TrendingUp,
  ArrowRight, Image as ImageIcon
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Projects() {
  const { openModal } = useModal();

  const projects = [
    {
      id: "01",
      title: "AI-Powered Digital Marketing",
      client: "Against Time LLC",
      industry: "Insurance",
      location: "USA",
      timeline: "2023 – 2024",
      type: "Digital Marketing (AI)",
      services: ["AI Ad Campaigns", "Lead Generation", "Funnel Optimization"],
      status: "Completed ✓",
      testimonial: {
        quote: "Nexvora's AI marketing approach brought us clients we never reached before. Our pipeline tripled within 6 months and cost per acquisition dropped significantly.",
        author: "CEO",
        company: "Against Time LLC, USA"
      },
      results: [
        { metric: "Pipeline Growth", before: "Flat", after: "3× Increase" },
        { metric: "Cost Per Lead", before: "$85", after: "$22" },
        { metric: "Ad ROAS", before: "1.4x", after: "4.8x" },
        { metric: "Inbound Leads/Mo", before: "8", after: "47" }
      ],
      leads: "21 referral inquiries from the insurance sector post-campaign",
      logo: "/Nexvora-Growth/logos/against-time.png",
      color: "#C8FF00",
      screenshots: [
        { url: "/Nexvora-Growth/projects/against-time/meta-ads.png", label: "Meta Ads Dashboard" },
        { url: "/Nexvora-Growth/projects/against-time/tiktok-ads.png", label: "TikTok Ads Manager" },
        { url: "/Nexvora-Growth/projects/against-time/google-ads.png", label: "Google Ads Overview" },
        { url: "/Nexvora-Growth/projects/against-time/lead-sheet.PNG", label: "Lead Management Sheet" }
      ]
    },
    {
      id: "02",
      title: "Digital Marketing & AI Automation",
      client: "NovaShield Solutions",
      industry: "SaaS / Subscription Retention",
      location: "Canada",
      timeline: "2023 – 2024",
      type: "Digital Marketing & AI Automation",
      services: ["AI Content Pipeline", "LinkedIn Growth", "Email Automation"],
      status: "Completed ✓",
      testimonial: {
        quote: "The AI-driven content and automation system Nexvora built completely changed how we generate demand. We now close deals we didn't even have to chase.",
        author: "VP of Marketing",
        company: "NovaShield Solutions, Canada"
      },
      results: [
        { metric: "MQL Volume", before: "12/month", after: "68/month" },
        { metric: "Email Open Rate", before: "18%", after: "46%" },
        { metric: "LinkedIn Impressions", before: "2K/mo", after: "38K/mo" },
        { metric: "Demo Bookings", before: "4/mo", after: "29/mo" }
      ],
      leads: "19 SaaS companies requested a similar AI marketing setup",
      logo: "/Nexvora-Growth/logos/novashield.png",
      color: "#3b82f6",
      screenshots: [
        { url: "/Nexvora-Growth/projects/novashield/meta-ads.png", label: "Facebook Ads Manager" },
        { url: "/Nexvora-Growth/projects/novashield/tiktok-ads.png", label: "TikTok Ads Manager" },
        { url: "/Nexvora-Growth/projects/novashield/automation-overview.png", label: "AI Automation Overview" },
        { url: "/Nexvora-Growth/projects/novashield/google-ads.png", label: "Google Ads Performance" }
      ]
    },
    {
      id: "03",
      title: "Digital Marketing & Social Media",
      client: "ApexCore Analytics",
      industry: "Logistics & Supply Chain",
      location: "United Kingdom",
      timeline: "2024 – 2025",
      type: "Digital Marketing & Social Media Management",
      services: ["Social Media Strategy", "Paid Ads", "Brand Authority Building"],
      status: "Active ✓",
      testimonial: {
        quote: "Our LinkedIn presence went from invisible to industry-leading in under 4 months. Nexvora's strategy brought us into conversations we'd been excluded from.",
        author: "Head of Growth",
        company: "ApexCore Analytics, UK"
      },
      results: [
        { metric: "LinkedIn Followers", before: "320", after: "8,400+" },
        { metric: "Content Engagement", before: "0.8%", after: "6.2%" },
        { metric: "Organic Reach/Post", before: "200", after: "14,000+" },
        { metric: "Inbound B2B Leads", before: "2/mo", after: "22/mo" }
      ],
      leads: "16 B2B companies from logistics sector requested brand strategy sessions",
      logo: "/Nexvora-Growth/logos/apexcore.png",
      color: "#FFD700",
      screenshots: [
        { url: "/Nexvora-Growth/projects/apexcore/meta-ads.png", label: "Meta Ads Dashboard" },
        { url: "/Nexvora-Growth/projects/apexcore/lead-sheet.PNG", label: "B2B Lead Sheet" },
        { url: "/Nexvora-Growth/projects/apexcore/google-ads.png", label: "Google Ads Performance" },
        { url: "/Nexvora-Growth/projects/apexcore/linkedin-ads.png", label: "LinkedIn Campaign Manager" }
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-neon/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-neon">
              <Briefcase className="h-3 w-3" /> Mission Portfolio
            </div>
            <h1 className="mb-8 text-4xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl lg:text-8xl">
              Strategic <br /><span className="text-neon neon-text-glow">Deployments.</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-xl text-[#e5e5e5] font-semibold">
              Technical breakdowns of high-impact projects delivered across the globe. We solve complex operational bottlenecks with precision engineering and AI-driven marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects List */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Project Details */}
                <div className="lg:w-1/2 space-y-10">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-white/10">{project.id}</span>
                    <div className="h-px flex-1 bg-white/10"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-neon">{project.status}</span>
                  </div>

                  <div>
                    <div className="mb-4 flex items-center gap-4">
                      {project.logo ? (
                        <img src={project.logo} alt={project.client} className="h-10 w-auto brightness-0 invert opacity-80" />
                      ) : (
                        <Shield className="h-8 w-8 text-neon" />
                      )}
                      <h2 className="text-2xl font-black uppercase tracking-tighter sm:text-3xl lg:text-4xl">{project.title}</h2>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                      <span className="flex items-center gap-2"><MapPin className="h-3 w-3 text-neon" /> {project.location}</span>
                      <span className="flex items-center gap-2"><Calendar className="h-3 w-3 text-neon" /> {project.timeline}</span>
                      <span className="flex items-center gap-2 text-neon">{project.type}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Core Services</h4>
                      <ul className="space-y-2">
                        {project.services.map((service, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm font-semibold text-[#e5e5e5]">
                            <CheckCircle2 className="h-4 w-4 text-neon flex-shrink-0" /> {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Project Impact</h4>
                      <div className="rounded-xl border border-neon/20 bg-neon/5 p-4">
                        <p className="text-xs font-bold text-neon leading-relaxed uppercase tracking-tight">
                          {project.leads}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="relative rounded-3xl border border-white/5 bg-white/5 p-8 italic">
                    <p className="text-lg text-gray-200 leading-relaxed font-medium">
                      "{project.testimonial.quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-4 not-italic">
                      <div className="h-10 w-10 rounded-full bg-neon flex items-center justify-center font-black text-black flex-shrink-0">
                        {project.testimonial.author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-tighter text-white">{project.testimonial.author}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-neon">{project.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results & Visuals */}
                <div className="lg:w-1/2 space-y-10">
                  {/* Metrics Table */}
                  <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B0B0B]">
                    <div className="bg-white/5 px-4 sm:px-8 py-4 border-b border-white/10">
                      <h3 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white">
                        <TrendingUp className="h-4 w-4 text-neon" /> Results at a Glance
                      </h3>
                    </div>
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/5 text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-gray-500">
                          <th className="px-3 sm:px-8 py-3 sm:py-4">Metric</th>
                          <th className="px-3 sm:px-8 py-3 sm:py-4">Before</th>
                          <th className="px-3 sm:px-8 py-3 sm:py-4 text-neon">After</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {project.results.map((res, i) => (
                          <tr key={i} className="text-xs sm:text-sm font-semibold">
                            <td className="px-3 sm:px-8 py-3 sm:py-4 text-gray-400">{res.metric}</td>
                            <td className="px-3 sm:px-8 py-3 sm:py-4 text-gray-500 line-through opacity-50">{res.before}</td>
                            <td className="px-3 sm:px-8 py-3 sm:py-4 text-white font-black">{res.after}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Screenshots */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    {project.screenshots && project.screenshots.length > 0 ? (
                      project.screenshots.map((shot, i) => (
                        <div key={i} className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all hover:border-neon/30">
                          <img 
                            src={shot.url} 
                            alt={shot.label} 
                            className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0 group-hover:scale-110" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
                             <span className="text-[10px] font-black uppercase tracking-widest text-neon">{shot.label}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      [1, 2, 3, 4].map((n) => (
                        <div key={n} className="group relative aspect-video overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all hover:border-neon/30">
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-20 group-hover:opacity-60 transition-all">
                            <ImageIcon className="h-6 w-6 text-neon" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Visual Asset {n}</span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                      ))
                    )}
                  </div>

                  <button
                    onClick={openModal}
                    className="group flex w-full items-center justify-center gap-3 rounded-full border-2 border-neon bg-black py-6 text-sm font-black uppercase tracking-[0.2em] text-neon transition-all hover:bg-neon hover:text-black shadow-neon-glow"
                  >
                    Request Similar Deployment <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-neon py-24 text-black text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-7xl">
            Your Bottleneck <br /> Ends Today.
          </h2>
          <p className="mb-12 text-lg font-bold opacity-70">
            We don't just build software. We build competitive advantages.
          </p>
          <button
            onClick={openModal}
            className="rounded-full bg-black px-12 py-6 text-lg font-black uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95"
          >
            Discuss My Project
          </button>
        </div>
      </section>
    </div>
  );
}
