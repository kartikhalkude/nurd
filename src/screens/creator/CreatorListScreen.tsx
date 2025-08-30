// src/screens/CreatorListScreen.tsx
import React from 'react';
import { View, ScrollView, SafeAreaView, StatusBar, Alert } from 'react-native';
import { CustomStatusBar } from '../../components/StatusBar';
import { Header } from '../../components/Header';
import { CreatorCard } from '../../components/CreatorCard';
import { useCreators } from '../../hooks/useCreators';

export const CreatorListScreen = () => {
  const { creators, removeCreator, getCreatorCount } = useCreators();

  const handleBackPress = () => {
    // Navigation logic here
    console.log('Back pressed');
  };

  const handleRemoveCreator = (creatorId: number) => {
    Alert.alert(
      'Remove Creator',
      'Are you sure you want to remove this creator from the shortlist?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => removeCreator(creatorId),
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" backgroundColor="black" />

      {/* Status Bar */}
      <CustomStatusBar />

      {/* Header */}
      <Header
        title="Summer Time Collection"
        subtitle={`${getCreatorCount()} creators shortlisted`}
        onBackPress={handleBackPress}
      />

      {/* Creator List */}
      <ScrollView
        className="flex-1 px-6"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            creator={creator}
            onRemove={handleRemoveCreator}
          />
        ))}
      </ScrollView>


    </SafeAreaView>
  );
};