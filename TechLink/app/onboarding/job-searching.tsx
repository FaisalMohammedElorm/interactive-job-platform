import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Search } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function JobSearchingScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Search size={48} color="#1E293B" strokeWidth={1.5} />
        </View>
        
        <Text style={styles.title}>JOB SEARCHING MADE EASY FOR EVERYONE!</Text>
        
        <Text style={styles.description}>
          Short applications, quick processes. UI for all job seekers.
        </Text>
        
        <View style={styles.navigation}>
          <TouchableOpacity 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Text style={styles.navText}>&lt;&lt;&lt; PREV</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => router.push('/onboarding/get-started')}
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