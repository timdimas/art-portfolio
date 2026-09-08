import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	i18n: {
		defaultLocale: "el",
		locales: ["el", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	server: {
		host: true,
	},
	site: "https://panosvasdaris.gr",
	base: "/",
});
