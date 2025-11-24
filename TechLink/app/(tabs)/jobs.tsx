import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Stack } from 'expo-router';
import { Search, Briefcase, MapPin, Star } from 'lucide-react-native';
import { useApp } from '@/contexts/AppContext';
import { Job } from '@/types';

export default function JobsScreen() {
  const { jobs, toggleSaveJob } = useApp();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const featuredJobs = jobs.filter(job => job.featured);
  const allJobs = jobs;

  const filteredJobs = allJobs.filter(
    job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            color={item.saved ? '#FCD34D' : '#CBD5E1'}
            fill={item.saved ? '#FCD34D' : 'none'}
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
      <Stack.Screen options={{ title: 'Jobs' }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>WHAT BRINGS YOU HERE?</Text>
          
          <View style={styles.searchContainer}>
            <Search size={20} color="#94A3B8" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search tech roles"
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#94A3B8"
            />
          </View>
        </View>

        <ScrollView 
          style={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.colorBar, { backgroundColor: '#EC4899' }]} />
              <Text style={styles.sectionTitle}>Featured Jobs</Text>
            </View>

            <FlatList
              data={featuredJobs}
              renderItem={renderJob}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={[styles.colorBar, { backgroundColor: '#EF4444' }]} />
              <Text style={styles.sectionTitle}>All Jobs</Text>
            </View>

            <FlatList
              data={searchQuery ? filteredJobs : allJobs}
              renderItem={renderJob}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              ListEmptyComponent={
                <Text style={styles.emptyText}>No jobs found</Text>
              }
            />
          </View>
        </ScrollView>
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
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: '#1E293B',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1E293B',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingTop: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  colorBar: {
    width: 4,
    height: 20,
    borderRadius: 2,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#1E293B',
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
  emptyText: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 15,
    marginTop: 40,
  },
});
