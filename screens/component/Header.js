import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const Header = ({headerText, headerIcon}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{headerText}</Text>
      <FontAwesome name={headerIcon} size={30} color="#036666" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header:{
    marginTop:60,
    flexDirection: "row",
  },
  headerText: {
    flex:1 ,
    fontSize:25 ,
    fontWeight:"700",
    color:"#036666",
    }
});
