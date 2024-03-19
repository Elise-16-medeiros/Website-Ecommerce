import type { Metadata } from "next";
import { Raleway, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const ralaway = Raleway({
	subsets: ["latin"],
	weight: ["600", "700", "800", "900"],
	display: "swap",
	variable: "--font-raleway-title",
});

const libre_baskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--font-libreBaskerville-body",
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
		<html
			lang="pt-br"
			className={`${ralaway.variable} ${libre_baskerville.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}

/* import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={inter.className}>{children}</body>
		</html>
	);
} */
