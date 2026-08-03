import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import BmwM5Content from "@/components/portfolio/BmwM5Content";

export const metadata: Metadata = {
  title: "BMW M5 — Premium Vehicle Presentation",
  description:
    "A premium vehicle presentation for the BMW M5 combining professional automotive photography and natural image enhancement.",
  alternates: { canonical: "/portfolio/bmw-m5" },
};

const FOLDER = "bmw-m5";
const BEFORE_PATTERN = /^pred\d+\.png$/i;
const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm"];

export default function BmwM5Page() {
  const dir = path.join(process.cwd(), "public", "portfolio", FOLDER);
  const files = fs.readdirSync(dir);

  const beforeImages = files
    .filter((file) => BEFORE_PATTERN.test(file))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0], 10);
      const numB = parseInt(b.match(/\d+/)![0], 10);
      return numA - numB;
    })
    .map((file) => ({
      src: `/portfolio/${FOLDER}/${file}`,
    }));

  const afterImages = files
    .filter((file) => file.toLowerCase().endsWith(".png") && !BEFORE_PATTERN.test(file))
    .sort()
    .map((file) => ({
      src: `/portfolio/${FOLDER}/${file}`,
    }));

  const videoFile = files.find((file) =>
    VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
  );
  const videoSrc = videoFile ? `/portfolio/${FOLDER}/${videoFile}` : null;

  return <BmwM5Content beforeImages={beforeImages} afterImages={afterImages} videoSrc={videoSrc} />;
}
