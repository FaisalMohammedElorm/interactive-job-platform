import React from 'react';
import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="skill-matching" />
      <Stack.Screen name="application-status" />
      <Stack.Screen name="job-searching" />
      <Stack.Screen name="get-started" />
    </Stack>
  );
}