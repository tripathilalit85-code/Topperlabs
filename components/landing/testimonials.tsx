"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote:
      "Topperlabs has completely transformed how we create exam papers. What used to take hours now takes minutes. The AI-generated questions are surprisingly high quality.",
    author: "Dr. Sarah Mitchell",
    role: "Principal, Greenwood Academy",
    initials: "SM",
    color: "violet",
  },
  {
    quote:
      "The question bank is incredibly comprehensive. I can find questions for any topic and difficulty level. My students are better prepared than ever.",
    author: "James Rodriguez",
    role: "Math Teacher, Lincoln High",
    initials: "JR",
    color: "teal",
  },
  {
    quote:
      "As a school administrator, I love the enterprise features. Managing exams across departments has never been easier. Great support team too!",
    author: "Emily Chen",
    role: "VP of Academics, Sunrise Schools",
    initials: "EC",
    color: "orange",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
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
            Trusted by <span className="gradient-text">Educators Worldwide</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what teachers and administrators are saying about Topperlabs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Quote
                    className={`mb-4 h-8 w-8 ${
                      testimonial.color === "violet"
                        ? "text-violet-500"
                        : testimonial.color === "teal"
                          ? "text-teal-500"
                          : "text-orange-500"
                    }`}
                  />
                  <p className="mb-6 text-muted-foreground">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback
                        className={`${
                          testimonial.color === "violet"
                            ? "bg-violet-500/20 text-violet-400"
                            : testimonial.color === "teal"
                              ? "bg-teal-500/20 text-teal-400"
                              : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <p className="mb-8 text-center text-sm text-muted-foreground">
            Trusted by leading educational institutions
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
            {["Springfield Schools", "Riverdale Academy", "Central High", "Metro University", "Oakwood District"].map(
              (school) => (
                <span key={school} className="text-lg font-semibold text-muted-foreground">
                  {school}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
