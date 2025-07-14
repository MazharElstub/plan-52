import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCAi1hH7qM8InBMkYk8VTUbcT4tPz2sSUg",
  authDomain: "plan-9c311.firebaseapp.com",
  projectId: "plan-9c311",
  storageBucket: "plan-9c311.firebasestorage.app",
  messagingSenderId: "398435078786",
  appId: "1:398435078786:web:6a750f2dab42eb6ae05a9b"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const initializeFirebase = () => {
  console.log('Firebase initialized successfully');
  return app;
};

export default app;