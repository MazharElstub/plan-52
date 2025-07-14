import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WeekendGrid } from '../../components/WeekendGrid';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weekend Planner</Text>
        <Text style={styles.subtitle}>Next 12 Months</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <WeekendGrid />
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
});