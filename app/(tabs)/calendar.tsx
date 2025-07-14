import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EventCard } from '../../components/EventCard';

export default function Calendar() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendar View</Text>
        <Text style={styles.subtitle}>Monthly weekend details</Text>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Monthly calendar cards will be rendered here */}
        <Text style={styles.placeholder}>Calendar view coming soon...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginTop: 4,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  placeholder: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginTop: 50,
  },
});