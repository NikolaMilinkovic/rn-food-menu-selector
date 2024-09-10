import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ route, navigation }) {

  const {categoryId} = route.params;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  })

  // Set the name in the menu dynamically
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  },[categoryId, navigation])

  function renderMeal(itemData){
    return <MealItem 
      navigation={navigation}
      data={itemData.item}
    />
  }

  return (
    <View style={styles.container}>
      {displayedMeals && (
        <FlatList style={styles.mealList} data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMeal} />

      )}
    </View>
  )
}

// id,
// categoryIds,
// title,
// affordability,
// complexity,
// imageUrl,
// duration,
// ingredients,
// steps,
// isGlutenFree,
// isVegan,
// isVegetarian,
// isLactoseFree

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  mealList: {
    flex: 1,
    padding: 16,
  }
})

export default MealsOverviewScreen