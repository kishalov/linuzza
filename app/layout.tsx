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
	title: "Алина Камалова — Графический и веб-дизайнер",
	description:
		"Портфолио Алины Камаловой. UX/UI-дизайн, графический дизайн, рекламные баннеры, иллюстрации и стикеры.",

	openGraph: {
		title: "Алина Камалова — Графический и веб-дизайнер",
		description:
			"UX/UI-дизайн, графический дизайн, рекламные баннеры, иллюстрации и стикеры.",
		locale: "ru_RU",
		type: "website",
		images: [
			{
				url: "/images/og-image.png",
				width: 1200,
				height: 630,
				alt: "Портфолио Алины Камаловой",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Алина Камалова — Графический и веб-дизайнер",
		description:
			"UX/UI-дизайн, графический дизайн, рекламные баннеры, иллюстрации и стикеры.",
		images: ["/images/og-image.jpg"],
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={craftwork.variable}>
				<ModalProvider>{children}</ModalProvider>
			</body>
		</html>
	)
}