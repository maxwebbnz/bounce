/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */
import { useState, useRef } from "react";
import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import { Image } from "native-base";
import PhoneInput from "react-native-phone-number-input";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  withSpring,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

//* Background Image
import BackgroundImage from "../assets/background.jpg";
import Icon from "../assets/logoinverted.png";
import api from "../api/api";

export default function Welcome() {
  const offset = useSharedValue(0);
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [formattedValue, setFormattedValue] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // const phoneInput = useRef < PhoneInput > (null);
  const styles = StyleSheet.create({
    title: {
      fontSize: 80,
      color: "white",
      // Position text to the top left. Weird but works, if you can find a cleaner way to do this please do.
      transform: [
        { rotate: "90deg" },
        { translateY: windowWidth * 0.4 },
        { translateX: windowHeight * 0.25 },
      ],
      fontWeight: "bold",
    },
    phoneInput: {
      marginTop: "5%",
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%",
    },
    drawer: {
      width: "100%",
      height: windowHeight,
      flex: 1,
      top: "30%",
      marginTop: "auto",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: "center",
      justifyContent: "flex-start",
    },
  });

  function startAuthentication() {
    api("get", "/users", "").then(function (response) {
      console.log(response);
    });
  }
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value * -600 }],
    };
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageBackground
        style={styles.image}
        source={BackgroundImage}
        blurRadius={8}
        resizeMode="cover"
      >
        <Text style={styles.title}>Bounce</Text>
        <Animated.View style={[styles.drawer, animatedStyles]}>
          <LinearGradient
            colors={["#EE7F68", "#E9B15D"]}
            style={[styles.drawer]}
          >
            <Button
              onPress={() => {
                startAuthentication();
              }}
              title="Test API"
            />
            <Image
              source={Icon}
              style={{ marginTop: "5%", paddingBottom: "10%", height: 120 }}
              alt="Logo"
              size="lg"
            />
          </LinearGradient>
        </Animated.View>

        {/* I commented this out for now to redo the login screen, feel free to uncomment to work on anything */}

        {/* <View style={styles.phoneInput}>
                    <PhoneInput
                        defaultValue={value}
                        defaultCode="NZ"
                        layout="first"
                        onChangeText={(text) => {
                            setValue(text);
                        }}
                        onChangeFormattedText={(text) => {
                            setFormattedValue(text);
                        }}
                        withDarkTheme
                        withShadow
                    />
                    <Button
                        onPress={() => Authenticate(value)}
                        title="Login"
                        color="#841584"
                        accessibilityLabel="Authenticate with your phone number"
                    />
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('HomeContent')}
                    />
                </View> */}
      </ImageBackground>
    </View>
  );
}
