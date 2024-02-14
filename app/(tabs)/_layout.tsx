import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { Entypo,MaterialIcons,Feather ,MaterialCommunityIcons  } from "@expo/vector-icons";

import { Colors } from "@/constants/Colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
    initialRouteName="cart"
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        tabBarStyle: {
         height: hp('10%'),
        },
        
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "HOME",
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? Colors.light.themeColor : "black"}
            />
          ),
          tabBarActiveTintColor: Colors.light.themeColor,
          tabBarInactiveTintColor: "#030303",
          tabBarLabelStyle: { fontSize: 12, fontFamily: "latoBold" },
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: "CATEGORY",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="category"
              size={24}
              color={focused ? Colors.light.themeColor : "black"}
            />
          ),
          tabBarActiveTintColor: Colors.light.themeColor,
          tabBarInactiveTintColor: "#030303",
          tabBarLabelStyle: { fontSize: 12, fontFamily: "latoBold" },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "CART",
          tabBarIcon: ({ color, focused }) => (
            <Feather 
              name="shopping-cart"
              size={24}
              color={focused ? Colors.light.themeColor : "black"}
            />
          ),
          tabBarActiveTintColor: Colors.light.themeColor,
          tabBarInactiveTintColor: "#030303",
          tabBarLabelStyle: { fontSize: 12, fontFamily: "latoBold" },
        }}
      />
      <Tabs.Screen
        name="whishlist"
        options={{
          title: "WHISHLIST",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name="heart-plus-outline"
              size={24}
              color={focused ? Colors.light.themeColor : "black"}
            />
          ),
          tabBarActiveTintColor: Colors.light.themeColor,
          tabBarInactiveTintColor: "#030303",
          tabBarLabelStyle: { fontSize: 12, fontFamily: "latoBold" },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarIcon: ({ color, focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? Colors.light.themeColor : "black"}
            />
          ),
          tabBarActiveTintColor: Colors.light.themeColor,
          tabBarInactiveTintColor: "#030303",
          tabBarLabelStyle: { fontSize: 12, fontFamily: "latoBold" },
        }}
      />
     
    </Tabs>
  );
}
