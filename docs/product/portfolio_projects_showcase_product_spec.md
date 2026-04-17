# Product Specification

## 1. Feature Overview
Overhaul the portfolio homepage project showcase so it presents a stronger, more modern portfolio experience and intentionally highlights three flagship projects: CashFlow Tracker, ReliabilityKit, and TestOrbit. The page should improve UI/UX, clarify the owner’s product and engineering strengths, and help visitors quickly understand what each project is, why it matters, and what proof exists.

## 2. Problem Statement
The current portfolio homepage is credible but too narrowly framed around two reliability/testing projects and does not fully reflect the breadth of work now intended for the portfolio. It lacks a dedicated showcase for CashFlow Tracker, and the overall project presentation is more informational than deliberately conversion-oriented.

This matters because the portfolio is a trust surface for recruiters, hiring managers, potential clients, and technical peers. If the homepage does not clearly communicate project breadth, product context, and evidence of execution, visitors may leave without understanding the owner’s range across product UX, frontend experience, cloud-native systems, and reliability engineering.

## 3. User Persona / Target User
- Primary: recruiters and hiring managers evaluating frontend, product-minded engineering, QA/platform, or cloud/reliability fit
- Secondary: freelance/consulting prospects evaluating execution quality and technical depth
- Tertiary: technical peers reviewing project quality, architecture maturity, and proof of work

## 4. User Stories
- As a recruiter or hiring manager, I want to quickly understand the three featured projects, so that I can assess the owner’s fit within a few minutes.
- As a consulting prospect, I want to see credible project outcomes and proof links, so that I can trust the owner can deliver real systems.
- As a technical peer, I want honest project framing and architecture context, so that I can evaluate the work without marketing exaggeration.
- As a portfolio visitor on mobile, I want the project showcase to be easy to scan and navigate, so that I can consume the content without friction.

## 5. Goals / Success Criteria
### Product Goals
- Reposition the homepage around exactly three intentional showcase projects.
- Improve perceived polish and clarity of the portfolio page UI/UX.
- Communicate both breadth and depth: product UX/mobile app work, reliability tooling, and cloud-native orchestration.
- Preserve honest status framing for each project.
- Increase the likelihood that visitors click into repos, demos, or case studies and proceed to contact.

### Success Criteria
- The homepage presents exactly three featured projects and no legacy flagship framing that implies only two projects.
- Each project can be understood from the homepage without opening external links.
- Each project includes at least one proof-oriented outbound link where available.
- Messaging clearly differentiates project type, user problem, scope, and current status.
- The page supports clear scanning on desktop and mobile and does not bury project content below weak hierarchy.

## 6. Feature Scope
### In Scope
- Portfolio homepage overhaul related to project showcase presentation
- Product-level UI/UX expectations for hero, project section, project cards/tiles/sections, and supporting page hierarchy
- Updated messaging and content strategy for the three featured projects
- Defining required proof links and status framing for each project
- Acceptance criteria for responsive, accessible, portfolio-friendly project presentation

### Out of Scope
- Implementing code changes
- Rewriting unrelated sections beyond what is necessary to support the homepage overhaul
- Adding new backend systems, analytics, CMS capability, or contact workflows
- Creating new project functionality inside CashFlow Tracker, ReliabilityKit, or TestOrbit
- Deep case study rewrites unless needed later by a separate task
- Expanding the portfolio beyond the three intentionally featured projects in this revamp

## 7. Functional Requirements
1. The homepage must present a project showcase section that intentionally features these three projects only:
   - CashFlow Tracker
   - ReliabilityKit
   - TestOrbit

2. The page must treat the three projects as a curated set, not as an open-ended or generic list.

3. The project showcase must make each project visibly distinct by project category and value proposition.

4. Each featured project entry must include, at minimum:
   - project name
   - concise one-line summary
   - project type or status label
   - problem/use-case framing
   - solution/approach framing
   - key capability or highlight bullets
   - proof/evidence links available for that project

5. The homepage must maintain honest maturity/status language. It must not present any project as a launched commercial product if that is not true.

