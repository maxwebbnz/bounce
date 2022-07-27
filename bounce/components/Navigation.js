/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */

import { Box, Text, HStack, Center, Pressable, Stack } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

/**==============================================
 **              Navigation UI component
 *?  What does it do? Controls the navigation UI
 *@param navigation passed by react-navigation by default
 *@return UI/controller.
 *=============================================**/
export default function Navigation() {
    const navigation = useNavigation()
    // hook call
    // return JSX
    return (
        <Box bg="white" width="100%" maxW="100%" alignSelf="center">
            <Center>
                <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} onPress={() => navigation.navigate('HomeContent')}>
                        <Center>
                            <Feather name="book-open" size={24} color="#ED8467" />
                            <Text>explore</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="search" size={24} color="#ED8467" />
                            <Text>search</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="map-pin" size={30} color="#ED8467" />
                            <Text>map</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="message-square" size={24} color="#ED8467" />
                            <Text>message</Text>
                        </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} >
                        <Center>
                            <Feather name="user" size={24} color="#ED8467" />
                            <Text>profile</Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Center>
        </Box >
    )
}