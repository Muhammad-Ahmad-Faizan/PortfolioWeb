# Images to add

Save each image at the exact path below (inside the `public` folder).
Until a file exists, the site shows a clean placeholder — when you run `npm run dev`
the placeholder also prints the file name it is waiting for.

Tips
- Use **.webp** (convert at https://squoosh.app — quality ~80). Keep each file under ~300 KB.
- Project covers: **1600 × 900 px** (16:9) — a clean screenshot of the main screen.
- Confidential client projects: replace names/logos/phones/domains with fake text or cover them with SOLID boxes before saving. Do not rely on blur — it can be reversed, and the site no longer adds any blur.

## Project covers — `public/projects/covers/`

Done: Revenue OS, Clinic Voice Agent, Root-Cause Agent, Guidance Engine, Shopify Automation and
AI Lead Qualification use workflow-diagram covers; the Financial Model uses its dashboard (logo
covered); FastAPI Backend Maintenance has its own cover; the UAE consultancy and tyre store covers and galleries are done (identity removed). Saving a real screenshot over any of these
file names replaces it. Projects with existing screenshots or video use them automatically.

All project images are in place.

## Certificates — `public/certifications/`

Done: certificate images were created from the PDFs in `D:/certificate`, and Credly/Kaggle badges
load directly from their sites. Optional:

| File | What it is |
|---|---|
| `hackerrank-orchestrate-2026.webp` | Hackathon certificate or badge (then add `image` to that entry) |

To add more certificates, add an entry in `src/content/certifications.ts`.
