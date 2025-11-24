import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Briefcase, MapPin, Star } from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';
import { Job } from '@/types';

export default function SavedJobsScreen() {
  const { savedJobs, toggleSaveJob } = useApp();

  const renderJob = ({ item }: { item: Job }) => (
    <TouchableOpacity style={styles.jobCard} activeOpacity={0.7}>
      <View style={styles.jobHeader}>
        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.company}>{item.company}</Text>
        </View>
        <TouchableOpacity
          onPress={() => toggleSaveJob(item.id)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Star
            size={24}
            color="#FCD34D"
            fill="#FCD34D"
            strokeWidth={2}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.jobDetails}>
        <View style={styles.detailRow}>
          <MapPin size={16} color="#64748B" />
          <Text style={styles.detailText}>{item.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Briefcase size={16} color="#64748B" />
          <Text style={styles.detailText}>{item.type}</Text>
        </View>
      </View>

      <Text style={styles.salary}>{item.salary}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen options={{ title: 'Saved Jobs' }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>SAVED JOBS</Text>
        </View>

        <FlatList
          data={savedJobs}
          renderItem={renderJob}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Star size={64} color="#CBD5E1" strokeWidth={1.5} />
              <Text style={styles.emptyText}>No saved jobs yet</Text>
              <Text style={styles.emptySubtext}>
                Start exploring and save jobs you&apos;re interested in!
              </Text>
            </View>
          }
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
    flexGrow: 1,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: '#1E293B',
    marginBottom: 4,
  },
  company: {
    fontSize: 14,
    color: '#64748B',
  },
  jobDetails: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  detailText: {
    fontSize: 13,
    color: '#64748B',
  },
  salary: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: '#10B981',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: '#64748B',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
  },
});
