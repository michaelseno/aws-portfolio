# Pull Request

## 1. Feature Name
Portfolio Projects Showcase

## 2. Summary
Overhaul the portfolio homepage to intentionally showcase exactly three proof-backed projects: CashFlow Tracker, ReliabilityKit, and TestOrbit. This release also includes the frontend follow-up to point TestOrbit at the deployed hero page, use the live ReliabilityKit dashboard as proof, and reframe CashFlow Tracker as a TestFlight beta with portfolio-safe walkthrough treatment.

## 3. Related Documents
- Product Spec: docs/product/portfolio_projects_showcase_product_spec.md
- Technical Design: docs/architecture/portfolio_projects_showcase_technical_design.md
- UI/UX Spec: docs/uiux/portfolio_projects_showcase_design_spec.md
- QA Test Plan: docs/qa/portfolio_projects_showcase_test_plan.md
- QA Report: docs/qa/portfolio_projects_showcase_test_report.md
- Frontend Implementation Plan: docs/frontend/portfolio_projects_showcase_implementation_plan.md
- Frontend Implementation Report: docs/frontend/portfolio_projects_showcase_implementation_report.md
- Planning Issue: #1 https://github.com/michaelseno/aws-portfolio/issues/1

## 4. Changes Included
- Reposition the homepage around three curated featured projects with stronger hierarchy and consistent project-card structure
- Broaden the portfolio narrative from reliability-only framing to product/mobile UX, reliability tooling, and cloud-native orchestration breadth
- Update TestOrbit proof CTA to the deployed hero page: https://d35l48aa0loqlr.cloudfront.net/
- Update ReliabilityKit proof CTA to the live dashboard: https://rk-reliability.s3.amazonaws.com/dashboard.html
- Reframe CashFlow Tracker as a TestFlight beta and support portfolio-safe beta proof/walkthrough treatment
- Add and retain supporting planning, release, and QA artifacts for implementation traceability

## 5. QA Status
- Approved: YES
- Gate evidence: [QA SIGN-OFF APPROVED]
- HITL: HITL validation successful

## 6. Test Coverage
- Static DOM/content verification against the homepage and proof pages
- Playwright smoke checks against a local static server
- Responsive checks across desktop, tablet, and mobile viewports
- Keyboard/accessibility smoke checks
- Internal anchor and proof-link validation
- External proof-link HTTP validation for TestOrbit and ReliabilityKit

## 7. Risks / Notes
- CashFlow Tracker proof remains intentionally portfolio-safe and beta-framed rather than public-release proof
- External proof URLs should be revalidated if they change later
- This PR closes the release scope tracked by GitHub Issue #1
