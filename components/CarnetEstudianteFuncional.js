import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const CarnetEstudianteFuncional = ({ nombre, identificacion, programa, foto }) => {
  return(
    <View style={styles.card}>
      <Image source={{ uri: foto }} style={styles.imagen} />
      <Text style={styles.nombre}>{nombre}</Text>
      <Text> ID: {identificacion}</Text>
      <Text> carrera: {programa}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  imagen:{
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default CarnetEstudianteFuncional;
