import type { Component } from 'vue'
import { createApp, createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import pretty from 'pretty'
import { convert } from 'html-to-text'

const DOCTYPE = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'
const VUE_FRAGMENT_MARKERS_RE = /<!--\[-->|<!--\]-->/g

export interface RenderOptions {
  plain?: boolean
  pretty?: boolean
}

type RenderProps = Record<string, unknown>

function formatDocument(html: string, options?: RenderOptions): string {
  const document = `${DOCTYPE}${html.replace(VUE_FRAGMENT_MARKERS_RE, '')}`

  if (options?.plain)
    return convert(document)

  if (options?.pretty === false)
    return document

  return pretty(document)
}

/**
 * Renders a Vue component to an HTML string with Vue SSR.
 * Props are passed to the component as regular Vue props.
 */
export async function render<T extends Component>(
  Component: T,
  props?: RenderProps,
  options?: RenderOptions,
): Promise<string> {
  const app = createSSRApp({
    render: () => h(Component, props),
  })
  const html = await renderToString(app)

  return formatDocument(html, options)
}

/**
 * Browser-only sync renderer. Use render() for backend/server rendering.
 */
export function renderBrowser<T extends Component>(
  Component: T,
  props?: RenderProps,
  options?: RenderOptions,
): string {
  const app = createApp({
    render: () => h(Component, props),
  })
  const element = document.createElement('div')
  const appEl = app.mount(element).$el as HTMLElement

  return formatDocument(appEl.outerHTML, options)
}
