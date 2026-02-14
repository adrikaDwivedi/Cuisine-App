import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { categories, colors } from "../../Constant";


const CategoriesFilter = ({onSeletCategory}) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View
          key={index}
          style={[
            styles.categoryItem,
          ]}
        >
        <Pressable onPress={()=> onSeletCategory(category.category)}> 
          <Text style={styles.categoryText}>{category.category}</Text>
          </Pressable> 
        </View>
      ))}
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start', // changed from center to flex-start
    alignItems: 'center',
    marginVertical: 14,
  },
  categoryItem: {
    borderRadius: 35,
    paddingVertical: 12,
    margin: 2, // reduced from 4 to 2 for minimal spacing
    flexBasis: '20%', // roughly 4 per row with spacing
     minWidth: 85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#036666' ,
   },
  categoryText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});
