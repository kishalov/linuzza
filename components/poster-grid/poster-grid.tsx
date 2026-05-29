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

	const cols = 4
	const verticalLines = Array.from({ length: cols + 1 }, (_, index) => ({
		key: `base-v-${index}`,
		position: `calc(var(--guide-left) + var(--guide-width) / ${cols} * ${index})`,
		isOuter: index === 0 || index === cols,
	}))

	const horizontalLines = [
		{
			key: "base-h-top",
			position: "var(--guide-top)",
		},
		{
			key: "base-h-bottom",
			position: "calc(100% - var(--guide-top))",
		},
	]

	const extraVerticalLines = extraGuides
		.filter((guide) => guide.type === "vertical")
		.map((guide, index) => ({
			key: `extra-v-${index}`,
			position: guide.position,
			isOuter: false,
		}))

	const extraHorizontalLines = extraGuides
		.filter((guide) => guide.type === "horizontal")
		.map((guide, index) => ({
			key: `extra-h-${index}`,
			position: guide.position,
		}))

	const allVerticalLines = [...verticalLines, ...extraVerticalLines]
	const allHorizontalLines = [...horizontalLines, ...extraHorizontalLines]

	return (
		<Component
			{...props}
			className={cn("relative mx-auto h-dvh w-full max-w-[var(--page-max-width)] overflow-hidden p-[var(--poster-margin)]", className)}
			style={{
				...props.style,
				"--poster-rows": rows,
				"--guide-left": "calc(var(--poster-margin) - var(--poster-guide-offset))",
				"--guide-top": "calc(var(--poster-margin) - var(--poster-guide-offset))",
				"--guide-width": "calc(100% - var(--guide-left) * 2)",
			} as CSSProperties}
		>
			<div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
				{allVerticalLines.map((line) => (
					<span
						key={line.key}
						className={cn("absolute w-px -translate-x-1/2 bg-[var(--poster-guide-color)]", line.isOuter ? "top-0 bottom-0" : "top-[var(--guide-top)] bottom-[var(--guide-top)]")}
						style={{ left: line.position }}
					/>
				))}

				{allHorizontalLines.map((line) => (
					<span
						key={line.key}
						className="absolute left-[var(--guide-left)] right-[var(--guide-left)] h-px -translate-y-1/2 bg-[var(--poster-guide-color)]"
						style={{ top: line.position }}
					/>
				))}

				{allVerticalLines.map((verticalLine) =>
					allHorizontalLines.map((horizontalLine) => (
						<span
							key={`cross-${verticalLine.key}-${horizontalLine.key}`}
							className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[var(--poster-cross-color)] after:absolute after:left-1/2 after:top-1/2 after:h-full after:w-px after:-translate-x-1/2 after:-translate-y-1/2 after:bg-[var(--poster-cross-color)]"
							style={{
								left: verticalLine.position,
								top: horizontalLine.position,
							}}
						/>
					))
				)}
			</div>

			<div
				className="relative z-20 grid h-full min-h-0 grid-cols-4 gap-x-[var(--poster-gap-x)] gap-y-[var(--poster-gap-y)] overflow-hidden"
				style={{ gridTemplateRows: "repeat(var(--poster-rows), minmax(0, 1fr))" } as CSSProperties}
			>
				{children}
			</div>
		</Component>
	)
}