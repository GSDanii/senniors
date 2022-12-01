
import { StyleSheet, View } from 'react-native';
import { ProfileScreen } from './src/screens/ProfileScreen';



export default function App() {
  let name = 'Claudia'
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginStart: 40,
    marginTop: 100,
  },

});
