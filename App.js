import React from 'react'
import { View } from 'react-native';
import { TailwindProvider } from 'nativewind'
import CarnetEstudianteFuncional from './components/CarnetEstudianteFuncional'

const App = () => {
  return(
    <View className="flex-1 items-center justify-center bg-gray-100">
      <CarnetEstudianteFuncional
        nombre="pepito de los camotes"
        identificacion="35363538"
        programa="Cyberseguridad y apps moviles"
        foto="https://randomuser.me/api/portraits/men/19.jpg"
      />
    </View>
  )
}

export default App;
