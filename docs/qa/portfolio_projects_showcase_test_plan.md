# Test Plan

## 1. Feature Overview

Feature: portfolio homepage projects showcase revamp for branch `feature/portfolio_projects_showcase`.

Goal: validate that the static homepage is intentionally redesigned to showcase exactly three featured projects — CashFlow Tracker, ReliabilityKit, and TestOrbit — with stronger hierarchy, honest maturity framing, recruiter-friendly clarity, responsive usability, accessible interaction patterns, and valid proof-oriented links.

Current baseline observed during planning:
- existing homepage still emphasizes reliability-first positioning
- hero and project copy currently imply two flagship projects
- projects section currently contains ReliabilityKit and TestOrbit only
- current static architecture is `index.html`, `style.css`, and `script.js`

This plan is implementation-ready for a later QA execution pass and does not represent final validation.

## 2. Acceptance Criteria Mapping

| ID | Acceptance criterion / requirement | Planned verification |
|---|---|---|
| AC-01 | Homepage shows exactly three featured projects | Verify projects section contains only CashFlow Tracker, ReliabilityKit, TestOrbit; confirm no extra featured cards or duplicate project entries |
| AC-02 | Homepage no longer implies only two flagship projects | Review hero, intro, supporting sections, and metadata for legacy “two flagship” messaging |
| AC-03 | Each project includes required content structure | Confirm each card includes title, summary, status/type label, problem framing, solution framing, highlight bullets, and proof links |
| AC-04 | CashFlow Tracker is framed as offline-first mobile app | Verify copy references local/on-device/offline-first budgeting and does not imply backend dependency/cloud sync |
| AC-05 | ReliabilityKit is framed as active MVP with dashboard proof | Verify MVP language, local-first execution, structured diagnostics/trend analysis, live dashboard proof, and honest scaffolded S3 wording |
| AC-06 | TestOrbit is framed as one technical POC spanning frontend and backend | Verify single card/entry only, Technical POC status, and unified frontend/backend product framing |
| AC-07 | TestOrbit includes both frontend and backend proof links | Confirm explicit labeled links for frontend repo and backend repo; validate destinations |
| AC-08 | Copy is understandable without repo inspection | Review content for recruiter readability and absence of overly internal jargon |
| AC-09 | No unsupported claims about commercial launch/adoption/scale | Review copy for unverifiable product, scale, or business-impact claims |
| AC-10 | Consistent information structure across all three projects | Compare card ordering, headings, labels, bullet sections, and CTA pattern |
| AC-11 | Clear path from project review to contact actions | Verify visible CTA flow from hero/projects to contact section and/or contact buttons |
| AC-12 | Responsive design works without horizontal scrolling | Validate desktop, tablet, and mobile layouts; confirm projects remain readable and no horizontal overflow occurs |
| AC-13 | Link labels are explicit | Verify proof links clearly indicate destination type (repo, dashboard, frontend, backend, case study, etc.) |
| AC-14 | Status labels visible without interaction | Confirm status/type chip or label is visible in default card state on all viewports |
| AC-15 | Homepage reflects broader portfolio breadth | Validate hero/about/supporting sections represent product/mobile UX + reliability + cloud-native orchestration, not reliability-only framing |

## 3. Test Scenarios

### 3.1 Functional homepage revamp checks

1. Verify sticky header, hero, featured projects, supporting sections, engagement/contact flow render successfully.
2. Verify featured projects section appears high in the page hierarchy, directly supporting post-hero scanning.
3. Verify there are exactly three featured project entries.
4. Verify each project card uses the same repeatable content structure and visual pattern.
5. Verify CTA from hero to featured projects works as expected.
6. Verify contact CTA remains available after project review.
7. Verify mobile navigation toggle still opens/closes, updates `aria-expanded`, and closes via outside click / Escape.
8. Verify in-page anchor links continue to scroll to correct sections.
9. Verify nav active-state behavior does not regress after section order/content changes.

### 3.2 Content accuracy checks for featured projects

#### CashFlow Tracker
- Title is exactly CashFlow Tracker.
- Summary positions it as an offline-first personal finance mobile app.
- Problem framing reflects budgeting/cash-visibility friction.
- Solution framing references local/on-device workflow.
- Highlights cover onboarding, dashboard, recurring flows, savings tracking, transaction history, and account management.
- Status wording is honest and does not imply launched cloud-synced finance platform.
- Proof links prioritize repository and only include additional public-safe proof if valid.

#### ReliabilityKit
- Title is exactly ReliabilityKit.
- Status label indicates MVP or equivalent explicit maturity label.
- Summary references Python, Playwright, pytest reliability toolkit behavior.
- Problem framing addresses fragmented or hard-to-diagnose failures.
- Solution framing references structured run records/artifacts, failure classification, reliability scoring, and dashboard trends.
- Copy states local-first execution with AWS-hosted dashboard proof.
- Copy honestly describes S3 backend as scaffolded/staged if mentioned.
- Proof links include repo and live dashboard; case study optional if valid.

