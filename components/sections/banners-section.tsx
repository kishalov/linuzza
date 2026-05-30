"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { PosterGrid } from "@/components/poster-grid/poster-grid"
import { useModal } from "@/components/modal/modal-provider"

const banners = [
	{ image: "/images/banner-1.png", alt: "Vogue banner" },
	{ image: "/images/banner-2.png", alt: "One Planet banner" },
	{ image: "/images/banner-3.png", alt: "Run banner" },
	{ image: "/images/banner-4.png", alt: "Doma banner" },
	{ image: "/images/banner-5.png", alt: "Banner" },
	{ image: "/images/banner-6.png", alt: "Banner" },
]

export function BannersSection() {
	const { openModal } = useModal()
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		slidesToScroll: 1,
	})

	function goPrev() {
		emblaApi?.scrollPrev()
	}

	function goNext() {
		emblaApi?.scrollNext()
	}

	return (
		<PosterGrid className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']" id="banners" extraGuides={[{ type: "horizontal", position: "75%" }]}>
			<div className="relative col-span-4 row-span-3 overflow-hidden">
				<button className="cursor-pointer absolute left-0 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goPrev} aria-label="Предыдущие баннеры">
					←
				</button>

<div ref={emblaRef} className="h-full overflow-hidden">
	<div className="-mr-[var(--poster-gap-x)] flex h-full">
		{banners.map((banner) => (
	<div
		key={banner.image}
		className="relative h-full min-w-0 flex-[0_0_25%] pr-[var(--poster-gap-x)]"
	>
		<button
			type="button"
			className="relative h-full w-full overflow-hidden cursor-pointer"
			onClick={() => {
				openModal(
					<img
						src={banner.image}
						alt={banner.alt}
						className="max-h-[90dvh] max-w-[90vw] object-contain"
					/>
				)
			}}
		>
			<Image
				className="object-cover object-top"
				src={banner.image}
				alt={banner.alt}
				fill
				sizes="25vw"
			/>
		</button>
	</div>
))}
	</div>
</div>

				<button className="cursor-pointer absolute right-0 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95" type="button" onClick={goNext} aria-label="Следующие баннеры">
					→
				</button>
			</div>

			<p className="col-span-2 col-start-2 row-start-4 self-center text-center text-[1.27vw] font-medium uppercase">
				Для меня важно, чтобы дизайн не просто выглядел
				<br />
				красиво, а действительно работал: привлекал внимание,
				<br />
				вызывал интерес и помогал приводить клиентов.
			</p>

			<h2 className="col-start-1 col-span-1 row-start-4 self-end text-[1vw] font-black uppercase">
				БАННЕРЫ
			</h2>
		</PosterGrid>
	)
}