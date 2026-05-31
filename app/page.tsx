import { HeroSection } from "@/components/sections/hero-section"
import { UxSection } from "@/components/sections/ux-section"
import { BannersSection } from "@/components/sections/banners-section"
import { IllustrationsSection } from "@/components/sections/illustrations-section"
import { StickersSection } from "@/components/sections/sticker-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<UxSection />
			<BannersSection />
			<IllustrationsSection />
			<StickersSection />
			<ContactSection />
		</main>
	)
}