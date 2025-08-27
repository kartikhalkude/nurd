// src/components/CreatorCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Creator } from '../types/Creator';

interface CreatorCardProps {
  creator: Creator;
  onRemove: (creatorId: number) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({ creator, onRemove }) => {
  return (
    <View className="flex-col gap-4 p-4 bg-[#ffffff0f] rounded-xl border border-white/10 backdrop-blur-md mb-3">
      {/* Header Section */}
      <View className="flex-row items-center gap-3">
        <Image
          source={{ uri: creator.avatar }}
          className="w-20 h-20 rounded-full"
          accessibilityLabel={`${creator.name} profile picture`}
        />

        <View className="flex-1 gap-2">
          {/* Name and Remove Button Row */}
          <View className="flex-row items-start justify-between">
            <View className="flex-1 gap-0.5">
              <View className="flex-row items-center gap-0.5">
                <Text 
                  className="text-white text-base font-semibold"
                  style={{ fontFamily: 'Syne' }}
                >
                  {creator.name}
                </Text>
                {creator.isVerified && (
                  <Image
                    source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/ph-seal-check-fill-2.svg" }}
                    className="w-4 h-4"
                    accessibilityLabel="Verified badge"
                  />
                )}
              </View>
              <Text 
                className="text-[#ffffffb2] text-xs"
                style={{ fontFamily: 'Poppins' }}
              >
                {creator.username}
              </Text>
            </View>

            <TouchableOpacity
              className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-[20px] items-center justify-center"
              onPress={() => onRemove(creator.id)}
              accessibilityLabel={`Remove ${creator.name} from shortlist`}
              accessibilityRole="button"
            >
              <Image
                source={{ uri: creator.trashIcon }}
                className="w-6 h-6"
                accessibilityLabel="Remove"
              />
            </TouchableOpacity>
          </View>

          {/* Categories */}
          <View className="flex-row items-center gap-1 flex-wrap">
            {creator.categories.map((category, index) => (
              <View
                key={index}
                className="px-1.5 py-0.5 bg-[#ffffff33] rounded backdrop-blur-[20px]"
              >
                <Text 
                  className="text-white text-xs"
                  style={{ fontFamily: 'Poppins' }}
                >
                  {category}
                </Text>
              </View>
            ))}
            <View className="px-1.5 py-0.5 bg-[#ffffff33] rounded backdrop-blur-[20px]">
              <Text 
                className="text-white text-xs"
                style={{ fontFamily: 'Poppins' }}
              >
                + {creator.additionalCategories}
              </Text>
            </View>
          </View>

          {/* Stats Row */}
          <View className="flex-row items-center gap-2 flex-wrap">
            <View className="flex-row items-center gap-1">
              <Image
                source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/lets-icons-insta-2.svg" }}
                className="w-5 h-5"
                accessibilityLabel="Instagram icon"
              />
              <Text 
                className="text-[#ffffffb2] text-xs"
                style={{ fontFamily: 'Poppins' }}
              >
                {creator.followers}
              </Text>
            </View>

            <View className="flex-row items-center gap-1">
              <Image
                source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/chart-alt-2.svg" }}
                className="w-5 h-5"
                accessibilityLabel="Engagement chart"
              />
              <Text 
                className="text-[#ffffffb2] text-xs"
                style={{ fontFamily: 'Poppins' }}
              >
                {creator.engagement}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Performance Section */}
      <View className="flex-col gap-3 p-3 bg-[#ffffff0a] rounded-xl backdrop-blur-md">
        <View className="flex-row items-center gap-2">
          <View className="w-6 h-6 relative">
            <Image
              source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/ellipse-45-2.svg" }}
              className="absolute w-[17px] h-1.5 top-[15px] left-[3px]"
            />
            <View className="absolute w-2.5 h-2.5 top-[3px] left-[7px] rounded-[5px] border-2 border-[#495aff]" />
          </View>
          <Text 
            className="text-[#ffffffb2] text-base font-semibold"
            style={{ fontFamily: 'Poppins' }}
          >
            Creator Performance
          </Text>
        </View>

        <View className="flex-row items-center gap-3">
          <View className="flex-1 items-center gap-0.5">
            <Text 
              className="text-white text-base font-semibold text-center"
              style={{ fontFamily: 'Poppins' }}
            >
              {creator.performanceEngagement}
            </Text>
            <Text 
              className="text-[#ffffff80] text-[13px] text-center font-medium"
              style={{ fontFamily: 'Poppins' }}
            >
              Engagement
            </Text>
          </View>

          <Image
            source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/line-58-2.svg" }}
            className="w-px h-10"
          />

          <View className="flex-1 items-center gap-0.5">
            <Text 
              className="text-white text-base font-semibold text-center"
              style={{ fontFamily: 'Poppins' }}
            >
              {creator.likes}
            </Text>
            <Text 
              className="text-[#ffffff80] text-[13px] text-center font-medium"
              style={{ fontFamily: 'Poppins' }}
            >
              Likes
            </Text>
          </View>

          <Image
            source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/line-58-2.svg" }}
            className="w-px h-10"
          />

          <View className="flex-1 items-center gap-0.5">
            <Text 
              className="text-white text-base font-semibold text-center"
              style={{ fontFamily: 'Poppins' }}
            >
              {creator.comments}
            </Text>
            <Text 
              className="text-[#ffffff80] text-[13px] text-center font-medium"
              style={{ fontFamily: 'Poppins' }}
            >
              Comments
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <View className="flex-row items-center">
            <Image
              source={{ uri: "https://c.animaapp.com/lDpGtOqO/img/icons8-rupee-2.svg" }}
              className="w-5 h-5"
              accessibilityLabel="Rupee symbol"
            />
            <Text 
              className="text-white text-xs font-semibold opacity-80"
              style={{ fontFamily: 'Poppins' }}
            >
              {creator.pricePerPost}
            </Text>
          </View>
          <Text 
            className="text-[#999999] text-xs font-medium opacity-80"
            style={{ fontFamily: 'Poppins' }}
          >
            per post
          </Text>
        </View>

        <Text 
          className="text-[#999999] text-xs font-medium opacity-80"
          style={{ fontFamily: 'Poppins' }}
        >
          {creator.date}
        </Text>
      </View>
    </View>
  );
};