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
		<PosterGrid
			id="banners"
			extraGuides={[{ type: "horizontal", position: "75%" }]}
			className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']"
		>
			<div className="relative col-span-2 row-span-3 row-start-2 lg:row-start-1 overflow-hidden md:col-span-3 lg:col-span-4">
				<button
					type="button"
					onClick={goPrev}
					aria-label="Предыдущие баннеры"
					className="absolute left-0 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95"
				>
					←
				</button>

				<div ref={emblaRef} className="h-full overflow-hidden">
					<div className="flex h-full">
						{banners.map((banner) => (
							<div
								key={banner.image}
								className="relative h-full flex-[0_0_100%] pl-[calc(var(--poster-gap-x)/2)] pr-[calc(var(--poster-gap-x)/2)] md:flex-[0_0_33.333333%] lg:flex-[0_0_25%]"
							>
								<button
									type="button"
									className="relative h-full w-full cursor-pointer overflow-hidden"
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
										src={banner.image}
										alt={banner.alt}
										fill
										className="object-cover object-top"
										sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 25vw"
									/>
								</button>
							</div>
						))}
					</div>
				</div>

				<button
					type="button"
					onClick={goNext}
					aria-label="Следующие баннеры"
					className="absolute right-0 top-1/2 z-30 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-text)] bg-[var(--color-bg)] text-sm transition-transform duration-200 hover:scale-105 active:scale-95"
				>
					→
				</button>
			</div>

			<h2 className="col-span-1 row-start-1 lg:row-start-4 self-start lg:self-end text-[2.5vw] font-black uppercase md:text-[1.5vw] lg:text-[1vw]">
				БАННЕРЫ
			</h2>

			<p className="col-span-1 col-start-2 row-start-1 lg:row-start-4 self-center text-right lg:text-center text-[3vw] font-medium uppercase md:col-span-2 md:text-[1.8vw] lg:col-span-2 lg:text-[1.27vw]">
				Для меня важно, чтобы дизайн не просто выглядел
				<br />
				красиво, а действительно работал: привлекал внимание,
				<br />
				вызывал интерес и помогал приводить клиентов.
			</p>
		</PosterGrid>
	)
}