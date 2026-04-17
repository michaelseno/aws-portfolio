# Design Specification

## 1. Feature Overview
Refresh the portfolio homepage so it reads as a polished, modern personal portfolio rather than a reliability-only landing page. The homepage should intentionally showcase exactly three featured projects: CashFlow Tracker, ReliabilityKit, and TestOrbit.

This revamp should stay realistic for the current static HTML/CSS/JS codebase. The recommendation is a content and layout overhaul of the existing single-page homepage, not a multi-page redesign.

## 2. User Goal
- Recruiters and hiring managers: understand breadth, credibility, and fit within 2–3 minutes.
- Consulting prospects: see proof of execution and clear engagement relevance.
- Technical peers: assess architecture maturity and honesty of scope.
- Mobile visitors: scan featured work quickly without dense walls of text.

## 3. UX Rationale
The current homepage is visually credible but over-indexes on reliability engineering and currently frames the work as two flagship projects. That undersells product/UI range and creates a mismatch with the intended portfolio narrative.

The refresh should:
- broaden the identity from reliability-only to product + platform + reliability
- make the featured projects a primary focal point above deep-scroll friction
- use repeatable project card structure for fast comparison
- reduce copy density while increasing specificity and proof visibility
- create a stronger bridge from project review to contact actions

## 4. Information Hierarchy
Recommended section order for the homepage:

1. Sticky header
2. Hero
3. Featured Projects showcase
4. Capability/Approach summary
5. Skills or core capability stack
6. Engagement model
7. Contact

Hierarchy notes:
- Move Featured Projects higher in the page, directly after hero.
- Keep About/Approach content, but compress it so projects become the main decision-making section.
- Remove any copy implying there are only two flagship projects.

## 5. Layout Structure
### Overall Direction
- Retain the current dark theme foundation and static-site architecture.
- Increase contrast between page bands using surface elevation, clearer spacing, and tighter content grouping.
- Shift from “long narrative blocks” to “high-signal modular sections.”

### Header
- Keep sticky top navigation.
- Recommended nav labels: About, Projects, Approach, Contact.
- Projects should remain the most important in-page destination.

### Hero
- Use a broader headline that reflects product, frontend, cloud, and reliability range.
- Keep two CTAs only:
  - Primary: jump to featured projects
  - Secondary: jump to contact
- Replace the current right-side highlight panel with a more balanced “snapshot” panel that previews all three projects with short type/status labels.

Recommended hero content model:
- Eyebrow: product-minded engineer / cloud-native builder
- H1: broader portfolio statement
- Supporting paragraph: 2–3 lines max
- CTA row
- Skill badges limited to 4–6 concise tags

### Featured Projects Section
- Title example: “Featured Projects”
- Intro text should establish these as a curated set of three proof-backed builds.
- Use a 3-up card layout on desktop, 2-up or staggered on tablet, stacked on mobile.
- Each project should have equal weight. Do not visually crown one as the sole hero project in this phase.

### Project Card Structure
Use the same internal order for every card:
1. Project name
2. Status/type chip
3. One-line summary
4. “For / Problem” block
5. “Approach / Solution” block
6. 3 key highlight bullets
7. Proof links row

Optional secondary row:
- “What exists today” and “Current scope / honest status” can remain, but should be shorter than the current implementation.

### Supporting Sections
- Approach: reduce to 3 compact cards with short bullets.
- Skills: retain, but avoid repeating identical messaging from hero and projects.
- Engagement model: keep as a lightweight bridge into contact.

## 6. Components
### A. Hero CTA buttons
- Primary button label: “View Featured Projects”
- Secondary button label: “Get in Touch” or “Discuss Roles & Consulting”

### B. Project cards
Each card should include:
- Title
- Status chip
- Category/stack sublabel
- Summary sentence
- Problem mini-section
- Solution mini-section
- Highlights list
- Proof links

### C. Status chips
Use explicit maturity labels only:
- CashFlow Tracker: “Offline-first mobile app” or “Personal product”
- ReliabilityKit: “MVP”
- TestOrbit: “Technical POC”

Status chips should be short, high contrast, and visible without interaction.

### D. Proof links
Links must be explicit, never generic.

Recommended labels:
- CashFlow Tracker: “View Repo”
- ReliabilityKit: “View Repo”, “Open Live Dashboard”, “Read Case Study”
- TestOrbit: “Open Live Frontend”, “View Frontend Repo”, “View Backend Repo”, “Read Case Study”

### E. Section intro copy
Keep section intros to 1–2 short sentences max.

## 7. Interaction Behavior
- Buttons and links should have clear hover and focus affordances using the current visual language.
- Project cards may have subtle hover lift or border accent on pointer devices, but no required animation for understanding.
- Do not hide core project information behind accordions, tabs, or modal interactions.
- All proof links should be directly visible on the card.
- If external links open in new tabs, the link label or accessible name should make that behavior clear where practical.

Microcopy guidance:
- Use plain-English verbs: View, Open, Read, Discuss.
- Avoid vague CTA text such as “Learn More” when a more specific label is possible.
- Avoid inflated language like “enterprise-grade,” “platform at scale,” or “launched product” unless verifiable.

## 8. Component States
### Default
- Clear title, summary, status, and proof links visible.

### Hover
- Buttons/links: brighter border or background, slight elevation.
- Project cards: subtle border emphasis or shadow increase only.

### Focus
- Preserve visible high-contrast focus ring on all interactive elements.
- Focus indicator must not rely on color alone; use outline and offset.

### Active
- Slight pressed state for buttons and links.

