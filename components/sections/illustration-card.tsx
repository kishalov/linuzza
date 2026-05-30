"use client"

import { useModal } from "@/components/modal/modal-provider"

type IllustrationCardProps = {
	src: string
	alt: string
	flexGrow: number
}

export function IllustrationCard({ src, alt, flexGrow }: IllustrationCardProps) {
	const { openModal } = useModal()

	return (
		<button
			className="group relative min-h-0 cursor-pointer overflow-hidden border-0 p-0"
			style={{
				flexGrow,
				flexBasis: 0,
			}}
			type="button"
			onClick={() => {
				openModal(
					<img
						src={src}
						alt={alt}
						className="max-h-[90dvh] max-w-[90vw] object-contain"
					/>
				)
			}}
			aria-label={alt}
		>
			<div
				className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
				style={{
					backgroundImage: `url("${src}")`,
				}}
			/>
		</button>
	)
}