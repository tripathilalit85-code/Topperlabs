"use client";

import { motion } from "framer-motion";
import { Settings, Wand2, Download } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Configure Your Exam",
    description:
      "Set up exam details - subject, grade level, duration, and number of questions. Choose question types and difficulty distribution.",
    color: "violet",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Generate Questions",
    description:
      "Use AI to generate questions, pick from our question bank, or create your own. Mix and match for the perfect exam.",
    color: "teal",
  },
  {
    number: "03",
    icon: Download,
    title: "Export & Print",
    description:
      "Review your exam, generate answer keys, and export to PDF or Word. Ready for printing in minutes.",
    color: "orange",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-muted/30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Create Exams in <span className="gradient-text">Three Steps</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our streamlined process makes exam creation faster than ever before.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-gradient-to-r from-border via-border to-transparent lg:block" />
                )}

                <div className="relative flex flex-col items-center text-center">
                  {/* Number Badge */}
                  <div
                    className={`relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-2xl ${
                      step.color === "violet"
                        ? "bg-gradient-to-br from-violet-600 to-purple-600"
                        : step.color === "teal"
                          ? "bg-gradient-to-br from-teal-600 to-cyan-600"
                          : "bg-gradient-to-br from-orange-600 to-amber-600"
                    } shadow-lg`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Step Number */}
                  <span className="mb-2 font-mono text-sm text-muted-foreground">
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="max-w-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
