import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineComponent, h } from 'vue'
import {
  MBody,
  MButton,
  MHtml,
  MImg,
  MLink,
  MText,
  render,
} from '../dist/index.js'

const Template = defineComponent({
  props: {
    ctaUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h(MHtml, null, () =>
        h(MBody, { class: 'email-body' }, () => [
          h(MImg, {
            alt: 'MySigMail',
            class: 'logo',
            height: '32',
            src: 'https://mysigmail.com/logo.svg',
            style: { margin: '0 auto' },
            width: '64',
          }),
          h(MText, null, () => `Hello ${props.name}`),
          h(MButton, {
            class: 'cta',
            href: props.ctaUrl,
            style: {
              backgroundColor: '#111111',
              color: '#ffffff',
              padding: '12px 16px',
            },
            target: '_self',
          }, () => 'Upgrade'),
          h(MLink, {
            href: props.ctaUrl,
            target: '_blank',
          }, () => props.ctaUrl),
        ]),
      )
  },
})

describe('SSR render', () => {
  it('renders component props on the server without document', async () => {
    const html = await render(Template, {
      ctaUrl: 'https://mysigmail.com',
      name: 'Anton',
    })

    assert.match(html, /^<!DOCTYPE html/)
    assert.match(html, /Anton/)
    assert.match(html, /https:\/\/mysigmail\.com/)
  })

  it('escapes unsafe prop values through Vue SSR', async () => {
    const html = await render(Template, {
      ctaUrl: 'https://mysigmail.com',
      name: '<script>alert(1)</script>',
    })

    assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/)
    assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/)
  })

  it('passes common email attributes through components', async () => {
    const html = await render(Template, {
      ctaUrl: 'https://mysigmail.com/pricing',
      name: 'Anton',
    })

    assert.match(html, /src="https:\/\/mysigmail\.com\/logo\.svg"/)
    assert.match(html, /alt="MySigMail"/)
    assert.match(html, /height="32"/)
    assert.match(html, /width="64"/)
    assert.match(html, /href="https:\/\/mysigmail\.com\/pricing"/)
    assert.match(html, /target="_self"/)
    assert.match(html, /target="_blank"/)
    assert.match(html, /class="cta"/)
    assert.match(html, /style="[^"]*padding:\s?12px 16px/)
  })

  it('supports plain text output', async () => {
    const text = await render(Template, {
      ctaUrl: 'https://mysigmail.com/pricing',
      name: 'Anton',
    }, { plain: true })

    assert.doesNotMatch(text, /<!DOCTYPE html/)
    assert.match(text, /Hello Anton/)
    assert.match(text, /https:\/\/mysigmail\.com\/pricing/)
  })
})
