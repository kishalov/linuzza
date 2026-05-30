"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

const banners = [
	{ image: "/images/banner-1.png", alt: "Vogue banner" },
	{ image: "/images/banner-2.png", alt: "One Planet banner" },
	{ image: "/images/banner-3.png", alt: "Run banner" },
	{ image: "/images/banner-4.png", alt: "Doma banner" },
	{ image: "/images/banner-5.png", alt: "Banner" },
	{ image: "/images/banner-6.png", alt: "Banner" },
]

export function BannersSection() {
	const [activeIndex, setActiveIndex] = useState(0)

	function goPrev() {
		setActiveIndex((current) => current === 0 ? banners.length - 1 : current - 1)
	}

	function goNext() {
		setActiveIndex((current) => current === banners.length - 1 ? 0 : current + 1)
	}

	const visibleBanners = Array.from({ length: 4 }, (_, index) => banners[(activeIndex + index) % banners.length])

	return (
		<PosterGrid className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://www.ui-layouts.com/noise.gif')]" id="banners" extraGuides={[{ type: "horizontal", position: "75%" }]}>
			<div className="relative col-span-4 row-span-3 overflow-hidden">
				<button className="absolute left-0 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goPrev} aria-label="Предыдущие баннеры">←</button>

				<AnimatePresence mode="wait">
					<motion.div key={activeIndex} className="absolute inset-0 grid grid-cols-4 gap-x-[var(--poster-gap-x)]" initial={{ x: 48 }} animate={{ x: 0 }} exit={{ x: -48 }} transition={{ duration: 0.45}}>
						{visibleBanners.map((banner, index) => (
							<div key={`${banner.image}-${index}`} className="relative h-full overflow-hidden">
								<Image className="object-cover object-top" src={banner.image} alt={banner.alt} fill sizes="25vw" />
							</div>
						))}
					</motion.div>
				</AnimatePresence>

				<button className="absolute right-0 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goNext} aria-label="Следующие баннеры">→</button>
			</div>

			<p className="col-span-2 col-start-2 row-start-4 font-medium text-center self-center uppercase text-[1.27vw]">Для меня важно, чтобы дизайн не просто выглядел<br />красиво, а действительно работал: привлекал внимание,<br />вызывал интерес и помогал приводить клиентов.</p>

			<h2 className="col-start-1 col-span-1 row-start-4 self-end text-[1vw] font-black uppercase">БАННЕРЫ</h2>
		</PosterGrid>
	)
}