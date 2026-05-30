import Image from "next/image"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

export function HeroSection() {
	return (
		<PosterGrid className="before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]">
<h1 className="col-span-3 self-center whitespace-nowrap text-[6.1vw] font-black uppercase max-[1024px]:col-span-2 max-[1024px]:text-[9.4vw]">
	АЛИНА КАМАЛОВА
</h1>

<a
	href="https://t.me/lina_kk2"
	target="_blank"
	rel="noopener noreferrer"
	className="col-start-4 row-start-1 flex items-center justify-center border border-[var(--color-text)] text-center font-black uppercase max-[1024px]:col-start-2 max-[1024px]:row-start-2"
>
	связаться
</a>

			<nav className="col-span-2 row-start-2 flex w-full justify-between text-[1vw] font-normal uppercase max-[1024px]:col-span-1 max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:justify-start max-[1024px]:gap-3 max-[1024px]:text-[clamp(0.875rem,2vw,1.1rem)]">
					<a href="#ui">UX/UI</a>
					<a href="#banners">БАННЕРЫ</a>
					<a href="#illustrations">ИЛЛЮСТРАЦИИ</a>
					<a href="#stickers">СТИКЕРЫ</a>
			</nav>

			<div className="relative col-start-4 col-span-1 row-start-2 row-span-3 max-[1024px]:col-start-2 max-[1024px]:row-start-3 max-[1024px]:row-span-2">
				<Image className="object-cover" src="/images/avatar.png" alt="Алина Камалова" fill priority sizes="(max-width: 1024px) 50vw, 25vw" />
			</div>

<div className="col-start-1 col-span-1 row-start-4 self-end">
	<Image
		src="/images/alina-logo.svg"
		alt="Alina Logo"
		width={80}
		height={80}
		className="h-[5vw] w-auto max-[1024px]:h-[10vw]"
	/>
</div>

			<p className="col-span-2 col-start-2 row-start-4 self-end text-right text-[2vw] font-medium uppercase max-[1024px]:col-start-1 max-[1024px]:col-span-1 max-[1024px]:row-start-3 max-[1024px]:text-left max-[1024px]:text-[clamp(1rem,3vw,1.6rem)]">Минимализм, внимание к деталям<br />и дизайн, который работает</p>
		</PosterGrid>
	)
}