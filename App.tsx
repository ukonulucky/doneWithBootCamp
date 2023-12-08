
import { Button, SafeAreaView, Text, View} from 'react-native';

import { useDeviceOrientation } from "@react-native-community/hooks"

import * as ImagePicker from "expo-image-picker"
import { useEffect, useState } from 'react';
import * as Permisions from "expo-permissions"
import  Constants from "expo-constants"


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import NavigationTheme from './app/Navigation/NavigationTheme';
import AppNavigator from './app/Navigation/AppNavigator';






export default function App() {

  const Stack = createNativeStackNavigator()


  return (
    <SafeAreaView
    style={{
      flex: 1,
      paddingTop: Constants.statusBarHeight
    }}><NavigationContainer
    theme={NavigationTheme}
    >
      <AppNavigator />
    </NavigationContainer>
   </SafeAreaView>
  );
}

