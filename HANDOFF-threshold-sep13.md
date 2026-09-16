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

## The leadership case studies (unblocked Sept 16, shipped in 01a8d80)
Tyler answered the eight blocking questions on Sept 16. Both case studies are written and live on
this branch. Every claim traces to those answers or to a resume line.

Sensitive handling applied, per the standing rule in `claude/Mark43_CaseStudy_Night_Status.md`:
the former manager is not named, the reason for their departure is not mentioned anywhere, and
the rivalry is told in Tyler's own approved phrasing. He also said he was RIF'd himself; that is
not on the site.

Numbers established by his answers, now usable elsewhere:
- ButterflyMX: he managed 3. Darwin: 2, and 1 by the time the title arrived. That resolves the
  "2 vs 3 designers" conflict two SecurityScorecard interviewers recorded on Aug 27. Both are
  true, different companies.
- Darwin design system: 12 to 25 percent on a shared system on arrival, about 70 percent on
  leaving. This is the only number in the whole record that measures the design function rather
  than a product.
- Darwin ran 9 to 12 rounds of cuts. The design team went 5 to 2 inside six months of 2023.

## Still open
- **Nine case studies is over the benchmark** (3 to 6 is the band; he had 7). Retiring two is a
  deletion decision and therefore his. Access management and renewals are the weakest candidates
  on outcome specificity, not on quality.
- **Tiering** and the **Art page cut** are still proposed, not done, for the same reason.
- **The two-site question.** On Sept 14 a Monarch case study was built on the Squarespace site at
  tabanyc.com (still disabled). That is the opposite direction from the audit's recommendation to
  redirect that domain here. Which site is the keeper needs deciding before more copy is written
  twice.
- **No photograph on the About page.**
