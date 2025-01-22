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

const
