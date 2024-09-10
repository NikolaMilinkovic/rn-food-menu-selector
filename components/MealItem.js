import React from 'react'
import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native'


function MealItem({ data, navigation }) {
  
  function onPressHandler(){
    navigation.navigate('MealDetails', {
      data: data,
    })
  }

  return(
    <View style={styles.mainContainer}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{color: '#cfc'}} 
        style={({ pressed }) => [
          styles.mealContainer,
          pressed ? styles.buttonPressed : null 
      ]}>
        <View style={styles.imgTextContainer}>
          <Image 
            style={styles.image}
            source={{
              uri: `${data.imageUrl}`,
            }}
          />
          <Text>
            {data.title}
          </Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{data.duration} m</Text>
          <Text style={styles.detailItem}>{data.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{data.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 16,
    borderRadius: 8,

    // Shadows
    // Android
    elevation: 8,
    shadowColor: '#333333',

    // iOS
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  mealContainer: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
    // transform: [{scale: 0.98}]
  },
  image: {
    width: '100%',
    height: 180,
    backgroundColor: '#ccc'
  },
  imgTextContainer: {
    width: '100%',
    alignItems: 'center'
  },
  details: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 12,
  }
})

export default MealItem