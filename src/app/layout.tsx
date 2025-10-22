import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Protocolo Mulher em Movimento",
  description:
    "Treinos personalizados com acompanhamento diário via app exclusivo e suporte no WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white/80 dark:bg-neutral-950/70 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
          <div className="mx-auto max-w-6xl px-6 py-3 flex items-center gap-3">
            <Image src="/logo.svg" alt="Mulher em Movimento" width={28} height={28} priority />
            <span className="text-sm font-semibold text-brand">Mulher em Movimento</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
