import {View, Image, Text, StyleSheet} from "react-native";
function Card({title, image, text}) {
    return (
    <View style={styles.frame}>
        <View style={styles.supportFrame}>
            <Text style={styles.text}>{text}</Text>
            <Image source={image} style={styles.image}/>
        </View>
        <Text style={styles.text}>{title}</Text>
    </View>
    )
}   
const styles = StyleSheet.create({
    frame: {
        width: 101,
        height: 76,
        position: 'relative',
        borderColor: 'black',
        borderWidth: 2,
        margin: 6,
        padding: 3
    },
    supportFrame: {
       flexDirection: 'row' ,
       justifyContent: 'space-between',
       paddingBottom: 10
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'cover'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold'
    }

});
export default Card;