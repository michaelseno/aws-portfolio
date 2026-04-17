# Implementation Plan

## 1. Feature Overview
Refresh the static homepage so it presents exactly three featured projects — CashFlow Tracker, ReliabilityKit, and TestOrbit — with stronger hierarchy, broader portfolio positioning, and explicit proof links.

## 2. Technical Scope
- Update `index.html` hero, navigation copy, section order, featured projects content, and supporting narrative copy.
- Update `style.css` to support the new hero snapshot panel, equal-weight project cards, responsive three-column project grid, and stronger CTA/focus states.
- Keep `script.js` lightweight while aligning active-nav behavior with the revised homepage order.
- Do not introduce a framework, backend integration, or runtime data fetching.

## 3. UI/UX Inputs
- Primary source: `docs/architecture/portfolio_projects_showcase_technical_design.md`
- Supporting UI/UX source: `docs/uiux/portfolio_projects_showcase_design_spec.md`
- Content constraints cross-checked against `docs/product/portfolio_projects_showcase_product_spec.md` and the referenced project READMEs.

## 4. Files Expected to Change
- `index.html`
- `style.css`
- `script.js`
- `case-studies/testorbit-technical-poc.html`
- `docs/frontend/portfolio_projects_showcase_implementation_plan.md`
- `docs/frontend/portfolio_projects_showcase_implementation_report.md`

## 5. Dependencies / Constraints
- Static site architecture must remain `index.html` + `style.css` + `script.js`.
- Homepage must feature exactly three projects and keep TestOrbit as one combined project.
- Copy must stay aligned with public repo evidence and avoid unsupported launch/adoption claims.
- External links must remain explicit and safe for new-tab behavior.

## 6. Assumptions
- No new local screenshots are required for this phase; content-first cards are acceptable.
- Existing ReliabilityKit and TestOrbit case-study pages remain valid proof paths.
- CashFlow Tracker will be represented through repo-backed product copy only for now.

## 7. Validation Plan
- Run a static validation script to confirm required sections, anchors, and exactly three featured project cards exist.
- Run `node --check script.js` for JavaScript syntax validation.
- Run `git diff --check` to catch patch formatting issues.
