import Container from "@/components/layouts/container";
import { Mouse } from "lucide-react";

export default function Home() {
  return (
    <section className="flex-grow flex flex-col">
      <Container className="flex-grow flex flex-col">
        <div className="relative min-h-[calc(100vh-108px)] flex flex-col items-center justify-center">
          <h1 className="mb-4 font-black text-5xl sm:text-6xl text-center">
            Welcome to <span>Spika AI</span>
          </h1>
          <p className="font-medium text-lg sm:text-xl text-center opacity-70">
            The perfect place to improve your English skills with real
            conversations. Get started now, and let’s make learning fun and
            effective.
          </p>
          <div className="opacity-60 absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <Mouse />
            <p className="uppercase text-xs font-semibold">Scroll down</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
