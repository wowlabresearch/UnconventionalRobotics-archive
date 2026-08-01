# Adding a project

You no longer need to touch `app.js` or hand-write JS objects. Add one markdown file per project under `projects/`, then run one command.

## 1. Add media files

Drop images/thumbnails/PDFs under `assets/<year>/...` (following the existing folder pattern, e.g. `assets/2025/thumbnails/`, `assets/2025/fig/`, `assets/2025/pdf/`).

## 2. Create `projects/<filename>.md`

Filename controls sort order in the grid — either number them (`01-...`, `02-...`) or name them `year-team.md` (`2025-NCT.md`) so they sort naturally. The `id` field is auto-assigned by the build script; you don't set it.

```markdown
---
year: "2025"
team: "TEAM_NAME"
members: "Member One, Member Two, Member Three"
title: "Project Title"
desc: "One or two sentence project summary."
keywords: ["Keyword1", "Keyword2"]
thumb: "./assets/2025/thumbnails/TEAM-Thumbnail.gif"

# Optional — pick ONE, or omit all three for a text-only project:
youtubeEmbed: "https://www.youtube.com/embed/XXXXXXXX"
# videoUrl: "./assets/2025/video/TEAM-demo.mp4"
# gallery:
#   - "./assets/2025/fig/TEAM-01.png"
#   - "./assets/2025/fig/TEAM-02.png"

# Optional — report/slide links shown at the bottom of the detail view:
materials:
  - type: "report"
    label: "📄 Publication (PDF)"
    url: "./assets/2025/pdf/TEAM-paper.pdf"
---

### Project Overview
Regular markdown. `###` becomes a section heading, matching the site's styling.

![Alt text](./assets/2025/fig/TEAM-01.png)

Plain `![alt](path)` images are automatically centered and sized — no extra HTML needed.
If you need two images side by side or other custom layout, raw HTML also works:

<div style="text-align: center; margin: 20px 0;">
<img src="./assets/2025/fig/TEAM-02.png" width="45%">
<img src="./assets/2025/fig/TEAM-03.png" width="45%">
</div>

- Bullet points work as usual.
- **Bold** and *italics* work as usual.
```

## 3. Build

```
npm install   # first time only
npm run build
```

This regenerates `projects-data.js` from everything in `projects/`. Open `index.html` locally to preview, then commit and push both the new `projects/*.md` file and the regenerated `projects-data.js`.

**Do not hand-edit `projects-data.js`** — it's overwritten every time you run `npm run build`.
