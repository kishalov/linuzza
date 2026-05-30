"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PosterGrid } from "@/components/poster-grid/poster-grid"

export function StickersSection() {


	return (
		<PosterGrid className="before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none before:bg-[url('https://www.ui-layouts.com/noise.gif')]" id="stickers">
            <h2 className="col-span-2 row-start-1 self-end font-black uppercase text-[8.1vw] whitespace-nowrap">СТИКЕРЫ</h2>
			<p className="col-span-1 col-start-3 row-start-1 font-medium text-left self-start uppercase text-[1.27vw]">рисую наборы готовые <br /> к печати и мессенджерам</p>
			<div className="relative col-span-4 row-start-2 row-span-3 overflow-hidden">

			</div>

		</PosterGrid>
	)
}