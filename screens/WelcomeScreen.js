import { StyleSheet, Text, View, Image, Pressable, Animated } from "react-native";
import React, { useRef } from "react";

const WelcomeScreen = ({navigation}) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.view}>
      <Image source={require("../assets/mainpic.jpg")} style={styles.img} />
     <View style={styles.view2}>
      <View style={styles.rowContainer}>
        <View style={styles.textColumn}>
          <Text style={styles.textStyle}>CONFUSED</Text>
          <Text style={styles.btmtxt}>WHAT TO COOK</Text>
        </View>
        <Image 
          source={require("../assets/ques1.jpg")}
          style={styles.questionImg}
        />
      </View>
      <Text style={styles.txt2}>Welcome to the right place</Text>
      <Pressable
          onPress={() => navigation.navigate("HomeTabs")}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={[styles.top, { opacity: fadeAnim }]}> 
            <Text style={styles.topTxt}>Let's Go</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;
 
const styles = StyleSheet.create({
  view: {
   flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  view2:{
    flexDirection : 'column',
    alignItems: "center",
  },
  img: {
    width: '100%',
    height: '450',
    alignSelf: "center",
    marginTop: 40,
  },
  textStyle: {
    color: "#036666",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginRight: 50,
    
  },
  txt2: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#036666",
    marginTop: 50,
  },
  top: {
    backgroundColor: "#f96163",
    borderRadius: 18,
    paddingVertical: 18,
    width: 185,
    alignItems: "center",
    marginTop: 50,
    shadowColor: "#222", // changed to a darker color
    shadowOffset: { width: 8, height: 5 },
    shadowOpacity: 0.8, // increased for stronger effect
    shadowRadius: 2, // slightly increased for more spread
    elevation: 7, // increased for Android
  },
  topTxt: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  btmtxt:{
    fontSize: 15,
    color: "#036666",
    marginTop: 5,
  },
  questionImg: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 0,
    backgroundColor: "#fff",
    marginRight: 0,
    marginLeft: -50, // added negative margin to bring image closer to text
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 0,
  },
});
