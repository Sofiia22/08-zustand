"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { checkSession, logout } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

interface AuthProviderProps {
  children: ReactNode;
}

const privateRoutes = ["/profile", "/notes"];

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const pathname = usePathname();

  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await checkSession();

        if (user) {
          setUser(user);
        }

        if (
          !user &&
          privateRoutes.some((route) => pathname.startsWith(route))
        ) {
          await logout();
          clearIsAuthenticated();
          router.push("/sign-in");
        }
      } catch {
        clearIsAuthenticated();

        if (privateRoutes.some((route) => pathname.startsWith(route))) {
          router.push("/sign-in");
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router, setUser, clearIsAuthenticated]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return children;
}
