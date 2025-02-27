import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full min-h-[calc(100vh-68px)] flex items-center justify-center p-4">
      {children}
    </div>
  );
}
