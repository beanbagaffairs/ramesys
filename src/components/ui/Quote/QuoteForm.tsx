'use client';

import { useState } from 'react';
import { Button } from "../Button";
import { Card } from "../Card";
import { AnimatedSection } from "../AnimatedSection";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    subProject: '',
    budget: '',
    timeline: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        body: JSON.stringify({
          ...formData,
          formType: 'quote'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Quote request sent successfully! We'll get back to you soon.",
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          projectType: '',
          subProject: '',
          budget: '',
          timeline: '',
          description: '',
        });
        // Clear select values manually if needed, but since they are controlled it's fine
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
    <AnimatedSection delay={0.2}>
      <Card
        variant="feature"
        className="p-8 md:p-12 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101] border-white/10"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Doe"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your Company"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-4">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-white/70 mb-2">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  required
                  className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                  onChange={handleChange}
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="web">Website Engineering</option>
                  <option value="app">Application Development</option>
                  <option value="software">Custom Software Systems</option>
                  <option value="marketing">Digital Marketing & Growth</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {formData.projectType && (
                <div>
                  <label htmlFor="subProject" className="block text-sm font-medium text-white/70 mb-2">Sub Project Selection</label>
                  <select
                    id="subProject"
                    name="subProject"
                    value={formData.subProject}
                    className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a sub project</option>
                    {formData.projectType === 'web' && (
                      <>
                        <option value="corporate">Corporate Website</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="landing">Landing Page</option>
                      </>
                    )}
                    {formData.projectType === 'app' && (
                      <>
                        <option value="mobile">Mobile App</option>
                        <option value="web-app">Web Application</option>
                        <option value="saas">SaaS Platform</option>
                      </>
                    )}
                    {formData.projectType === 'software' && (
                      <>
                        <option value="erp">ERP System</option>
                        <option value="crm">CRM Tool</option>
                        <option value="automation">Workflow Automation</option>
                      </>
                    )}
                    {formData.projectType === 'marketing' && (
                      <>
                        <option value="seo">SEO Optimization</option>
                        <option value="ads">Paid Advertising</option>
                        <option value="social">Social Media Growth</option>
                      </>
                    )}
                    <option value="other">Other</option>
                  </select>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-white/70 mb-2">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select budget</option>
                    <option value="<5k">Less than $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-white/70 mb-2">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    className="w-full bg-[#090313] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select timeline</option>
                    <option value="1m">Less than 1 month</option>
                    <option value="1-3m">1 - 3 months</option>
                    <option value="3-6m">3 - 6 months</option>
                    <option value="6m+">6+ months</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-white/70 mb-2">Project Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
              placeholder="Tell us about your project goals, features, and any specific requirements..."
              onChange={handleChange}
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

          <div className="flex justify-end">
            <Button 
                variant="purple" 
                size="lg" 
                className="w-full md:w-auto px-12"
                type="submit"
                disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Request Quote'}
            </Button>
          </div>
        </form>
      </Card>
    </AnimatedSection>
  );
}
