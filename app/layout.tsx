import type { ReactNode } from "react";
import { createThemeStylesheet } from "../src/styles/theme.js";
import "../src/styles/globals.css";

const themeStylesheet = createThemeStylesheet();

export const metadata = {
  title: "Espaços Acolhedores",
  description: "Rede comunitária de informação e acolhimento.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeStylesheet }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
