import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Upload, Send, Briefcase, Users, Star, ArrowRight } from 'lucide-react';

export default function Careers() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-6xl font-black uppercase tracking-tighter sm:text-8xl lg:text-9xl">
              Join the <span className="text-neon">A-Team</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400">
              We're looking for outliers, rebels, and growth hackers who want to build the future of digital marketing.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Why Nexvora */}
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Our DNA</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {[
                { icon: Star, title: "Excellence Only", desc: "We don't do 'average'. We push for world-class results every single day." },
                { icon: Users, title: "Radical Candor", desc: "Direct feedback, honest conversations, and zero politics." },
                { icon: Briefcase, title: "Deep Ownership", desc: "You own your projects. No micromanagement, just results." },
                { icon: ArrowRight, title: "Rapid Growth", desc: "Move fast, learn faster. We invest heavily in your development." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative border border-white/10 bg-white/5 p-6 transition-all hover:border-neon/50"
                  id={`dna-card-${i}`}
                >
                  <item.icon className="mb-4 h-8 w-8 text-neon" />
                  <h3 className="mb-2 font-bold uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-l-4 border-neon bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-black uppercase">Open Roles</h3>
              <ul className="space-y-4">
                {[
                  'SEO Specialist', 
                  'Social Media Manager', 
                  'Email Marketing Expert', 
                  'PPC Specialist', 
                  'Content Marketer',
                  'AI Content Strategist',
                  'AI Prompt Engineer', 
                  'AI Automations Expert',
                  'Graphic Designing', 
                  'Video Editing', 
                  'WordPress Developer'
                ].map((role, i) => (
                  <li key={i} className="flex items-center justify-between border-b border-white/10 pb-4 text-lg font-bold hover:text-neon cursor-default transition-colors">
                    <span>{role}</span>
                    <span className="text-xs uppercase tracking-widest text-gray-500">Remote / Full-time</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative border-4 border-white p-8 lg:p-12"
            id="application-form-container"
          >
            <h2 className="mb-8 text-4xl font-black uppercase tracking-tight">Apply Now</h2>
            
            <form 
              action="https://formsubmit.co/nexvoragrowthofficial@gmail.com"
              method="POST"
              encType="multipart/form-data"
              className="space-y-6" 
              id="job-apply-form"
            >
              {/* Hidden Settings */}
              <input type="hidden" name="_subject" value="New Career Application - Nexvora Growth" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + window.location.pathname : ''} />
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500" htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-2 border-white/20 bg-transparent px-4 py-3 text-white focus:border-neon focus:outline-none"
                    placeholder="WADE WILSON"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-2 border-white/20 bg-transparent px-4 py-3 text-white focus:border-neon focus:outline-none"
                    placeholder="WADE@OUTLIERS.COM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500" htmlFor="role">What's your craft?</label>
                <select
                  id="role"
                  name="role"
                  className="w-full appearance-none border-2 border-white/20 bg-transparent px-4 py-3 text-white focus:border-neon focus:outline-none"
                >
                  <option className="bg-black">SELECT A ROLE</option>
                  <optgroup label="DIGITAL MARKETING" className="bg-black text-gray-400">
                    <option className="bg-black">SEO SPECIALIST</option>
                    <option className="bg-black">SOCIAL MEDIA MANAGER</option>
                    <option className="bg-black">EMAIL MARKETING EXPERT</option>
                    <option className="bg-black">PPC SPECIALIST</option>
                    <option className="bg-black">CONTENT MARKETER</option>
                  </optgroup>
                  <optgroup label="AI ROLES" className="bg-black text-gray-400">
                    <option className="bg-black">AI MARKETING SPECIALIST</option>
                    <option className="bg-black">AI CONTENT STRATEGIST</option>
                    <option className="bg-black">AI PROMPT ENGINEER</option>
                    <option className="bg-black">AI AUTOMATIONS EXPERT</option>
                  </optgroup>
                  <optgroup label="CREATIVE & DEV" className="bg-black text-gray-400">
                    <option className="bg-black">GRAPHIC DESIGNING</option>
                    <option className="bg-black">VIDEO EDITING</option>
                    <option className="bg-black">WORDPRESS DEVELOPER</option>
                  </optgroup>
                  <option className="bg-black">OTHER / GENERAL</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500" htmlFor="portfolio">Portfolio/LinkedIn URL</label>
                <input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  className="w-full border-2 border-white/20 bg-transparent px-4 py-3 text-white focus:border-neon focus:outline-none"
                  placeholder="HTTPS://..."
                />
              </div>

              {/* Resume Upload Area */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500">Your Resume</label>
                <div
                  className={`relative flex min-h-[160px] cursor-pointer flex-col items-center justify-center border-2 border-dashed transition-all ${
                    dragActive ? 'border-neon bg-neon/10' : 'border-white/20 hover:border-white/40'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={onButtonClick}
                  id="resume-drop-zone"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="resume"
                    className="hidden"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <Upload className={`mb-4 h-8 w-8 ${file ? 'text-neon' : 'text-gray-500'}`} />
                  {file ? (
                    <div className="text-center">
                      <p className="font-bold text-neon uppercase italic">{file.name}</p>
                      <button 
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setFile(null); }}
                        className="text-[10px] text-red-500 uppercase font-black hover:underline mt-2"
                      >
                        Remove File
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="text-sm font-bold uppercase tracking-wide">Drop your resume here</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">or click to browse (PDF, DOCX)</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-neon px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition-all hover:gap-6 active:scale-95"
                id="submit-application"
              >
                Send Application
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
