// src/components/Header.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ArrowLeft from '../../assets/arrow-left.svg';
interface HeaderProps {
  title: string;
  subtitle: string;
  onBackPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, onBackPress }) => {
  return (
    <View className="flex-row items-center px-6 py-4 gap-4">
      <TouchableOpacity
        className="p-3 rounded-xl  backdrop-blur-md"
        onPress={onBackPress}
        accessibilityLabel="Go back"
        accessibilityRole="button"
      >
        <ArrowLeft width={24} height={24} />
      </TouchableOpacity>

      <View className="flex-1 gap-1">
        <Text
          className="text-white font-semibold"
          style={{ fontFamily: 'Syne_700Bold', fontSize: 18 }}
        >
          {title}
        </Text>

        <Text
          className="text-[#999999] text-[13px]"
          style={{ fontFamily: 'Poppins_400Regular' }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};