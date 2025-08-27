// src/components/StatusBar.tsx
import React from 'react';
import { View, Image } from 'react-native';

export const CustomStatusBar = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-3 h-11">
      <View className="w-[54px] h-[21px] justify-center items-center">
        <Image
          source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/9-41.svg" }}
          className="w-7 h-[11px]"
          accessibilityLabel="9:41"
        />
      </View>
      
      <Image
        source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/right-side@2x.png" }}
        className="w-[67px] h-[11px]"
        accessibilityLabel="Battery and signal indicators"
      />
    </View>
  );
};