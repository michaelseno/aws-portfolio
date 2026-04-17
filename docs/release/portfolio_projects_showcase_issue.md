# GitHub Issue

## 1. Feature Name
Portfolio Projects Showcase

## 2. Problem Summary
The current homepage still reads as a reliability-first portfolio and implies two flagship projects, which undersells the intended breadth of the portfolio. The revamp needs to reposition the homepage around exactly three proof-backed projects — CashFlow Tracker, ReliabilityKit, and TestOrbit — while improving visual hierarchy, recruiter-friendly scanability, mobile usability, and honest maturity framing.

## 3. Linked Planning Documents
- Product Spec: `docs/product/portfolio_projects_showcase_product_spec.md`
- Technical Design: `docs/architecture/portfolio_projects_showcase_technical_design.md`
- UI/UX Spec: `docs/uiux/portfolio_projects_showcase_design_spec.md`
- QA Test Plan: `docs/qa/portfolio_projects_showcase_test_plan.md`

## 4. Scope Summary
- Overhaul the static homepage project showcase and related supporting hierarchy in `index.html`, `style.css`, and `script.js`
- Move featured work higher in the homepage flow so it becomes a primary decision-making section after the hero
- Present exactly three curated featured projects only: CashFlow Tracker, ReliabilityKit, and TestOrbit
- Use one repeatable project-card structure across all three entries
- Improve hero positioning so the portfolio reads as product-minded frontend/mobile + reliability + cloud-native systems, not reliability-only
- Preserve or improve the path from project review to contact/engagement actions
- Keep implementation realistic for the current static HTML/CSS/JS architecture

Out of scope:
- changes inside the source project repositories
- backend/CMS/analytics additions
- unrelated page rewrites beyond what is needed to support the homepage revamp
- new case-study builds or new product functionality in the showcased projects

## 5. Implementation Notes
- Base implementation on the existing static site architecture; do not migrate frameworks or introduce new backend dependencies
- Update all legacy copy that still implies only two flagship projects
- Recommended homepage order: sticky header, hero, featured projects, capability/approach summary, skills/core stack, engagement model, contact
- Featured Projects section must contain exactly three entries and treat TestOrbit as one project with frontend + backend proof links
- Use a consistent project-card structure in this order:
  1. project name
  2. status/type chip
  3. category/stack sublabel
  4. one-line summary
  5. problem framing
  6. solution framing
  7. 3 key highlights
  8. proof links row
- Status framing must remain explicit and honest:
  - CashFlow Tracker: offline-first mobile app / personal product framing
  - ReliabilityKit: MVP with local-first execution and hosted dashboard proof
  - TestOrbit: technical POC spanning frontend + backend repos
- Recommended project order for breadth narrative:
  1. CashFlow Tracker
  2. ReliabilityKit
  3. TestOrbit
- Proof-link expectations:
  - CashFlow Tracker: repo first
  - ReliabilityKit: repo, live dashboard, case study if valid
  - TestOrbit: frontend repo, backend repo, live frontend and/or case study if valid
- Keep copy concise, recruiter-readable, and evidence-aligned; avoid unsupported launch, adoption, scale, or business-impact claims
- If visuals are used, they must be copied into the portfolio repo as local assets and must not expose sensitive data

## 6. QA Section
- QA artifact available: `docs/qa/portfolio_projects_showcase_test_plan.md`
- Current QA state: planning complete; execution/sign-off pending
- Required validation areas:
  - exactly three featured projects rendered
  - no legacy two-flagship messaging remains
  - required content structure present on each project card
  - responsive behavior works on desktop, tablet, and mobile without horizontal scrolling
  - accessibility fundamentals remain intact (focus visibility, semantic structure, descriptive links, readable contrast)
  - proof links are explicit and valid

## 7. Risks / Open Questions
- CashFlow Tracker may have fewer public proof assets or fewer portfolio-ready visuals than the other projects
- Homepage claims may drift over time if source repos evolve and copy is not maintained
- External proof assets or live links may change or become unavailable
- Card density may become too verbose if required content is not tightly edited
- Open question: equal-weight presentation is currently preferred, but future direction may choose a primary featured project

## 8. Definition of Done
- Homepage presents exactly three featured projects: CashFlow Tracker, ReliabilityKit, and TestOrbit
- No homepage copy or UI implies only two flagship projects
- Each featured project includes title, explicit status/type label, concise summary, problem framing, solution framing, highlights, and proof links
- CashFlow Tracker is clearly framed as an offline-first personal finance mobile app without implying backend-dependent cloud sync
- ReliabilityKit is clearly framed as an active MVP with structured diagnostics, trend analysis, and honest hosted-dashboard/S3-status language
- TestOrbit is presented as one technical POC with both frontend and backend proof paths
- Featured projects section appears near the top of the homepage and supports quick scanning
- Layout is responsive across desktop, tablet, and mobile without horizontal scrolling
- Accessibility expectations from the design and QA documents are met
- Contact/engagement path remains clear after project review
- All included proof links are public, explicit, and valid at implementation time
