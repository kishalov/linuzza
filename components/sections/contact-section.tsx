import type { CSSProperties } from "react"
import Image from "next/image"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

export function ContactSection() {
    return (
        <PosterGrid
            className="before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.05] before:content-['']"
        >
			<h1 className="text-center col-span-2 col-start-1 row-start-2 self-center text-[7vw] font-black uppercase lg:col-span-2 md:col-span-3 md:text-[6vw] lg:col-start-2 lg:text-[3vw]">
				Давайте обсудим проект
			</h1>
            <a
                href="https://t.me/lina_kk2"
                target="_blank"
                rel="noopener noreferrer"
                className="col-start-1 lg:col-start-2 row-start-3 col-span-2 md:col-span-3 lg:col-span-2 flex items-center self-center h-full justify-center border border-[var(--color-text)] text-center font-black uppercase md:col-start-1 lg:col-start-2"
            >
                связаться
            </a>

        </PosterGrid>
    )
}