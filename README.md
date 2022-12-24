A Complete Vue3 Composition API in TypeScript
=============================================
### 创建项目（WebStorm)
- 打开Webstorm， settings->Plugins->在Market Place搜索Vite Integrated并安装；
- 在welcome页面点击`New Project`, 或者File->New->Project，打开新项目弹框
- 选择左手边倒数第二个（第二个Vite标志）,在右边`Template`选项中选择`vue-ts`;
- 弹出填写项目名称的CLI，填入项目名称；
- 升级dependencies:
  - `npm i -D vite@latest`
  - `npm i -D @vitejs/plugin-vue@latest`
  - `npm i -D typescript@latest`
  - `npm i -D vue-tsc@latest`
  - `npm i vue@latest`
  - `npm i -D concurrently`

> First Run: `npm run start`, this will run both the express server and the app.
> Note: 以上dependencies clone 项目后`npm i`就可以了。
- #### install bulma
  - `npm i bulma@latest`
- #### install fontawesome
  - `npm i @fortawesome/fontawesome-free@latest`
- #### simple line icons
  - `npm i simple-line-icons@latest`
- 添加以上dependencies到`main.ts`
    ```typescript
    import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
    import '../node_modules/simple-line-icons/css/simple-line-icons.css';
    import '../node_modules/bulma/css/bulma.min.css';
    ```
- #### Add Sass support
  - `npm i -D sass`
  - create a `main.scss` and add to `main.ts`
      ```typescript
      import '../src/assets/scss/main.scss'
      ```
