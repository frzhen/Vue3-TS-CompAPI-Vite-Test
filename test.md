### Component Testing (Vitest, Vue Test Utils)
==============================================


### Setup:
- install [vue test utils](https://test-utils.vuejs.org/): `npm i -D @vue/test-utils@latest`
- install [jsdom](https://github.com/jsdom/jsdom#readme): `npm i -D jsdom@latest`
- install [Vitest](https://vitest.dev/): `npm i -D vitest@latest`
- ##### [configuration](https://vitest.dev/guide/#configuring-vitest):
  - add test key:
    - add `/// <reference types="vitest" />` on top of the `vite.config.ts` file
    - add test option inside `defineConfig()`:
    ```typescript
       test: {
           environment: 'jsdom'
       }
    ```
### Run:
- Create test file(`.spec.ts` file) and `npx vitest`
#### Vitest and 
- Vitest is imilar to Jest, but more modern approach and fully integrated with Vite
- [Jest Framework](https://jestjs.io/)

#### Vue Test Utils:


- end-to-end testing:
  - [cypress](https://www.cypress.io/)
  - [Plywright](https://playwright.dev/)

#### Cypress:
- lectures: [Implement the same test with cypress](https://www.youtube.com/watch?v=nLBwVOJDT1I)
