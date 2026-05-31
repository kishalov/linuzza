"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"
import { useModal } from "../modal/modal-provider"
import { stickerSets } from "./stickers"
import type { CSSProperties } from "react"

function StickerSetModal({
	title,
	href,
	stickers,
}: {
	title: string
	href: string
	stickers: string[]
}) {
	const { closeModal } = useModal()
	const [openedSticker, setOpenedSticker] = useState<string | null>(null)

	return (
		<div className="relative flex h-[80dvh] w-[min(85vw,760px)] flex-col overflow-hidden border-2 border-[#3D3936] bg-[#F3F3F3] p-6 before:pointer-events-none before:absolute before:inset-0 before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.03] before:content-['']">
			<div className="relative z-10 flex h-full flex-col">
				<h3 className="mb-6 text-xl font-semibold">{title}</h3>

				<div className="grid flex-1 auto-rows-min grid-cols-3 gap-4 overflow-y-auto pr-2 md:grid-cols-4 lg:grid-cols-6">
					{stickers.map((sticker) => (
						<button
							key={sticker}
							type="button"
							onClick={() => setOpenedSticker(sticker)}
							className="relative aspect-square cursor-pointer"
						>
							<Image src={sticker} alt={title} fill className="object-contain" sizes="120px" unoptimized />
						</button>
					))}
				</div>

				<div className="mt-6 flex items-center justify-end gap-6">
					<button type="button" onClick={closeModal} className="inline-flex cursor-pointer items-center text-sm font-medium">
						Закрыть
					</button>

					<a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex cursor-pointer items-center text-sm font-medium">
						Добавить набор
					</a>
				</div>
			</div>

			{openedSticker ? (
				<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-8" onClick={() => setOpenedSticker(null)}>
					<button
						type="button"
						onClick={() => setOpenedSticker(null)}
						className="absolute right-6 top-6 z-10 text-4xl leading-none text-white"
						aria-label="Закрыть стикер"
					>
						×
					</button>

					<div className="relative h-[min(80dvh,300px)] w-[min(80vw,300px)]" onClick={(event) => event.stopPropagation()}>
						<Image src={openedSticker} alt={title} fill className="object-contain" sizes="300px" unoptimized />
					</div>
				</div>
			) : null}
		</div>
	)
}

const desktopStickerPositions = [
	"col-start-1 row-start-1",
	"col-start-2 row-start-1",
	"col-start-3 row-start-1",
	"col-start-4 row-start-1",
	"col-start-1 row-start-2",
	"col-start-2 row-start-2",
	"col-start-3 row-start-2",
]

const tabletStickerPositions = [
	"col-start-1 row-start-1",
	"col-start-2 row-start-1",
	"col-start-3 row-start-1",
	"col-start-1 row-start-2",
	"col-start-2 row-start-2",
]

const mobileStickerPositions = [
	"col-start-1 row-start-1",
	"col-start-2 row-start-1",
	"col-start-1 row-start-2",
]

