import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import PocketBase from 'pocketbase'

const app = new Hono()
const pb = new PocketBase('http://127.0.0.1:8090')

app.use('*', logger())
app.use('*', cors())

// Routes pour les événements
app.get('/events', async (c) => {
    try {
        const events = await pb.collection('events').getList(1, 50)
        return c.json(events)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue'
        return c.json({ error: errorMessage }, 500)
    }
})

app.post('/events', async (c) => {
    try {
        const body = await c.req.json()
        const record = await pb.collection('events').create(body)
        return c.json(record)
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue'
        return c.json({ error: errorMessage }, 500)
    }
})

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
