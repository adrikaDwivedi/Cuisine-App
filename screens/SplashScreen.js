import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'
import {useEffect , useRef} from 'react'


const SplashScreen = ({navigation}) => {

    const animation = useRef(null);

    useEffect(() => {
       const timer = setTimeout( () => {
            navigation.replace("Welcome");
        },3000);
            return () => clearTimeout(timer);
    } , []);

    return (
    <View style={styles.cont}>
      <LottieView  
      ref={animation}
      source={require('../assets/Cooking.json')}
      style={styles.gif}
      resizeMode='contain'
      autoPlay
      loop
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  cont: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  gif: { width: 300, height: 300 },
});