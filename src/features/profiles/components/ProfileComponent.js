import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ProfileComponent = () => (
    <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProfileComponent;