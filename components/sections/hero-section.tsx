import type { CSSProperties } from "react"
import Image from "next/image"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

export function HeroSection() {
	return (
		<PosterGrid
			className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']"
			style={{
				"--hero-rows": "0.3fr 0.3fr 2fr 0.4fr",
			} as CSSProperties}
		>
			<h1 className="col-span-1 self-center text-[6vw] font-black uppercase md:col-span-2 md:text-[7vw] lg:col-span-3 lg:text-[6.1vw] lg:whitespace-nowrap">
				АЛИНА КАМАЛОВА
			</h1>

			<a
				href="https://t.me/lina_kk2"
				target="_blank"
				rel="noopener noreferrer"
				className="col-start-2 row-start-1 flex items-center justify-center border border-[var(--color-text)] text-center font-black uppercase md:col-start-3 lg:col-start-4"
			>
				связаться
			</a>

			<nav className="col-span-2 row-start-2 flex w-full items-center justify-between text-[2.5vw] font-normal uppercase md:col-span-3 md:text-[1.5vw] lg:col-span-2 lg:text-[1vw]">
				<a href="#ui">UX/UI</a>
				<a href="#banners">БАННЕРЫ</a>
				<a href="#illustrations">ИЛЛЮСТРАЦИИ</a>
				<a href="#stickers">СТИКЕРЫ</a>
			</nav>

			<div className="relative col-span-2 row-start-3 row-span-1 md:col-span-3 lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-3">
				<Image
					className="object-cover object-center"
					src="/images/avatar.png"
					alt="Алина Камалова"
					fill
					priority
					sizes="100vw"
				/>
			</div>

			<div className="col-start-1 col-span-1 row-start-4 self-end">
				<Image
					src="/images/alina-logo.svg"
					alt="Alina Logo"
					width={80}
					height={80}
					className="h-[12vw] w-auto md:h-[8vw] lg:h-[5vw]"
				/>
			</div>

			<p className="col-start-2 col-span-1 row-start-4 self-end text-right text-[4vw] font-medium uppercase md:col-start-2 md:col-span-2 md:text-[2.8vw] lg:col-start-2 lg:col-span-2 lg:text-[2vw]">
				Минимализм, внимание к деталям<br />и дизайн, который работает
			</p>
		</PosterGrid>
	)
}