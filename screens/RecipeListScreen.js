import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList, Button, TextInput
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import SearchFilter from "./component/SearchFilter";
import CategoriesFilter from "./component/CategoriesFilter";
import RecipeCard from "./component/RecipeCard";
import { getRecipesByCategory } from "../HelperFunctions";


  const RecipeListScreen = () => {
    const [query , setQuery] = useState("");
    const [recipes , setRecipes] = useState([]);

    const API_KEY = "e2a318d201d1478995f755719a0f56d9";

    const fetchRecipes = async () =>{
      try {
        const response = await fetch (
          `https://api.spoonacular.com/recipes/complexSearch?cuisine=${query}&apiKey=${API_KEY}`,
          {
            headers:{
              "Content-Type" : "application/json",
            }
          }
        )
        const data = await response.json();
        setRecipes(data.results || []);
      } catch (error) {
        console.log(error);
      }
    }
    return (
 
        <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Enter cuisine"
        value={query}
        onChangeText={setQuery}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Search" onPress={fetchRecipes} />

    
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    </View>
    );
  }
  export default RecipeListScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 20,
    },
    flatListContainer: {
      paddingBottom: 16,
    },
  });