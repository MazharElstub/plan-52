import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusDot } from './StatusDot';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    type: 'plan' | 'travel';
    date: string;
    startTime?: string;
    endTime?: string;
    days: {
      saturday: boolean;
      sunday: boolean;
    };
  };
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function EventCard({ event, onPress, onEdit, onDelete }: EventCardProps) {
  const getTypeIcon = () => {
    return event.type === 'travel' ? 'airplane' : 'calendar';
  };

  const getTypeColor = () => {
    return event.type === 'travel' ? '#fd7e14' : '#007AFF';
  };

  const formatDays = () => {
    if (event.days.saturday && event.days.sunday) {
      return 'Weekend';
    } else if (event.days.saturday) {
      return 'Saturday';
    } else if (event.days.sunday) {
      return 'Sunday';
    }
    return '';
  };

  const formatTime = () => {
    if (event.startTime && event.endTime) {
      return `${event.startTime} - ${event.endTime}`;
    }
    return '';
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <StatusDot status={event.type === 'travel' ? 'travel' : 'plans'} />
          <Text style={styles.title}>{event.title}</Text>
        </View>
        <View style={styles.actions}>
          {onEdit && (
            <TouchableOpacity onPress={onEdit} style={styles.actionButton}>
              <Ionicons name="pencil" size={16} color="#6c757d" />
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity onPress={onDelete} style={styles.actionButton}>
              <Ionicons name="trash" size={16} color="#dc3545" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      
      {event.description && (
        <Text style={styles.description}>{event.description}</Text>
      )}
      
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Ionicons name={getTypeIcon()} size={14} color={getTypeColor()} />
          <Text style={[styles.detailText, { color: getTypeColor() }]}>
            {event.type === 'travel' ? 'Travel' : 'Plan'}
          </Text>
        </View>
        
        <View style={styles.detailItem}>
          <Ionicons name="calendar" size={14} color="#6c757d" />
          <Text style={styles.detailText}>{formatDays()}</Text>
        </View>
        
        {formatTime() && (
          <View style={styles.detailItem}>
            <Ionicons name="time" size={14} color="#6c757d" />
            <Text style={styles.detailText}>{formatTime()}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    marginLeft: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 4,
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 12,
    lineHeight: 20,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 12,
    color: '#6c757d',
  },
});