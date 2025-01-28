import React from 'react'
import { View, Text, Image, StyleSheet, Button, TextInput, } from 'react-native'

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
      <Text className="text-gray-600 text-center">ID: {identificacion}</Text>
      <Text className="text-gray-600 text-center mb-4">Carrera: {carrera}</Text>

      <TextInput
        className="border border-gray-300 rounded p-2 my-2"
        placeholder="Actualizar Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        className="border border-gray-300 rounded p-2 my-2"
        placeholder="Actualizar Carrera"
        value={carrera}
        onChangeText={(text) => setCarrera(text)}
      />

      <Button title="Cambiar Estado" onPress={() => setEstado(estado === 'Activo' ? 'Inactivo' : 'Activo')} />
    </View>

  )
}


export default CarnetEstudianteFuncional;
