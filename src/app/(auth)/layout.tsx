import * as motion from "motion/react-client";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full min-h-[calc(100vh-128px)] flex items-center justify-center p-4"
    >
      {children}
    </motion.div>
  );
}
