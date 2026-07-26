# Submission Notes

**Candidate:**
**Date:**

## Time log

| Part | Time spent |
|---|---|
| Part 1 — Stabilize | ~60 min |
| Part 2a — Helper | ~20 min |
| Part 2b — Design write-up | ~ 20 min |
| **Total** | ~100 min |

(If you went over 90 minutes, that's fine — just tell us where the time went.)
Part 1 went over a little with some initial environment setup, and I went down a false path on the first one until I noticed that it was actually the app that was wrong. 

## Part 2a — which helper did you build, and why?

I built cy.createPortfolio. This uses the api to create a portfolio with a certain name and value. I chose this because I assume the full suite of tests would need to create a large number of portfolios in different states. It is still useful to test the UI as well, but once the UI is tested it it faster to use the api to setup before we even open the ui. This could even be extended to create various stocks within the portfolio to aid in scenario creation

## How to run your submission

npm test is fine

## Notes for the reviewer

this isn't the first api call in the suite, but if authentication was added etc, it might need to be updated. 
