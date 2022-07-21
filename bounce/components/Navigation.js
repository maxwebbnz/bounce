/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */

import { Box, Text, HStack, Center, Pressable, Stack } from 'native-base';
import { Feather } from '@expo/vector-icons';

export default function Navigation() {
    return (
        <Box bg="white" width="100%" maxW="100%" alignSelf="center">
            <Center>
                <HStack bg="light.300" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="book-open" size={24} color="black" />
                            <Text>explore</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="search" size={24} color="black" />
                            <Text>search</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="map-pin" size={30} color="black" />
                            <Text>map</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="message-square" size={24} color="black" />
                            <Text>message</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="user" size={24} color="black" />
                            <Text>profile</Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Center>
        </Box >
    )
}