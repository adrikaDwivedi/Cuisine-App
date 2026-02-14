import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import {getRecipeDetails} from "../api";

const RecipeDetailScreen = ({ route }) => {
  const { recipeId } = route.params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchIndianRecipes = async () => {
    setLoading(true);
    try {
      const data = await getIndianRecipes();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching Indian recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchIndianRecipes();
}, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!recipe) {
    return (
      <View style={styles.loader}>
        <Text>Failed to load recipe details</Text>
      </View>
    );
  }

  return (
   <ScrollView style={styles.container}>
  <Image source={{ uri: recipe.image }} style={styles.image} />
  <Text style={styles.title}>{recipe.title}</Text>
  <Text style={styles.details}>Ready in {recipe.readyInMinutes} minutes</Text>
  <Text style={styles.details}>Servings: {recipe.servings}</Text>

  <Text style={styles.sectionTitle}>Ingredients</Text>
  {recipe.extendedIngredients?.map((ingredient) => (
    <Text key={ingredient.id} style={styles.ingredient}>
      {ingredient.original}
    </Text>
  ))}

  <Text style={styles.sectionTitle}>Instructions</Text>
  <Text style={styles.instructions}>{recipe.instructions}</Text>
</ScrollView>

  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
    width: '100%',
    height: 300,
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#036666',
  },
  details: {
    fontSize: 16,
    marginVertical: 2,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 2,
  },
  instructions: {
    fontSize: 16,
    marginVertical: 8,
  },
});
