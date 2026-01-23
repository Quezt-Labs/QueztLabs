"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";
import { company } from "@/lib/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Contact section with form and company info
 */
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const shouldReduceMotion = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      "project-type": formData.get("project-type"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = "/thank-you";
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get Started"
          title="Book Your Free Strategy Call"
          description="Let's discuss your product, timeline, and how we can help you ship faster. No sales pitch—just a real conversation."
        />

        <div className="mt-8 sm:mt-12 lg:mt-16 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, margin: "-100px" }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }
            }
          >
            <h3 className="text-2xl font-semibold mb-6">What to expect</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                <strong className="text-foreground">30-minute strategy call</strong> to
                understand your product vision and challenges.
              </p>
              <p>
                <strong className="text-foreground">Honest assessment</strong>{" "}
                of what's realistic for your timeline and budget.
              </p>
              <p>
                <strong className="text-foreground">Clear next steps</strong>{" "}
                if we're a good fit, or recommendations if we're not.
              </p>
              <p className="text-sm mt-6 pt-6 border-t border-border">
                Limited slots available. We only take on 2-3 projects per month
                to ensure quality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href={`tel:${company.phone}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-muted-foreground">{company.address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
            }
            viewport={{ once: true, margin: "-100px" }}
            transition={
              shouldReduceMotion ? { duration: 0 } : { duration: 0.5 }
            }
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@startup.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company / Startup Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your startup name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-medium mb-2"
                  >
                    What are you building? *
                  </label>
                  <Input
                    id="project-type"
                    name="project-type"
                    placeholder="MVP, Web App, Mobile App, etc."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium mb-2"
                  >
                    Timeline / Budget Range
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    placeholder="e.g., 6-8 weeks, $10K-$20K"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Tell us about your product *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="What problem are you solving? What stage are you at? What's your biggest challenge right now?"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                  <>
                    Request Strategy Call
                    <Send className="ml-2 h-4 w-4" />
                  </>
                  )}
                </Button>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
