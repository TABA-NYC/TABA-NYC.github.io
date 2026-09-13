# Branch: cowork/threshold-sep13

Worktree: `Downloads/Portfolio Files/site-cowork-threshold`. Branched from `origin/main` at bf9650a.
Nothing was edited in the main checkout (it is still on `cowork/cache-bust-sep13`, clean, one
unpushed commit c159145).

**Not pushed.** The bridge VM has no git credentials. From your own Terminal:

    cd ~/Downloads/Portfolio\ Files/site-cowork-threshold
    git push origin HEAD:refs/heads/cowork/threshold-sep13

Then open a PR into `main`. This is structural (index layout, nav, shared CSS), so under R8 the
merge is yours, and promoting to the live branch is yours under L2.

## What changed

**d822646 — index frames and the phone nav**
- `assets/index/*.webp`: seven 1600x900 frames, one per case study, 408K for the set. Crop
  recipes and sources in `assets/index/SOURCES.md`. All eager, so the page is complete at rest.
- `styles.css`: `.index` gains a 380px media column; row text moves into `.rowtext`. Media
  stacks above text below 820px. Hover raises opacity and scales the frame 2.5%, both dropped
  under `prefers-reduced-motion`.
- `styles.css`: nav links moved from `margin-left` to flex + `gap`, tighter tracking below 560px.

**86ec671 — order, stat bar, About lede**
- Filters promoted from 07 to 03; prev/next rewired across all seven case studies.
- Stat bar: "5 / 0→1 products built" became "0→3 / design team built and led, first hire at
  ButterflyMX". Deliberate trade, easy to revert.
- About lede replaced. The old one was the last sentence carried over verbatim from Squarespace.

## Verified
Rendered at 1280, 1100 and 390 in headless Chromium. No horizontal overflow at any width. All
four nav links share one baseline at 390 (they previously wrapped, orphaning "Resume"). Seven
frames decode. Desktop rows uniform at 280px. About page clean at 1280.

## Correction to the record
`claude/DesignSystem_Phase0_Audit_Findings.md` is **not** an audit Tyler ran at Darwin. It is an
August 2026 audit of his own archived personal Figma files, run by Claude agents for the CLAY
system. Its findings about naming debt, missing semantic tokens and thin Bricks coverage describe
those archived files as they sit today. Citing them as "what the Darwin audit found" would be a
fabrication. Flagged here because a leadership case study about the UI consolidation is the
obvious place that error would get made.

## Deliberately not done
Three audit items involve deleting or hiding work Tyler chose, and the 2026-09-11 mistake-log
entry says that is never a session's call:
- **Tiering the case studies** (1,100 to 1,600 words each against a 500 to 600 benchmark). Doing
  it means cutting his prose or folding it behind a control. Proposed, not executed.
- **Cutting the Art page** from 52 images to about 12. Same rule.
- **The two leadership case studies.** Blocked on fact gaps, see below.

## Blocked: the leadership case studies
Two fact inventories were built from the project docs. The stories are well sourced; the
*function* evidence a Head of Design case study needs mostly is not. Open questions are in the
project doc `claude/Leadership_CaseStudy_Gaps_Sep13.md`. Nothing should be drafted past those
points: the repo rule is that case study copy comes from the deck or Tyler's own words.
