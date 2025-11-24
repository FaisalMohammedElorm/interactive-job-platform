import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { User, FileText, Upload, LogOut } from 'lucide-react-native';
import { MOCK_USER } from '@/mocks/user';

export default function ProfileScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <User size={48} color="#FFFFFF" strokeWidth={2} />
          </View>
          <Text style={styles.name}>{MOCK_USER.name}</Text>
          <Text style={styles.title}>{MOCK_USER.title}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documents</Text>
          
          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconCircle, { backgroundColor: '#3B82F6' }]}>
              <FileText size={24} color="#FFFFFF" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>RESUME BUILDER</Text>
              <Text style={styles.cardSubtitle}>
                {MOCK_USER.hasResume ? 'View and edit resume' : 'Create your resume'}
              </Text>
            </View>
            {MOCK_USER.hasResume && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>COMPLETED</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={[styles.iconCircle, { backgroundColor: '#10B981' }]}>
              <Upload size={24} color="#FFFFFF" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>UPLOAD CV</Text>
              <Text style={styles.cardSubtitle}>
                {MOCK_USER.hasCV ? 'CV uploaded' : 'Upload your CV'}
              </Text>
            </View>
            {MOCK_USER.hasCV && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>UPLOADED</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color="#EF4444" />
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: '700' as const,
    color: '#1E293B',
    marginBottom: 4,
  },
  title: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: '#3B82F6',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: '#1E293B',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700' as const,
    color: '#1E293B',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  badge: {
    backgroundColor: '#10B981',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '700' as const,
    color: '#FFFFFF',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginHorizontal: 20,
    marginTop: 32,
    marginBottom: 40,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#FEE2E2',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: '#EF4444',
  },
});
