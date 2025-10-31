import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import useTheme from "@/hooks/useTheme"

const TabsLayout = () => { 
  const {colors} = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle:{
            backgroundColor: colors.surface,
            borderTopWidth:1,
            borderTopColor: colors.border,
            height:90,
            paddingTop:10,
            paddingBottom:30
        },
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"600"
        },
        headerShown:false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
