"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Database,
  PenTool,
  FileCheck,
  BookOpen,
  FileOutput,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI Question Generation",
    description:
      "Generate high-quality questions instantly using advanced AI. Just describe the topic and difficulty level.",
    color: "violet",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    icon: Database,
    title: "Extensive Question Bank",
    description:
      "Access over 50,000+ curated questions across multiple subjects, grades, and difficulty levels.",
    color: "teal",
    gradient: "from-teal-600 to-cyan-600",
  },
  {
    icon: PenTool,
    title: "Manual Question Entry",
    description:
      "Create custom questions with our rich text editor. Add images, equations, and multiple question types.",
    color: "orange",
    gradient: "from-orange-600 to-amber-600",
  },
  {
    icon: FileCheck,
    title: "Auto Answer Keys",
    description:
      "Generate comprehensive answer keys automatically. Include marking schemes and model answers.",
    color: "pink",
    gradient: "from-pink-600 to-rose-600",
  },
  {
    icon: BookOpen,
    title: "Multiple Subjects",
    description:
      "Support for all major subjects - Mathematics, Science, English, Social Studies, and more.",
    color: "teal",
    gradient: "from-teal-600 to-emerald-600",
  },
  {
    icon: FileOutput,
    title: "Export Options",
    description:
      "Export exam papers to PDF, Word, or print directly. Professional formatting included.",
    color: "violet",
    gradient: "from-violet-600 to-indigo-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
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
            Everything You Need to{" "}
            <span className="gradient-text">Create Exams</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed to save you time and create professional
            exam papers with ease.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.gradient} p-3 shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.gradient} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-10`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
