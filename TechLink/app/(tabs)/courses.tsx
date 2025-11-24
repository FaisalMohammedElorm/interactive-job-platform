import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { MOCK_COURSES } from '@/mocks/courses';
import { Course } from '@/types';

export default function CoursesScreen() {
  const renderCourse = ({ item }: { item: Course }) => (
    <TouchableOpacity style={styles.courseCard} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>
      
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.provider}>{item.provider}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ title: 'Courses to Learn' }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>COURSES TO LEARN</Text>
        </View>

        <FlatList
          data={MOCK_COURSES}
          renderItem={renderCourse}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#1E293B',
  },
  list: {
    padding: 20,
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 32,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 15,
    fontWeight: '700' as const,
    color: '#1E293B',
    marginBottom: 6,
  },
  provider: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 4,
  },
  duration: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600' as const,
  },
});
