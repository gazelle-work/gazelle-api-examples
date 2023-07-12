// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import { config } from 'dotenv'
import invariant from 'invariant'
import fetch from 'node-fetch'

config()
const FASAD_AUTH_SECRET = process.env.FASAD_AUTH_SECRET
invariant(FASAD_AUTH_SECRET, 'FASAD_AUTH_SECRET is not defined')

const baseUrl = 'https://europe-west3-gazelle-4d5d9.cloudfunctions.net/fasadApi'

// const url = addQueryParamsToUrl(`${baseUrl}/fasad-session`, { objectId: '123' })

fetch(`${baseUrl}/fasad-session`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer + ${FASAD_AUTH_SECRET}`
  },
  method: 'POST',
  body: JSON.stringify({
    objectId: 'objectId',
    userId: 'userId',
    successCallbackUrl: 'https://www.exmple.com/callbackUrl'
  })
})
  .then((res) => res.text())
  .then(console.log)
  .catch(console.error)
