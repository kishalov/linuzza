"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"
import { useModal } from "@/components/modal/modal-provider"

const stickerSets = [
	{
		title: "Кошачьи заботы",
		description: "12 эмоций для чатов, сторис и печати",
		stickers: [
			{ image: "/images/stickers/cats/sticker-1.svg", alt: "Стикер с довольным котом" },
			{ image: "/images/stickers/cats/sticker-2.svg", alt: "Стикер с котом и кофе" },
			{ image: "/images/stickers/cats/sticker-3.svg", alt: "Стикер с сонным котом" },
			{ image: "/images/stickers/cats/sticker-4.svg", alt: "Стикер с котом и сердцем" },
			{ image: "/images/stickers/cats/sticker-5.svg", alt: "Стикер с удивленным котом" },
			{ image: "/images/stickers/cats/sticker-6.svg", alt: "Стикер с котом-художником" },
			{ image: "/images/stickers/cats/sticker-7.svg", alt: "Стикер с котом в коробке" },
			{ image: "/images/stickers/cats/sticker-8.svg", alt: "Стикер с котом и звездой" },
			{ image: "/images/stickers/cats/sticker-9.svg", alt: "Стикер с котом и едой" },
			{ image: "/images/stickers/cats/sticker-10.svg", alt: "Стикер с бегущим котом" },
			{ image: "/images/stickers/cats/sticker-11.svg", alt: "Стикер с котом и подарком" },
			{ image: "/images/stickers/cats/sticker-12.svg", alt: "Стикер с котом и звездой благодарности" },
		],
	},
	{
		title: "Маленькие ритуалы",
		description: "повседневные фразы в мягких формах",
		stickers: [
			{ image: "/images/stickers/rituals/sticker-1.svg", alt: "Стикер с чашкой чая" },
			{ image: "/images/stickers/rituals/sticker-2.svg", alt: "Стикер с цветком" },
			{ image: "/images/stickers/rituals/sticker-3.svg", alt: "Стикер с книгой" },
			{ image: "/images/stickers/rituals/sticker-4.svg", alt: "Стикер с облаком" },
			{ image: "/images/stickers/rituals/sticker-5.svg", alt: "Стикер с ягодой" },
			{ image: "/images/stickers/rituals/sticker-6.svg", alt: "Стикер с карандашом" },
			{ image: "/images/stickers/rituals/sticker-7.svg", alt: "Стикер с конвертом" },
			{ image: "/images/stickers/rituals/sticker-8.svg", alt: "Стикер с луной" },
			{ image: "/images/stickers/rituals/sticker-9.svg", alt: "Стикер с солнцем" },
			{ image: "/images/stickers/rituals/sticker-10.svg", alt: "Стикер с паузой" },
			{ image: "/images/stickers/rituals/sticker-11.svg", alt: "Стикер с планом" },
			{ image: "/images/stickers/rituals/sticker-12.svg", alt: "Стикер с теплом" },
		],
	},
]

export function StickersSection() {
	const [activeIndex, setActiveIndex] = useState(0)
	const activeSet = stickerSets[activeIndex]
	const { openModal } = useModal()

	function goPrev() {
		setActiveIndex((current) => current === 0 ? stickerSets.length - 1 : current - 1)
	}

	function goNext() {
		setActiveIndex((current) => current === stickerSets.length - 1 ? 0 : current + 1)
	}

	function openActiveSet() {
		openModal(
			<div className="max-h-[86dvh] w-[min(72rem,90vw)] overflow-auto rounded-[2rem] bg-[var(--color-bg)] p-8 text-[var(--color-text)]">
				<div className="mb-6 flex items-end justify-between gap-6">
					<div>
						<p className="mb-2 text-sm font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">набор стикеров</p>
						<h3 className="text-4xl font-black uppercase leading-none">{activeSet.title}</h3>
					</div>
					<p className="max-w-[28ch] text-right text-sm font-medium uppercase text-[var(--color-muted)]">{activeSet.description}</p>
				</div>

				<div className="grid grid-cols-3 gap-4 md:grid-cols-4">
					{activeSet.stickers.map((sticker) => (
						<div key={`modal-${sticker.image}`} className="relative aspect-square rounded-[1.25rem] bg-white/50 p-5">
							<Image className="h-full w-full object-contain" src={sticker.image} alt={sticker.alt} width={240} height={240} />
						</div>
					))}
				</div>
			</div>
		)
	}

	return (
		<PosterGrid className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://www.ui-layouts.com/noise.gif')]" id="stickers">
			<div className="col-span-2 row-start-1 flex min-h-0 flex-col justify-between self-stretch">
				<h2 className="font-black uppercase leading-none text-[8.1vw] whitespace-nowrap">СТИКЕРЫ</h2>
				<p className="max-w-[34ch] font-medium text-left uppercase leading-tight text-[1.27vw]">рисую наборы готовые <br /> к печати и мессенджерам</p>
			</div>

			<div className="col-span-1 col-start-3 row-start-1 flex min-h-0 flex-col justify-end gap-3 self-stretch uppercase">
				<p className="text-[0.85vw] font-medium tracking-[0.08em] text-[var(--color-muted)]">набор {activeIndex + 1} / {stickerSets.length}</p>
				<h3 className="text-[1.55vw] font-black leading-none">{activeSet.title}</h3>
				<p className="text-[0.9vw] font-medium leading-tight text-[var(--color-muted)]">{activeSet.description}</p>
			</div>

			<div className="col-start-4 row-start-1 flex min-h-0 flex-col items-end justify-between self-stretch">
				<div className="flex gap-2">
					<button className="flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goPrev} aria-label="Предыдущий набор стикеров">←</button>
					<button className="flex size-10 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goNext} aria-label="Следующий набор стикеров">→</button>
				</div>

				<button className="inline-flex rounded-full border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-[0.85vw] font-black uppercase tracking-[0.08em] text-[var(--color-bg)] transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={openActiveSet}>посмотреть набор</button>
			</div>

			<div className="relative col-span-4 row-start-2 row-span-3 overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={activeSet.title}
						className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]"
						initial={{ opacity: 0, x: 48 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -48 }}
						transition={{ duration: 0.45 }}
					>
						{activeSet.stickers.map((sticker, index) => (
							<div key={sticker.image} className="relative flex min-h-0 items-center justify-center overflow-hidden rounded-[1.25rem] border border-[var(--poster-guide-color)] bg-white/35 p-[clamp(0.75rem,2vw,2rem)]">
								<Image className="h-full w-full object-contain drop-shadow-[0_1.25rem_1.5rem_rgba(61,57,54,0.14)]" src={sticker.image} alt={sticker.alt} width={320} height={320} priority={activeIndex === 0 && index < 4} />
							</div>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</PosterGrid>
	)
}
