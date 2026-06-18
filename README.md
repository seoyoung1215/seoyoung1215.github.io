This is the source code to Seoyoung Lee's public academic website: https://seoyoung1215.github.io/.

## Adding a publication

1. Edit `publications.js` (add a paper object to the array)
2. Run `node build.js` to update `index.html`
3. Commit and push

For new images:
```bash
sips -Z 480 images/foo.png --out images/foo.jpg --setProperty format jpeg --setProperty formatOptions 85
```

Source code credit to [Dr. Jon Barron](https://jonbarron.info/)