6. The project section must support a clear scan path in this order:
   - what the project is
   - who it is for or what problem it solves
   - what makes it notable
   - what proof exists

7. The homepage must reflect a broader portfolio identity than the current reliability-only emphasis, while still remaining technically credible.

8. Project ordering should support narrative breadth:
   - either lead with strongest conversion project first and still make all three visible above deep scrolling friction,
   - or deliberately order the three to show breadth across product UX, reliability tooling, and platform architecture.

9. Content for each project must be portfolio-friendly: concise, plain-English, credibility-oriented, and free of repo-internal jargon that a non-engineering reviewer would not understand.

10. The portfolio page UX must include a stronger visual hierarchy than the current implementation, with emphasis on:
    - immediate clarity of featured work
    - easy comparison between projects
    - visible calls to action
    - responsive readability

11. The homepage must preserve or improve navigation to contact actions after project review.

12. The page must avoid mismatch between homepage claims and the underlying project repositories.

### Project Showcase Requirements by Project

#### CashFlow Tracker
13. CashFlow Tracker must be positioned as an offline-first personal finance mobile app.

14. CashFlow Tracker messaging must communicate the following product context:
   - runs locally on device
   - built around offline budgeting and cash visibility
   - includes onboarding, dashboard, recurring flows, savings tracking, transaction history, and account management
   - designed to reduce friction for everyday money tracking

15. CashFlow Tracker showcase copy must highlight product/UX strengths rather than over-emphasizing future backend sync work.

16. CashFlow Tracker proof links should prioritize the repository and may optionally reference supporting documentation if publicly appropriate.

17. CashFlow Tracker status language must not imply a cloud-synced finance platform; it should reflect the current offline-first/mobile-focused reality.

#### ReliabilityKit
18. ReliabilityKit must be positioned as a reliability execution toolkit for Python, Playwright, and pytest.

19. ReliabilityKit messaging must communicate the following context:
   - structured run records and artifacts
   - failure classification and reliability scoring
   - dashboard-oriented trend analysis
   - local-first execution with AWS-hosted dashboard proof

20. ReliabilityKit must be framed as an MVP that is active and credible, with honest mention that the S3 backend is scaffolded/staged rather than fully finalized.

21. ReliabilityKit proof links should include the public repo and live dashboard, and may include the existing case study.

#### TestOrbit
22. TestOrbit must be represented as one product composed of frontend and backend repos, not as two separate showcase projects.

23. TestOrbit must be positioned as a technical POC for cloud-native test orchestration.

24. TestOrbit messaging must communicate the following context:
   - self-serve test automation experience
   - support for suites, runs, scheduling, credits, and webhook/manual execution paths
   - frontend dashboard plus serverless/backend orchestration architecture
   - execution model that uses serverless control flows and isolated runtime workers

25. TestOrbit proof links should include the frontend repo and backend repo, and should include live/demo or case study links if still valid.

26. TestOrbit status language must clearly state that it is a technical POC with production-oriented patterns, not a fully launched SaaS offering.

### Content and Messaging Requirements
27. The page messaging must balance technical depth with accessibility for non-deeply technical readers.

28. Project summaries must be concise enough to scan quickly but specific enough to avoid sounding generic.

29. The messaging must show range across:
   - product/mobile UX and offline app design
   - reliability engineering and diagnostics
   - cloud-native platform/orchestration architecture

30. The portfolio must avoid unsupported claims about adoption, business impact, users, revenue, or production scale unless verifiable proof exists in public assets.

31. The homepage should use consistent labels for project maturity/status, such as MVP, Technical POC, or comparable explicit states.

32. Calls to action associated with each project should direct visitors toward proof assets such as repo, live demo, or case study rather than vague placeholders.

### Portfolio Page UX Expectations
33. The homepage should feel intentionally redesigned rather than minimally edited.

34. The project showcase should support side-by-side comparison on larger screens and strong stacked readability on smaller screens.

35. The visual hierarchy should make the featured projects one of the page’s primary focal points.

36. The project showcase should reduce cognitive load by using repeatable content structure across the three projects.

