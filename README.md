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
- First Run: `npm run dev`
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
  - `npm i -D @types/luxon@latest`
  - 
#### Git branches:
- main: working project with official documentation
- dev(default): development branch

