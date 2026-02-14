import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeListScreen from '../RecipeListScreen';
import CategoriesScreen from '../component/CategoriesScreen';
import FavoritesScreen from '../component/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
   <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#f96160',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >

         <Tab.Screen name="Home" component={RecipeListScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
   </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})