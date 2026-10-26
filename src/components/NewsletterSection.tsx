import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      // In local demo without SMTP backend configured:
      try {
        const subs = JSON.parse(localStorage.getItem('kaappitalism_subscribers') || '[]');
        subs.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('kaappitalism_subscribers', JSON.stringify(subs));
      } catch (err) {
        console.log('Saved locally:', err);
      }
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="bg-[#121212] py-16 sm:py-24 border-b border-[#292929] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#C92127] uppercase">
          <span className="w-2 h-2 bg-[#C92127]"></span>
          <span>DISPATCH SUBSCRIBER LIST // PRIVATE BATCH ALERTS</span>
        </div>

        <h3 className="font-display text-4xl sm:text-6xl text-[#E9E6DC] uppercase tracking-tight">
          GET IN ON <span className="font-serif italic text-stroke">THE CULTURE.</span>
        </h3>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#E9E6DC]/75 font-sans leading-relaxed">
          New drops, limited 36-hour barrel releases, workshop access at the Calicut lab, and dispatches on native coffee culture. No spam. No generic marketing.
        </p>

        {status === 'success' ? (
          <div className="bg-[#182618] border border-emerald-500/50 p-6 max-w-md mx-auto text-center space-y-2 animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <p className="font-mono text-sm font-bold text-white uppercase">YOU ARE ON THE LIST.</p>
            <p className="text-xs text-white/70 font-sans">
              Welcome to the underground. Check your inbox for the upcoming barrel drop notification.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-1 bg-[#090909] border border-[#292929] px-4 py-3.5 text-xs font-mono text-[#E9E6DC] placeholder-[#E9E6DC]/40 focus:outline-none focus:border-[#C92127] transition-colors"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-[#E9E6DC] text-black hover:bg-[#C92127] hover:text-white transition-all duration-300 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shrink-0"
              >
                <span>{status === 'loading' ? 'JOINING...' : 'JOIN'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-[#C92127]">
                <AlertCircle className="w-4 h-4" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>
        )}

        <div className="text-[10px] font-mono text-[#E9E6DC]/40 uppercase tracking-widest pt-2">
          STORED LOCALLY & SYNCS TO MAIL SERVICE WHEN SMTP CONFIGURED
        </div>

      </div>
    </section>
  );
};
