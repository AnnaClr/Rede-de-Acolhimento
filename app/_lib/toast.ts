/* Toast simples reaproveitando as classes .toast-container/.toast de app/globals.css. */

export function mostrarToast(mensagem: string) {
  if (typeof document === "undefined") return;

  let container = document.querySelector<HTMLDivElement>(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = mensagem;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3200);
}
