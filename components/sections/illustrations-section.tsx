import type { CSSProperties } from "react"
import { getIllustrations } from "@/lib/get-illustrations"
import { IllustrationCard } from "@/components/sections/illustration-card"
import { cn } from "@/lib/cn"

const desktopColumnCount = 4
const tabletColumnCount = 2
const growPattern = [1.45, 0.9, 1.25, 1.7, 1.1, 1.55, 0.8, 1.35, 1.9, 1.2]

function distributeByColumns<T>(items: T[], columns: number) {
	return Array.from({ length: columns }, (_, columnIndex) => {
		return items.filter((_, itemIndex) => itemIndex % columns === columnIndex)
	})
}

function IllustrationGallery({
	columns,
	columnCount,
	gridClassName,
	visibilityClassName,
}: {
	columns: ReturnType<typeof getIllustrations>[]
	columnCount: number
	gridClassName: string
	visibilityClassName?: string
}) {
	return (
		<div className={visibilityClassName}>
			<div
				className={cn("grid h-[var(--gallery-height)] gap-0", gridClassName)}
				style={{ marginLeft: "var(--guide-left)", width: "var(--guide-width)" }}
			>
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
				{Array.from({ length: columnCount + 1 }, (_, line) => (
					<span
						key={`guide-${line}`}
						className="absolute top-0 h-full w-px -translate-x-1/2 bg-white"
						style={{ left: `calc(var(--guide-left) + var(--guide-width) / ${columnCount} * ${line})` }}
					/>
				))}

				{Array.from({ length: columnCount + 1 }, (_, line) => (
					<span
						key={`top-cross-${line}`}
						className="absolute top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white"
						style={{ left: `calc(var(--guide-left) + var(--guide-width) / ${columnCount} * ${line})` }}
					/>
				))}

				{Array.from({ length: columnCount + 1 }, (_, line) => (
					<span
						key={`bottom-cross-${line}`}
						className="absolute bottom-0 size-2.5 -translate-x-1/2 translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white"
						style={{ left: `calc(var(--guide-left) + var(--guide-width) / ${columnCount} * ${line})` }}
					/>
				))}
			</div>
		</div>
	)
}

export function IllustrationsSection() {
	const illustrations = getIllustrations()
	const desktopColumns = distributeByColumns(illustrations, desktopColumnCount)
	const tabletColumns = distributeByColumns(illustrations, tabletColumnCount)
	const desktopMaxItems = Math.max(...desktopColumns.map((column) => column.length), 1)
	const tabletMaxItems = Math.max(...tabletColumns.map((column) => column.length), 1)

	return (
		<section
			id="illustrations"
			className="illustrations-gallery relative mx-auto w-full max-w-[var(--page-max-width)] overflow-visible before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:bg-[url('https://www.ui-layouts.com/noise.gif')] before:opacity-[0.03] before:content-['']"
			style={{
				"--gallery-columns": desktopColumnCount,
				"--gallery-height": `calc(${desktopMaxItems} * 34vw)`,
				"--gallery-height-tablet": `calc(${tabletMaxItems} * 52vw)`,
				"--grid-left": "var(--poster-margin)",
				"--grid-width": "calc(100% - var(--poster-margin) * 2)",
				"--col-width": "calc((var(--grid-width) - var(--poster-gap-x) * (var(--gallery-columns) - 1)) / var(--gallery-columns))",
				"--guide-left": "calc(var(--poster-margin) - var(--poster-guide-offset-x))",
				"--guide-right": "calc(100% - var(--poster-margin) + var(--poster-guide-offset-x))",
				"--guide-width": "calc(var(--guide-right) - var(--guide-left))",
			} as CSSProperties}
		>
			<IllustrationGallery columns={desktopColumns} columnCount={desktopColumnCount} gridClassName="grid-cols-4" visibilityClassName="max-[1024px]:hidden" />
			<IllustrationGallery columns={tabletColumns} columnCount={tabletColumnCount} gridClassName="grid-cols-2" visibilityClassName="hidden max-[1024px]:block" />
		</section>
	)
}
