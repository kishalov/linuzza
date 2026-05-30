"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { createPortal } from "react-dom"

type ModalContextValue = {
	openModal: (content: ReactNode) => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
	const [content, setContent] = useState<ReactNode | null>(null)

	function openModal(nextContent: ReactNode) {
		setContent(nextContent)
	}

	function closeModal() {
		setContent(null)
	}

	useEffect(() => {
		if (!content) return

		document.body.style.overflow = "hidden"

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				closeModal()
			}
		}

		window.addEventListener("keydown", onKeyDown)

		return () => {
			document.body.style.overflow = ""
			window.removeEventListener("keydown", onKeyDown)
		}
	}, [content])

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}

			{content
				? createPortal(
						<div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-8" onClick={closeModal}>
							<button className="cursor-pointer absolute right-6 top-6 z-10 text-4xl leading-none text-white" type="button" onClick={closeModal} aria-label="Закрыть">×</button>

							<div className="max-h-full max-w-full" onClick={(event) => event.stopPropagation()}>
								{content}
							</div>
						</div>,
						document.body
					)
				: null}
		</ModalContext.Provider>
	)
}

export function useModal() {
	const context = useContext(ModalContext)

	if (!context) {
		throw new Error("useModal must be used inside ModalProvider")
	}

	return context
}