/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    readonly STORYBOOK_FIGMA_ACCESS_TOKEN:string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}