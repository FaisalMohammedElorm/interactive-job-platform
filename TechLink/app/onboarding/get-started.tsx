import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { useApp } from '@/contexts/AppContext';

const { width } = Dimensions.get('window');

export default function GetStartedScreen() {
  const { completeOnboarding } = useApp();

  const handleGetStarted = () => {
    completeOnboarding();
    router.replace('/(tabs)/jobs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          LEARN THE SKILLS. GET THE JOB. WE&apos;LL GUIDE YOU EVERY STEP.
        </Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={handleGetStarted}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>&lt;&lt;&lt; PREV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    padding: 40,
    width: width - 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 32,
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: '#8B5CF6',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#E2E8F0',
  },
});