import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import AudiRs6Content from "@/components/portfolio/AudiRs6Content";
import { isOriginalPhoto } from "@/lib/portfolioMedia";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Audi RS6 — Premium Vehicle Presentation",
  description:
    "A premium vehicle presentation for the Audi RS6 combining professional automotive photography and natural image enhancement.",
  path: "/portfolio/audi-rs6",
  image: "/portfolio/rs6/hero.png",
  keywords: ["luxury car photography", "automotive photography", "vehicle advertising"],
});

const FOLDER = "rs6";
const HERO_FILE = "hero.png";
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm"];

export default function AudiRs6Page() {
  const dir = path.join(process.cwd(), "public", "portfolio", FOLDER);
  const files = fs.readdirSync(dir);

  const afterImages = files
    .filter((file) => file.toLowerCase().endsWith(".png") && file !== HERO_FILE && !isOriginalPhoto(file))
    .sort()
    .map((file, i) => ({
      src: `/portfolio/${FOLDER}/${file}`,
      alt: `Audi RS6 — enhanced automotive photograph ${i + 1}`,
    }));

  const videoFile = files.find((file) =>
    VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );
  const videoSrc = videoFile ? `/portfolio/${FOLDER}/${videoFile}` : null;

  return <AudiRs6Content afterImages={afterImages} videoSrc={videoSrc} />;
}
