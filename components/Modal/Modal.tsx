"use client";

import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} type="button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
