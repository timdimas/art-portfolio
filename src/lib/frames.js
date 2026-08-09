import fs from "node:fs";
import path from "node:path";

const IMG_DIR = path.join(process.cwd(), "public", "frames");
const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");

function parse(file) {
	const match = file.match(/Screenshot_(\d{8})_(\d{6})_YouTube\.(\w+)$/);
	const raw = match ? match[2] : "000000";
	const timecode = `${raw.slice(0, 2)}:${raw.slice(2, 4)}:${raw.slice(4, 6)}`;
	return { date: match?.[1], raw, timecode, ext: match?.[3] };
}

export function getFrames() {
	const files = fs
		.readdirSync(IMG_DIR)
		.filter((f) => /Screenshot_\d{8}_(\d{6})_YouTube\.(webp)$/.test(f));
	files.sort();

	return files.map((file, index) => {
		const { timecode } = parse(file);
		return {
			src: `/frames/${file}`,
			index: String(index + 1).padStart(2, "0"),
			timecode,
			file,
		};
	});
}

export function getGallery() {
	const files = fs
		.readdirSync(GALLERY_DIR)
		.filter((f) => /\.webp$/.test(f));
	files.sort();

	return files.map((file, index) => {
		const { timecode } = parse(file);
		return {
			src: `/gallery/${file}`,
			index: String(index + 1).padStart(2, "0"),
			timecode,
			file,
		};
	});
}
