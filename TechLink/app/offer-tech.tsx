import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function FindTechTalentScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Home');

  const candidates = [
    {
      id: 1,
      name: 'Jim Benneth',
      role: 'Frontend Development',
      skill: 'Next JS',
    },
    {
      id: 2,
      name: 'David Doe',
      role: 'Backend Development',
      skill: 'Node JS',
    },
  ];

  const handleBack = () => {
    router.push('/main');
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  const handleCandidatePress = (candidate: any) => {
    console.log('Selected candidate:', candidate.name);
  };

  const handleTabPress = (tabName: string) => {
    setActiveTab(tabName);
    console.log('Navigate to:', tabName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
              <Ionicons name="chevron-back" size={32} color="#0096FF" />
            </TouchableOpacity>

            <View style={styles.logoContainer}>
              <Ionicons name="bulb-outline" size={40} color="#00D9FF" />
              <Text style={styles.logoText}>TechLink</Text>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>FIND TECH TALENT</Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="#00D9FF" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search candidates"
              placeholderTextColor="#A0AEC0"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          {/* Top Candidates Section */}
          <Text style={styles.sectionTitle}>Top candidates</Text>

          {/* Candidate Cards */}
          <View style={styles.candidatesContainer}>
            {candidates.map((candidate) => (
              <TouchableOpacity
                key={candidate.id}
                style={styles.candidateCard}
                onPress={() => handleCandidatePress(candidate)}
                activeOpacity={0.8}
              >
                <Text style={styles.candidateName}>{candidate.name}</Text>
                <Text style={styles.candidateRole}>{candidate.role}</Text>
                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>{candidate.skill}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Extra padding for bottom nav */}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleTabPress('Home')}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              activeTab === 'Home' && styles.activeIconContainer,
            ]}
          >
            <Ionicons
              name="home"
              size={28}
              color={activeTab === 'Home' ? '#FFFFFF' : '#1E293B'}
            />
          </View>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'Home' && styles.activeTabLabel,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleTabPress('Post Jobs')}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              activeTab === 'Post Jobs' && styles.activeIconContainer,
            ]}
          >
            <Ionicons
              name="menu"
              size={28}
              color={activeTab === 'Post Jobs' ? '#FFFFFF' : '#1E293B'}
            />
          </View>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'Post Jobs' && styles.activeTabLabel,
            ]}
          >
            Post Jobs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleTabPress('Profile')}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              activeTab === 'Profile' && styles.activeIconContainer,
            ]}
          >
            <Ionicons
              name="person"
              size={28}
              color={activeTab === 'Profile' ? '#FFFFFF' : '#1E293B'}
            />
          </View>
          <Text
            style={[
              styles.tabLabel,
              activeTab === 'Profile' && styles.activeTabLabel,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E9F0',
  },
  mainContent: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 40,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00D9FF',
    marginTop: 4,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#1E293B',
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#00D9FF',
    borderRadius: 12,
    marginHorizontal: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 32,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1E293B',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  candidatesContainer: {
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 20,
  },
  candidateCard: {
    backgroundColor: '#D9D9D9',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  candidateName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 4,
  },
  candidateRole: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1E293B',
    marginBottom: 12,
  },
  skillBadge: {
    backgroundColor: '#A0A0A0',
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 6,
  },
  skillText: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#1E293B',
    fontWeight: '600',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#B0BEC5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  activeIconContainer: {
    backgroundColor: '#0096FF',
  },
  tabLabel: {
    fontSize: 11,
    color: '#1E293B',
    fontWeight: '500',
    marginTop: 4,
  },
  activeTabLabel: {
    color: '#1E293B',
    fontWeight: '700',
  },
});