"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { logout } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";

import css from "./AuthNavigation.module.css";

export default function AuthNavigation() {
  const router = useRouter();

  const { user, isAuthenticated, clearIsAuthenticated } = useAuthStore();

  const handleLogout = async () => {
    await logout();

    clearIsAuthenticated();

    router.push("/sign-in");
  };

  if (!isAuthenticated) {
    return (
      <>
        <li className={css.navigationItem}>
          <Link className={css.navigationLink} href="/sign-in">
            Login
          </Link>
        </li>

        <li className={css.navigationItem}>
          <Link className={css.navigationLink} href="/sign-up">
            Register
          </Link>
        </li>
      </>
    );
  }

  return (
    <>
      <li className={css.navigationItem}>
        <span className={css.userEmail}>{user?.email}</span>
      </li>

      <li className={css.navigationItem}>
        <Link className={css.navigationLink} href="/profile">
          Profile
        </Link>
      </li>

      <li className={css.navigationItem}>
        <button className={css.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </li>
    </>
  );
}
