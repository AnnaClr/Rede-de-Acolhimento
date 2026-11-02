"use client";

import { useState, type ChangeEvent } from "react";

type PasswordInputProps = {
  id: string;
  name: string;
  autoComplete: string;
  placeholder: string;
  value: string;
  invalid?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordInput({
  id,
  name,
  autoComplete,
  placeholder,
  value,
  invalid = false,
  onChange,
}: PasswordInputProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="input-wrap">
      <input
        className={`input${invalid ? " invalid" : ""}`}
        id={id}
        name={name}
        type={mostrarSenha ? "text" : "password"}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        className="toggle-pass"
        type="button"
        aria-label="Mostrar senha"
        onClick={() => setMostrarSenha((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  );
}
