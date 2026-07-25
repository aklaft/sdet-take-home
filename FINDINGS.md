# Part 1 — Findings

Document each issue you found and fixed. Add or remove sections as needed
(there are three issues to find).

## Issue 1

- **Symptom:** "shows a gaining position with the gain style" failing because the selected table cell does not have the pnl-gain class
- **Root cause:** api is returning "currentPrice": 150.25 "marketValue": 15025 which is consistent with the documentation of the test. However the pnl has the  is negative. Therefore it is a correctly failing test finding a bug
- **Fix location:** in the app I found the method where the pnl is calculated and found that the sign is reversed (planted bug 1)
- **How I verified:** ran the test to confirm it is fixed. since this data is mocked it will be consistent

## Issue 2

- **Symptom:**mocked stock is not showing up in "renders mocked portfolios" test
- **Root cause:** new stock is not injected before api call
- **Fix location:** in test moved the injection before the call to the website
- **How I verified:** ran a couple times to be sure, but the injection should be set up deterministically before the website loads

## Issue 3

- **Symptom: "creates a portfolio" test fails consitently, expecting the status message to have come up but it's undefined. consistent on my machine, but may pass sometimes possibly on a slow machine or show up as unsaved instead
- **Root cause:**: test is not waiting for save to be completed
- **Fix location:** test documentation suggested waiting on the api call to be finished, however this might still fail between api return and UI update. Instead I replaced it with a standard assertion cy.get('[data-cy="status"]').should('have.text', 'Saved') this will wait unti the text is correct

- **How I verified:** ran test with TEST instead of Saved and it failed, passed when correct value is used. will pass consistently unless it takes 4 seconds to render, but if it takes that long it might be an issue anyway

## Anything else you noticed

tests should probably test more values, for example that the created portfolio has the correct name etc. 