### Disabled
- Only use disabled styles if a control is truly unavailable. Prefer omitting unavailable CTAs over showing disabled links in a portfolio context.

### Loading
- Not applicable for most static content.
- If any future enhancement lazy-loads assets, preserve layout height and avoid content shift.

### Empty
- If a project has fewer public proof assets, keep card structure intact and show only available links.
- Do not add placeholder text like “Coming soon” unless it provides real value.

### Success
- Not a major homepage state.
- Contact CTA success handling is out of scope because contact actions are external mailto links.

### Error
- If an external proof asset becomes unavailable later, homepage copy should still stand on its own without depending on one live link.

## 9. Responsive Design Rules
### Desktop (≥1024px)
- Hero uses two columns.
- Featured projects display in 3 columns.
- Keep project cards aligned to a consistent internal structure for easy comparison.
- Limit line lengths for paragraphs to preserve scanability.

### Tablet (640px–1023px)
- Hero can remain two-column if space allows, otherwise stack with summary panel second.
- Featured projects should become 2 columns, with the third card wrapping cleanly below.
- Reduce decorative spacing before reducing text legibility.

### Mobile (<640px)
- Stack all sections vertically.
- Featured projects become one card per row.
- Within project cards, stack problem/solution blocks vertically.
- Keep link groups easy to tap with comfortable spacing.
- Avoid long badge rows that wrap into visually noisy clusters.

Content density expectations:
- Summary: ~1 sentence
- Problem and solution blocks: 1–2 bullets each or 1 short paragraph each
- Highlights: 3 bullets max
- Proof links: 1–4 explicit links

## 10. Visual Design Tokens
Recommended use of the existing system rather than introducing a new visual language:

- Background: retain dark navy base
- Surface: use existing elevated cards/panels with slightly stronger separation from page background
- Accent: continue blue/teal accents for primary CTAs and status emphasis
- Radius: keep rounded card/button language already present
- Spacing: increase section spacing consistency; use a more deliberate vertical rhythm between section header, intro copy, and grid
- Typography:
  - H1 should remain prominent and slightly more product-oriented
  - H2s should be concise and scannable
  - Body copy should favor shorter paragraphs over dense blocks

Recommended visual direction keywords:
- polished
- technical but approachable
- product-minded
- editorial clarity over dashboard density

## 11. Accessibility Requirements
- Maintain sufficient contrast for all body text, chips, buttons, and links against dark surfaces.
- Preserve keyboard access for sticky nav, CTA buttons, and all project proof links.
- Keep semantic heading order intact.
- Use descriptive link text so screen-reader users can distinguish destinations.
- Ensure status chips are readable text, not color-only indicators.
- Do not rely on hover to reveal critical project information.
- Keep tap targets adequately sized on mobile.
- If a nav toggle remains in use on mobile, ensure `aria-expanded` and focus behavior stay intact.

## 12. Edge Cases
- CashFlow Tracker may only have a repo proof path for now; the card must still feel complete through stronger summary and highlights.
- ReliabilityKit and TestOrbit may have more proof assets than CashFlow Tracker; avoid making the shorter card feel visually deficient by using consistent internal spacing.
- TestOrbit must appear as one project even though proof links span separate frontend and backend repos.
- Existing case studies currently support ReliabilityKit and TestOrbit only; the homepage should not visually require case-study parity.
- Copy must remain understandable to non-technical reviewers while still credible to engineers.

## 13. Developer Handoff Notes
- This spec assumes updates are made within the existing static `index.html`, `style.css`, and `script.js` structure.
- No complex interaction model is required; the emphasis is on hierarchy, content restructuring, and card-based presentation.
- Recommended homepage narrative update:
  - Hero frames overall range
  - Projects prove that range with exactly three curated builds
  - Approach/skills reinforce working style and stack
  - Contact converts interest after proof review

Recommended project ordering:
1. CashFlow Tracker — leads with product/frontend/mobile breadth
2. ReliabilityKit — shows reliability tooling and analytics depth
3. TestOrbit — shows cloud-native orchestration architecture range

Recommended project content framing:

### CashFlow Tracker
- Summary direction: offline-first personal finance mobile app for everyday budgeting and cash visibility
- Problem framing: personal finance tools can feel cumbersome or overly dependent on connectivity
- Solution framing: local SQLite-backed mobile workflow with onboarding, dashboard, recurring flows, savings tracking, history, and account management
- Proof priority: repo first

### ReliabilityKit
- Summary direction: reliability toolkit for Python, Playwright, and pytest that turns test runs into structured diagnostics and trend data
- Problem framing: flaky or failed tests are expensive when execution data is fragmented
- Solution framing: local-first execution, structured artifacts, failure classification, reliability scoring, and hosted dashboard proof
- Proof priority: repo, live dashboard, case study

### TestOrbit
- Summary direction: technical POC for self-serve cloud-native test orchestration
- Problem framing: orchestrating different test types and run triggers is hard without a clear control plane and isolated execution model
- Solution framing: frontend dashboard plus serverless/backend orchestration for suites, runs, scheduling, credits, and webhook/manual execution
- Proof priority: live frontend, frontend repo, backend repo, case study

Implementation guardrails:
- Keep project cards information-dense but not long-form.
- Prefer concise subheads and bullet lists over large narrative paragraphs.
- Maintain a consistent card template across all three projects.
- Keep the design achievable with current HTML/CSS patterns: grid, cards, pills, buttons, and simple responsive stacking.

Assumptions:
- No new CMS, filtering, carousel, or tabbed showcase is needed.
- Equal-weight presentation is preferred unless product direction changes later.
- Existing case study pages remain valid supporting assets for ReliabilityKit and TestOrbit.
