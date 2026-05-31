import type { CSSProperties } from "react"
import { getIllustrations } from "@/lib/get-illustrations"
import { IllustrationCard } from "@/components/sections/illustration-card"

const growPattern = [1.45, 0.9, 1.25, 1.7, 1.1, 1.55, 0.8, 1.35, 1.9, 1.2]

function distributeByColumns<T>(items: T[], columns: number) {
	return Array.from({ length: columns }, (_, columnIndex) => {
		return items.filter((_, itemIndex) => itemIndex % columns === columnIndex)
	})
}

export function IllustrationsSection() {
	const illustrations = getIllustrations()

	const mobileColumns = distributeByColumns(illustrations, 2)
	const tabletColumns = distributeByColumns(illustrations, 3)
	const desktopColumns = distributeByColumns(illustrations, 4)

	const mobileHeight = Math.max(...mobileColumns.map((column) => column.length), 1)
	const tabletHeight = Math.max(...tabletColumns.map((column) => column.length), 1)
	const desktopHeight = Math.max(...desktopColumns.map((column) => column.length), 1)

	return (
		<section
			id="illustrations"
			className="relative mx-auto w-full max-w-[var(--page-max-width)] overflow-visible before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.03] before:content-['']"
			style={
				{
					"--grid-left": "var(--poster-margin)",
					"--grid-width": "calc(100% - var(--poster-margin) * 2)",
					"--guide-left": "calc(var(--poster-margin) - var(--poster-guide-offset-x))",
					"--guide-right": "calc(100% - var(--poster-margin) + var(--poster-guide-offset-x))",
					"--guide-width": "calc(var(--guide-right) - var(--guide-left))",
				} as CSSProperties
			}
		>
			{/* mobile */}

			<div
				className="grid grid-cols-2 gap-0 md:hidden"
				style={{
					marginLeft: "var(--guide-left)",
					width: "var(--guide-width)",
					height: `calc(${mobileHeight} * 34vw)`,
				}}
			>
				{mobileColumns.map((column, columnIndex) => (
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

			{/* tablet */}

			<div
				className="hidden grid-cols-3 gap-0 md:grid lg:hidden"
				style={{
					marginLeft: "var(--guide-left)",
					width: "var(--guide-width)",
					height: `calc(${tabletHeight} * 24vw)`,
				}}
			>
				{tabletColumns.map((column, columnIndex) => (
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

			{/* desktop */}

			<div
				className="hidden grid-cols-4 gap-0 lg:grid"
				style={{
					marginLeft: "var(--guide-left)",
					width: "var(--guide-width)",
					height: `calc(${desktopHeight} * 34vw)`,
				}}
			>
				{desktopColumns.map((column, columnIndex) => (
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
				{/* mobile guides */}

				{[0, 1, 2].map((line) => (
					<span
						key={`mobile-${line}`}
						className="absolute top-0 h-full w-px -translate-x-1/2 bg-white md:hidden"
						style={{
							left: `calc(var(--guide-left) + var(--guide-width) / 2 * ${line})`,
						}}
					/>
				))}

				{/* tablet guides */}

				{[0, 1, 2, 3].map((line) => (
					<span
						key={`tablet-${line}`}
						className="absolute top-0 hidden h-full w-px -translate-x-1/2 bg-white md:block lg:hidden"
						style={{
							left: `calc(var(--guide-left) + var(--guide-width) / 3 * ${line})`,
						}}
					/>
				))}

				{[0, 1, 2, 3, 4].map((line) => (
					<span
						key={`desktop-${line}`}
						className="absolute top-0 hidden h-full w-px -translate-x-1/2 bg-white lg:block"
						style={{
							left: `calc(var(--guide-left) + var(--guide-width) / 4 * ${line})`,
						}}
					/>
				))}
			</div>
		</section>
	)
}