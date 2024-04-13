import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

function Profile() {
  return (
    <LinearGradient colors={['#FF0000', '#DF007A', '#BD00FF']} style={styles.profileContainer} >
      <View>
        
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    width: 370,
    height: 130,
    paddingHorizontal: 100,
    borderRadius: 25
  },

});

export default Profile;
