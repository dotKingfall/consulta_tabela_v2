import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";
import { SpeedInsights } from '@vercel/speed-insights/next';

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
            <SpeedInsights />
          </Providers>
      </body>
    </html>
  );
}
