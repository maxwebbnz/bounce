/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */
import { View, StyleSheet } from "react-native";
import { globalStyle } from "../styles/global/global";
import homeStyle from "../styles/home/Home";
import { LinearGradient } from "react-native-gradients";
import Draw from "../components/personalised/Draw";
import { Text } from "native-base";
const colorList = [
  { offset: "100%", color: "#D18246", opacity: "1" },
  { offset: "50%", color: "#E99A5D", opacity: "1" },
  { offset: "20%", color: "#D9D7D2", opacity: "1" },
];

const styles = StyleSheet.create({
  gradientBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  background: {
    backgroundColor: "#D18246",
  },
});

export default function HomeContent() {
  return (
    <View style={styles.background}>
      <View style={styles.gradientBg}>
        <LinearGradient colorList={colorList} />
      </View>
      <Text
        fontSize="3xl"
        style={{
          marginTop: 80,
          color: "white",
          width: "70%",
          marginLeft: 20,
          marginBottom: 20,
        }}
      >
        Discover places you've{" "}
        <Text style={{ fontStyle: "italic" }}>never</Text> been
      </Text>
      <Draw />
    </View>
  );
}
