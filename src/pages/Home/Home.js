import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
