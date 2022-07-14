/*
 * Copyright (c) 2022 Bounce developed by alanmcilwaine and maxwebbnz
 * All rights reserved.
 */
import { useState, useRef } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

//* Authentication controller
import Authenticate from '../auth/Authenticate';

//? for testing
import { dataService } from '../dataservices/handler';

export default function Welcome() {
    const [value, setValue] = useState("");
    const [valid, setValid] = useState(false);
    const [formattedValue, setFormattedValue] = useState("");

    // const phoneInput = useRef < PhoneInput > (null);

    const styles = StyleSheet.create({
        title: {
            fontSize: 30
        },
        phoneInput: {
            marginTop: '5%'
        }
    })

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Welcome to Bounce NZ</Text>
            <Text>Sign in with Mobile</Text>
            <View style={styles.phoneInput}>
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
            </View>

        </View>
    );

}