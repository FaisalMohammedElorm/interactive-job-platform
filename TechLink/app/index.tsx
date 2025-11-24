import { Redirect } from 'expo-router';
import { useApp } from '@/contexts/AppContext';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Index() {
  const { hasCompletedOnboarding, isLoading } = useApp();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  if (!hasCompletedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(tabs)/jobs" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },
});
