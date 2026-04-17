# Portfolio Projects Showcase Technical Design

## Feature Overview
Revamp the static homepage so the portfolio intentionally highlights exactly three featured projects: CashFlow Tracker, ReliabilityKit, and TestOrbit. The redesign should improve visual hierarchy, broaden the portfolio narrative beyond reliability-only work, and preserve honest project maturity/status framing.

## Product Requirements Summary
- Homepage must present exactly three featured projects.
- Each project must include: name, concise summary, status/type label, problem framing, solution framing, key highlights, and proof links.
- The section must be easy to scan on desktop and mobile.
- Messaging must balance recruiter-friendly clarity with technical credibility.
- TestOrbit must appear as one project with frontend + backend proof.
- CashFlow Tracker must be framed as offline-first and not backend-dependent.
- ReliabilityKit must be framed as an active MVP with a live dashboard proof path and staged/scaffolded S3 backend language.

## Scope
### In Scope
- Homepage information architecture updates needed to support the new showcase.
- Hero and projects-section content/layout changes.
- Project content model for three curated entries.
- Static asset strategy for project visuals.
- Responsive and accessibility requirements for the revamp.

### Out of Scope
- New backend services, CMS, or analytics.
- Deep rewrites of unrelated pages.
- Changes inside the three source project repos.
- Building new case studies or demos.

## Architecture Overview
This repo remains a static single-page site implemented with `index.html`, `style.css`, and `script.js`.

Smallest sound implementation:
- keep the existing static architecture
- replace the current reliability-heavy hero/project narrative with a curated three-project showcase
- use one repeatable project content structure for all three entries
- keep navigation/contact flow intact with only minimal wording adjustments

Recommended implementation pattern:
- homepage structure remains serverless/static
- project content is maintained in one canonical frontend content source (either a single JS data object in `script.js` or a clearly grouped HTML content block)
- all project visuals are local portfolio assets copied into this repo rather than hotlinked from other repos

## System Components
1. **Top Navigation**
   - Existing single-page anchor navigation.
   - No new sections required beyond any renamed/reordered homepage sections.

2. **Hero / Intro Section**
   - Reframe the headline around breadth across product UX, reliability tooling, and cloud-native systems.
   - Primary CTA: jump to featured projects.
   - Secondary CTA: contact/engagement path.
   - Optional right-side highlight panel should reference all three projects, not only two.

3. **Featured Projects Section**
   - Primary focal point of the page.
   - Contains exactly three project cards/tiles.
   - Uses identical information architecture for every project.

4. **Supporting Narrative Sections**
   - About / approach / engagement sections may be lightly edited for consistency.
   - They must not reintroduce a reliability-only framing that conflicts with the new project breadth.

5. **Contact Section**
   - Preserve a clear path to contact after reviewing projects.

## Data Models and Storage Design
No runtime persistence is needed. The relevant design concern is a maintainable static content model.

### Featured Project Content Model
Each featured project entry should support these fields:

| Field | Type | Required | Notes |
|---|---|---:|---|
| `slug` | string | yes | Stable internal key, e.g. `cashflow_tracker` |
| `name` | string | yes | Display name |
| `statusLabel` | string | yes | Examples: `Offline-First Mobile App`, `MVP`, `Technical POC` |
| `categoryLabel` | string | yes | Product/mobile, reliability toolkit, cloud-native orchestration |
| `summary` | string | yes | One-line scannable description |
| `problem` | string | yes | Plain-English user/problem framing |
| `solution` | string | yes | How the project addresses the problem |
| `highlights` | string[] | yes | 3-5 concise bullets |
| `proofLinks` | object[] | yes | Explicit labels and URLs |
| `statusNote` | string | yes | Honest maturity framing |
| `visualAsset` | string | no | Local screenshot/logo/illustration path |
| `visualAlt` | string | no | Required if image is used |

### Proof Link Model
Each proof link should include:
- `label`: explicit destination label
- `url`: outbound or internal path
- `type`: repo, demo, dashboard, case-study, contact
- `external`: boolean

### Project-Specific Content Requirements
**CashFlow Tracker**
- Must mention offline-first local device execution.
- Must highlight onboarding, dashboard, recurring flows, savings tracking, transaction history, and account management.
- Proof priority: repository first; optional supporting docs only if public-safe and still portfolio-relevant.

**ReliabilityKit**
- Must mention structured run records, artifacts, failure classification, reliability scoring, and dashboard/trend analysis.
- Must describe local-first execution with AWS-hosted dashboard proof.
- Must explicitly avoid implying the S3 persistence path is fully finalized.

**TestOrbit**
- Must be represented as one product.
- Must mention suites, runs, scheduling, credits, and webhook/manual execution paths.
- Must include both frontend and backend proof links.

## API Contracts
There is no new backend/API integration for this feature.

Applicable interface contracts are:
1. **Outbound link contract**
   - every proof CTA must have a destination-specific label
   - broken or private links must not be shipped

