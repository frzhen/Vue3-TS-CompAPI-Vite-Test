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
  - ##### add body-parser
    - `npm i -D body-parser@latest @types/body-parser@latest`
    - add `import bodyParser from "body-parser";` to `server/index.ts`
    - add the following code in `server/index.ts` before api statements:
    ```tpescript
    app.use(bodyParser.json());
    ```
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
    - lodash debounce method was not build with Vue in mind, a better alternative is to use refDebounced in VueUse libraries.
  > This optimization only eliminate unnecessary server calling if an autocomplete mechanism is used with server calling. Thus, for this scenario, it is best to load the localstorage with necessary data instead of keep calling the backend server. Then, the only scenario left to implement this optimization is for large reactive rendering which is very seldom and can be eliminated by either further modularize the app or change the UI behavior. Thus, personally I am not recommend to use debounce which is "gasoline waste".
  > 
  > debounce only works with watch() not watchEffect since two has completely different definition underneath that debounce cannot fit the type. 
  > 
  > [Article: Debouncing and Throttling](https://medium.com/@akwebengineer/there-are-times-when-we-need-do-expensive-things-on-the-browser-such-as-handling-scroll-events-key-1a2a46404f5e)
  > 
  > [Article: The pros and cons of the Throttling architecture pattern](https://www.redhat.com/architect/pros-and-cons-throttling)
- #### 【Optional] VueUse libraries
  - [Article: Improving Reactivity with VueUse](https://vueschool.io/articles/vuejs-tutorials/improving-reactivity-with-vueuse/?utm_source=drip&utm_medium=email&utm_campaign=%F0%9F%92%A1%20Shape%20the%20future%20of%20Vue%20School%20with%20your%20feedback)
  - use refDebounced:
    - `npm i @vueuse/core@latest`
  > Though VueUse is supported by vue core team, the adoption/downloads are less than 400,000 at this point(December 2022) and the project is merely 3-years old. It is hard to determine the future of this library.


#### Git branches:
- main: working project with official documentation
- dev(default): development branch
- custom-reactive-store: a tiny custom state management tool;
- pinia-reactive-store: pinia implementation to custom-reactive-store's function
-------------------------------------------------------------

### [Key learnings points 学习要点：](key_learning_points.md)
