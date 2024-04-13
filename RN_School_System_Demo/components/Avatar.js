import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Avatar() {
    return (
        <View style={styles.avatarContainer}>
            <Image 
            source={require('../assets/images/man.png')}
            style={styles.avatarImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    avatarContainer: {
        borderRadius: 50,
        width: 72,
        height: 72,
        overflow: 'hidden',
    },
    avatarImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        
    }
});

export default Avatar;
