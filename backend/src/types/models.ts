export interface User {
    id: string;
    name: string;
    phone: string;
    created: string;
    updated: string;
}

export interface Event {
    id: string;
    name: string;
    date: string;
    location: string;
    description?: string;
    maxAttendees?: number;
    created: string;
    updated: string;
}

export interface Invitation {
    id: string;
    event: string; // ID de l'événement
    user: string;  // ID de l'utilisateur
    qrCode: string;
    used: boolean;
    usedAt?: string;
    created: string;
    updated: string;
}
