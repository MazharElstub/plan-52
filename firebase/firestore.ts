import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { firestore } from './config';

export interface Event {
  id: string;
  userId: string;
  title: string;
  description: string;
  type: 'plan' | 'travel';
  date: string;
  days: {
    saturday: boolean;
    sunday: boolean;
  };
  startTime?: string;
  endTime?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Events collection functions
export const createEvent = async (eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(firestore, 'events'), {
      ...eventData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateEvent = async (eventId: string, eventData: Partial<Event>) => {
  try {
    const eventRef = doc(firestore, 'events', eventId);
    await updateDoc(eventRef, {
      ...eventData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (eventId: string) => {
  try {
    await deleteDoc(doc(firestore, 'events', eventId));
  } catch (error) {
    throw error;
  }
};

export const getEvent = async (eventId: string): Promise<Event | null> => {
  try {
    const docSnap = await getDoc(doc(firestore, 'events', eventId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Event;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const getUserEvents = async (userId: string): Promise<Event[]> => {
  try {
    const q = query(
      collection(firestore, 'events'),
      where('userId', '==', userId),
      orderBy('date', 'asc')
    );
    const querySnapshot = await getDocs(q);
    const events: Event[] = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() } as Event);
    });
    return events;
  } catch (error) {
    throw error;
  }
};

export const subscribeToUserEvents = (userId: string, callback: (events: Event[]) => void) => {
  const q = query(
    collection(firestore, 'events'),
    where('userId', '==', userId),
    orderBy('date', 'asc')
  );
  
  return onSnapshot(q, (querySnapshot) => {
    const events: Event[] = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() } as Event);
    });
    callback(events);
  });
};

// User profile functions
export const createUserProfile = async (userData: Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(firestore, 'users'), {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfile = async (userId: string, userData: Partial<UserProfile>) => {
  try {
    const userRef = doc(firestore, 'users', userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const docSnap = await getDoc(doc(firestore, 'users', userId));
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as UserProfile;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export { firestore };