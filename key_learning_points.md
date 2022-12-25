Key learnings points 学习要点：
============================
- ### Composition API:
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
      > For the most of the cases, `watch` and `watchEffect` have the same functionality, however, watch gives you more control and more readability, but too verbose, while watchEffect are simpler with less code but with different definition that not working with some other features such as debounce.
    - #### Teleport:
        - [`<Teleport>` is a built-in component that allows us to "teleport" a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.
          ](https://vuejs.org/guide/built-ins/teleport.html#teleport)
    - #### Composable:
        - [a "composable" is a function that leverages Vue's Composition API to encapsulate and resue **stateful logic**.](https://vuejs.org/guide/reusability/composables.html#composables)
  - #### [Experimental] `<Suspense>` (UX enhancement: 例如在调用后端MongoDB数据时)
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
----------------------------------------------------------------------------------------
- ### TypeScript:
    - Type constraint;
    - Type Guard;
    - `as const` way to create type definition on the fly;
    - `get` keyword to make a function/method accessible like an object attribute;
    - `async` and `await` keyword usage;

### Additional learning helpers
- Compare `pinia-reactive-store` branch with `custom-reactive-store`
    - checkout one of the branch, and Select project root folder, and right click `Git->Compare with branch`