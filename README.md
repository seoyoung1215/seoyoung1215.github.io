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

Optional fields: `imgCrop`, `imgCropHover`, `imgZoom`, `imgZoomHover`, `imgSize`, `award`

Use `.jpg` paths in `publications.json` when possible (~480px wide is enough for the 160px thumbnails). If you only have a PNG:

```bash
sips -Z 480 images/foo.png --out images/foo.jpg --setProperty format jpeg --setProperty formatOptions 85
```

Source code credit to [Dr. Jon Barron](https://jonbarron.info/)
