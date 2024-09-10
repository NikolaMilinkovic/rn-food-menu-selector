import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { MEALS } from './data/dummy-data';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { 
              backgroundColor: '#351401',
            },
            headerTintColor: '#fff',
            contentStyle: {
              backgroundColor: '#3f2f25',
            }
        }}>

          {/* CATEGORIES PAGE */}
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoryScreen} 
            options={{
              title: 'Categories',
          }}/>

          {/* MEALS OVERVIEW PAGE */}
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const { categoryId } = route.params;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />

          {/* MEAL DETAILS PAGE */}
          <Stack.Screen 
            name="MealDetails" 
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
