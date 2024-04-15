import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FunctionTitle from '../components/FunctionTitle';
import Card from '../components/Card';
function Home() {
    return (
    <View style={styles.container}>
         {/* School Updates */}
        <View>
            <FunctionTitle>School Updates</FunctionTitle>
            <ScrollView style={styles.cardContainer} horizontal={true}>
                <View>
                    <Card title="News" text={3} image={require('../assets/icons/newspaper-folded.png')}/>
                </View>
                <View>
                    <Card title="Events" text={5} image={require('../assets/icons/event.png')}/>
                </View>
                <View>
                    <Card title="Bulleting" text={11} image={require('../assets/icons/bulletin-board.png')}/>
                </View>
           </ScrollView>
        </View>

        {/* Academic */}
        <View>
            <FunctionTitle>Academics</FunctionTitle>
            <ScrollView style={styles.cardContainer} horizontal={true}>
                <View>
                    <Card title="Assignment" text={3} image={require('../assets/icons/newspaper-folded.png')}/>
                </View>
                <View>
                    <Card title="Events" text={5} image={require('../assets/icons/event.png')}/>
                </View>
                <View>
                    <Card title="Attendance" text={11} image={require('../assets/icons/bulletin-board.png')}/>
                </View>
           </ScrollView>
        </View>

        {/* Communication */}
        <View>
            <FunctionTitle>Academics</FunctionTitle>
            <ScrollView style={styles.cardContainer} horizontal={true}>
                <View>
                    <Card title="Assignment" text={3} image={require('../assets/icons/newspaper-folded.png')}/>
                </View>
                <View>
                    <Card title="Events" text={5} image={require('../assets/icons/event.png')}/>
                </View>
           </ScrollView>
        </View>

    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      margin: 20
    },
    cardContainer: {
        flexDirection: 'row',
        paddingVertical: 20
    }
});
export default Home;