import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getMe } from "@/lib/api/serverApi";

import css from "./ProfilePage.module.css";

export const metadata: Metadata = {
  title: "Profile | NoteHub",
  description: "User profile page",
};

export default async function ProfilePage() {
  let user;

  try {
    user = await getMe();
  } catch {
    redirect("/sign-in");
  }

  return (
    <main className={css.container}>
      <div className={css.card}>
        <div className={css.top}>
          <h1 className={css.title}>Profile Page</h1>

          <Link className={css.link} href="/profile/edit">
            Edit Profile
          </Link>
        </div>

        <div className={css.avatarWrapper}>
          <Image
            className={css.avatar}
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
          />
        </div>

        <div className={css.info}>
          <p>
            <span>Username:</span> {user.username}
          </p>

          <p>
            <span>Email:</span> {user.email}
          </p>
        </div>
      </div>
    </main>
  );
}
