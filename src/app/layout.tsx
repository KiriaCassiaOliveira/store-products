import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loja Produtos",
  description: "Loja de Produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
