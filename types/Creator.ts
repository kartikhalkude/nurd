// src/types/Creator.ts
export interface Creator {
  id: number;
  name: string;
  username: string;
  avatar: string;
  isVerified: boolean;
  categories: string[];
  additionalCategories: number;
  followers: string;
  engagement: string;
  performanceEngagement: string;
  likes: string;
  comments: string;
  pricePerPost: number;
  date: string;
  trashIcon: string;
}