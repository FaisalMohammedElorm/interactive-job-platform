import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { GraduationCap } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function SkillMatchingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <GraduationCap size={48} color="#1E293B" strokeWidth={1.5} />
        </View>
        
        <Text style={styles.title}>SMART MATCHES BASED ON YOUR SKILLS</Text>
        <Text style={styles.subtitle}>AND SKILLS YOU CAN LEARN.</Text>
        
        <Text style={styles.description}>
          Get jobs tailored to your skills, and even if you don&apos;t meet all skills we guide you to the right training programs so you get the skills before applying!
        </Text>
        
        <View style={styles.navigation}>
          <TouchableOpacity 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.navText}>&lt;&lt;&lt; PREV</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => router.push('/onboarding/application-status')}
            activeOpacity={0.7}
          >
            <Text style={styles.navText}>NEXT &gt;&gt;&gt;</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 32,
    width: width - 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 24,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  navText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94A3B8',
  },
});