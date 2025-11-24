import createContextHook from '@nkzw/create-context-hook';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { MOCK_JOBS } from '@/mocks/jobs';
import { Job } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@techlink_saved_jobs';

export const [AppProvider, useApp] = createContextHook(() => {
  const [jobs, setJobs] = useState<Job[]>(MOCK_JOBS);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = async () => {
    try {
      const [savedJobsData, onboardingData] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEY),
        AsyncStorage.getItem('@techlink_onboarding'),
      ]);

      if (savedJobsData) {
        const savedJobIds = JSON.parse(savedJobsData) as string[];
        const updatedJobs = MOCK_JOBS.map(job => ({
          ...job,
          saved: savedJobIds.includes(job.id),
        }));
        setJobs(updatedJobs);
      }

      if (onboardingData) {
        setHasCompletedOnboarding(JSON.parse(onboardingData));
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSaveJob = useCallback(async (jobId: string) => {
    const updatedJobs = jobs.map(job =>
      job.id === jobId ? { ...job, saved: !job.saved } : job
    );
    setJobs(updatedJobs);

    try {
      const savedJobIds = updatedJobs.filter(job => job.saved).map(job => job.id);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(savedJobIds));
    } catch (error) {
      console.error('Error saving job:', error);
    }
  }, [jobs]);

  const completeOnboarding = useCallback(async () => {
    setHasCompletedOnboarding(true);
    try {
      await AsyncStorage.setItem('@techlink_onboarding', JSON.stringify(true));
    } catch (error) {
      console.error('Error saving onboarding state:', error);
    }
  }, []);

  const savedJobs = useMemo(() => jobs.filter(job => job.saved), [jobs]);

  return useMemo(
    () => ({
      jobs,
      savedJobs,
      toggleSaveJob,
      hasCompletedOnboarding,
      completeOnboarding,
      isLoading,
    }),
    [jobs, savedJobs, toggleSaveJob, hasCompletedOnboarding, completeOnboarding, isLoading]
  );
});
