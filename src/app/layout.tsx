import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Tabelas Jan 2025",
  description: "Consulta da tabela de planos médicos para as cidades de Goiânia, Anápolis e Brasília.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Providers>
            {children}
          </Providers>
      </body>
    </html>
  );
}
