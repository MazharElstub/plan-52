import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initializeFirebase } from '../firebase/config';
import { AuthProvider } from '../firebase/AuthContext';

export default function RootLayout() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}