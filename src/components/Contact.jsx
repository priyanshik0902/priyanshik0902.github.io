import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5jcp72l',
      'template_lg789yc',
      form.current,
      'G6QJRP7xWz_Ms8hnm'
    ).then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSuccess(false);
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="bg-gray-900 p-10 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-4xl font-bold mb-6 text-pink-400 text-center">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-xl text-white font-semibold"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-400 text-center mt-4">Message sent successfully! 🎉</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
