/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  // Users collection (pour les teufeurs)
  const users = new Collection({
    name: 'users',
    type: 'auth',  // Type auth pour permettre l'authentification
    schema: [
      { name: 'name', type: 'text', required: true },
      { name: 'phone', type: 'text', required: true }
    ]
  });
  
  // Events collection (pour les soirées)
  const events = new Collection({
    name: 'events',
    type: 'base',
    schema: [
      { name: 'name', type: 'text', required: true },
      { name: 'date', type: 'date', required: true },
      { name: 'location', type: 'text', required: true },
      { name: 'description', type: 'text' },
      { name: 'maxAttendees', type: 'number' }
    ]
  });

  // Invitations collection (pour les QR codes)
  const invitations = new Collection({
    name: 'invitations',
    type: 'base',
    schema: [
      { name: 'event', type: 'relation', required: true, options: { collectionId: 'events' } },
      { name: 'user', type: 'relation', required: true, options: { collectionId: 'users' } },
      { name: 'qrCode', type: 'text', required: true, unique: true },
      { name: 'used', type: 'bool', default: false },
      { name: 'usedAt', type: 'date' }
    ]
  });

  return { collections: [users, events, invitations] }
}); 