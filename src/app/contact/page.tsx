"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://getform.io/f/bolmwxja",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" }); // Reset form
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error: unknown) {
      setStatus(
        error instanceof Error ? error.message : "Failed to send message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen pt-20 bg-[#0d1423] text-white">
      <div className="bg-[#181e2e] p-8 rounded-lg shadow-lg max-w-md border border-gray-700">
        <h2 className="text-center text-2xl font-semibold text-gray-200">
          Have a Project Idea?
        </h2>

        <p className="text-center text-gray-400 mt-1">
          m.ahmadfaizan30@gmail.com
        </p>

        <div className="flex justify-center gap-4 my-4">
          <a href="https://github.com/Muhammad-Ahmad-Faizan" target="_blank">
            <FaGithub className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-ahmad-faizan"
            target="_blank"
          >
            <FaLinkedin className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="contact"
              placeholder="Contact No"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 bg-transparent border border-gray-500 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500 min-h-[100px]"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-2 text-white cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:opacity-80 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && (
          <p className="text-center text-sm mt-4 text-green-400">{status}</p>
        )}

        <p className="text-center text-gray-500 text-sm mt-4">
          © Copyright 2024. All Rights Reserved.
          <br />
          Made by{" "}
          <span className="text-white font-semibold">
            Muhammad Ahmad Faizan
          </span>
        </p>
      </div>
    </section>
  );
}
