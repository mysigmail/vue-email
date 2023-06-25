import type { App } from 'vue'
import * as components from '.'

export function install(app: App) {
  for (const key in components)
    app.component(key, (components as any)[key])
}
