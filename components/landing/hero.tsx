"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <Badge variant="violet" className="mb-6 px-4 py-1.5">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            AI-Powered Exam Generation
          </Badge>

          {/* Headline */}
          <h1 className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Generate Perfect{" "}
            <span className="gradient-text">Exam Papers</span> in Minutes
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Create professional exam papers, mock tests, and answer keys with
            AI. Save hours of work with our intelligent question generation and
            extensive question bank.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gradient" size="xl" asChild>
              <Link href="/signup">
                Start Creating Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="#demo">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { value: "10,000+", label: "Schools" },
              { value: "1M+", label: "Exams Generated" },
              { value: "50K+", label: "Questions" },
              { value: "98%", label: "Time Saved" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image / Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 w-full max-w-5xl"
        >
          <div className="relative rounded-xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
            <div className="overflow-hidden rounded-lg bg-background">
              <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-muted-foreground">
                  exam-builder.topperlabs.com
                </span>
              </div>
              <div className="aspect-[16/9] bg-gradient-to-br from-violet-950/50 via-background to-pink-950/50 p-8">
                <div className="flex h-full flex-col items-center justify-center gap-4">
                  <div className="h-12 w-64 rounded-lg bg-muted/50" />
                  <div className="h-8 w-48 rounded-lg bg-muted/30" />
                  <div className="mt-4 grid w-full max-w-md grid-cols-3 gap-4">
                    <div className="h-24 rounded-lg bg-violet-500/20" />
                    <div className="h-24 rounded-lg bg-teal-500/20" />
                    <div className="h-24 rounded-lg bg-orange-500/20" />
                  </div>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-violet-600/30 via-transparent to-pink-600/30 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
