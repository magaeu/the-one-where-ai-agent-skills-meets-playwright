# the-one-where-ai-agent-skills-meets-playwright

A small demo repository showing an AI agent skill integration with the Playwright CLI and a create readme skill to keep project documentation up-to-date.

## Overview

This repository is set up to run a Playwright end-to-end test that navigates to `https://automationbookstore.dev`, filters the book list by `automation`, and verifies the expected results.

## Project structure

- `package.json` — npm scripts and dependency configuration
- `playwright.config.js` — Playwright Test configuration with traces, video, and screenshots
- `tests/automation-bookstore.spec.js` — sample test implementation
- `.agents/skills/playwright-cli/SKILL.md` — AI skill metadata and instructions
- `test-results/` — generated artifacts from Playwright runs
- `playwright-report/` — HTML report output from Playwright

## Prerequisites

- Node.js
- npm

## Install

```bash
npm install
```

## Run the sample test

```bash
npm run test:automation-bookstore
```

## Open artifacts

```bash
npx playwright show-report
npx playwright show-trace test-results/*/trace.zip
```

## Examples of CLI usage skill

### Go to specific website and filter by specific word
```text
go to https://automationbookstore.dev and filter by automation
```

### Create trace, video and generate tests for a specific scenario
```text
go to https://automationbookstore.dev and filter by automation. create trace and video for what you have done and then generate playwright test
```

## Notes

- Uses `@playwright/cli` and `@playwright/test`.
- The configured browser is Firefox in headless mode.
- Playwright captures trace and video artifacts by default.
- If browsers are not installed, run `npx playwright install`.

> [!NOTE]
> Some environments may require a supported platform for browser downloads.

## References

- [Agent skills guide](https://dev.to/debs_obrien/what-are-agent-skills-beginners-guide-e2n)
- [Playwright agent skill](https://www.youtube.com/watch?v=4pW1DrERvm0)
- [Agent skills overview](https://agentskills.io/skill-creation/quickstart#create-the-skill)
