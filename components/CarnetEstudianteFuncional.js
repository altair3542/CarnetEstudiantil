import React from 'react'
import { View, Text, Image, StyleSheet, Button, } from 'react-native'

const CarnetEstudianteFuncional = () => {
  const [nombre, setNombre] = useState('Juan Pérez')
  const [identificacion, setIdentificacion] = useState('202320001')
  const [programa, SetPrograma] = useState('Ingenieria de Software')
  const [estado, setEstado] = useState('Activo')
  const [foto, setFoto] = useState('https://randomuser.me/api/portraits/men/50.jpg');


  return(
    <View className="p-5 bg-white rounded-lg shadow-lg w-80">
      <Image source={{ uri: foto }} className="w-32 h-32 rounded-full mx-auto" />
      <Text className="text-xl font-bold text-center mt-3">{nombre}</Text>
    </View>

  )
}


export default CarnetEstudianteFuncional;
