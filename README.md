<img src="./hero.jpg">

<h1 align="center">Vue Email Components</h1>

<p align="center">A collection of high-quality, unstyled components<br>for creating beautiful emails using Vue.</p>

<p align="center">
  <a href="https://vue-email.mysigmail.com">Demo</a>
</p>

<p align="center">
  <strong>SPONSORS</strong>
</p>

<p align="center">
  <a href="https://m.do.co/c/f2bb3bfab2e6">
    <img src='.github/assets/DO.svg'>
  </a>
  &nbsp;
  <a href="https://mysigmail.com/?ref=github/massCodeIO">
    <img src='.github/assets/MySigMail.svg'>
  </a>
</p>

## Support

If you find this project useful, you can support development via the following methods:

<div align="center">

[![Donate via PayPal](https://img.shields.io/badge/donate-PayPal-blue.svg?style=popout&logo=paypal)](https://paypal.me/antongithub)

</div>

## Introduction

Reduces the difficulty of coding responsive emails, easing the challenges of development and ensuring consistency across various email clients, such as Gmail, Outlook, and others.

## Motivation

Email still remains one of the most widely used and popular communication channels to this day, and its popularity shows no signs of diminishing over time.

We aim to simplify the process of creating emails and make it more accessible for everyone.

## Install

```bash
pnpm add @mysigmail/vue-email-components
```

## Use

### Global

```js
import { createApp } from 'vue'
import App from './App.vue'
import VueEmail from '@mysigmail/vue-email-components'

createApp(App).use(VueEmail).mount('#app')
```

### Local

```html
<script setup>
import { MButton } from '@mysigmail/vue-email-components'
</script>

<template>
  <div>
    <MButton>Click me</MButton>
  </div>
</template>
```

### Render to HTML

```html
<script setup>
import { render } from '@mysigmail/vue-email-components'
import YourEmail from './YourEmail.vue'

const html = render(YourEmail)
</script>
```

## Components

This is a collection of pre-built components that can be used to create impressive emails without the hassle of manually creating tables and managing outdated code.

- [MBody](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/body)
- [MButton](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/button)
- [MColumn](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/column)
- [MContainer](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/container)
- [MHead](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/head)
- [MHeading](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/heading)
- [MHr](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/hr)
- [MHtml](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/html)
- [MImage](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/img)
- [MLink](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/link)
- [MPreview](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/preview)
- [MSection](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/section)
- [MText](https://github.com/mysigmail/vue-email/tree/main/packages/components/src/text)

## Client

This repository contains a client application that serves as a local testing environment. Using this client, you can create email templates by selecting from pre-built components, apply styles to these components, preview the final render, and obtain the corresponding HTML code. You can also perform a test send email.

### Install

```bash
git clone https://github.com/mysigmail/vue-email.git

pnpm install
```

### Environment

Set up variables for test email sending.

```bash
NUXT_EMAIL_HOST= # The hostname of the SMTP server used to send emails.
NUXT_EMAIL_PORT= # The port of the SMTP server.
NUXT_EMAIL_USER= # The username used to authenticate on the SMTP server.
NUXT_EMAIL_PASSWORD= # The password used to authenticate on the SMTP server.
```

### Run

```bash
pnpm run dev
```

### Development

To start developing your next email template, create a <code>.vue</code> file in the <code>packages/client/emails</code> folder.


## TODO

- [x] Test sending an email using Nodemailer.
- [ ] Add the script to the automatic setup for the client.
## Other

Inspired by [react-email](https://github.com/resendlabs/react-email)

## License

MIT

Copyright (c) 2023-present, [Anton Reshetov](https://github.com/antonreshetov).