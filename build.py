#!/usr/bin/env python3
"""Regenerate the Research section in index.html from publications.json."""

import json
from pathlib import Path

PUBLICATION_IMAGE_SIZE = 160
START = "<!-- PUBLICATIONS START -->"
END = "<!-- PUBLICATIONS END -->"


def load_publications(path: Path) -> list:
    return json.loads(path.read_text())


def parse_crop(crop):
    if isinstance(crop, str):
        parts = crop.strip().split()
        return {
            "top": parts[0] if len(parts) > 0 else 0,
            "right": parts[1] if len(parts) > 1 else 0,
            "bottom": parts[2] if len(parts) > 2 else 0,
            "left": parts[3] if len(parts) > 3 else 0,
        }
    return crop


def crop_to_px(value):
    if value in (None, 0, "0"):
        return 0
    if isinstance(value, (int, float)):
        return float(value)
    try:
        return float(value)
    except (TypeError, ValueError):
        return 0


def get_viewport_style(crop, zoom, img_size):
    if not crop and not zoom:
        return ""

    top = right = bottom = left = 0
    if crop:
        c = parse_crop(crop)
        top = crop_to_px(c.get("top"))
        right = crop_to_px(c.get("right"))
        bottom = crop_to_px(c.get("bottom"))
        left = crop_to_px(c.get("left"))

    vis_w = max(1, img_size - left - right)
    vis_h = max(1, img_size - top - bottom)
    has_crop = any((top, right, bottom, left))
    fill_scale = max(img_size / vis_w, img_size / vis_h) if has_crop else 1
    scale = fill_scale * (zoom or 1)

    style = ";".join([
        f"--crop-top-ratio:{top / img_size}",
        f"--crop-right-ratio:{right / img_size}",
        f"--crop-bottom-ratio:{bottom / img_size}",
        f"--crop-left-ratio:{left / img_size}",
        f"--shift-x-ratio:{(right - left) / 2 / img_size}",
        f"--shift-y-ratio:{(bottom - top) / 2 / img_size}",
        f"--scale:{scale}",
    ])
    return f' style="{style}"'


def render_publications_html(publications: list) -> str:
    rows = []
    for paper in publications:
        links_html = " / ".join(
            f'<a href="{link["url"]}">{link["label"]}</a>' for link in paper.get("links", [])
        )
        award_html = f' &nbsp; {paper["award"]}' if paper.get("award") else ""
        img_size = paper.get("imgSize", PUBLICATION_IMAGE_SIZE)
        container_style = f' style="--pub-img-size:{img_size}px"'
        base_crop_style = get_viewport_style(paper.get("imgCrop"), paper.get("imgZoom"), img_size)
        hover_crop_style = get_viewport_style(
            paper.get("imgCropHover"), paper.get("imgZoomHover"), img_size
        )

        links_line = f"              {links_html}\n" if links_html else ""
        rows.append(
            "          <tr>\n"
            '            <td style="padding:20px;width:25%;vertical-align:middle">\n'
            f'              <div class="one"{container_style}>\n'
            f'                <div class="two"><div class="pub-img-viewport"{hover_crop_style}>'
            f'<div class="pub-img-stage"><img class="pub-img pub-img-hover" src="{paper["imgHover"]}" '
            f'alt="" width="{img_size}" height="{img_size}" loading="lazy" decoding="async"></div></div></div>\n'
            f'                <div class="pub-img-viewport pub-img-viewport-base"{base_crop_style}>'
            f'<div class="pub-img-stage"><img class="pub-img" src="{paper["img"]}" alt="" '
            f'width="{img_size}" height="{img_size}" loading="lazy" decoding="async"></div></div>\n'
            "              </div>\n"
            "            </td>\n"
            '            <td style="padding:20px;width:75%;vertical-align:middle">\n'
            f'              <a href="{paper["titleLink"]}"><papertitle>{paper["title"]}</papertitle></a><br>\n'
            f'              {paper["authors"]}<br>\n'
            f'              <em>{paper["venue"]}</em>, {paper["year"]}{award_html}<br>\n'
            f"{links_line}"
            "            </td>\n"
            "          </tr>"
        )
    return "\n".join(rows)


def main():
    root = Path(__file__).resolve().parent
    publications = load_publications(root / "publications.json")
    html = render_publications_html(publications)

    index_path = root / "index.html"
    index = index_path.read_text()
    start_idx = index.index(START)
    end_idx = index.index(END)
    updated = (
        index[: start_idx + len(START)]
        + "\n"
        + html
        + "\n        "
        + index[end_idx:]
    )
    index_path.write_text(updated)
    print(f"Updated index.html with {len(publications)} publications.")


if __name__ == "__main__":
    main()
