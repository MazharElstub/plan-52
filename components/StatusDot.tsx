import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StatusDotProps {
  status: 'free' | 'plans' | 'travel';
  size?: number;
}

export function StatusDot({ status, size = 12 }: StatusDotProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'free':
        return '#28a745'; // Green
      case 'plans':
        return '#007AFF'; // Blue
      case 'travel':
        return '#fd7e14'; // Orange
      default:
        return '#6c757d'; // Gray
    }
  };

  return (
    <View 
      style={[
        styles.dot, 
        { 
          width: size, 
          height: size, 
          backgroundColor: getStatusColor(),
          borderRadius: size / 2,
        }
      ]} 
    />
  );
}

const styles = StyleSheet.create({
  dot: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});