# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a weekend-only calendar app designed to help users plan their weekend activities. The app is primarily mobile-focused but also works on web platforms.

### Core Features

1. **Dashboard View**: 12-month weekend overview with status dots
   - Each month displayed as a card with 4-5 weekends
   - Status indicators: Free, Plans, Travel
   - No scrolling required for full year view

2. **Calendar View**: Scrollable month-by-month view
   - Weekend cards with event details
   - Detailed information for planned events

3. **Add Event View**: Event creation interface
   - Year → Month → Weekend selection flow
   - Event fields: title, description, type (plan/travel), day selection, times
   - Integrated date picker for modifications

4. **Profile Section**: User account management
   - Settings, notifications, account preferences

## Tech Stack

- **Frontend**: React Native with Expo Router
- **Database**: Firebase Firestore (real-time sync, fast loading)
- **Authentication**: Firebase Authentication
- **Styling**: CSS-in-JS or styled-components
- **Platform**: iOS and Android compatible

## Architecture

### Core Components
- `Dashboard`: Main 12-month weekend grid view
- `Calendar`: Monthly scrollable calendar with weekend cards
- `AddEvent`: Event creation and editing interface
- `Profile`: User settings and account management

### Data Models
- **Events**: title, description, type (plan/travel), weekend date, day (Sat/Sun/both), start/end times
- **Users**: profile, settings, preferences
- **Weekends**: date references, status calculations

### Key Design Principles
- **Mobile-first**: Optimized for mobile viewport and touch interactions
- **Real-time sync**: Firebase Firestore enables instant updates across devices
- **Simple & stylish**: Clean, intuitive interface
- **Weekend-focused**: All views and interactions centered on weekend planning

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npx expo start

# Run on iOS simulator
npx expo start --ios

# Run on Android emulator
npx expo start --android

# Build for production
npx expo build

# Firebase setup
firebase login
firebase init
firebase deploy
```

## Project Structure

```
app/
├── (tabs)/
│   ├── dashboard.tsx      # Main 12-month weekend view
│   ├── calendar.tsx       # Monthly calendar view
│   ├── add.tsx           # Event creation
│   └── profile.tsx       # User settings
├── auth/
│   └── login.tsx         # Authentication
└── _layout.tsx           # Root layout

components/
├── EventCard.tsx         # Weekend event display
├── StatusDot.tsx         # Weekend status indicator
└── WeekendGrid.tsx       # Dashboard grid component

firebase/
├── config.ts             # Firebase configuration
├── firestore.ts          # Firestore database operations
├── auth.ts               # Authentication functions
└── events.ts             # Event CRUD operations
```

## Key Implementation Notes

### Weekend Status Logic
- **Free**: No events planned
- **Plans**: Flexible local activities (can add more)
- **Travel**: Away from home (blocks additional planning)

### Mobile Optimization
- Dashboard fits 12 months without scrolling
- Touch-friendly interface elements
- Responsive design for different screen sizes

### Real-time Features
- Instant sync across devices using Firebase Firestore
- Real-time listeners for live updates
- Optimistic updates for better UX
- Offline support with Firestore caching

### Authentication
- Firebase Authentication with email/password and social providers
- User accounts required for cross-device sync
- Secure session management
- Profile customization options

### Firebase Setup
- Configure Firebase project with Firestore and Authentication
- Set up security rules for user data protection
- Enable offline persistence for better mobile experience
- Use Firebase collections: `users`, `events`, `weekends`