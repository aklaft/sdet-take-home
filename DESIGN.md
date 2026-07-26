# Part 2b — CI & Alerting Design

No code required here — we want your reasoning.

## 1. Running this suite in GitHub Actions on every PR

Describe the workflow: what triggers it, the job/steps, how you start the API
before the tests, and how a test failure fails the build. A YAML sketch is
welcome but optional.

```yaml

on:
  pull_request:

  ...

steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 24

      - name: Cypress run
        uses: cypress-io/github-action@v6
        with:
          start: npm start
          wait-on: 'http://localhost:3000'
          wait-on-timeout: 60

      - name: Upload screenshots on failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: cypress-screenshots
          path: cypress/screenshots

```

Notes:
I would do something like this. runs the tests on all branches. might be too much if the suite is large, in which case we could restrict it to develop/main. pulls the code, sets up node (might not need this in the actual gha, it might be there already) runs cypress, waiting on the api to start

on failure we upload the screenshots to github and the action will fail by default

## 2. Failure summary to Slack (or structured JSON for alerting)

On a failed run, what would you post, and how do you keep it signal (not noise)?

I would probably have two slack channels, one for everyone and one for just me/the qe team
- **What goes in the message:** name of the test that failed and a link to github. if possible info on the triggering PR so the person sees it
- **How it's triggered:** in the team channel probably only failures to push to dev/main. in the ce channel, probably all runs, failing or not, falky tests etc. 
- **Keeping it useful:** it would be nice to ping the pr owner. on a failed pr to main, probably a group ping, that's a release failure. if there are known flaky tests they should be fixed, but if reality intervenes it would be nice to supress these failures from pinging anyone. 

anything that goes in the team channel should be an actual issue, nobody should be trying to push something to dev or main that fails in the first place, so a notification is ok. but people just doing their own thing in branches should bother everyone. 
