import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface StrategyFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function StrategyForm({ className, title, subtitle }: StrategyFormProps) {
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
      phone: formData.get('phone'),
      email: formData.get('email'),
      budget: formData.get('budget'),
      subject: 'Free Strategy Audit Request',
      message: `Audit Request details:
Phone: ${formData.get('phone')}
Monthly Budget: ${formData.get('budget')}`,
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
        setStatusMessage('Audit request sent successfully! We\'ll contact you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(result.error || 'Failed to send audit request');
      }
    } catch (error) {
      console.error('Audit request error:', error);
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      {title && (
        <div className="mb-8">
          <h2 className="mb-1 text-2xl font-black uppercase tracking-tight">
            {title} <span className="text-neon">Audit</span>
          </h2>
          {subtitle && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-white/20 bg-black p-3 text-sm text-white transition-all focus:border-neon focus:outline-none"
            placeholder="E.g. Ali Khan"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="w-full border border-white/20 bg-black p-3 text-sm text-white transition-all focus:border-neon focus:outline-none"
            placeholder="+92 314 5074443"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Work Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-white/20 bg-black p-3 text-sm text-white transition-all focus:border-neon focus:outline-none"
              placeholder="nexvoragrowthofficial@gmail.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Monthly Budget</label>
            <input
              type="text"
              name="budget"
              required
              className="w-full border border-white/20 bg-black p-3 text-sm text-white transition-all focus:border-neon focus:outline-none"
              placeholder="e.g. $5,000"
            />
          </div>
        </div>

        {/* Status Messages */}
        {status !== 'idle' && (
          <div className={`flex items-center gap-3 rounded-lg p-4 text-xs font-bold ${
            status === 'success' ? 'bg-neon/10 text-neon' : 'bg-red-500/10 text-red-500'
          }`}>
            {status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
            {statusMessage}
          </div>
        )}

        <div className="pt-4 space-y-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-neon py-4 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Get My Free Strategy Audit'
            )}
          </button>
          <p className="text-center text-[8px] font-bold uppercase tracking-widest text-gray-600">
            Private & Confidential. No Credit Card Required.
          </p>
        </div>
      </form>
    </div>
  );
}
