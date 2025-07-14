import { 
  signInWithEmailAndPassword as firebaseSignIn,
  createUserWithEmailAndPassword as firebaseCreateUser,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { auth } from './config';

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await firebaseSignIn(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const createUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await firebaseCreateUser(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export { auth };