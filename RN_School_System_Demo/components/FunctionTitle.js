import {Text, StyleSheet} from 'react-native';

function FunctionTitle({children}) {
    const styles = StyleSheet.create({
        title: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#949494'
        }
    });
    return  <Text style={styles.title}>{children}</Text>
    
}
export default FunctionTitle;