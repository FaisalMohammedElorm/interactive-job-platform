import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { GraduationCap, Phone, Search } from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';

const { width } = Dimensions.get('window');

const features = [
  {
    icon: GraduationCap,
    title: 'SMART MATCHES BASED ON YOUR SKILLS',
    subtitle: 'AND SKILLS YOU CAN LEARN.',
    description: 'Get jobs tailored to your skills, and even if you don&apos;t meet all skills we guide you to the right training programs so you get the skills before applying!',
  },
  {
    icon: Phone,
    title: 'KNOW YOUR APPLICATIONS STATUS INSTANTLY!',
    description: 'Real-time updates, employer communication and early notifications.',
  },
  {
    icon: Search,
    title: 'JOB SEARCHING MADE EASY FOR EVERYONE!',
    description: 'Short applications, quick processes. UI for all job seekers',
  },
];

export default function FeaturesScreen() {
  const { completeOnboarding } = useApp();

  const handleGetStarted = () => {
    completeOnboarding();
    router.replace('/(tabs)/jobs');
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {features.map((feature, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconContainer}>
              <feature.icon size={48} color="#1E293B" strokeWidth={1.5} />
            </View>
            
            <Text style={styles.title}>{feature.title}</Text>
            {feature.subtitle && (
              <Text style={styles.title}>{feature.subtitle}</Text>
            )}
            
            <Text style={styles.description}>{feature.description}</Text>
            
            <View style={styles.navigation}>
              <Text style={styles.navText}>&lt;&lt;&lt; PREV</Text>
              <Text style={styles.navText}>NEXT &gt;&gt;&gt;</Text>
            </View>
          </View>
        ))}

        <View style={styles.finalCard}>
          <Text style={styles.finalTitle}>
            LEARN THE SKILLS. GET THE JOB. WE&apos;LL GUIDE YOU EVERY STEP.
          </Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 32,
    marginBottom: 20,
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
    fontWeight: '700' as const,
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748B',
    lineHeight: 20,
    marginTop: 16,
    marginBottom: 24,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: '#94A3B8',
  },
  finalCard: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    padding: 40,
    marginBottom: 40,
    alignItems: 'center',
  },
  finalTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'italic' as const,
    marginBottom: 32,
    lineHeight: 26,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 6,
  },
  buttonText: {
    color: '#8B5CF6',
    fontSize: 14,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
  },
});
