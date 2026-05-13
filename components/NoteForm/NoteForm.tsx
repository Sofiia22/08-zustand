"use client";

import css from "./NoteForm.module.css";

export default function NoteForm() {
  return (
    <form className={css.form}>
      <input placeholder="Title" />
      <textarea placeholder="Content" />
      <button type="submit">Create</button>
    </form>
  );
}