export function StickersSection() {
	const [activeSetIndex, setActiveSetIndex] = useState(0)
	const { openModal } = useModal()

	const activeSet = stickerSets[activeSetIndex]
	const desktopPreviewStickers = activeSet.stickers.slice(0, 7)
	const tabletPreviewStickers = activeSet.stickers.slice(0, 5)
	const mobilePreviewStickers = activeSet.stickers.slice(0, 3)

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
			/>,
		)
	}

	return (
<PosterGrid
	id="stickers"
	style={{
		"--hero-rows": "0.2fr 0.2fr 1.2fr 1.2fr",
	} as CSSProperties}
	className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-[''] lg:[--hero-rows:repeat(var(--poster-rows),minmax(0,1fr))]"
>
			<h2 className="col-span-2 row-start-1 self-end whitespace-nowrap text-[11vw] font-black uppercase md:text-[8vw] lg:col-span-2 lg:text-[8.1vw]">
				СТИКЕРЫ
			</h2>

			<p className="col-span-1 row-start-2 self-start text-left text-[3vw] font-medium uppercase md:col-span-2 md:text-[1.8vw] lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:text-[1.27vw]">
				{activeSet.description}
			</p>

			<div className="col-start-2 row-start-2 flex items-start justify-end gap-3 md:col-start-3 md:justify-start lg:col-start-4 lg:row-start-1">
				<button type="button" onClick={goPrev} className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-text)]">
					←
				</button>

				<button type="button" onClick={goNext} className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-[var(--color-text)]">
					→
				</button>
			</div>

			<div className="relative col-span-2 row-start-3 row-span-2 overflow-hidden md:hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={`mobile-${activeSetIndex}`}
						className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]"
						initial={{ x: 40 }}
						animate={{ x: 0 }}
						exit={{ x: -40 }}
						transition={{ duration: 0.3 }}
					>
						{mobilePreviewStickers.map((sticker, index) => (
							<motion.button
								key={`${activeSetIndex}-${sticker}`}
								type="button"
								onClick={openStickerSet}
								className={`relative cursor-pointer ${mobileStickerPositions[index]}`}
								initial={{ scale: 0.96 }}
								animate={{ scale: 1 }}
								transition={{
									duration: 0.45,
									delay: index * 0.035,
									ease: [0.22, 1, 0.36, 1],
								}}
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
								aria-label={`Открыть набор ${activeSet.title}`}
							>
								<Image src={sticker} alt={activeSet.title} fill className="object-contain" sizes="50vw" unoptimized />
							</motion.button>
						))}
					</motion.div>
				</AnimatePresence>

				<div className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]">
					<button
						type="button"
						onClick={openStickerSet}
						className="pointer-events-auto col-start-2 row-start-2 flex cursor-pointer items-center justify-center border border-[var(--color-text)] text-center font-black uppercase"
					>
						посмотреть набор
					</button>
				</div>
			</div>

			<div className="relative col-span-3 row-start-3 row-span-2 hidden overflow-hidden md:block lg:hidden">
				<AnimatePresence mode="wait">
					<motion.div
						key={`tablet-${activeSetIndex}`}
						className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]"
						initial={{ x: 40 }}
						animate={{ x: 0 }}
						exit={{ x: -40 }}
						transition={{ duration: 0.3 }}
					>
						{tabletPreviewStickers.map((sticker, index) => (
							<motion.button
								key={`${activeSetIndex}-${sticker}`}
								type="button"
								onClick={openStickerSet}
								className={`relative cursor-pointer ${tabletStickerPositions[index]}`}
								initial={{ scale: 0.96 }}
								animate={{ scale: 1 }}
								transition={{
									duration: 0.45,
									delay: index * 0.035,
									ease: [0.22, 1, 0.36, 1],
								}}
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
								aria-label={`Открыть набор ${activeSet.title}`}
							>
								<Image src={sticker} alt={activeSet.title} fill className="object-contain" sizes="33vw" unoptimized />
							</motion.button>
						))}
					</motion.div>
				</AnimatePresence>

				<div className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]">
					<button
						type="button"
						onClick={openStickerSet}
						className="pointer-events-auto col-start-3 row-start-2 flex cursor-pointer items-center justify-center border border-[var(--color-text)] text-center font-black uppercase"
					>
						посмотреть набор
					</button>
				</div>
			</div>

			<div className="relative col-span-4 row-start-2 row-span-3 hidden overflow-hidden lg:block">
				<AnimatePresence mode="wait">
					<motion.div
						key={`desktop-${activeSetIndex}`}
						className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]"
						initial={{ opacity: 0, x: 40 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -40 }}
						transition={{ duration: 0.3 }}
					>
						{desktopPreviewStickers.map((sticker, index) => (
							<motion.button
								key={`${activeSetIndex}-${sticker}`}
								type="button"
								onClick={openStickerSet}
								className={`relative cursor-pointer ${desktopStickerPositions[index]}`}
								initial={{
									opacity: 0,
									scale: 0.96,
								}}
								animate={{
									opacity: 1,
									scale: 1,
								}}
								transition={{
									duration: 0.45,
									delay: index * 0.035,
									ease: [0.22, 1, 0.36, 1],
								}}
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.96 }}
								aria-label={`Открыть набор ${activeSet.title}`}
							>
								<Image src={sticker} alt={activeSet.title} fill className="object-contain" sizes="25vw" unoptimized />
							</motion.button>
						))}
					</motion.div>
				</AnimatePresence>

				<div className="pointer-events-none absolute inset-0 grid grid-cols-4 grid-rows-2 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)]">
					<button
						type="button"
						onClick={openStickerSet}
						className="pointer-events-auto col-start-4 row-start-2 flex cursor-pointer items-center justify-center border border-[var(--color-text)] text-center font-black uppercase"
					>
						посмотреть набор
					</button>
				</div>
			</div>
		</PosterGrid>
	)
}