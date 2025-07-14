import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(email, password);
      } else {
        await signInWithEmailAndPassword(email, password);
      }
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Weekend Planner</Text>
        <Text style={styles.subtitle}>
          {isSignUp ? 'Create your account' : 'Welcome back'}
        </Text>
        
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleAuth}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {isLoading ? 'Loading...' : (isSignUp ? 'Sign Up' : 'Sign In')}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.switchButton}
            onPress={() => setIsSignUp(!isSignUp)}
          >
            <Text style={styles.switchButtonText}>
              {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 40,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  switchButton: {
    alignItems: 'center',
  },
  switchButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
});