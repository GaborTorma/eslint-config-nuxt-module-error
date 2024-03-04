declare module '#app' {
  interface NuxtApp {
    $any(template: string): string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $any(template: string): string
  }
}

declare const _default: any
export default _default
