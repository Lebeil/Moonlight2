import type { Context } from 'hono';
import { DbService } from '../services/db.service';

export const EventController = {
    async create(c: Context) {
        try {
            const body = await c.req.json();
            const event = await DbService.createEvent(body);
            return c.json(event, 201);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
            return c.json({ error: errorMessage }, 500);
        }
    },

    async list(c: Context) {
        try {
            const events = await DbService.listEvents();
            return c.json(events);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
            return c.json({ error: errorMessage }, 500);
        }
    }
}; 