import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddEvent() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    isTravel: false,
    selectedDays: { saturday: false, sunday: false },
    startTime: '',
    endTime: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Event</Text>
        <Text style={styles.subtitle}>Plan your weekend</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.label}>Event Title</Text>
          <TextInput
            style={styles.input}
            value={eventData.title}
            onChangeText={(text) => setEventData({...eventData, title: text})}
            placeholder="Enter event title"
          />
          
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={eventData.description}
            onChangeText={(text) => setEventData({...eventData, description: text})}
            placeholder="Enter event description"
            multiline
            numberOfLines={4}
          />
          
          <View style={styles.switchRow}>
            <Text style={styles.label}>Travel Event</Text>
            <Switch
              value={eventData.isTravel}
              onValueChange={(value) => setEventData({...eventData, isTravel: value})}
            />
          </View>
          
          <Text style={styles.label}>Select Days</Text>
          <View style={styles.daySelector}>
            <TouchableOpacity 
              style={[styles.dayButton, eventData.selectedDays.saturday && styles.selectedDay]}
              onPress={() => setEventData({
                ...eventData, 
                selectedDays: {...eventData.selectedDays, saturday: !eventData.selectedDays.saturday}
              })}
            >
              <Text style={[styles.dayText, eventData.selectedDays.saturday && styles.selectedDayText]}>
                Saturday
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.dayButton, eventData.selectedDays.sunday && styles.selectedDay]}
              onPress={() => setEventData({
                ...eventData, 
                selectedDays: {...eventData.selectedDays, sunday: !eventData.selectedDays.sunday}
              })}
            >
              <Text style={[styles.dayText, eventData.selectedDays.sunday && styles.selectedDayText]}>
                Sunday
              </Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save Event</Text>
          </TouchableOpacity>
        </View>
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
  form: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  daySelector: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  dayButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#dee2e6',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  dayText: {
    fontSize: 16,
    color: '#212529',
  },
  selectedDayText: {
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});