import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const bebas = Bebas_Neue({ weight: '400', subsets: ["latin"], variable: '--font-bebas' });

export const metadata: Metadata = {
  title: "Julius C | Crack4Music",
  description: "El Rey del Perreo desde Ixtapaluca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${bebas.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
