import { renderToString as rts } from 'vue/server-renderer'
import type { Component } from 'vue'
import { createApp } from 'vue'
import VueEmail from '@mysigmail/vue-email-components'

export function renderInIframe(el: HTMLDivElement, component: Component) {
  const iframe = document.createElement('iframe')
  iframe.width = '100%'
  iframe.height = '100%'
  // iframe.frameborder = 0

  iframe.onload = () => {
    const iframeDocument = iframe.contentDocument!
    const mount = iframeDocument!.createElement('div')

    iframeDocument.body.appendChild(mount)
    createApp(component).use(VueEmail).mount(mount)
  }

  el.appendChild(iframe)
}

export async function renderToString(component: Component) {
  const app = createApp(component).use(VueEmail)
  const re = /<!--\[-->|<!--\]-->/g
  const doctype
    = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'

  let string = await rts(app)
  string = string.replace(re, '')

  return doctype + string
}
