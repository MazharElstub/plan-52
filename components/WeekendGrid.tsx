import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusDot } from './StatusDot';

interface WeekendGridProps {
  onWeekendPress?: (date: string) => void;
}

export function WeekendGrid({ onWeekendPress }: WeekendGridProps) {
  // Generate 12 months of weekends starting from current month
  const generateWeekends = () => {
    const currentDate = new Date();
    const months = [];
    
    for (let i = 0; i < 12; i++) {
      const month = new Date(currentDate.getFullYear(), currentDate.getMonth() + i);
      const monthName = month.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      
      // Generate weekends for this month
      const weekends = [];
      const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
      const lastDay = new Date(month.getFullYear(), month.getMonth() + 1, 0);
      
      for (let day = 1; day <= lastDay.getDate(); day++) {
        const date = new Date(month.getFullYear(), month.getMonth(), day);
        if (date.getDay() === 6) { // Saturday
          const saturday = new Date(date);
          const sunday = new Date(date);
          sunday.setDate(saturday.getDate() + 1);
          
          // Only add if Sunday is still in the same month
          if (sunday.getMonth() === month.getMonth()) {
            weekends.push({
              saturday: saturday.toISOString().split('T')[0],
              sunday: sunday.toISOString().split('T')[0],
              status: 'free' as const, // TODO: Get actual status from Firebase
            });
          }
        }
      }
      
      months.push({
        name: monthName,
        weekends,
      });
    }
    
    return months;
  };

  const months = generateWeekends();

  return (
    <View style={styles.container}>
      {months.map((month, monthIndex) => (
        <View key={monthIndex} style={styles.monthCard}>
          <Text style={styles.monthTitle}>{month.name}</Text>
          <View style={styles.weekendsContainer}>
            {month.weekends.map((weekend, weekendIndex) => (
              <TouchableOpacity
                key={weekendIndex}
                style={styles.weekendItem}
                onPress={() => onWeekendPress?.(weekend.saturday)}
              >
                <StatusDot status={weekend.status} size={16} />
                <Text style={styles.weekendDate}>
                  {new Date(weekend.saturday).getDate()}-{new Date(weekend.sunday).getDate()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  monthCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  monthTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 12,
    textAlign: 'center',
  },
  weekendsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 8,
  },
  weekendItem: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    minWidth: 40,
  },
  weekendDate: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 4,
    textAlign: 'center',
  },
});