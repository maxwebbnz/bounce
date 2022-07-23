/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */

import * as React from 'react';
// import {  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './home/Welcome';
import HomeContent from './home/Home';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { NativeBaseProvider, Text, Box } from 'native-base';
import Navigation from './components/Navigation';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPfI6EMUCCEA2g2jNwzRPvSpChCGGfcec",
  authDomain: "bounce-app-d763e.firebaseapp.com",
  projectId: "bounce-app-d763e",
  storageBucket: "bounce-app-d763e.appspot.com",
  messagingSenderId: "280031781351",
  appId: "1:280031781351:web:42b3d71f37f88e7147dd42"
};

// Initialize Firebase


initializeApp(firebaseConfig);

function App() {
  // create a stack nav
  const Stack = createNativeStackNavigator();


  const recaptchaRef = React.useRef(null)
  return (
    <NavigationContainer>

      <NativeBaseProvider>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaRef}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={true}
        />
        {/* Main router */}
        <Stack.Navigator initialRouteName='Home'>
          {/* Screens */}
          <Stack.Screen name="Home" component={Welcome} options={{ headerShown: false }} />
          <Stack.Screen name="HomeContent" component={HomeContent} options={{ headerShown: false, animation: 'none' }} />
        </Stack.Navigator>

        <Navigation />

      </NativeBaseProvider>
    </NavigationContainer>

  );
}

export default App;