import Image from "next/image"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

export function HeroSection() {
	return (
		<PosterGrid className="before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]">
			<h1 className="col-span-4 self-end font-black uppercase text-[8.1vw]">АЛИНА КАМАЛОВА</h1>

			<nav className="col-span-2 row-start-2 flex w-full justify-between text-[1vw] font-normal uppercase">
					<a href="#ui">UX/UI</a>
					<a href="#banners">БАННЕРЫ</a>
					<a href="#illustrations">ИЛЛЮСТРАЦИИ</a>
					<a href="#stickers">СТИКЕРЫ</a>
			</nav>

			<div className="relative col-start-4 col-span-1 row-start-2 row-span-3">
				<Image className="object-cover" src="/images/avatar.png" alt="Алина Камалова" fill priority sizes="25vw" />
			</div>

<div className="col-start-1 col-span-1 row-start-4 self-end">
	<Image
		src="/images/alina-logo.svg"
		alt="Alina Logo"
		width={80}
		height={80}
		className="h-[5vw] w-auto"
	/>
</div>

			<p className="col-span-2 col-start-2 row-start-4 font-medium text-right uppercase self-end text-[2.2vw]">Минимализм, внимание к деталям<br />и дизайн, который работает</p>
		</PosterGrid>
	)
}