2. **Static content contract**
   - homepage renders exactly three featured projects
   - every project entry uses the same content fields/order

3. **Asset contract**
   - all displayed images must exist in the portfolio repo
   - no dependency on cross-repo runtime fetches

## Frontend / Client Impact
### Page Structure / Section Architecture
Recommended homepage order:
1. Top nav
2. Hero
3. Featured Projects
4. Brief supporting credibility section (About and/or Approach)
5. Engagement model
6. Contact

This order moves featured work higher on the page and reduces scroll friction.

### Project Card Internal Structure
Use the same order inside each project card:
1. project name
2. category + status labels
3. one-line summary
4. problem framing
5. solution framing
6. key highlights
7. proof links / CTAs

This matches the required scan path: what it is → who/problem → why notable → proof.

### Responsive Behavior Strategy
- **Desktop (`>= 1024px`)**: three-card comparison layout in one row or balanced grid, provided cards remain readable.
- **Tablet (`~640px - 1023px`)**: 2-column then 1-column fallback as needed.
- **Mobile (`< 640px`)**: single-column stacked cards with clear spacing and full-width CTAs.
- Avoid any horizontally scrollable project region.
- Keep proof links wrapping naturally; do not force single-line CTA rows.

### Accessibility Considerations
Engineering must honor:
- semantic heading order and landmark sections
- sufficient color contrast for labels, metadata, and CTA styles
- visible keyboard focus on all nav and proof links
- explicit link text such as `View CashFlow Tracker repository`, not `Learn more`
- images must have meaningful alt text or be decorative
- cards must remain understandable without relying on color alone for status/category distinction
- mobile spacing/font sizing must preserve readability without zoom

## Backend Logic / Service Behavior
None. This is a static-content revamp.

## File / Module Structure
Smallest recommended change set:
- `index.html`
  - update hero copy
  - replace existing two-project block with curated three-project showcase
  - optionally move projects section above current about/approach sections
- `style.css`
  - add/adjust styles for featured-project grid, labels, card hierarchy, and responsive states
- `script.js`
  - keep current nav/year behavior
  - optionally host the featured project content object if engineering prefers content-driven rendering
- `docs/architecture/portfolio_projects_showcase_technical_design.md`
  - this blueprint
- `assets/projects/` (recommended new folder)
  - local screenshots/logos/illustrations if used

## Security and Access Control
- Do not expose non-public repo URLs, private docs, or internal-only demo links.
- Only link to publicly accessible proof assets.
- If screenshots are copied from other repos, verify they do not reveal secrets, personal financial data, tokens, or internal environment details.
- Keep `target="_blank"` links paired with safe rel attributes during implementation.

## Reliability / Operational Considerations
- Because the site is static, link integrity is the main operational concern.
- Engineering should verify all proof URLs before release.
- Prefer at least one proof path per project; more than one is recommended where available.
- The page should remain credible even if one project has fewer visuals or fewer proof assets.

## Dependencies and Constraints
- Existing site is static HTML/CSS/JS; design must stay realistic for that architecture.
- Homepage copy must align with public repository/documentation evidence.
- Current homepage currently over-emphasizes ReliabilityKit and TestOrbit and must be rebalanced.
- No CMS means content updates should be low-friction and easy to audit in source control.

## Assumptions
- Homepage remains the only required implementation surface for this phase.
- Existing case-study pages for ReliabilityKit and TestOrbit may remain as-is and be linked as proof.
- CashFlow Tracker likely has no public live demo and can be represented credibly through repo-backed product framing.
- Local assets may be added, but lack of screenshots should not block the revamp.
- Equal-weight presentation of the three projects is the safest default unless product direction later chooses one primary feature.

## Risks / Open Questions
- **Asset availability risk:** CashFlow Tracker may not have portfolio-ready screenshots; design should not depend on image-heavy treatment.
- **Content drift risk:** homepage claims can become stale if source repos evolve.
- **Link validity risk:** live demos/case studies may change or become unavailable.
- **Card density risk:** fitting all required content into three comparison cards can become verbose if copy is not tightly edited.
- **Open question:** whether one project should receive larger visual emphasis remains unresolved; default recommendation is equal prominence for this phase.

## Implementation Notes for Downstream Agents
- Treat this as a content-forward static homepage redesign, not a framework migration.
- Update all copy that still implies only two flagship projects.
- Move the projects section closer to the top of the homepage.
- Use one repeatable card template and keep all three entries structurally consistent.
- Keep status language explicit and honest: CashFlow Tracker = offline-first mobile app, ReliabilityKit = MVP, TestOrbit = technical POC.
- Source copy from the referenced repos/docs, then simplify into recruiter-friendly language.
- If using project visuals, copy selected assets into this repo and optimize them for web use; do not hotlink cross-repo files.
- Preserve current navigation and contact behavior unless a minor wording update improves conversion clarity.
