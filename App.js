import React, { useState } from 'react';
import * as Font from 'expo-font';
// import { View, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const[fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />;
  }

  // return <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}><MealsNavigator/></View>;
  return <MealsNavigator/>;
}