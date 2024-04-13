import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <NavBar />
        </View>
      <View style={styles.profileContainer}>
        <Profile />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center'
  }
  
});
