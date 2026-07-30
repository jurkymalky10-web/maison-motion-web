import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import AudiRs6Content from "@/components/portfolio/AudiRs6Content";

export const metadata: Metadata = {
  title: "Audi RS6 — Premium Vehicle Presentation",
  description:
    "A premium vehicle presentation for the Audi RS6 combining professional automotive photography and natural image enhancement.",
  alternates: { canonical: "/portfolio/audi-rs6" },
};

const FOLDER = "rs6";
const EXCLUDED = new Set(["hero.png", "pred.png", "pred2.png", "pred3.png"]);
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm"];

export default function AudiRs6Page() {
  const dir = path.join(process.cwd(), "public", "portfolio", FOLDER);
  const files = fs.readdirSync(dir);

  const afterImages = files
    .filter((file) => file.toLowerCase().endsWith(".png") && !EXCLUDED.has(file))
    .sort()
    .map((file) => ({
      src: `/portfolio/${FOLDER}/${file}`,
      alt: "Audi RS6 — enhanced detail",
    }));

  const videoFile = files.find((file) =>
    VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );
  const videoSrc = videoFile ? `/portfolio/${FOLDER}/${videoFile}` : null;

  return <AudiRs6Content afterImages={afterImages} videoSrc={videoSrc} />;
}
