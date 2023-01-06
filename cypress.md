Test with Cypress 
=================

#### installation:
- `npm i -D cypress@latest`
> cypress test with vite project still rely on 

#### run test:
- `cypress install` to install the cypress on your local machine
- `npx cypress open` and the cypress local app opens:
- Choose your test type and configure the test
> current vite version is 4.0.4 and cypress require 3. However, you can skip this and still works. If something wrong, you might need to downgrade vite to lower version.

_______________________________
1. ### Unit Test:
2. ### Component Test:
- Cypress use default [Mocha]
3. ### Integration Test:
4. ### End-to-End Test:

-------------------------------
### Test with Gitlab CI
- reference: [https://docs.cypress.io/guides/continuous-integration/gitlab-ci](https://docs.cypress.io/guides/continuous-integration/gitlab-ci)
