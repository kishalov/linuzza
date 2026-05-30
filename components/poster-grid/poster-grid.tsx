import type { CSSProperties, HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/cn"

type ExtraGuide = {
	type: "horizontal" | "vertical"
	position: string
}

type PosterGridProps = HTMLAttributes<HTMLElement> & {
	children: ReactNode
	rows?: number
	as?: "section" | "div" | "main"
	extraGuides?: ExtraGuide[]
}

export function PosterGrid({
	children,
	className,
	rows = 4,
	as = "section",
	extraGuides = [],
	...props
}: PosterGridProps) {
	const Component = as

	const verticalLines = [
		{ key: "outer-left", position: "var(--guide-left)", isOuter: true },
		{ key: "gap-1", position: "calc(var(--grid-left) + var(--col-width) + var(--poster-gap-x) / 2)", isOuter: false },
		{ key: "gap-2", position: "calc(var(--grid-left) + var(--col-width) * 2 + var(--poster-gap-x) * 1.5)", isOuter: false, hideOnTablet: true },
		{ key: "gap-3", position: "calc(var(--grid-left) + var(--col-width) * 3 + var(--poster-gap-x) * 2.5)", isOuter: false, hideOnTablet: true },
		{ key: "outer-right", position: "var(--guide-right)", isOuter: true },
	]

	const horizontalLines = [
		{ key: "top", position: "var(--guide-top)" },
		{ key: "bottom", position: "var(--guide-bottom)" },
		...extraGuides
			.filter((guide) => guide.type === "horizontal")
			.map((guide, index) => ({ key: `extra-h-${index}`, position: guide.position })),
	]

	const allVerticalLines = [
		...verticalLines,
		...extraGuides
			.filter((guide) => guide.type === "vertical")
			.map((guide, index) => ({ key: `extra-v-${index}`, position: guide.position, isOuter: false, hideOnTablet: false })),
	]

	return (
		<Component
			{...props}
			className={cn("poster-grid relative mx-auto h-dvh w-full max-w-[var(--page-max-width)] overflow-hidden p-[var(--poster-margin)]", className)}
			style={{
				...props.style,
				"--poster-rows": rows,
				"--poster-columns": 4,
				"--grid-left": "var(--poster-margin)",
				"--grid-width": "calc(100% - var(--poster-margin) * 2)",
				"--col-width": "calc((var(--grid-width) - var(--poster-gap-x) * (var(--poster-columns) - 1)) / var(--poster-columns))",
				"--guide-left": "calc(var(--poster-margin) - var(--poster-guide-offset-x))",
				"--guide-right": "calc(100% - var(--poster-margin) + var(--poster-guide-offset-x))",
				"--guide-top": "calc(var(--poster-margin) - var(--poster-guide-offset-y))",
				"--guide-bottom": "calc(100% - var(--poster-margin) + var(--poster-guide-offset-y))",
			} as CSSProperties}
		>
			<div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
				{allVerticalLines.map((line) => (
					<span
						key={line.key}
						className={cn(
							"absolute w-px -translate-x-1/2 bg-[var(--poster-guide-color)]",
							line.isOuter ? "top-0 bottom-0" : "top-[var(--guide-top)] bottom-[var(--poster-margin)]",
							line.hideOnTablet ? "max-[1024px]:hidden" : undefined
						)}
						style={{ left: line.position }}
					/>
				))}

				{horizontalLines.map((line) => (
					<span
						key={line.key}
						className="absolute h-px -translate-y-1/2 bg-[var(--poster-guide-color)]"
						style={{ top: line.position, left: "var(--guide-left)", right: "calc(100% - var(--guide-right))" }}
					/>
				))}

				{allVerticalLines.map((verticalLine) =>
					horizontalLines.map((horizontalLine) => (
						<span
							key={`cross-${verticalLine.key}-${horizontalLine.key}`}
							className={cn(
								"absolute size-2.5 -translate-x-1/2 -translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[var(--poster-cross-color)] after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[var(--poster-cross-color)]",
								verticalLine.hideOnTablet ? "max-[1024px]:hidden" : undefined
							)}
							style={{ left: verticalLine.position, top: horizontalLine.position }}
						/>
					))
				)}
			</div>

			<div
				className="relative z-20 grid h-full min-h-0 grid-cols-[repeat(var(--poster-columns),minmax(0,1fr))] gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)] overflow-hidden"
				style={{ gridTemplateRows: "repeat(var(--poster-rows), minmax(0, 1fr))" } as CSSProperties}
			>
				{children}
			</div>
		</Component>
	)
}
