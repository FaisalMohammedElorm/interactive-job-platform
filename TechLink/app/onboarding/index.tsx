import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Lightbulb } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Lightbulb size={60} color="#FFFFFF" strokeWidth={1.5} />
        </View>
        
        <Text style={styles.logo}>TechLink</Text>
        <Text style={styles.description}>
          Every job is pre-verified, authenticated, and safe to apply.
        </Text>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push('/onboarding/skill-matching')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>NEXT &gt;&gt;&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 40,
    width: width - 80,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  iconContainer: {
    marginBottom: 24,
  },
  logo: {
    fontSize: 32,
    fontWeight: '600' as const,
    color: '#1E293B',
    marginBottom: 16,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    color: '#64748B',
    lineHeight: 22,
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
  },
});
