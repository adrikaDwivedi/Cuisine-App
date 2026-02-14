import { StyleSheet, Text, View, SafeAreaView,FlatList, ActivityIndicator } from 'react-native' 
import Header from './Header'
import SearchFilter from './SearchFilter'
import CategoriesFilter from './CategoriesFilter'                               
import spoonacular from '../../api' 
import { useState, useEffect } from 'react'

const CategoriesScreen = () => {   
  
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchRecipes = async () =>{
      try {
        const response = await spoonacular.get("/recipes/complexSearch", {
          params : {
            query: "pasta",
            cuisine: "american",
            number:10,
          },
        });
        setRecipes(response.data.results);
      } catch (error) {
        console.log("API ERROR:", error);
      } finally{
        setLoading(false);
      }
    };
    fetchRecipes();
  } , []);

  if(loading){
    return <ActivityIndicator size="large" color="blue"/>
  }
  
  return (                               
      <SafeAreaView style={styles.container}>                                
        <Header headerText={"Hey there"} headerIcon={"bell-o"} />                                
        <SearchFilter                               
          icon="search"                               
          placeholder="Enter recipe to search"                                
        />                               
        <View style={{ marginTop: 20 }}>                                  
          <Text style={styles.txt1}>Categories</Text>                                
        </View>                                                            
        <View>                                
          <CategoriesFilter/>                               
        </View>  
        <View>
          <FlatList 
          data={recipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <Text>{item.title}</Text>
          )}
          />
        </View>                             
        </SafeAreaView>                               
  )                                   
}                               


export default CategoriesScreen                               
                               
const styles = StyleSheet.create({                               
    container: {                               
      flex: 1,                               
      marginHorizontal: 20,                               
    },                               
    loader: {                               
      flex: 1,                               
      justifyContent: "center",                               
      alignItems: "center",                               
    },                               
    txt1: {                               
      fontSize: 22,                               
      fontWeight: "bold",                               
    },                               
    flatListContainer: {                               
      paddingBottom: 16,                               
    },                               
  });                               
                               