import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import FunctionTitle from '../components/FunctionTitle';
import Card from '../components/Card';
import TodayCard from '../components/TodayCard';

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
                    <Card title="Assignment" text={3} image={require('../assets/icons/assignment.png')}/>
                </View>
                <View>
                    <Card title="Events" text={5} image={require('../assets/icons/event.png')}/>
                </View>
                <View>
                    <Card title="Attendance" text={11} image={require('../assets/icons/immigration.png')}/>
                </View>
           </ScrollView>
        </View>

        {/* Communication */}
        <View>
            <FunctionTitle>Communication</FunctionTitle>
            <ScrollView style={styles.cardContainer} horizontal={true}>
                <View>
                    <Card title="Chat" text={3} image={require('../assets/icons/newspaper-folded.png')}/>
                </View>
                <View>
                    <Card title="SMS" text={5} image={require('../assets/icons/event.png')}/>
                </View>
           </ScrollView>
        </View>

        {/* Today */}
        <View>
            <FunctionTitle>Today</FunctionTitle>
            <ScrollView style={styles.cardContainer} horizontal={true}>
                <View style={styles.todayContainer}>
                    <TodayCard text="Edu-News" image={require("../assets/icons/education.png")}/>
                    <TodayCard text="Quote" image={require("../assets/icons/right.png")} />
                    <TodayCard text="Thought" image={require("../assets/icons/thought-bubble.png")} />
                    <TodayCard text="City" image={require("../assets/icons/cityscape.png")} />
                    <TodayCard text="Word" image={require("../assets/icons/abc.png")} />
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
    },
    todayContainer: {
        flexDirection: 'row',
    }
});
export default Home;