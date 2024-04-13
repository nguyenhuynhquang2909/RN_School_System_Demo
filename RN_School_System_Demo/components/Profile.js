import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Avatar from './Avatar';

function Profile() {
  return (
    <LinearGradient colors={['#FF0000', '#DF007A', '#BD00FF']} style={styles.profileContainer} >
      <View style={styles.avatarContainer}>
        <Avatar />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} >Nguyen Huynh Quang</Text>
        <Text style={styles.text}>Captain</Text>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    width: 370,
    height: 130,
    paddingHorizontal: 80,
    borderRadius: 25,
    position: 'relative',
  },
  avatarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 10,
    borderWidth: 2,
    borderRadius: 50,

  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 20,
    paddingLeft: 10       
  },
  text: {
    color: 'white',
    fontSize: 20,

  }
});

export default Profile;
