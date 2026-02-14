import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RecipeListScreen from '../RecipeListScreen';
import RecipeDetailScreen from '../RecipeDetailScreen';
import WelcomeScreen from "../WelcomeScreen";
import SplashScreen from '../SplashScreen';
import BottomTabNavigation from '../navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <GestureHandlerRootView>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="HomeTabs" component={BottomTabNavigation}/>
            <Stack.Screen name="RecipeList" component={RecipeListScreen} />
            <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})