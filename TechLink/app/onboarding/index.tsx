import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  const handleScreenTap = () => {
    router.push('/onboarding/skill-matching');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleScreenTap} activeOpacity={1}>
      <Image 
        source={require('@/assets/images/TechLinkLogo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
