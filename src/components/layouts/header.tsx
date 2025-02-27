"use client";

import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bot } from "lucide-react";

import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";

import { useAuthStore } from "@/store/authStore";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isAuth, logout } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.header
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.2,
        translateY: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={`fixed left-1/2 -translate-x-1/2 z-10 w-full px-4 transition-[top] duration-300 ${
        isScrolled ? "top-8" : "top-6"
      }`}
    >
      <Container
        className={`flex items-center justify-between py-2 transition-all duration-300 rounded-full ${
          isScrolled
            ? "md:max-w-[600px] lg:max-w-[800px] backdrop-blur-2xl shadow-lg border border-slate-600"
            : "max-w-full"
        }`}
      >
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          <Bot className="size-9" />
          Spika AI
        </Link>
        <div className="flex items-center gap-2">
          <div className="max-md:hidden">
            <ThemeToggle />
          </div>
          {isAuth ? (
            <>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </Container>
    </motion.header>
  );
}
