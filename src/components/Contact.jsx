import AnimatedWrapper from "./AnimatedWrapper";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "917533846679";

    const text = `Hello Ayan 👋
    
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const encodedText = encodeURIComponent(text);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedText}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="bg-black text-white py-24 px-10">
      <AnimatedWrapper>
        <h2 className="text-4xl font-bold text-center mb-6">
          Let's Work <span className="text-red-500">Together</span>
        </h2>
        <p className="text-gray-400 text-center mb-14">
          I'm currently looking for new opportunities.
        </p>
      </AnimatedWrapper>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <AnimatedWrapper>
          <div className="bg-gray-900 p-8 rounded-xl space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <p className="flex gap-3 items-center">
              <FaPhone className="text-red-500" /> +91 7533846679
            </p>
            <p className="flex gap-3 items-center">
              <FaEnvelope className="text-red-500" /> ayan.softdev@gmail.com
            </p>
            <p className="flex gap-3 items-center">
              <FaLinkedin className="text-red-500" />
              <a
                href="https://www.linkedin.com/in/ayan-ali-8019832b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                linkedin.com/in/ayan-ali-8019832b6
              </a>
            </p>
          </div>
        </AnimatedWrapper>

        {/* Form */}
        <AnimatedWrapper delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-xl space-y-4"
          >
            <input
              name="name"
              placeholder="Name"
              required
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your message..."
              required
              onChange={handleChange}
              className="w-full bg-gray-800 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
