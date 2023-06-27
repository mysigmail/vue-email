import nodemailer from 'nodemailer'

export interface Options {
  to: string
  subject: string
  html: string
}

const transporter = nodemailer.createTransport({
  host: process.env.NUXT_EMAIL_HOST,
  port: Number(process.env.NUXT_EMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.NUXT_EMAIL_USER,
    pass: process.env.NUXT_EMAIL_PASSWORD!,
  },
})

export function send(opts: Options) {
  const { to, subject, html } = opts

  const mailOptions = {
    from: process.env.NUXT_EMAIL_USER,
    to,
    subject: subject || 'MySigMail Email Preview',
  }

  const options = {
    ...mailOptions,
    html,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(options, (err) => {
      if (err)
        return reject(err)

      resolve('Email has been sent.')
    })
  })
}
