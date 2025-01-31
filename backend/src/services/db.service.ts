import PocketBase from 'pocketbase';
import type { User, Event } from '../types/models';

const pb = new PocketBase('http://127.0.0.1:8090');

export const DbService = {
    // Users
    async createUser(data: Partial<User>) {
        return await pb.collection('users').create(data);
    },

    async getUserByPhone(phone: string) {
        return await pb.collection('users').getFirstListItem(`phone="${phone}"`);
    },

    // Events
    async createEvent(data: Partial<Event>) {
        return await pb.collection('events').create(data);
    },

    async getEvent(id: string) {
        return await pb.collection('events').getOne(id);
    },

    async listEvents(page = 1) {
        return await pb.collection('events').getList(page, 50);
    },

    // Invitations
    async createInvitation(eventId: string, userId: string) {
        return await pb.collection('invitations').create({
            event: eventId,
            user: userId,
            qrCode: crypto.randomUUID(),
            used: false
        });
    },

    async validateInvitation(qrCode: string) {
        const invitation = await pb.collection('invitations').getFirstListItem(`qrCode="${qrCode}"`);
        if (invitation.used) {
            throw new Error('QR Code déjà utilisé');
        }
        return await pb.collection('invitations').update(invitation.id, {
            used: true,
            usedAt: new Date().toISOString()
        });
    }
}; 