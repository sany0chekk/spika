import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={cn(
        "max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
