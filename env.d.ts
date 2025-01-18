/// <reference types="vite/client" />
// src/env.d.ts or src/shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  