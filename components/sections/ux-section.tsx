"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

const slides = [
	{
		title: "UX/UI",
		text: "ОДНОЭКРАННЫЙ ЛИД-МАГНИТ ДЛЯ ПРЕМИАЛЬНОГО ЖИЛОГО КОМПЛЕКСА. ЗАДАЧА — ПЕРЕДАТЬ ОЩУЩЕНИЕ ПРИВАТНОСТИ, СТАТУСА И СПОКОЙНОЙ РОСКОШИ ЧЕРЕЗ МИНИМАЛИСТИЧНУЮ ПОДАЧУ И АТМОСФЕРНУЮ ТИПОГРАФИКУ. ЛЕНДИНГ СФОКУСИРОВАН НА ПРИВЛЕЧЕНИИ ВНИМАНИЯ И СБОРЕ ЗАЯВОК НА ПОЛУЧЕНИЕ ПРЕЗЕНТАЦИИ ПРОЕКТА.",
		image: "/images/ux-case-1.png",
		alt: "Лендинг жилого комплекса Николь",
	},
	{
		title: "UX/UI",
		text: "ДИЗАЙН СТРОИТСЯ НА КОНТРАСТЕ СДЕРЖАННОЙ ТИПОГРАФИКИ, КРУПНЫХ ВИЗУАЛОВ И ЧЁТКОЙ СТРУКТУРЫ. ПОЛЬЗОВАТЕЛЬ БЫСТРО СЧИТЫВАЕТ ПРЕИМУЩЕСТВА ПРОЕКТА И ПЕРЕХОДИТ К ЦЕЛЕВОМУ ДЕЙСТВИЮ.",
		image: "/images/ux-case-2.png",
		alt: "UX/UI кейс",
	},
]

export function UxSection() {
	const [activeSlide, setActiveSlide] = useState(0)
	const slide = slides[activeSlide]

	function goPrev() {
		setActiveSlide((current) => current === 0 ? slides.length - 1 : current - 1)
	}

	function goNext() {
		setActiveSlide((current) => current === slides.length - 1 ? 0 : current + 1)
	}

	return (
		<PosterGrid id="ui" extraGuides={[{ type: "horizontal", position: "50%" }]} className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://www.ui-layouts.com/noise.gif')]">
			<h2 className="col-span-1 col-start-2 font-black uppercase text-[8.1vw]">UX/UI</h2>

			<div className="col-start-2 col-span-3 row-start-2 row-span-3 relative overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div key={slide.image} className="absolute inset-0" initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -32 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
						<Image className="object-cover object-top" src={slide.image} alt={slide.alt} fill sizes="75vw" />
					</motion.div>
				</AnimatePresence>
			</div>

			<div className="col-start-1 col-span-1 row-start-3 self-start ml-14">
				<AnimatePresence mode="wait">
					<motion.p key={slide.text} className="m-0 text-right text-[0.8vw] font-normal uppercase" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>{slide.text}</motion.p>
				</AnimatePresence>
			</div>

			<div className="col-start-4 col-span-1 self-end flex gap-3">
				<button className="flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goPrev} aria-label="Предыдущий слайд">←</button>
				<button className="flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goNext} aria-label="Следующий слайд">→</button>
			</div>
		</PosterGrid>
	)
}