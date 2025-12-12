"use client"

import { motion } from "framer-motion"
import { Search, Target, Palette, Code, Rocket } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { processSteps } from "@/lib/data"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

const iconMap = {
  Discovery: Search,
  Strategy: Target,
  Design: Palette,
  Development: Code,
  "Launch & Beyond": Rocket,
}

/**
 * Process section showing the development workflow
 */
export function Process() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="process" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Process"
          title="How we bring ideas to life"
          description="A proven methodology refined over hundreds of successful projects."
        />

        <div className="mt-20 relative">
          {/* Continuous connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px z-0">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
            
            {/* Animated progress line */}
            <motion.div
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
              viewport={{ once: true }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/40 to-transparent origin-left"
            />

            {/* Connection dots at each step position */}
            {processSteps.map((_, index) => {
              const position = (index / (processSteps.length - 1)) * 100
              return (
                <motion.div
                  key={index}
                  initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.2 + 0.5 }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                  style={{ left: `${position}%` }}
                >
                  <div className="w-3 h-3 rounded-full bg-primary-foreground/40 border-2 border-primary-foreground/60 backdrop-blur-sm" />
                  {/* Pulse effect */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-0 -z-10 w-3 h-3 rounded-full bg-primary-foreground/20"
                    />
                  )}
                </motion.div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.title as keyof typeof iconMap]

              return (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Connection indicator on card top (desktop) */}
                  <div className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-2 h-2 rounded-full bg-primary-foreground/60 border-2 border-primary-foreground/80"
                    />
                  </div>

                  {/* Gradient border effect - Aceternity style */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-foreground/30 via-primary-foreground/20 to-primary-foreground/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                  {/* Card */}
                  <div className="relative h-full bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-6 lg:p-5 transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/30 hover:shadow-xl hover:shadow-primary-foreground/10 hover:-translate-y-1">
                    {/* Animated inner glow */}
                    {!shouldReduceMotion && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          backgroundPosition: ["0% 0%", "100% 100%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Step number badge */}
                      <div className="flex items-center justify-between mb-4">
                        <motion.span
                          className="text-4xl lg:text-5xl font-bold text-primary-foreground/20 group-hover:text-primary-foreground/30 transition-colors"
                          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        >
                          {step.number}
                        </motion.span>
                        {Icon && (
                          <motion.div
                            className="p-2.5 rounded-xl bg-primary-foreground/10 group-hover:bg-primary-foreground/20 transition-colors"
                            whileHover={shouldReduceMotion ? {} : { rotate: 360 }}
                            transition={shouldReduceMotion ? {} : { duration: 0.6 }}
                          >
                            <Icon className="w-5 h-5 text-primary-foreground" />
                          </motion.div>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl lg:text-lg font-bold mb-3 text-primary-foreground group-hover:text-primary-foreground transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/70 leading-relaxed text-pretty">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-primary-foreground/60">
            Ready to start your project?{" "}
            <a
              href="#contact"
              className="font-semibold text-primary-foreground hover:text-primary-foreground/80 underline underline-offset-4 transition-colors"
            >
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
