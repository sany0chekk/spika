import { ReactNode } from "react";
import { ThemeToggle } from "@/components/common/theme-toggle";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="absolute bottom-10 right-10">
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}
