import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FunctionTitle from '../components/FunctionTitle';
function Home() {
    return (
    <View style={styles.container}>
         {/* School Updates */}
        <View>
            <FunctionTitle>School Updates</FunctionTitle>
           
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 20
    }
});
export default Home;