#### TestOrbit
- Title is exactly TestOrbit.
- Only one showcase entry exists for TestOrbit.
- Status label indicates Technical POC or equivalent.
- Summary frames it as cloud-native test orchestration.
- Problem framing addresses orchestration/control-plane complexity.
- Solution framing references suites, runs, scheduling, credits, webhook/manual execution, frontend dashboard, and backend orchestration.
- Copy clearly communicates one product spanning frontend + backend repos.
- Proof links include frontend repo and backend repo; live/demo/case study links validated if present.
- Copy does not imply launched SaaS product.

### 3.3 Responsive behavior checks

Test viewport set:
- Desktop: 1440x900 and 1024x768
- Tablet: 820x1180 and 768x1024
- Mobile: 390x844 and 360x800

Checks:
- no horizontal scrolling on body or projects section
- projects present as 3-up or balanced grid on desktop
- projects wrap cleanly on tablet
- projects stack to single-column on mobile
- proof links wrap without clipping/overlap
- touch targets remain usable on mobile
- hero CTA row and nav do not overlap or truncate
- text remains readable without zoom at standard viewport scale

### 3.4 Accessibility checks

1. Validate semantic heading order and landmark usage.
2. Verify all interactive controls are keyboard reachable.
3. Verify visible focus styles on nav links, hero CTAs, project proof links, and contact links.
4. Verify no project information is hidden behind hover-only interaction.
5. Verify status chips are readable text, not color-only meaning.
6. Validate link text is descriptive and distinguishable out of context.
7. Check contrast for body text, chips, buttons, and links against dark theme surfaces.
8. Verify mobile nav toggle remains accessible and `aria-expanded` updates correctly.
9. Verify images, if introduced, have meaningful alt text or are decorative only.
10. Run automated accessibility audit in future execution pass (Lighthouse and/or axe).

### 3.5 Link validation expectations

For each proof or CTA link:
- destination label must match actual target type
- internal anchors must resolve to existing sections
- case-study links must resolve successfully
- external links must not be private/broken/placeholder
- external links opening in new tab should use safe rel attributes
- no generic labels like “Learn More” for proof assets unless accessible name is explicit

Planned proof-link coverage:
- CashFlow Tracker repo link(s)
- ReliabilityKit repo link
- ReliabilityKit live dashboard link
- ReliabilityKit case study link if included
- TestOrbit live frontend link if included
- TestOrbit frontend repo link
- TestOrbit backend repo link
- TestOrbit case study link if included
- contact and mailto links

### 3.6 Regression areas to verify

- sticky header behavior
- mobile nav menu open/close behavior
- smooth-scroll anchor navigation
- active section highlighting in nav
- hero CTA styling and interaction
- contact section layout and mailto CTAs
- footer year rendering via `script.js`
- case-study internal links from homepage
- dark theme readability after visual hierarchy changes

## 4. Edge Cases

1. CashFlow Tracker may have fewer public proof assets than the other two projects; card must still feel complete.
2. TestOrbit frontend/backend maturity may differ; homepage must present one cohesive project with honest status.
3. Uneven link counts across cards must not create broken alignment or visual imbalance.
4. Long explicit proof labels must wrap without overflow at tablet/mobile widths.
5. Added visuals must not create missing asset issues, poor alt text, or layout shift problems.
6. Copy simplification for recruiters must not remove critical technical credibility.
7. Supporting sections must not reintroduce reliability-only framing after projects section is updated.
8. Meta description/title should not materially contradict the broadened homepage narrative.

## 5. Test Types Covered

### Recommended for future execution
- **Static content review:** compare homepage copy against product/design/technical specs and public proof sources
- **Manual functional UI testing:** browser-based verification of layout, navigation, anchors, and links
- **Responsive testing:** browser devtools/device emulation across required viewport set
- **Accessibility testing:** keyboard-only pass plus automated Lighthouse/axe scan
- **Basic link validation:** manual click-through plus optional automated HTTP check for external URLs
- **Regression testing:** confirm existing static-site interactions remain intact

### Recommended automation targets for execution pass
- lightweight DOM/content assertions for exactly three featured projects and required labels
- Playwright smoke checks for nav, anchor CTAs, and visible proof links
- automated accessibility smoke audit on homepage
- simple link checker for internal paths and approved external proof URLs

### Execution notes for a static frontend site
- Serve locally with a static server before execution (for example: `python -m http.server` or equivalent)
- Primary execution browsers: Chrome/Chromium; spot-check Safari due to local macOS environment
- Because this is static content, evidence should rely on rendered DOM, visible copy, link targets, and viewport screenshots rather than backend/API logs
- External proof links may require network availability and should be classified separately if failures are environmental
- Content accuracy should be reviewed against the referenced source repos/docs before sign-off to prevent unsupported claims
