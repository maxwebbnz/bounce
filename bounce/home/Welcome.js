/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */
import { useState, useRef } from 'react'
import { ImageBackground, View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import { LinearGradient } from 'expo-linear-gradient';

//* Authentication controller
import Authenticate from '../auth/Authenticate';

//? for testing
import { dataService } from '../dataservices/handler';

//* Background Image
import BackgroundImage from '../assets/background.jpg';
import { AuthErrorCodes } from 'firebase/auth';
export default function Welcome() {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [formattedValue, setFormattedValue] = useState("");
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    // const phoneInput = useRef < PhoneInput > (null);
    const styles = StyleSheet.create({
        title: {
            fontSize: 80,
            color: 'white',
            // Position text to the top left. Weird but works, if you can find a cleaner way to do this please do.
            transform: [{ rotate: '90deg' }, { translateY: (windowWidth * 0.3) }, { translateX:  (windowHeight * 0.26) }],
            fontWeight: 'bold',
        },
        phoneInput: {
            marginTop: '5%'
        },
        image: {
            flex:1, 
            justifyContent: "center",
            width: '100%',
            height: '100%',
        },
        drawer: {
            width: '100%',
            height: '45%',
            marginTop: 'auto',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: 'center',
            justifyContent: 'flex-start',
            
        }
    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ImageBackground style={ styles.image } source={BackgroundImage} blurRadius={8} resizeMode="cover">
                    <Text style={styles.title}>Bounce</Text>
                    <View style={styles.drawer}>
                        <LinearGradient
                            colors={['#EE7F68', '#E9B15D']}
                            style={styles.drawer}
                            
                        ><Text style={{color:'white', fontSize: 50, transform: [{translateY: -20}]}}>__</Text></LinearGradient>
                        
                    </View>

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