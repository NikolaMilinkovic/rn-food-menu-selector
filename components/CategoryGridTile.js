import React from 'react'
import { View, Text, Pressable, StyleSheet, Platform } from 'react-native'

function CategoryGridTile({title, color, onPress}) {

  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        onPress={onPress} 
        android_ripple={{color: '#fff'}} 
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null 
        ]}>
        <View style={[styles.innerContainer]}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem:{
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    // Shadows
    // Android
    elevation: 8,
    shadowColor: '#333333',

    // iOS
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  button: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonPressed:{
    opacity: 0.5
  }
})

export default CategoryGridTile