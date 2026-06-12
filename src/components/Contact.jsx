import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact({ personal, socials }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to a backend or service.
    // We will simulate success.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="bg-glow-white -bottom-24 right-1/4"></div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Call to action */}
          <div className="md:col-span-5">
            <span className="text-xs font-semibold text-theme-accent uppercase tracking-widest mb-3">Connect</span>
            <h3 className="text-3xl md:text-5xl font-bold font-display text-theme-textLight leading-tight mb-6">
              Let's create something together.
            </h3>
            <p className="text-theme-textMuted leading-relaxed mb-8 max-w-sm">
              Have a project in mind or looking for a developer to join your team? Drop a line and let's chat.
            </p>

            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-3 text-sm font-semibold text-theme-accent hover:text-theme-accent/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{socials.email}</span>
            </a>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-7 bg-theme-bgLight border border-theme-bgBorder p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-theme-textMuted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-theme-bg border border-theme-bgBorder focus:border-theme-accent/50 text-theme-textLight rounded outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-theme-textMuted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-theme-bg border border-theme-bgBorder focus:border-theme-accent/50 text-theme-textLight rounded outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-theme-textMuted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-theme-bg border border-theme-bgBorder focus:border-theme-accent/50 text-theme-textLight rounded outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-theme-accent hover:bg-theme-accentHover text-theme-bg font-semibold text-sm rounded transition-all duration-300"
              >
                {sent ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-theme-bgBorder flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-theme-textMuted">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 select-none">
            Designed with <span className="text-theme-accent">❤</span> using React + Tailwind
          </p>
        </div>
      </div>
    </section>
  );
}
