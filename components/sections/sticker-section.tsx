"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"
import { useModal } from "../modal/modal-provider"
import { stickerSets } from "./stickers"

function StickerSetModal({
	title,
	href,
	stickers,
}: {
	title: string
	href: string
	stickers: string[]
}) {
	const { openModal, closeModal } = useModal()

	function openSticker(sticker: string) {
		openModal(
			<div className="relative h-[80dvh] w-[80vw]">
				<Image src={sticker} alt={title} fill className="object-contain" sizes="80vw" unoptimized />
			</div>
		)
	}

	return (
		<div className="relative flex h-[80dvh] w-[min(92vw,760px)] flex-col overflow-hidden border-2 border-[#3D3936] bg-[#F3F3F3] p-6 before:pointer-events-none before:absolute before:inset-0 before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.03] before:content-['']">
			<div className="relative z-10 flex h-full flex-col">
				<h3 className="mb-6 text-xl font-semibold">{title}</h3>

				<div className="grid flex-1 auto-rows-min grid-cols-4 gap-4 overflow-y-auto pr-2 sm:grid-cols-5 md:grid-cols-6">
					{stickers.map((sticker) => (
						<button key={sticker} type="button" onClick={() => openSticker(sticker)} className="relative aspect-square">
							<Image src={sticker} alt={title} fill className="object-contain" sizes="120px" unoptimized />
						</button>
					))}
				</div>

				<div className="mt-6 flex items-center justify-end gap-6">
					<button type="button" onClick={closeModal} className="inline-flex items-center text-sm font-medium cursor-pointer">
						Закрыть
					</button>

					<a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium cursor-pointer">
						Добавить набор
					</a>
				</div>
			</div>
		</div>
	)
}

const stickerPositions = [
	"col-start-1 row-start-1",
	"col-start-2 row-start-1",
	"col-start-3 row-start-1",
	"col-start-4 row-start-1",
	"col-start-1 row-start-2",
	"col-start-2 row-start-2",
	"col-start-3 row-start-2",
]
export function StickersSection() {
	const [activeSetIndex, setActiveSetIndex] = useState(0)
	const { openModal } = useModal()

	const activeSet = stickerSets[activeSetIndex]
	const previewStickers = activeSet.stickers.slice(0, 7)

	function goPrev() {
		setActiveSetIndex((current) => current === 0 ? stickerSets.length - 1 : current - 1)
	}

	function goNext() {
		setActiveSetIndex((current) => current === stickerSets.length - 1 ? 0 : current + 1)
	}

	function openStickerSet() {
		openModal(
			<StickerSetModal
				title={activeSet.title}
				href={activeSet.href}
				stickers={activeSet.stickers}
			/>
		)
	}

	return (
		<PosterGrid
			id="stickers"
			className="before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']"
		>
			<h2 className="col-span-2 row-start-1 self-end whitespace-nowrap text-[8.1vw] font-black uppercase">
				СТИКЕРЫ
			</h2>

			<p className="col-start-3 row-start-1 self-start text-left text-[1.27vw] font-medium uppercase">
				{activeSet.description}
			</p>

			<div className="col-start-4 row-start-1 flex items-start justify-end gap-3">
				<button type="button" onClick={goPrev} className="cursor-pointer flex size-10 items-center justify-center rounded-full border border-[var(--color-text)]">
					←
				</button>

				<button type="button" onClick={goNext} className="cursor-pointer flex size-10 items-center justify-center rounded-full border border-[var(--color-text)]">
					→
				</button>
			</div>

<div className="relative col-span-4 row-start-2 row-span-3 overflow-hidden">
	<AnimatePresence mode="wait">
		<motion.div
			key={activeSetIndex}
			className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]"
			initial={{ opacity: 0, x: 40 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -40 }}
			transition={{ duration: 0.3 }}
		>
			{previewStickers.map((sticker, index) => (
	<button
		key={sticker}
		type="button"
		onClick={openStickerSet}
		className={`relative ${stickerPositions[index]}`}
		aria-label={`Открыть набор ${activeSet.title}`}
	>
		<Image
			src={sticker}
			alt={activeSet.title}
			fill
			className="object-contain"
			sizes="25vw"
			unoptimized
		/>
	</button>
))}
		</motion.div>
	</AnimatePresence>

	<div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)] pointer-events-none">
		<button
			type="button"
			onClick={openStickerSet}
			className="cursor-pointer pointer-events-auto col-start-4 row-start-2 flex items-center justify-center border border-[var(--color-text)] text-center font-black uppercase"
		>
			посмотреть набор
		</button>
	</div>
</div>
		</PosterGrid>
	)
}