import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import SearchFilter from "./component/SearchFilter";
import CategoriesFilter from "./component/CategoriesFilter";
import RecipeCard from "./component/RecipeCard";
import { getRecipesByCategory } from "../HelperFunctions";

  const RecipeListScreen = () => {
    
   const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipesByCategory();
      setRecipes(data);
    };
    fetchRecipes();
  } , []);

    return (
      <SafeAreaView style={styles.container}>
        <Header headerText={"Hey there"} headerIcon={"bell-o"} />
        <SearchFilter
        icon = "search"
        />
        <View>
          <FlatList 
          data={recipes}
          renderItem={({item}) => (
            <RecipeCard 
            id= {item.id}
            title={item.title}
            image={item.image}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          />
        </View>
       </SafeAreaView>
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