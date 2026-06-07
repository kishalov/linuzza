"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"
import { useModal } from "@/components/modal/modal-provider"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"
import type { CSSProperties } from "react"

const slides = [
	{
		title: "UX/UI",
		text: "ОДНОЭКРАННЫЙ ЛИД-МАГНИТ ДЛЯ ПРЕМИАЛЬНОГО ЖИЛОГО КОМПЛЕКСА. ЗАДАЧА — ПЕРЕДАТЬ ОЩУЩЕНИЕ ПРИВАТНОСТИ, СТАТУСА И СПОКОЙНОЙ РОСКОШИ ЧЕРЕЗ МИНИМАЛИСТИЧНУЮ ПОДАЧУ И АТМОСФЕРНУЮ ТИПОГРАФИКУ. ЛЕНДИНГ СФОКУСИРОВАН НА ПРИВЛЕЧЕНИИ ВНИМАНИЯ И СБОРЕ ЗАЯВОК НА ПОЛУЧЕНИЕ ПРЕЗЕНТАЦИИ ПРОЕКТА.",
		image: "/images/ux-case-1.png",
		alt: "Лендинг жилого комплекса Николь",
		caseImages: [
			"/images/cases/nikol/1.png",
			"/images/cases/nikol/2.png",
			"/images/cases/nikol/3.png",
			"/images/cases/nikol/4.png",
			"/images/cases/nikol/5.png",
			"/images/cases/nikol/6.png",
			"/images/cases/nikol/7.png",
			"/images/cases/nikol/8.png",
			"/images/cases/nikol/9.png",
		],
	},
]

function CaseModal({
	title,
	images,
}: {
	title: string
	images: string[]
}) {
	return (
		<SimpleBar className="case-modal-scroll max-h-[90dvh] w-[min(85vw,1200px)]">
			<div className="bg-[#F3F3F3]">
				{images.map((image, index) => (
					<img
						key={image}
						src={image}
						alt={`${title} — экран ${index + 1}`}
						className="block w-full"
					/>
				))}
			</div>
		</SimpleBar>
	)
}

export function UxSection() {
	const [activeSlide, setActiveSlide] = useState(0)
	const { openModal } = useModal()
	const slide = slides[activeSlide]

	function goPrev() {
		setActiveSlide((current) => current === 0 ? slides.length - 1 : current - 1)
	}

	function goNext() {
		setActiveSlide((current) => current === slides.length - 1 ? 0 : current + 1)
	}

	function openCase() {
		openModal(
			<CaseModal
				title={slide.title}
				images={slide.caseImages}
			/>
		)
	}

	return (
		<PosterGrid
			id="ui"
			extraGuides={[{ type: "horizontal", position: "50%" }]}
			style={{
	"--hero-rows": "0.3fr 1.8fr 1.8fr 0.5fr",
} as CSSProperties}
			className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']"
		>
			<h2 className="col-span-2 row-start-1 self-center text-[10vw] font-black uppercase md:col-span-3 md:text-[8vw] lg:col-start-2 lg:col-span-1 lg:text-[8.1vw]">
				UX/UI
			</h2>

			<div className="relative col-span-2 row-start-2 row-span-2 overflow-hidden md:col-span-3 lg:col-start-2 lg:col-span-3 lg:row-start-2 lg:row-span-3">
				<AnimatePresence mode="wait">
					<motion.button
						key={slide.image}
						type="button"
						onClick={openCase}
						className="absolute inset-0 cursor-pointer overflow-hidden border-0 p-0"
						initial={{ opacity: 0, x: 32 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -32 }}
						transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
						aria-label={`Открыть кейс ${slide.title}`}
					>
						<Image
							className="object-cover object-top"
							src={slide.image}
							alt={slide.alt}
							fill
							sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 75vw"
						/>
					</motion.button>
				</AnimatePresence>
			</div>

			<div className="col-span-1 row-start-4 flex flex-col md:col-span-1 lg:col-start-1 lg:row-start-3 lg:row-span-2 lg:ml-14">
				<AnimatePresence mode="wait">
					<motion.p
						key={slide.text}
						className="m-0 text-left text-[2.2vw] font-normal uppercase md:text-[1.4vw] lg:text-right lg:text-[0.8vw]"
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -12 }}
						transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
					>
						{slide.text}
					</motion.p>
				</AnimatePresence>
			</div>

			<button
				type="button"
				onClick={openCase}
				className="col-start-2 row-start-4 flex cursor-pointer items-center justify-center border border-[var(--color-text)] text-center text-[2.5vw] font-black uppercase md:col-start-3 md:text-[1.5vw] lg:col-start-1 lg:row-start-4 lg:ml-14 lg:py-4 lg:text-[1vw]"
			>
				смотреть кейс
			</button>

			<div className="hidden lg:col-start-4 lg:col-span-1 lg:flex lg:self-end lg:gap-3">
				<button className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-text)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goPrev} aria-label="Предыдущий слайд">
					←
				</button>
				<button className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-text)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goNext} aria-label="Следующий слайд">
					→
				</button>
			</div>
		</PosterGrid>
	)
}