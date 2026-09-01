import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	server: {
		host: true,
	},
	site: "https://timdimas.github.io",
	base: "/art-portfolio",
});
