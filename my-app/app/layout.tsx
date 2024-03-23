import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/providers/modal-provider";
import ToasterProvider from "@/providers/toast-provider";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-title",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "E-commerce de tênis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="pt-br"
        className={`${oswald.variable} ${sourceSans.variable}`}
      >
        <body>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
