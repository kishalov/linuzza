import type { Metadata } from "next"
import localFont from "next/font/local"
import { ModalProvider } from "@/components/modal/modal-provider"
import "./globals.css"

const craftwork = localFont({
	src: [
		{
			path: "../public/fonts/CraftworkGrotesk-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/CraftworkGrotesk-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/CraftworkGrotesk-Heavy.woff2",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-main",
	display: "swap",
})

export const metadata: Metadata = {
	title: "Alina Kamalova — Portfolio",
	description: "Graphic and web design portfolio.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru">
			<body className={craftwork.variable}>
				<ModalProvider>{children}</ModalProvider>
			</body>
		</html>
	)
}