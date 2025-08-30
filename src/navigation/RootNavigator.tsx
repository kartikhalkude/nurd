import React from 'react';
import { View } from 'react-native';
import { CreatorListScreen } from '../screens/creator/CreatorListScreen';

// Placeholder RootNavigator without react-navigation to avoid adding deps now.
// Swap with react-navigation when ready.
export const RootNavigator: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <CreatorListScreen />
        </View>
    );
};


