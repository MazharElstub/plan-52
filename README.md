# Weekend Calendar App

A mobile-first calendar app focused on weekend planning, built with React Native, Expo, and Convex.

## Features

- **Dashboard View**: Visualize your next 12 months of weekends at a glance
- **Calendar View**: Scrollable monthly view with weekend events
- **Event Management**: Add plans or travel events for your weekends
- **User Profile**: Manage settings and preferences

## Tech Stack

- **Frontend**: React Native with Expo
- **Backend**: Convex (real-time database)
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet
- **Icons**: Expo Vector Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo Go app on your phone (for testing)
- iOS Simulator (Mac only) or Android Emulator (optional)

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd weekend-calendar-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
# Edit .env.local and add your Convex deployment URL
```

4. Start Convex development server:
```bash
npx convex dev
```

5. In a new terminal, start Expo:
```bash
npx expo start
```

### Running the App

- **iOS**: Press `i` in the terminal or scan QR code with Camera app
- **Android**: Press `a` in the terminal or scan QR code in Expo Go app
- **Web**: Press `w` in the terminal (limited functionality)

## Project Structure

```
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── dashboard.tsx  # 12-month weekend overview
│   │   ├── calendar.tsx   # Monthly calendar view
│   │   ├── add.tsx        # Add new event
│   │   └── profile.tsx    # User profile
│   └── _layout.tsx        # Root layout with Convex Provider
├── convex/                # Backend functions
│   ├── schema.ts          # Database schema
│   ├── events.ts          # Event CRUD operations
│   └── users.ts           # User management
├── components/            # Reusable components
└── assets/                # Images, fonts, etc.
```

## Database Schema

### Users
- Profile information
- Timezone settings
- Notification preferences

### Events
- Title and description
- Type (plans or travel)
- Weekend selection (Saturday/Sunday)
- Time settings (all-day or specific times)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.