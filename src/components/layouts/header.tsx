import * as motion from "motion/react-client";
import Link from "next/link";

import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { Bot } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.2,
        translateY: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="absolute top-4 left-1/2 -translate-x-1/2 w-full z-10"
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl flex items-center gap-2">
          <Bot className="size-9" />
          Spika AI
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </Container>
    </motion.header>
  );
}
