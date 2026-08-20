/**
 * Original/unedited source photos are named with a "pred" prefix
 * (e.g. pred.png, pred1.png, pred2.png) across every portfolio project.
 * They belong exclusively to the Before/After comparison and must never
 * appear in the "Full Presentation" gallery of edited images.
 */
const ORIGINAL_PHOTO_PATTERN = /^pred/i;

export function isOriginalPhoto(src: string): boolean {
  const filename = src.split("/").pop() ?? src;
  return ORIGINAL_PHOTO_PATTERN.test(filename);
}
