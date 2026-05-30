import type { CSSProperties } from "react"
import { getIllustrations } from "@/lib/get-illustrations"
import { IllustrationCard } from "@/components/sections/illustration-card"

const columnCount = 4
const growPattern = [1.45, 0.9, 1.25, 1.7, 1.1, 1.55, 0.8, 1.35, 1.9, 1.2]

function distributeByColumns<T>(items: T[], columns: number) {
	return Array.from({ length: columns }, (_, columnIndex) => {
		return items.filter((_, itemIndex) => itemIndex % columns === columnIndex)
	})
}

export function IllustrationsSection() {
	const illustrations = getIllustrations()
	const columns = distributeByColumns(illustrations, columnCount)
	const maxItemsInColumn = Math.max(...columns.map((column) => column.length), 1)

	return (
		<section
			id="illustrations"
			className="relative mx-auto w-full max-w-[var(--page-max-width)] overflow-visible before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:opacity-[0.03] before:z-10 before:pointer-events-none before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
			style={{
				"--grid-left": "var(--poster-margin)",
				"--grid-width": "calc(100% - var(--poster-margin) * 2)",
				"--col-width": "calc((var(--grid-width) - var(--poster-gap-x) * 3) / 4)",
				"--guide-left": "calc(var(--poster-margin) - var(--poster-guide-offset-x))",
				"--guide-right": "calc(100% - var(--poster-margin) + var(--poster-guide-offset-x))",
				"--guide-width": "calc(var(--guide-right) - var(--guide-left))",
				"--gallery-height": `calc(${maxItemsInColumn} * 34vw)`,
			} as CSSProperties}
		>
			<div className="grid h-[var(--gallery-height)] grid-cols-4 gap-0" style={{ marginLeft: "var(--guide-left)", width: "var(--guide-width)" }}>
				{columns.map((column, columnIndex) => (
					<div key={columnIndex} className="flex h-full min-h-0 flex-col">
						{column.map((item, itemIndex) => (
<IllustrationCard
	key={item.src}
	src={item.src}
	alt={item.alt}
	flexGrow={growPattern[(columnIndex + itemIndex) % growPattern.length]}
/>
						))}
					</div>
				))}
			</div>

			<div className="pointer-events-none absolute inset-0 z-30 mix-blend-difference" aria-hidden="true">
				{[0, 1, 2, 3, 4].map((line) => (
					<span key={`guide-${line}`} className="absolute top-0 h-full w-px -translate-x-1/2 bg-white" style={{ left: `calc(var(--guide-left) + var(--guide-width) / 4 * ${line})` }} />
				))}

				{[0, 1, 2, 3, 4].map((line) => (
					<span key={`top-cross-${line}`} className="absolute top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white" style={{ left: `calc(var(--guide-left) + var(--guide-width) / 4 * ${line})` }} />
				))}

				{[0, 1, 2, 3, 4].map((line) => (
					<span key={`bottom-cross-${line}`} className="absolute bottom-0 size-2.5 -translate-x-1/2 translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white" style={{ left: `calc(var(--guide-left) + var(--guide-width) / 4 * ${line})` }} />
				))}
			</div>
		</section>
	)
}
