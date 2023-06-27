import type { Options } from '../../services/email'
import { send } from '../../services/email'

export default defineEventHandler(async (event) => {
  const body = await readBody<Options>(event)

  return send(body)
})
