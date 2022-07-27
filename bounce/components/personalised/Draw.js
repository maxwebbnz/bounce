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
import { Container, ScrollView, VStack, Heading, Center, Stack, Box, AspectRatio, Image, HStack, Divider } from "native-base";
import { Line } from "react-native-svg";

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
    },
    banner: {
        marginTop: 10,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10
    }
})

function MainTopic() {

    return (
        <Box alignItems="center">
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://images.squarespace-cdn.com/content/v1/565e91efe4b0d50dfc8fdc80/1563170537231-I3CEE7AR3F4ADX4MN8E5/image-asset.jpeg"
                        }} alt="image" />
                    </AspectRatio>
                    <Center bg="warning.400" style={draw.banner} _dark={{
                        bg: "warning.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" top="0" px="3" py="1.5">
                        Top 10 Wellington Bars
                    </Center>
                </Box>

            </Box>
        </Box>
    )
}
function SecondaryTopics() {
    return (
        <Box alignItems="left" style={{ marginRight: 0 }}>
            <Box maxW="80%" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "gray.50"
            }}>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://images.squarespace-cdn.com/content/v1/565e91efe4b0d50dfc8fdc80/1563170537231-I3CEE7AR3F4ADX4MN8E5/image-asset.jpeg"
                        }} alt="image" />
                    </AspectRatio>
                    <Center bg="warning.400" _dark={{
                        bg: "warning.400"
                    }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                    }} position="absolute" top="0" px="3" py="1.5">
                        Top 10 Wellington Bars
                    </Center>
                </Box>

            </Box>
        </Box>
    )
}
export default function Draw() {
    return (
        <ScrollView style={draw.base}>
            <Divider my="2" style={{ width: "20%", marginLeft: "40%" }} thickness="5" mx="4" />
            <HStack space="2.5" mt="4" px="8" mb="0">
                <Stack direction="column" mb="2.5" mt="1.5" space={1}>
                    {MainTopic()}
                    {MainTopic()}
                    {MainTopic()}
                </Stack>
            </HStack>
        </ScrollView>
    )
}