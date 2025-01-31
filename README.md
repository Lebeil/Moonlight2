# 🌙 Moonlight - Event QR Manager

Application mobile pour la gestion d'événements avec système de QR codes. Développée avec React Native, Expo et PocketBase.

## 🚀 Applications

- **Guest App**: Application pour les participants
  - Inscription aux événements
  - Génération de QR codes personnels
  - Gestion des invitations

- **Security App**: Application pour les vigiles
  - Scan des QR codes
  - Validation des entrées
  - Historique des scans

## 🛠 Stack Technique

### Frontend
- React Native
- Expo
- TypeScript
- React Navigation
- React Query

### Backend
- Bun
- Hono
- PocketBase
- TypeScript

## 📦 Installation

```bash
# Installation des dépendances
bun install

# Démarrer PocketBase
cd backend
./pocketbase serve

# Démarrer le serveur backend (nouveau terminal)
cd backend
bun run dev

# Démarrer l'app Guest (nouveau terminal)
cd frontend/apps/guest-app
bun run start

# Démarrer l'app Security (nouveau terminal)
cd frontend/apps/security-app
bun run start
```

## 📱 Applications mobiles

Scannez le QR code avec l'app Expo Go ou votre appareil photo :
- 📱 Guest App: [Lien Expo]
- 🔒 Security App: [Lien Expo]

## 🔑 Variables d'environnement

```bash
# Backend
DATABASE_URL="votre_url"
PORT=3000

# Frontend
API_URL="http://localhost:3000"
```

## 📂 Structure du projet

```
moonlight/
├── backend/
│   ├── src/
│   └── pb_migrations/
└── frontend/
    └── apps/
        ├── guest-app/
        └── security-app/
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre guide de contribution pour commencer.

## 📝 License

MIT License - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.
