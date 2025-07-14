import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { initializeFirebase } from '../firebase/config';

export default function RootLayout() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}