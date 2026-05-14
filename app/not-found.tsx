import css from "./not-found.module.css";

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
export const metadata = {
  title: "Page not found",
  description: "This page does not exist",
  openGraph: {
    title: "Page not found",
    description: "This page does not exist",
    url: "/not-found",
    images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
  },
};
