// src/components/CreatorCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import VerifiedIcon from '../../assets/ph_seal-check-fill.svg';
import ChartIcon from '../../assets/Chart_alt.svg';
import RupeeIcon from '../../assets/icons8_rupee.svg';
import InstaIcon from '../../assets/lets-icons_insta.svg';
import TrashIcon from '../../assets/Trash.svg';
import UserIcon from '../../assets/User.svg';
import { Creator } from '../types/Creator';

interface CreatorCardProps {
    creator: Creator;
    onRemove: (creatorId: number) => void;
}

export const CreatorCard: React.FC<CreatorCardProps> = ({ creator, onRemove }) => {
    return (
        <View className="flex-col gap-4 p-4 bg-[#ffffff0f] rounded-xl border border-white/10 backdrop-blur-md mb-3">
            <View className="flex-row items-center gap-3">
                <Image
                    source={{ uri: creator.avatar }}
                    className="w-20 h-20 rounded-full"
                    accessibilityLabel={`${creator.name} profile picture`}
                />

                <View className="flex-1 gap-2">
                    <View className="flex-row items-start justify-between">
                        <View className="flex-1 gap-0.5">
                            <View className="flex-row items-center gap-0.5">
                                <Text
                                    className="text-white text-base font-semibold"
                                    style={{ fontFamily: 'Syne_700Bold' }}
                                >
                                    {creator.name}
                                </Text>
                                {creator.isVerified && (
                                    <VerifiedIcon
                                        width={16}
                                        height={16}
                                        accessibilityLabel="Verified badge"
                                    />
                                )}
                            </View>
                            <Text
                                className="text-[#ffffffb2] text-xs"
                                style={{ fontFamily: 'Poppins_400Regular' }}
                            >
                                {creator.username}
                            </Text>
                        </View>

                        <TouchableOpacity
                            className="w-9 h-9  items-center justify-center"
                            onPress={() => onRemove(creator.id)}
                            accessibilityLabel={`Remove ${creator.name} from shortlist`}
                            accessibilityRole="button"
                        >
                            <TrashIcon
                                width={24}
                                height={24}
                                accessibilityLabel="Remove"
                            />
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row items-center gap-1 flex-wrap">
                        {creator.categories.map((category, index) => (
                            <View
                                key={index}
                                className="px-1.5 py-0.5 bg-[#ffffff33] rounded backdrop-blur-[20px]"
                            >
                                <Text
                                    className="text-white text-xs"
                                    style={{ fontFamily: 'Poppins_400Regular' }}
                                >
                                    {category}
                                </Text>
                            </View>
                        ))}
                        <View className="px-1.5 py-0.5 bg-[#ffffff33] rounded backdrop-blur-[20px]">
                            <Text
                                className="text-white text-xs"
                                style={{ fontFamily: 'Poppins_400Regular' }}
                            >
                                + {creator.additionalCategories}
                            </Text>
                        </View>
                    </View>

                    {/* Stats Row */}
                    <View className="flex-row items-center gap-2 flex-wrap">
                        <View className="flex-row items-center gap-1">
                            <InstaIcon
                                width={20}
                                height={20}
                                accessibilityLabel="Instagram icon"
                            />
                            <Text
                                className="text-[#ffffffb2] text-xs"
                                style={{ fontFamily: 'Poppins_400Regular' }}
                            >
                                {creator.followers}
                            </Text>
                        </View>

                        <View className="flex-row items-center gap-1">
                            <ChartIcon
                                width={20}
                                height={20}
                                accessibilityLabel="Engagement chart"
                            />
                            <Text
                                className="text-[#ffffffb2] text-xs"
                                style={{ fontFamily: 'Poppins_400Regular' }}
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
                        <UserIcon
                            width={24}
                            height={24}
                            style={{ flexShrink: 0 }}
                            className="absolute top-[15px] left-[3px]"
                        />
                    </View>
                    <Text
                        className="text-[#ffffffb2] text-base font-semibold"
                        style={{ fontFamily: 'Poppins_600SemiBold' }}
                    >
                        Creator Performance
                    </Text>
                </View>

                <View className="flex-row items-center gap-3">
                    <View className="flex-1 items-center gap-0.5">
                        <Text
                            className="text-white text-base font-semibold text-center"
                            style={{ fontFamily: 'Poppins_600SemiBold' }}
                        >
                            {creator.performanceEngagement}
                        </Text>
                        <Text
                            className="text-[#ffffff80] text-[13px] text-center font-medium"
                            style={{ fontFamily: 'Poppins_400Regular' }}
                        >
                            Engagement
                        </Text>
                    </View>

                    <View className="w-[1px] h-[40px]" style={{ backgroundColor: '#FFFFFF1F' }} />


                    <View className="flex-1 items-center gap-0.5">
                        <Text
                            className="text-white text-base font-semibold text-center"
                            style={{ fontFamily: 'Poppins_600SemiBold' }}
                        >
                            {creator.likes}
                        </Text>
                        <Text
                            className="text-[#ffffff80] text-[13px] text-center font-medium"
                            style={{ fontFamily: 'Poppins_400Regular' }}
                        >
                            Likes
                        </Text>
                    </View>
                    <View className="w-[1px] h-[40px]" style={{ backgroundColor: '#FFFFFF1F' }} />

                    <View className="flex-1 items-center gap-0.5">
                        <Text
                            className="text-white text-base font-semibold text-center"
                            style={{ fontFamily: 'Poppins_600SemiBold' }}
                        >
                            {creator.comments}
                        </Text>
                        <Text
                            className="text-[#ffffff80] text-[13px] text-center font-medium"
                            style={{ fontFamily: 'Poppins_400Regular' }}
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
                        <RupeeIcon
                            width={20}
                            height={20}
                            style={{ aspectRatio: 1 / 1 }}
                            accessibilityLabel="Rupee symbol"
                        />
                        <Text
                            className="text-white text-xs font-semibold opacity-80"
                            style={{ fontFamily: 'Poppins_600SemiBold' }}
                        >
                            {creator.pricePerPost}
                        </Text>
                    </View>
                    <Text
                        className="text-[#999999] text-xs font-medium opacity-80"
                        style={{ fontFamily: 'Poppins_500Medium' }}
                    >
                        per post
                    </Text>
                </View>

                <Text
                    className="text-[#999999] text-xs font-medium opacity-80"
                    style={{ fontFamily: 'Poppins_500Medium' }}
                >
                    {creator.date}
                </Text>
            </View>
        </View>
    );
};