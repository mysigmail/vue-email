<script setup lang="ts">
import type { CSSProperties } from 'vue'

const main: CSSProperties = {
  backgroundColor: '#ffffff',
}

const container: CSSProperties = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
}

const h1: CSSProperties = {
  color: '#333',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
}

const link: CSSProperties = {
  color: '#2754C5',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '14px',
  textDecoration: 'underline',
}

const text: CSSProperties = {
  color: '#333',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '14px',
  margin: '24px 0',
}

const footer: CSSProperties = {
  color: '#898989',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
}

const code: CSSProperties = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
}

const loginCode = 'ses-jenti-ronge-quvri'
</script>

<template>
  <MHtml>
    <MHead />
    <MPreview text="Log in with this magic link" />
    <MBody :style="main">
      <MContainer :style="container">
        <MHeading :style="h1">
          Login
        </MHeading>
        <MLink
          href="https://notion.so"
          target="_blank"
          :style="{ ...link, display: 'block', marginBottom: '16px' }"
        >
          Click here to log in with this magic link
        </MLink>
        <MText :style="{ ...text, marginBottom: '14px' }">
          Or, copy and paste this temporary login code:
        </MText>
        <code :style="code">{{ loginCode }}</code>
        <MText
          :style="{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }"
        >
          If you didn&apos;t try to login, you can safely ignore this email.
        </MText>
        <MText
          :style="{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }"
        >
          Hint: You can set a permanent password in Settings & members → My
          account.
        </MText>
        <MImg
          src="/notion-logo.png"
          width="32"
          height="32"
          alt="Notion's Logo"
        />
        <MText :style="footer">
          <MLink
            href="https://notion.so"
            target="_blank"
            :style="{ ...link, color: '#898989' }"
          >
            Notion.so
          </MLink>
          , the all-in-one-workspace
          <br>
          for your notes, tasks, wikis, and databases.
        </MText>
      </MContainer>
    </MBody>
  </MHtml>
</template>
