import { create } from "zustand";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase";
import { deleteCookie, getCookie } from "cookies-next";

interface AuthState {
  user: any | null;
  isAuth: boolean;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setIsAuth: (isAuth: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuth: !!getCookie("userToken"),
  setIsAuth: (value: boolean) => set({ isAuth: value }),
  loginWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      set({ user: result.user });
    } catch (error) {
      console.error("Google login error:", error);
    }
  },
  loginWithEmail: async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      set({ user: result.user });
    } catch (error) {
      console.error("Email login error:", error);
    }
  },
  registerWithEmail: async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      set({ user: result.user });
    } catch (error) {
      console.error("Email register error:", error);
    }
  },
  logout: async () => {
    await auth.signOut();
    deleteCookie("userToken");
    set({ user: null });
  },
}));
