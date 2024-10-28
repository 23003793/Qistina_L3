import React, { useState } from 'react';
import { Text, TextInput, SafeAreaView, StatusBar, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const User = () => {
    // State for user type and username
    const [userType, setUserType] = useState('');
    const [userName, setUserName] = useState('');

    const handleLogInPress = () => {
        // Display a toast message with the user type and username
        ToastAndroid.show(`Welcome ${userType} ${userName}`, ToastAndroid.SHORT);
    };

    return (
        <>
            <StatusBar hidden={true} />
            <SafeAreaView>
                {/* 1G */}
                <Text>User Type:</Text>
                <RNPickerSelect
                    onValueChange={(value) => setUserType(value)} // Update user type state
                    items={[
                        { label: 'Admin', value: 'Admin' },
                        { label: 'User', value: 'User' },
                    ]}
                />

                {/* 1G */}
                <Text>User Name:</Text>
                <TextInput
                    style={{ borderWidth: 1, marginTop: 10, padding: 5 }}
                    onChangeText={text => setUserName(text)} // Update username state
                />

                {/* 1G */}
                <Text>Password:</Text>
                <TextInput
                    style={{ borderWidth: 1, marginTop: 10, padding: 5 }}

                />

                {/* 1E */}
                <TouchableOpacity onPress={handleLogInPress}>
                    <Text>LOG IN</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default User;




