import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { setCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export const useAuth = () => {
  const router = useRouter();
  const { setIsAuth } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setCookie("userToken", token);
        setIsAuth(true);
        console.log("✅ Token saved:", token);
        router.refresh();
      } else {
        deleteCookie("userToken");
        setIsAuth(false);
        console.log("🚫 Token deleted");
        router.refresh();
      }
    });

    return () => unsubscribe();
  }, []);
};
