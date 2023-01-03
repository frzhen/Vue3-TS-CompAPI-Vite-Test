Component Testing (Vitest, Vue Test Utils)
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

----------------------------------------------------
#### Vitest
- Vitest is similar to Jest, but more modern approach and fully integrated with Vite
- [Jest Framework](https://jestjs.io/)
- ##### [API Reference](https://vitest.dev/api/)
  - [describe](https://vitest.dev/api/#describe)
  - [it](https://vitest.dev/api/#test):
      - [`.only`](https://vitest.dev/api/#test-only): only run this test in the file, skipped the rest of the tests;
      - [`.concurrent`](https://vitest.dev/api/#test-concurrent): run tests concurrently;
      - [`.skip`](https://vitest.dev/api/#test-skip): skip certain tests;
      - [`.runIf`](https://vitest.dev/api/#test-runif): run when a condition is met;
      - [`.todo`](https://vitest.dev/api/#test-todo): means to implement the test later, an entry will show on report;
      - [`.fails`](https://vitest.dev/api/#test-fails): indicate that an assertion will fail explicitly;
  - [`expect`](https://vitest.dev/api/#expect): used to create assertions;
  - [`toBe`](https://vitest.dev/api/#tobe): can be used to assert if primitives are equal or that objects share the same reference;

----------------------------------------------------
#### Vue Test Utils:
- [API Reference](https://test-utils.vuejs.org/api/)
- [`mount` function](https://test-utils.vuejs.org/api/#mount)
- [Wrapper methods](https://test-utils.vuejs.org/api/#wrapper-methods)
  - [`find`](https://test-utils.vuejs.org/api/#find): Finds an element and returns a DOMWrapper if one is found;
  - [`exists`](https://test-utils.vuejs.org/api/#exists): Verify whether an element exists or not;
  - [`html()`](https://test-utils.vuejs.org/api/#html): Returns the HTML of an element;
  - [`text`](https://test-utils.vuejs.org/api/#text): Returns the text content of an element;
  - [`setValue`](https://test-utils.vuejs.org/api/#setvalue): Sets a value on DOM element, including `<input>`, `<select>`;
  - [`global`](https://test-utils.vuejs.org/api/#global):
    - [`global.plugins](https://test-utils.vuejs.org/api/#global-plugins): Installs plugins on the mounted component;


- end-to-end testing:
  - [cypress](https://www.cypress.io/)
  - [Plywright](https://playwright.dev/)

#### Cypress:
- Lectures: [Implement the same test with cypress](https://www.youtube.com/watch?v=nLBwVOJDT1I)
