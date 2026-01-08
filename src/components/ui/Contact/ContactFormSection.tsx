"use client";

import { useState } from "react";
import { Button } from "../Button";
import { Card } from "../Card";
import { SectionHeader } from "../SectionHeader";
import { AnimatedSection, AnimatedGrid } from "../AnimatedSection";
import { FadeIn } from "../FadeIn";

const contactDetails = [
  {
    icon: "location_on",
    title: "Office Address",
    description: (
      <p className="text-white/70">
        B1, 2nd floor, kali krishna abasan,
        <br />
        galasara road, bally,
        <br />
        howrah.
      </p>
    ),
  },
  {
    icon: "phone",
    title: "Phone",
    description: <p className="text-white/70">+44 7476 839088</p>,
  },
  {
    icon: "email",
    title: "Email",
    description: <p className="text-white/70">contact@ramesys.co.uk</p>,
  },
  {
    icon: "schedule",
    title: "Business Hours",
    description: (
      <p className="text-white/70">
        Monday - Friday: 9:00 AM - 6:00 PM
        <br />
        Saturday: 10:00 AM - 4:00 PM
        <br />
        Sunday: Closed
      </p>
    ),
  },
];

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to connect to the server. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="space-y-12">
      <SectionHeader
        badgeText="Contact Form"
        title="Reach us to create an impactful solution"
      />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <AnimatedSection delay={0.2}>
          <Card
            variant="feature"
            className="p-8 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101]"
          >
            <h2 className="mb-6 text-2xl font-bold gradient-text">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-white/80"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 px-4 py-3 bg-[#090313] text-zinc-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="website-engineering">
                    Website Engineering
                  </option>
                  <option value="application-development">
                    Application Development
                  </option>
                  <option value="custom-software-systems">
                    Custom Software Systems
                  </option>
                  <option value="digital-marketing-growth">
                    Digital Marketing & Growth
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Tell us about your project..."
                />
              </div>

              {status.type && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    status.type === "success"
                      ? "bg-green-500/20 text-green-400 border border-green-500/50"
                      : "bg-red-500/20 text-red-400 border border-red-500/50"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                variant="purple"
                size="lg"
                className="w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </AnimatedSection>

        <div className="space-y-8">
          <div className="space-y-6">
            <FadeIn delay={0.4}>
              <h2 className="text-2xl font-bold gradient-text">
                Contact Information
              </h2>
            </FadeIn>
            <AnimatedGrid className="space-y-6" stagger={0.15}>
              {contactDetails.map(({ icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-2xl">
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-300">{title}</h3>
                    {description}
                  </div>
                </div>
              ))}
            </AnimatedGrid>

            <FadeIn delay={0.6} className="pt-8">
              <h3 className="mb-4 text-lg font-semibold text-white/90">Quick Actions</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:contact@ramesys.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-primary/50 hover:bg-primary/10"
                >
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
                  Email Us
                </a>
                <a
                  href="tel:+447476839088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10"
                >
                  <span className="material-symbols-outlined text-emerald-400 group-hover:scale-110 transition-transform">call</span>
                  Call Now
                </a>
                <a
                  href="https://wa.me/447476839088?text=Hi%20Ramesys%20team%2C%20I'm%20interested%20in%20starting%20a%20project..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="h-5 w-5 group-hover:scale-110 transition-transform"
                  />
                  WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
