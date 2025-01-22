import React from 'react'
import { StyleSheet, View } from 'react-native';
import CarnetEstudianteFuncional from './components/CarnetEstudianteFuncional'

const App = () => {
  return(
    <View style={styles.container}>
      <CarnetEstudianteFuncional
        nombre="Santiago Mesa"
        identificacion="10171415360"
        programa="ingenieria de software y datos"
        foto="https://randomuser.me/api/portraits/men/4.jpg"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd'
  },
});

export default App;
