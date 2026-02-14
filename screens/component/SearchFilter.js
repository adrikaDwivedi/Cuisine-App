import { StyleSheet, Text, View } from "react-native";
import React , {useState} from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";


const SearchFilter = ({ icon, placeholder, onSearch }) => {
    const[query , setQuery] = useState(' ');

    const handleSearch = () => {
        if (onSearch){
            onSearch(query);
        }
    }
  return (                                                                                  
    <View style={styles.view}>

      <FontAwesome 
      name={icon} 
      size={30}
      color="#fff"
      style={styles.icon}
      />
      <TextInput
       style={styles.txt} 
       value={query}
      onChangeText={setQuery}
      onSubmitEditing={handleSearch}
      placeholder={placeholder}
    placeholderTextColor="black"
     /> 
      
      
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#036666",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,

  },
  txt:{
    flex:1,
    fontSize:22,
    color: "#fff",
  },
  icon:{
    marginRight: 10,
    alignSelf: "center",
    color: "#fff",
  }
});
