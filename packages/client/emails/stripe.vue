<script setup lang="ts">
import type { CSSProperties } from 'vue'

const main: CSSProperties = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container: CSSProperties = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const button: CSSProperties = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'block',
  width: '100%',
  padding: '10px 10px',
}

const section: CSSProperties = {
  padding: '0 48px',
}

const hr: CSSProperties = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const paragraph: CSSProperties = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
}

const anchor: CSSProperties = {
  color: '#556cd6',
}

const footer: CSSProperties = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
}
</script>

<template>
  <MHtml>
    <MHead />
    <MPreview text="You're now ready to make live transactions with Stripe!" />
    <MBody :style="main">
      <MContainer :style="container">
        <MSection :style="section">
          <MImg
            src="/stripe-logo.png"
            width="49"
            height="21"
            alt="Stripe"
          />
          <MHr :style="hr" />
          <MText :style="paragraph">
            Thanks for submitting your account information. You're now ready to
            make live transactions with Stripe!
          </MText>
          <MText :style="paragraph">
            You can view your payments and a variety of other information about
            your account right from your dashboard.
          </MText>
          <MButton
            :p-x="10"
            :p-y="10"
            :style="button"
            href="https://dashboard.stripe.com/login"
          >
            View your Stripe Dashboard
          </MButton>
          <MHr :style="hr" />
          <MText :style="paragraph">
            If you haven't finished your integration, you might find our
            <MLink :style="anchor" href="https://stripe.com/docs">
              docs
            </MLink>
            handy.
          </MText>
          <MText :style="paragraph">
            Once you're ready to start accepting payments, you'll just need to
            use your live
            <MLink
              :style="anchor"
              href="https://dashboard.stripe.com/login?redirect=%2Fapikeys"
            >
              API keys
            </MLink>
            instead of your test API keys. Your account can simultaneously be
            used for both test and live requests, so you can continue testing
            while accepting live payments. Check out our
            <MLink :style="anchor" href="https://stripe.com/docs/dashboard">
              tutorial about account basics
            </MLink>
            .
          </MText>
          <MText :style="paragraph">
            Finally, we've put together a
            <MLink
              :style="anchor"
              href="https://stripe.com/docs/checklist/website"
            >
              quick checklist
            </MLink>
            to ensure your website conforms to card network standards.
          </MText>
          <MText :style="paragraph">
            We'll be here to help you with any step along the way. You can find
            answers to most questions and get in touch with us on our
            <MLink :style="anchor" href="https://support.stripe.com/">
              support site
            </MLink>
            .
          </MText>
          <MText :style="paragraph">
            — The Stripe team
          </MText>
          <MHr :style="hr" />
          <MText :style="footer">
            Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
          </MText>
        </MSection>
      </MContainer>
    </MBody>
  </MHtml>
</template>