- #### Add Pinia:
  - `npm i pinia@latest`
  - add `import { createPinia } from 'pinia'` to `main.ts`
  - add the following code to `main.ts` by change the `use(createPinia())` to the existing app creation statement.:
  ```typescript
  createApp(App)
  .use(createPinia())
  .mount('#app');
  ```
  > Note: All `use` method must be invoked before `mount` method.
  > Reference Documentation: [pinia 中文文档](https://pinia.vuejs.org/zh/introduction.html)
- #### Add vue-router
  - `npm i vue-router@latest`

--------------------------------------------------------------------
### 项目支持
- #### Create a Vue-TS code template in WebStorm
  - Go to `settings->Editor->File and code templates`
  - On the right side, select "Default" `Scheme`(`Project`scheme cannot be re-used for other project)
  - At the files tab, click `+` icon and new file template as the follows:
  ```vue
  
    <!--
      * @Author: Fred R. Zhen
      * @Date: ${DATE} ${TIME}
      * @Email: fred.zhen@gmail.com
    -->
    <script setup lang="ts">
    
    </script>
    
    <template>
    
    </template>
    
    <style lang='scss' scoped>
    
    </style>
   ```
- #### add third-party datetime support: luxon
  - `npm i -D luxon@latest @types/luxon@latest`
- #### add node and express server:
  - `npm i -D express@latest @types/express@latest cors@latest @types/cors@latest ts-node@latest`
  - add the following to the tsconfig.json:
  ```
    "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
  ```
  - create a mew directory `server` and a new file under the `server/` called `index.ts`
  - check out the server code in `./src/server/index.ts` for detail.
  - add the following script to `package.json`:
  ```
  "server": "npx ts-node src/server/index.ts",
  ```
  - `npm run server` to run the express server
- #### Add Markdown support
  - `npm i marked@latest @types/marked@latest`
  - [reference to marked package](https://marked.js.org/)
- #### Add Syntax Highlighting support
  - `npm i highlight.js@latest`
  - [highlight.js documentation](https://highlightjs.org/)
- #### [Optional] Optimization with `lodash` library
  - `npm i lodash@latest @types/lodash@latest`
  - [lodash documentation](https://lodash.com/docs/4.17.15)
  - using debounce to delay the reactivity for optimization of large content
  - add import statement inside vue component to use debounce:
    - `import debounce from "lodash/debounce";`
  > This optimization only eliminate unnecessary server calling if an autocomplete mechanism is used with server calling. Thus, for this scenario, it is best to load the localstorage with necessary data instead of keep calling the backend server. Then, the only scenario left to implement this optimization is for large reactive rendering which is very seldom and can be eliminated by either further modularize the app or change the UI behavior. Thus, personally I am not recommend to use debounce which is "gasoline waste".
  > 
  > debounce only works with watch() not watchEffect since two has completely different definition underneath that debounce cannot fit the type. 
  > 
  > [Article: Debouncing and Throttling](https://medium.com/@akwebengineer/there-are-times-when-we-need-do-expensive-things-on-the-browser-such-as-handling-scroll-events-key-1a2a46404f5e)
  > 
  > [Article: The pros and cons of the Throttling architecture pattern](https://www.redhat.com/architect/pros-and-cons-throttling)



#### Git branches:
- main: working project with official documentation
- dev(default): development branch
- custom-reactive-store: a tiny custom state management tool;
- pinia-reactive-store: pinia implementation to custom-reactive-store's function
-------------------------------------------------------------
Key learnings points 学习要点：
============================
- Composition API:
  - pure JS/TS style script writing instead of option API's fragmented helper style script
  - #### reactive methods:
    - `ref` method: reactive method to link in-component parameters/objects, good for primitive datatype, i.e. number, string;
    > `ref` can also used to create reactive dom nodes with contenteditable property
    - `reactive` method: good for complex objects such as {} object, Map, Set;
    - [Article: Vue 3 Composition API -  ref and reactive](https://labs.thisdot.co/blog/vue-3-composition-api-ref-and-reactive)
  - `computed` method: reactive method for functional components such as derived value such as map, reduce, filter data;
  - `defineProps` method: as same as props in option API;
  - `readonly`: make the object not able to mutate directly, but still reactive;
  - `v-html`: when you're using this directive, re-think if it can be replaced by a new component.
  - #### `watch` and `watchEffect` methods: 
    - differentiate between watch and computed method. The watch method is best to use on the case that an async operation need a DOM mutation and state effect.
    - Differences between `watch` and `watchEffect`:
      - `watch` can be used to lazily trigger side effects(`watchEffect` is always immediate);
      - `watchEffect` automatically watches for changes to any state changes (`watch` must be provided with a variable to watch);
      - `watch` provides access to the current and previous values.
    - [Article: Vue 3 Composition API - watch and watchEffect](https://www.thisdot.co/blog/vue-3-composition-api-watch-and-watcheffect)
    > For the most of the cases, `watch` and `watchEffect` have the same functionality, however, watch gives you more control and more readability, but too verbose, while watchEffect are simpler with less code. In this project, we chose simplicity over readability.
  - #### Composable: 
- TypeScript:
  - Type constraint;
  - Type Guard;
  - `as const` way to create type definition on the fly;
  - `get` keyword to make a function/method accessible like an object attribute;
  - `async` and `await` keyword usage;
- #### Suspense (UX enhancement: 例如在调用后端MongoDB数据时) 
  - Wrap vue components with `<Suspense></Suspense>`
  - Within the `<Suspense>` tags add two `<template>` tags:
    - default template: `<template #default>` to wrap your vue components;
    - fallback template: `<template #fallback>` to wrap your suspension vue components while you wait for the promise to return.
  - add `await` keyword in front of your promise function. For instance, your fetch data functions;
  > [Suspense for vue](https://vuejs.org/guide/built-ins/suspense.html), [Suspense for Vue中文链接](https://cn.vuejs.org/guide/built-ins/suspense.html)
  > 
  > `<progress>` usage to enhance fallback style: `<progress class="progress is-primary is-small />`; 
  > 
  > Reference: [HTML progress tag](https://www.w3schools.com/tags/tag_progress.asp)


#### Additional learning helpers
- Compare `pinia-reactive-store` branch with `custom-reactive-store`
  - checkout one of the branch, and Select project root folder, and right click `Git->Compare with branch`

