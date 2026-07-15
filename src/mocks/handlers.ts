import { http, HttpResponse, delay } from 'msw'
import { conversations } from './data'

const wait = async () => delay(200 + Math.random() * 300)
export const handlers = [
  http.get('/api/conversations', async () => { await wait(); return HttpResponse.json(conversations) }),
  http.patch('/api/conversations/:id', async ({ params, request }) => {
    await wait()
    if (Math.random() < 0.28) return HttpResponse.json({ message: 'Could not save this change. Please retry.' }, { status: 503 })
    const update = await request.json() as Record<string, unknown>
    const item = conversations.find((entry) => entry.id === params.id)
    if (!item) return new HttpResponse(null, { status: 404 })
    Object.assign(item, update)
    return HttpResponse.json(item)
  }),
]