37. The page should preserve accessible reading and interaction patterns, including clear focus visibility, readable contrast, and non-ambiguous link labels.

38. The UI should communicate polish appropriate for a frontend revamp, including stronger spacing, content grouping, status visibility, and CTA clarity.

## 8. Acceptance Criteria
- The portfolio homepage specification results in exactly three featured projects: CashFlow Tracker, ReliabilityKit, and TestOrbit.
- No homepage copy states or implies that only two flagship projects are featured.
- Each featured project has a unique title, a concise summary, a status/type label, problem framing, solution framing, and at least one proof-oriented link.
- CashFlow Tracker is described as an offline-first personal finance mobile app and is not described as dependent on a live backend.
- ReliabilityKit is described as an MVP reliability toolkit with structured run intelligence and a live dashboard proof path.
- TestOrbit is described as a technical POC and is presented as one project spanning frontend and backend.
- TestOrbit includes both frontend and backend proof links in the project entry.
- Project copy is understandable to a recruiter or hiring manager without requiring repository inspection.
- Project copy does not include unverified claims about commercial launch, user adoption, scale, or business outcomes.
- The project section uses a consistent information structure across all three projects.
- The page includes a clear path from project review to contact/engagement actions.
- The project showcase design requirements support desktop and mobile layouts without requiring horizontal scrolling.
- Link labels for project proof assets are explicit enough for a visitor to know what will open.
- Status labels are visible without expanding or opening another page.
- The homepage messaging reflects broader portfolio breadth than the current reliability-focused implementation.

## 9. Edge Cases
- One or more projects may have fewer public proof assets than others; the layout must still feel balanced.
- CashFlow Tracker may not have a public live demo; the portfolio must still present it credibly through concise product context and repo proof.
- TestOrbit frontend and backend may differ in maturity; the portfolio must still present them as one cohesive project with honest scope language.
- External links may change over time; the content model should not rely on a single proof source for credibility when alternatives exist.
- Very technical visitors may want architecture depth, while recruiters want quick scanning; the homepage must serve both without becoming overly dense.
- Mobile visitors may encounter long project descriptions; content must remain digestible when stacked vertically.

## 10. Constraints
- Scope is limited to the portfolio homepage overhaul and related project showcase presentation.
- The repo is a static site and any proposed UX expectations should remain realistic for a static portfolio implementation.
- Messaging must stay aligned with publicly inspectable repo/documentation evidence.
- UX must prioritize readability and scanability over dense technical exposition.
- The portfolio should not add speculative claims for regulated finance, production billing, or enterprise-scale reliability capabilities.

## 11. Dependencies
- Current portfolio homepage structure in `index.html`
- Existing portfolio styling and information architecture
- Publicly inspectable content from:
  - `/Users/mjseno/Development/cashflow_tracker_app`
  - `/Users/mjseno/Documents/Development/2026_fortfolio_projects/python_reliability_toolkit`
  - `/Users/mjseno/Documents/Development/React/testorbit-frontend`
  - `/Users/mjseno/PycharmProjects/serverless-test-automation`
- Validity of any public repo, case study, or live demo links intended to appear on the homepage

## 12. Assumptions
- The portfolio homepage remains the primary scope, rather than a broader multi-page redesign.
- The three listed projects are the only projects to be intentionally featured in this revamp.
- ReliabilityKit and TestOrbit existing case-study pages may remain available and can be reused as proof targets.
- CashFlow Tracker will be represented primarily through concise product messaging and repository evidence unless a public demo exists later.
- The owner wants to showcase both product-facing frontend/mobile work and cloud/reliability engineering range in one cohesive portfolio narrative.

## 13. Open Questions
- Should one of the three projects receive “primary featured” visual treatment, or should all three be presented with equal weight?
- Is there a public/demo asset for CashFlow Tracker that should be linked, or should the repo be the only proof asset for now?
- Should existing case studies be updated later to match the new three-project portfolio narrative, or is homepage alignment sufficient for this phase?
- Should the homepage continue emphasizing job + consulting conversion equally, or should one CTA path be visually prioritized in this revamp?
