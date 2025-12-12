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
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        // Reset form before showing success message
        if (formRef.current) {
          formRef.current.reset();
        }
        setIsSubmitted(true);
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
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Contact"
          title="Let's build something great together"
          description="Ready to start your project? Get in touch and let's discuss how we can help."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
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
            <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a project in mind or just want to chat about
              possibilities, we'd love to hear from you.
            </p>

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
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center p-8 rounded-2xl bg-accent/20 border border-accent/30">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/30 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                  <p className="text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
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
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
