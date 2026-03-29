import Link from "next/link";
import { Logo } from "@/components/shared/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen">
      {/* Left Panel - Branding */}
      <div className="hidden w-1/2 bg-gradient-to-br from-violet-950 via-violet-900 to-purple-900 lg:flex lg:flex-col lg:justify-between lg:p-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Glow Effects */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />

        <div className="relative z-10">
          <Logo className="text-white" />
        </div>

        <div className="relative z-10">
          <blockquote className="space-y-4">
            <p className="text-xl font-medium text-white/90">
              &ldquo;Topperlabs has revolutionized how we create exams. What
              used to take our teachers hours now takes minutes. The AI
              questions are impressively accurate.&rdquo;
            </p>
            <footer className="text-white/60">
              <p className="font-semibold text-white/80">Dr. Sarah Mitchell</p>
              <p>Principal, Greenwood Academy</p>
            </footer>
          </blockquote>
        </div>

        <div className="relative z-10">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Topperlabs. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 lg:w-1/2">
        {/* Mobile Logo */}
        <div className="mb-8 lg:hidden">
          <Logo />
        </div>

        <div className="w-full max-w-md">{children}</div>

        {/* Back to Home Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
