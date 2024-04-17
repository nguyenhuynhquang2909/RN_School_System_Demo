import {View, Image, Text, StyleSheet} from "react-native";
function TodayCard({image, text}) {
    return (<View style={styles.container}>
        <View style={styles.innerContainer} >
            <Image source={image} style={styles.image}  />
        </View>
        <Text style={styles.text}>{text}</Text>
    </View>);
}
export default TodayCard;

const styles = StyleSheet.create({
    container: {
        margin: 3,
        flexDirection: "column",
        paddingHorizontal: 5
    },
    innerContainer: {
        width: 60,
        height: 58,
        borderColor: 'black',
        borderWidth: 2,
        alignItems: "center",
    },
    image: {
        width: 44,
        height: 44,
        resizeMode: "cover"
    },
    text: {
        color: "#949494",
        fontSize: 12,
        fontWeight: 700
    }
});