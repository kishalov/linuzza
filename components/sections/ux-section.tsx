"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"
import { useModal } from "@/components/modal/modal-provider"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

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
	// {
	// 	title: "UX/UI",
	// 	text: "ДИЗАЙН СТРОИТСЯ НА КОНТРАСТЕ СДЕРЖАННОЙ ТИПОГРАФИКИ, КРУПНЫХ ВИЗУАЛОВ И ЧЁТКОЙ СТРУКТУРЫ. ПОЛЬЗОВАТЕЛЬ БЫСТРО СЧИТЫВАЕТ ПРЕИМУЩЕСТВА ПРОЕКТА И ПЕРЕХОДИТ К ЦЕЛЕВОМУ ДЕЙСТВИЮ.",
	// 	image: "/images/ux-case-2.webp",
	// 	alt: "UX/UI кейс",
	// 	caseImages: [
	// 		"/images/cases/ui-case/1.png",
	// 		"/images/cases/ui-case/2.png",
	// 		"/images/cases/ui-case/3.png",
	// 	],
	// },
]

function CaseModal({
	title,
	images,
}: {
	title: string
	images: string[]
}) {
	return (
		<SimpleBar className="case-modal-scroll max-h-[90dvh] w-[min(90vw,1200px)]">
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
		<PosterGrid id="ui" extraGuides={[{ type: "horizontal", position: "50%" }]} className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']">
			<h2 className="col-span-1 col-start-2 text-[8.1vw] font-black uppercase max-[1024px]:col-start-1 max-[1024px]:text-[14vw]">UX/UI</h2>

			<div className="relative col-start-2 col-span-3 row-start-2 row-span-3 overflow-hidden max-[1024px]:col-start-1 max-[1024px]:col-span-2 max-[1024px]:row-start-2 max-[1024px]:row-span-2">
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
						<Image className="object-cover object-top" src={slide.image} alt={slide.alt} fill sizes="(max-width: 1024px) 100vw, 75vw" />
					</motion.button>
				</AnimatePresence>
			</div>

<div className="col-start-1 col-span-1 row-start-3 row-span-2 ml-14 flex flex-col max-[1024px]:row-start-4 max-[1024px]:row-span-1 max-[1024px]:ml-0">
	<AnimatePresence mode="wait">
		<motion.p
			key={slide.text}
			className="m-0 text-right text-[0.8vw] font-normal uppercase max-[1024px]:text-left max-[1024px]:text-[clamp(0.75rem,1.6vw,0.95rem)]"
			initial={{ opacity: 0, y: 12 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -12 }}
			transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
		>
			{slide.text}
		</motion.p>
	</AnimatePresence>

	<button
		type="button"
		onClick={openCase}
		className="mt-auto flex items-center justify-center border border-[var(--color-text)] py-4 text-center font-black uppercase cursor-pointer"
	>
		смотреть кейс
	</button>
</div>

			<div className="col-start-4 col-span-1 flex self-end gap-3 max-[1024px]:col-start-2 max-[1024px]:row-start-4 max-[1024px]:justify-end">
				<button className="cursor-pointer flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goPrev} aria-label="Предыдущий слайд">←</button>
				<button className="cursor-pointer flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goNext} aria-label="Следующий слайд">→</button>
			</div>
		</PosterGrid>
	)
}