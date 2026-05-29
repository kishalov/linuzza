"use client"

import Image from "next/image"
import { useState } from "react"
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
		setActiveSlide((current) => {
			if (current === 0) {
				return slides.length - 1
			}

			return current - 1
		})
	}

	function goNext() {
		setActiveSlide((current) => {
			if (current === slides.length - 1) {
				return 0
			}

			return current + 1
		})
	}

	return (
		<PosterGrid id="ui" extraGuides={[{ type: "horizontal", position: "50%" }]} className="before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]">
			<h2 className="col-span-1 col-start-2 font-black uppercase text-[8.1vw]">UX/UI</h2>

			<div className="col-start-2 col-span-3 row-start-2 row-span-3 relative">
				<Image className="object-cover object-top" src={slide.image} alt={slide.alt} fill sizes="75vw" />
			</div>

			<p className="col-start-1 col-span-1 row-start-3 self-end text-right text-[0.8vw] ml-14 font-normal uppercase">{slide.text}</p>

			<div className="col-start-4 col-span-1 self-end flex gap-3">
				<button className="flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] text-sm" type="button" onClick={goPrev} aria-label="Предыдущий слайд">←</button>
				<button className="flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] text-sm" type="button" onClick={goNext} aria-label="Следующий слайд">→</button>
			</div>
		</PosterGrid>
	)
}