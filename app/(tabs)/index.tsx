import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'

const index = () => {

    const {toggleDarkMode} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is the index page</Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the Theme</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        gap:10
    },
    content:{
        fontSize:20
    }
})

export default index