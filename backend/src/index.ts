import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { EventController } from './controllers/event.controller'
import PocketBase from 'pocketbase'

const app = new Hono()
const pb = new PocketBase('http://127.0.0.1:8090')

app.use('*', logger())
app.use('*', cors())

// Routes pour les événements
app.post('/events', EventController.create)
app.get('/events', EventController.list)

// Routes pour les invitations
app.post('/invitations', async (c) => {
    try {
        const body = await c.req.json()
        const record = await pb.collection('invitations').create({
            ...body,
            qrCode: crypto.randomUUID(),
            used: false
        })
        return c.json(record)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue'
        return c.json({ error: errorMessage }, 500)
    }
})

app.get('/', (c) => {
    return c.json({ message: 'Hello from Moonlight API!' })
})

export default {
    port: process.env.PORT || 3000,
    fetch: app.fetch
}
