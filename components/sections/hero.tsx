"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero section with animated headline, CTAs, and key features
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full bg-accent/30 text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              New beginnings, endless possibilities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl text-balance"
          >
            We build digital products{" "}
            <span className="font-serif italic">that matter</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            A technology studio crafting exceptional mobile apps, web products,
            and digital experiences for ambitious companies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mb-3">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Modern Stack</h3>
                <p className="text-sm text-muted-foreground">
                  Latest technologies
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Agile development
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-1">
                  Secure & Reliable
                </h3>
                <p className="text-sm text-muted-foreground">
                  Production ready
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/30 flex items-center justify-center mb-3">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Quality First</h3>
                <p className="text-sm text-muted-foreground">Best practices</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
