declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'marked' {
  export default function (input: string, options: any): any
}

declare module 'highlight.js' {
  export function highlightAuto(code: string): any
}

