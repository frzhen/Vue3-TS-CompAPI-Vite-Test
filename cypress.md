Test with Cypress 
=================

### prerequisites: 
- Vue Test Utils has been installed;
- downgrade vite to '3.2.5'
- downgrade @vitejs/plugin-vue to '3.2.0'

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
   - Cypress adopted [Mocha](https://mochajs.org/) bdd syntax to build test features:
   - [stub](https://docs.cypress.io/api/commands/stub): Replace a function, record its usage and control its behavior.
     ```typescript
     cy.stub()
     cy.stub(object, method)
     cy.stub(object, method, replaceFn)
     ```
   - [get](https://docs.cypress.io/api/commands/get): Get one or more DOM element by selector or alias.
   - ##### [Mocha Bundled Library](https://mochajs.org/#bdd):
     - `describe`
     - `it`
     - `.only()`
     - `.skip()`
3. ### Integration Test:
4. ### End-to-End Test:

-------------------------------
### Test with Gitlab CI
- reference: [https://docs.cypress.io/guides/continuous-integration/gitlab-ci](https://docs.cypress.io/guides/continuous-integration/gitlab-ci)
