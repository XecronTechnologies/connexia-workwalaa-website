import React, { useState } from 'react';
import GradientButton from '../Buttons/GradientButton';

interface ContactFormProps {
  // No longer need submitId since we're not using Formspark
}

const ContactFormDiscord: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
     
    setStatus('sending');

    try {
      const response = await fetch('/.netlify/functions/submitToDiscord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white p-4">
      <div className="max-w-md w-full bg-[#222222] rounded-lg shadow-xl p-8 space-y-6">
        <div className="flex justify-start">
          {/* Your existing empty div (keep if needed for layout) */}
        </div>

        <h2 className="text-2xl font-bold text-center">
          Contact Us
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-[#444444] bg-[#121212] text-white rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-[#444444] bg-[#121212] text-white rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-[#444444] bg-[#121212] text-white rounded-md p-2 focus:outline-none focus:border-blue-500 h-32" 
              required 
            />
          </div>
          
          <GradientButton 
            text={status === 'sending' ? 'Sending...' : 'Send Message'} 
            type="submit" 
            disabled={status === 'sending'}
          />
          
          {status === 'success' && (
            <div className="p-3 bg-green-800/30 border border-green-500 rounded-md text-center">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="p-3 bg-red-800/30 border border-red-500 rounded-md text-center">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactFormDiscord;