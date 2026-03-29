"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out Topperlabs",
    price: "0",
    features: [
      "5 exams per month",
      "100 AI-generated questions",
      "Basic question bank access",
      "PDF export",
      "Email support",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    description: "Best for individual teachers",
    price: "29",
    features: [
      "Unlimited exams",
      "Unlimited AI questions",
      "Full question bank access",
      "PDF & Word export",
      "Priority support",
      "Custom branding",
      "Answer key generation",
    ],
    cta: "Start Free Trial",
    variant: "gradient" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For schools and institutions",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Unlimited users",
      "Admin dashboard",
      "API access",
      "Custom integrations",
      "Dedicated support",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
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
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs. Start free, upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${
                  plan.popular
                    ? "border-violet-500/50 bg-gradient-to-b from-violet-950/50 to-card shadow-xl shadow-violet-500/10"
                    : "border-border/50 bg-card/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="violet" className="px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-0 pt-8">
                  <h3 className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-4 flex items-baseline">
                    {plan.price !== "Custom" && (
                      <span className="text-sm text-muted-foreground">$</span>
                    )}
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="ml-1 text-muted-foreground">/month</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-violet-500" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.variant}
                    className="mt-8 w-full"
                    size="lg"
                    asChild
                  >
                    <Link href="/signup">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
