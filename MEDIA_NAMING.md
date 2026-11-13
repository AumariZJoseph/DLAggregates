# Media naming and storage

Place website images in `Content/images/` and videos in `Content/videos/`. Keep `logo.jpg` at the repository root because the site uses it for the brand lockup and favicon.

## Naming files

- Use lowercase letters, numbers, and hyphens. Keep the extension appropriate to the file format. Use `.jpg` for JPEG files, `.webp` for WebP images, and `.mp4` for MP4 videos.
- Start with the project or subject, then describe the image or video. For example, `buckeye-single-drum-roller.jpg`, `haulage-tracked-equipment-on-lowboy.jpg`, and `lacroix-chabeaux-road-repairs.mp4`.
- Use a two-digit sequence for images from the same project when the individual shots need a consistent order. For example, `queenslane-demolition-01.jpg`. Add a subject after the number when it helps identify the shot, as in `queenslane-demolition-08-interior-assessment.jpg`.
- Use `-poster` for a still shown before video playback and `-720w` for a responsive image variant that is 720 pixels wide. Keep each variant alongside its full-size image.
- Use the same file when multiple pages show the same photo. Update every reference when renaming a file, including CSS backgrounds, responsive image sources, video posters and fallback links, and social preview metadata.

## Keeping original media locally

The legacy `Images/` and `NewContent/` folders hold local source and unused media. Git ignores both folders and the unused `equiprent.jpg` at the root. To publish an asset from the archive, put it in the appropriate `Content/` folder with a descriptive name and link to it from the page.

The coming-soon background is the site's existing [Unsplash photo](https://images.unsplash.com/photo-1751054619908-65d27a503ce8?auto=format&fit=crop&w=1400&q=82), saved locally as `coming-soon-construction-background.jpg`.
