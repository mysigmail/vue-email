const html = ref('')
const subject = ref('')
const text = ref('')
const to = ref('')

export function useState() {
  return {
    html,
    subject,
    text,
    to,
  }
}
