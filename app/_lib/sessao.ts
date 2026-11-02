/* Sessão de autenticação simulada — apenas para demonstração de fluxo. */

import { useSyncExternalStore } from "react";

export type SessaoUsuario = {
  email: string;
  nome: string;
};

const STORAGE_KEY = "espacos-acolhedores:sessao";

const listeners = new Set<() => void>();
let cachedRaw: string | null = null;
let cachedValue: SessaoUsuario | null = null;

function readSnapshot(): SessaoUsuario | null {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedValue = raw ? (JSON.parse(raw) as SessaoUsuario) : null;
    } catch {
      cachedValue = null;
    }
  }
  return cachedValue;
}

function notify() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getServerSnapshot(): SessaoUsuario | null {
  return null;
}

function get(): SessaoUsuario | null {
  if (typeof window === "undefined") return null;
  return readSnapshot();
}

function set(sessao: SessaoUsuario) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sessao));
  notify();
}

function clear() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  notify();
}

export const Sessao = { get, set, clear };

/** Hook reativo para ler a sessão em componentes client. */
export function useSessao(): SessaoUsuario | null {
  return useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);
}
