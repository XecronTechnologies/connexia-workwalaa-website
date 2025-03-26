import React from 'react';
import GradientButton from '../Buttons/GradientButton';

interface ContactFormProps {
  submitId: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ submitId }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white p-4">
      <div className="max-w-md w-full bg-[#222222] rounded-lg shadow-xl p-8 space-y-6">
        <div className="flex justify-start">
        </div>

        <h2 className="text-2xl font-bold text-center">
          Contact Us
        </h2>
        <form action={`https://submit-form.com/${submitId}`} method="POST" className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              className="w-full border-2 border-[#444444] bg-[#121212] text-white rounded-md p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block">Message</label>
            <textarea id="message" name="message" className="w-full border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 h-32" required />
          </div>
          <GradientButton text="Send Message" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
