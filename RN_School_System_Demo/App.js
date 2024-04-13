import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <NavBar />
        </View>
      <View style={styles.profileContainer}>
        <Profile />
      </View>
      <View>
        <Home />
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
    paddingVertical: 20,
    alignItems: 'center'
  }
  
});
