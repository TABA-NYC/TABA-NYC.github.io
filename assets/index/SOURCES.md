# Index frames

One 16:9 frame per case study, 1600x900 webp, cropped from the case study's own assets.
Regenerate with ImageMagick; keep the ratio and the "real product screen, no slide
furniture" rule. Deck slides with baked-in titles or coloured backgrounds are not
acceptable here, they read as a presentation rather than as work.

| Frame | Source | Crop |
|---|---|---|
| leasing-crm | leasing-crm/after-list-view.png | NorthWest, 16:9 |
| ai-assistants | ai-assistants/builder-overview.png | 1180x664+0+0, anchored left to hold back the stock illustration |
| renewals | renewals/renewal-dashboard.png | North, 1440x810 |
| intercom | intercom/after-home.png | Center, 16:9 |
| access-management | access-management/screen-3.webp, groups-list region | 619x348+80+40, the shipped list |
| resident-app | resident-app/deck-17-before-after.png | 960x890+182+176, phones lifted onto a white 16:9 ground |
| filters | filters/pill-edit.png | North, 1440x810 |

## Parked 2026-09-16
The two leadership case studies, "Building the design function" (ButterflyMX) and
"Consolidating three design systems" (Darwin), were removed at Tyler's request. They did
not sit right in the hierarchy. Not deleted: everything is intact at commit 346a6a8, and
the full copy is in the project doc `claude/Squarespace_CaseStudy_Copy_Leadership_Sep16.md`.
To restore: `git checkout 346a6a8 -- work/design-function.html work/design-system-consolidation.html assets/design-function assets/design-system-consolidation assets/index/design-function.webp assets/index/design-system-consolidation.webp`

## Corrected 2026-09-16
The filters tile was `findfilter-menu.png`, which sits under "Attempt one" in the case
study: the pattern that got overruled. Showing a rejected direction as the face of the
case was wrong. Replaced with `pill-edit.png`, the shipped Bills 2.0 screen with an
applied pill opened in place, chosen by Tyler.

Rule this establishes: an index tile must come from a shipped or after state. Check the
figure's section in the case study before using it. `access-management` still uses
`screen-1.webp`, which is "Direction A" from the A/B test and was NOT the chosen
direction. That one is still open pending Tyler's call between `screen-2` (the chosen
direction, one clean screen) and `screen-3` (captioned "the shipped experience", but a
three-screen composite on a coloured ground).

## Figma access, tested 2026-09-16
The Figma MCP works and is authenticated as Tyler. Node reads and renders succeed, verified
against `RooatE0eatuWYx9jFxAMX5` node `1363:431` ("Permission Groups page - final", 1920x779,
clean).

**But assets cannot be pulled.** Figma serves exports as short-lived URLs on www.figma.com, and
that host is blocked by the egress proxy in BOTH the cloud container and the device VM
(connect_rejected / http_code 000). `download_assets` and the `image_url` from `get_screenshot`
are therefore unusable. `enableBase64Response` returns the image for viewing only; at 2x a real
asset would cost six figures of tokens to pass through as text.

So the working split is: Claude can open any file, find frames, read their structure and check
them visually, and name exactly what to export. Tyler does the export. Do not spend another
session trying to make the download work.

Also noted: page enumeration is unreliable on these files. `get_metadata` with no nodeId
returned only the Cover page for both files, even though `1363:431` exists and renders. Node
ids from a URL work; browsing from the top does not. Ask for node-specific links.

## Annotation cleanup 2026-09-16
`after-comms.png` carried a 1px magenta guide line down column 633, and
`after-detail-overview.png` carried one across row 198. Both were Figma annotation
layers left in the export. Removed per-pixel: only pixels measurably more magenta than
their perpendicular neighbours were replaced, interpolated from clean pixels either
side, so no real content was touched. A first attempt that replaced whole rows smeared
the tab labels and the sidebar headings; do not do that.

Still not fixed, and not fixable without the Figma source:
- `after-comms.png` shows the compose sheet over a dimmed activity log, and the text
  under that scrim was rendered at low opacity in the mock. It reads as a blurry
  screenshot rather than an intentional modal state.
- `activity-feed-expanded.png` is 803x1284, the smallest export on the page.
- The Darwin source file for these screens is not in this repo.

## Wants a Figma re-export
Three frames are the best available crop of a flattened deck slide rather than a clean
export, and should be replaced from source when the files are to hand:
- **resident-app** still carries small baked-in captions and crops the first phone.
- **access-management** is a 1440x900 webp, the lowest-resolution source in the set.
- **ai-assistants** has a stock illustration at the right edge that no crop fully clears.
