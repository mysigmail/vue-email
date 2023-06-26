<script setup lang="ts">
import type { CSSProperties } from 'vue'

const main: CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container: CSSProperties = {
  width: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
}

const title: CSSProperties = {
  fontSize: '24px',
  lineHeight: 1.25,
}

const section: CSSProperties = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center',
}

const text: CSSProperties = {
  margin: '0 0 10px 0',
  textAlign: 'left',
}

const button: CSSProperties = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '0.75em 1.5em',
}

const links: CSSProperties = {
  textAlign: 'center',
}

const link: CSSProperties = {
  color: '#0366d6',
  fontSize: '12px',
}

const footer: CSSProperties = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center',
  marginTop: '60px',
}

const username = 'antonreshetov'
</script>

<template>
  <MHtml>
    <MHead />
    <MPreview text="A fine-grained personal access token has been added to your account" />
    <MBody :style="main">
      <MContainer :style="container">
        <MImg width="32" height="32" alt="Github" src="/github.png" />
        <MText :style="title">
          <strong>@{{ username }}</strong>, a personal access was created on your
          account.
        </MText>
        <MSection :style="section">
          <MText :style="text">
            Hey <strong>{{ username }}</strong>!
          </MText>
          <MText :style="text">
            A fine-grained personal access token (<MLink>resend</MLink>) was
            recently added to your account.
          </MText>
          <MButton :style="button">
            View your token
          </MButton>
        </MSection>
        <MText :style="links">
          <MLink :style="link">
            Your security audit log
          </MLink>&nbsp;・&nbsp;
          <MLink :style="link">
            Contact support
          </MLink>
        </MText>
        <MText :style="footer">
          GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
        </MText>
      </MContainer>
    </MBody>
  </MHtml>
</template>
