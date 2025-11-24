import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or react-native-vector-icons

const { width } = Dimensions.get('window');

export default function main() {
  const handlePress = (action) => {
    console.log(`${action} pressed`);
    // Navigate to respective screens
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>WHAT BRINGS</Text>
        <Text style={styles.title}>YOU HERE?</Text>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress('Search Tech Role')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#E0F2FE' }]}>
            <Ionicons name="search" size={36} color="#0096FF" />
          </View>
          <Text style={styles.cardText}>SEARCH{'\n'}TECH ROLE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress('Offer Tech Roles')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#F3E8FF' }]}>
            <Ionicons name="laptop-outline" size={36} color="#8B5CF6" />
          </View>
          <Text style={styles.cardText}>OFFER TECH{'\n'}ROLES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handlePress('Become a Tutor')}
          activeOpacity={0.7}
        >
          <View style={[styles.iconContainer, { backgroundColor: '#D1FAE5' }]}>
            <Ionicons name="school-outline" size={36} color="#10B981" />
          </View>
          <Text style={styles.cardText}>BECOME A{'\n'}TUTOR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E9F0',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 60,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    color: '#1E293B',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardContainer: {
    gap: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    minHeight: 100,
  },
  iconContainer: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    borderRadius: 12,
  },
  cardText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E293B',
    letterSpacing: 0.5,
    lineHeight: 28,
  },
});