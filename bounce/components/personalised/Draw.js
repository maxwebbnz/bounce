/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */
/**========================================================================
 *                             Draw.js
 *  Most commonly used on the HomeContent page, this allows a users personalised experiencv=e to be generated
 *
 *
 *  SOF
 *========================================================================**/

import { View, Text, Button, StyleSheet } from "react-native";


const draw = StyleSheet.create({
    base: {
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        width: 100,
        marginLeft: "35%",
        color: "#E69160"
    }
})

export default function Draw() {
    return (
        <View style={draw.base}>
            <View style={draw.lineStyle} />

            <Text>I am a draw!</Text>
        </View>
    )
}