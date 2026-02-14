import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoritesScreen = () => {
  return (
    <View style={styles.cont}>
      <Text>FavoritesScreen</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
      cont: {
        flex: 1,
        justifyContent : 'center',
        alignItems: 'center',
    }
})