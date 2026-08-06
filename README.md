Source code for https://seoyoung1215.github.io/

## What to edit

| Section | File | Notes |
|---|---|---|
| Research / publications | `publications.json` | Run `python3 build.py` after editing, then commit both `publications.json` and `index.html`. Do not edit the Research rows in `index.html` by hand. |
| Intro, News, everything else | `index.html` | Edit directly. |

## Adding a publication

1. Edit `publications.json`
2. Run `python3 build.py`
3. Commit and push

Optional fields: `imgCrop`, `imgCropHover`, `imgZoom`, `imgZoomHover`, `imgSize`, `award`,
`video`, `videoPoster`

Set `video` to make a muted looping clip the resting thumbnail; `img` then becomes the still
shown on hover (or `imgHover`, if you want a third image). `videoPoster` is what shows before
the clip loads — defaults to `img`, but a frame grabbed from the clip itself avoids a visible
jump.

Clips get `preload="none"`, and the script in `index.html` only starts them once the row
scrolls near the viewport (and pauses them while hovered or scrolled away), so they cost
nothing on page load. Still downscale, drop audio, and allow progressive playback with
`+faststart`. 480px wide covers the 160px thumbnail with room to spare on retina; don't go
above CRF ~26, since the thumbnail is small enough that compression artifacts read as
blurriness:

```bash
ffmpeg -i teaser.mp4 -an -vf "scale=480:-2,fps=24" -c:v libx264 -profile:v high \
  -pix_fmt yuv420p -crf 26 -g 48 -preset slow -movflags +faststart images/foo_teaser.mp4
ffmpeg -i images/foo_teaser.mp4 -frames:v 1 -q:v 2 images/foo_teaser_poster.jpg
```

Use `.jpg` paths in `publications.json` when possible (~480px wide is enough for the 160px thumbnails). If you only have a PNG:

```bash
sips -Z 480 images/foo.png --out images/foo.jpg --setProperty format jpeg --setProperty formatOptions 85
```

Source code credit to [Dr. Jon Barron](https://jonbarron.info/)
