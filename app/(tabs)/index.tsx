import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme, { ColorScheme } from '@/hooks/useTheme'
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { createHomeStyles } from '@/assets/images/styles/home.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import Header from '@/components/Header';
import Todoinput from '@/components/Todoinput';

const index = () => {

    const {toggleDarkMode, colors} = useTheme();

    const todos = useQuery(api.todos.getTodos)

    const addTodo = useMutation(api.todos.addTodo)
    const clearAllTodos = useMutation(api.todos.clearAlltodos)

    const HomeStyle = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={HomeStyle.container}>
    <StatusBar barStyle={colors.statusBarStyle}></StatusBar>
    <SafeAreaView style={HomeStyle.safeArea}>
      
      <Header/>

      <Todoinput></Todoinput>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the Theme</Text>
      </TouchableOpacity>
    </SafeAreaView>
      </LinearGradient>
  )
}

const createStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        gap:10,
        backgroundColor: colors.bg,
    },
    content:{
        fontSize:20
    }
})

return styles;
}

export default index