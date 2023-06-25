import type { Component, Plugin } from 'vue'
import { createApp } from 'vue'
import pretty from 'pretty'
import { convert } from 'html-to-text'

/**
 * Renders a Vue component to an HTML string.
 * @param {new(): T} Component - The Vue component to render.
 * @param {Plugin} [use] - The Vue plugin to use.
 * @param {boolean} [plain] - Whether to return plain text or pretty HTML.
 * @returns {string} The rendered HTML string.
 */
export function render<T extends Component>(
  Component: { new (): T },
  use?: Plugin,
  plain?: boolean,
): string {
  const doctype
    = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'

  const app = createApp(Component)

  if (use)
    app.use(use)

  const element = document.createElement('div')
  const appEl = app.mount(element).$el as HTMLHtmlElement

  const doc = `${doctype}${appEl.outerHTML}`

  return plain ? convert(doc) : pretty(doc)
}
