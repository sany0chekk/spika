"use client";

import { useAuth } from "@/hooks/useAuth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useAuth();

  return <>{children}</>;
};
