// App.tsx - Alternative with Google Fonts
import React from 'react';
import { View } from 'react-native';
import { 
  useFonts,
  Syne_400Regular,
  Syne_700Bold,
} from '@expo-google-fonts/syne';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { CreatorListScreen } from './screens/CreatorListScreen';
import './global.css';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  let [fontsLoaded, fontError] = useFonts({
    Syne_400Regular,
    Syne_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <CreatorListScreen />
    </View>
  );
};

export default App;