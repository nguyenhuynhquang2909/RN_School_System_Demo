import {View, Image, Text, StyleSheet} from 'react-native'
function NavBar() {
    return (
        <View style={styles.navContainer}>
            <Image style={styles.icon} source={require("../assets/icons/menu.png")}/>
            <Text style={styles.title}>Menu</Text>
            <Image style={styles.icon} source={require("../assets/icons/notification.png")}/>
        </View>
    )
}
export default NavBar;
const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10

    },
    icon: {
        width: 30,
        height: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});