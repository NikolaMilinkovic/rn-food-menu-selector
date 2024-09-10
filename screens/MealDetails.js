import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data';
import List from '../components/MealDetails/List';

function MealDetails({ route, navigation }) {
  const { data } = route.params;

  
  // Set the name in the menu dynamically
  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === data.id).title;
    navigation.setOptions({
      title: mealTitle,
    });
  },[data, navigation])

  return (
    <ScrollView style={styles.mainContainer}>
      <Image style={styles.detailsImage} source={{ uri: data.imageUrl }}/>
      <Text style={[styles.text, styles.title]}>{data.title}</Text>
      <View style={styles.details}>
          <Text style={[styles.detailItem, styles.text]}>{data.duration} m</Text>
          <Text style={[styles.detailItem, styles.text]}>{data.complexity.toUpperCase()}</Text>
          <Text style={[styles.detailItem, styles.text]}>{data.affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.listsContainer}>
        <Text style={[styles.text, styles.subtitle]}>Ingredients:</Text>
        <List
          data={data.ingredients}
        />
        <Text style={[styles.text, styles.subtitle]}>Steps:</Text>
        <List 
          data={data.steps}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  mainContainer: {
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
    color: '#fff'
  },
  detailsImage: {
    maxHeight: 250,
    minHeight: 250,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
    marginHorizontal: 16,
    textAlign: 'center',
    padding: 6,
    color: '#e2b497',
    borderBottomColor: '#e2b497',
    borderBottomWidth: 1,
  },
  listsContainer: {
    paddingHorizontal: '8%',
    marginBottom: '10%'
  }
});

export default MealDetails