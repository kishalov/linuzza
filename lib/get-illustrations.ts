import fs from "node:fs"
import path from "node:path"

export function getIllustrations() {
	const dir = path.join(process.cwd(), "public/images/illustrations")

	return fs
		.readdirSync(dir)
		.filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
		.sort()
		.map((file) => ({
			src: `/images/illustrations/${encodeURIComponent(file)}`,
			alt: file.replace(/\.[^/.]+$/, "").replaceAll("_", " ").replaceAll("-", " "),
		}))
}