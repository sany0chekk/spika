import * as motion from "motion/react-client";
import { BrainCircuit, Mouse } from "lucide-react";

import Container from "@/components/layouts/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturesList from "@/components/pages/welcome-page/features-list";

export default function Home() {
  return (
    <div className="flex-grow flex flex-col">
      <motion.section
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.2 }}
        className="py-10 flex-grow flex flex-col bg-radial from-blue-400 dark:from-blue-950 animate-gradient-x"
      >
        <Container className="flex-grow flex flex-col">
          <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
            <h1 className="mb-4 font-black text-5xl sm:text-6xl text-center">
              Welcome to <span className="opacity-60">Spika AI</span>
            </h1>
            <p className="font-medium text-lg sm:text-xl text-center opacity-50 mb-10">
              The perfect place to improve your English skills with real
              conversations. Get started now, and let’s make learning fun and
              effective.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild className="text-lg py-6 px-10">
                <Link href="/login">Get started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-lg py-6 px-10 flex items-center gap-2"
              >
                <Link href="/" className="flex items-center gap-2">
                  Learn more
                  <BrainCircuit className="size-5" />
                </Link>
              </Button>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
              <motion.span
                animate={{
                  opacity: [0.6, 1, 0.6],
                  translateY: [2, -2, 2],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",

                  repeat: Infinity,
                }}
              >
                <Mouse />
              </motion.span>
              <p className="opacity-60 uppercase text-xs font-semibold">
                Scroll down
              </p>
            </div>
          </div>
        </Container>
      </motion.section>
      {/*<section className="py-10">*/}
      {/*  <Container>*/}
      {/*    <h2 className="mb-4 lg:mb-10 lg:text-center font-black text-3xl opacity-50">*/}
      {/*      Out features*/}
      {/*    </h2>*/}
      {/*    <FeaturesList />*/}
      {/*  </Container>*/}
      {/*</section>*/}
    </div>
  );
}
