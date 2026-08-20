import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Porsche911Content from "@/components/portfolio/Porsche911Content";
import { isOriginalPhoto } from "@/lib/portfolioMedia";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Porsche 911 — Premium Vehicle Presentation",
  description:
    "A premium vehicle presentation for the Porsche 911 combining professional automotive photography and natural image enhancement.",
  path: "/portfolio/porsche-911",
  keywords: ["luxury car photography", "automotive photography", "vehicle advertising"],
});

const FOLDER = "porsche";
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm"];

export default function Porsche911Page() {
  const dir = path.join(process.cwd(), "public", "portfolio", FOLDER);
  const files = fs.readdirSync(dir);

  const beforeImages = files
    .filter((file) => isOriginalPhoto(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? "0", 10);
      const numB = parseInt(b.match(/\d+/)?.[0] ?? "0", 10);
      return numA - numB;
    })
    .map((file) => ({
      src: `/portfolio/${FOLDER}/${file}`,
    }));

  const afterImages = files
    .filter((file) => file.toLowerCase().endsWith(".png") && !isOriginalPhoto(file))
    .sort()
    .map((file) => ({
      src: `/portfolio/${FOLDER}/${file}`,
    }));

  const videoFile = files.find((file) =>
    VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );
  const videoSrc = videoFile ? `/portfolio/${FOLDER}/${videoFile}` : null;

  return <Porsche911Content beforeImages={beforeImages} afterImages={afterImages} videoSrc={videoSrc} />;
}
