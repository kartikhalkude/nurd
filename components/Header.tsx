// src/components/Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

interface HeaderProps {
  title: string;
  subtitle: string;
  onBackPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, onBackPress }) => {
  return (
    <View className="flex-row items-center px-6 py-4 gap-4">
      <TouchableOpacity
        className="p-3 rounded-xl bg-glass backdrop-blur-md"
        onPress={onBackPress}
        accessibilityLabel="Go back"
        accessibilityRole="button"
      >
        <Image
          source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/icons-outlined-arrow-left.svg" }}
          className="w-6 h-6"
        />
      </TouchableOpacity>

      <View className="flex-1 gap-1">
        <Text 
          className="text-white text-lg font-bold"
          style={{ fontFamily: 'Syne' }}
        >
          {title}
        </Text>
        <Text 
          className="text-[#999999] text-[13px]"
          style={{ fontFamily: 'Poppins' }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};