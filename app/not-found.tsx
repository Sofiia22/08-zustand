import type { Metadata } from "next";
import css from "./not-found.module.css";

const SITE_URL = "https://vercel.com/sofiia22s-projects/08-zustand";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist",
  openGraph: {
    title: "Page not found",
    description: "This page does not exist",
    url: `${SITE_URL}/not-found`,
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
