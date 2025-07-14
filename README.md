# Weekend Planner

A mobile-first weekend calendar app built with React Native and Expo Router, designed to help users plan their weekend activities.

## Features

- **Dashboard View**: 12-month weekend overview with status indicators
- **Calendar View**: Monthly scrollable calendar with event details
- **Event Management**: Add, edit, and delete weekend events
- **Event Types**: Distinguish between flexible plans and travel commitments
- **Real-time Sync**: Firebase Firestore for cross-device synchronization
- **Authentication**: Firebase Auth with email/password

## Tech Stack

- **Frontend**: React Native with Expo Router
- **Database**: Firebase Firestore
- **Authentication**: Firebase Authentication
- **Platform**: iOS and Android compatible

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Firebase:
   - Create a new Firebase project
   - Enable Firestore and Authentication
   - Update `firebase/config.ts` with your Firebase configuration

3. Start the development server:
   ```bash
   npm start
   ```

4. Run on your platform:
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web
   npm run web
   ```

## Project Structure

```
app/
├── (tabs)/           # Tab navigation screens
├── auth/             # Authentication screens
└── _layout.tsx       # Root layout

components/           # Reusable UI components
firebase/            # Firebase configuration and services
```

## Firebase Collections

- `users`: User profiles and settings
- `events`: Weekend events with details
- `weekends`: Weekend status calculations (optional)

## License

MIT License