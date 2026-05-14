import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

export default function Contact() {
  const { openModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/nexvoragrowthofficial@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Message sent successfully! We\'ll get back to you within 24 hours.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <header className="mb-20 text-center">
          <h1 className="mb-6 text-3xl font-black uppercase tracking-tighter sm:text-5xl lg:text-7xl">
            Let's Start <span className="text-neon neon-text-glow">Scaling</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-xl text-gray-400">
            Have questions or ready to launch? Reach out and our strategy team will get back to you within 24 hours.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="mb-8 text-3xl font-black uppercase tracking-tight">Direct Growth Line</h2>
              <div className="space-y-8">
                {[
                  { icon: Phone, label: 'WhatsApp & Call', value: '+92 314 5074443' },
                  { icon: Mail, label: 'Email Priority', value: 'nexvoragrowthofficial@gmail.com' },
                  { icon: MapPin, label: 'HQ Location', value: 'House #: 23-B Street: Street 7, 46300 Islamabad Pakistan' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-gray-400 text-xs mb-1">{item.label}</h4>
                      <p className="text-lg font-bold text-white sm:text-xl break-all">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-[#0B0B0B] p-10">
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white italic">Prefer Quick Chat?</h3>
              <p className="mb-8 text-gray-400">Connect with us on WhatsApp or social media for rapid response.</p>
              <button
                onClick={() => window.open('https://wa.me/+923145074443', '_blank')}
                className="flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-black uppercase tracking-widest text-white transition-all hover:scale-105"
              >
                <MessageSquare className="h-6 w-6" /> WhatsApp Support
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-neon/10 blur-[120px]"></div>
            <div className="rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/20 bg-[#0B0B0B] p-6 sm:p-10 shadow-2xl">
              <h3 className="mb-8 text-3xl font-black uppercase tracking-tight">Drop a <span className="text-neon">Message</span></h3>
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border-b-2 border-white/10 bg-transparent py-3 text-white transition-all focus:border-neon focus:outline-none"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border-b-2 border-white/10 bg-transparent py-3 text-white transition-all focus:border-neon focus:outline-none"
                      placeholder="EMAIL@EXAMPLE.COM"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    required
                    className="w-full border-b-2 border-white/10 bg-transparent py-3 text-white transition-all focus:border-neon focus:outline-none"
                    placeholder="HOW CAN WE HELP?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full border-2 border-white/10 bg-white/5 p-4 text-white transition-all focus:border-neon focus:outline-none"
                    placeholder="TELL US ABOUT YOUR GOALS..."
                  />
                </div>

                {/* Status Messages */}
                {status !== 'idle' && (
                  <div className={`flex items-center gap-3 rounded-xl p-4 text-sm font-bold ${
                    status === 'success' ? 'bg-neon/10 text-neon' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {status === 'success' ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 rounded-full bg-neon py-5 text-sm font-black uppercase tracking-[0.2em] text-black shadow-[0_10px_30px_rgba(198,255,0,0.2)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Brief...
                    </>
                  ) : (
                    'Send Mission Brief'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
