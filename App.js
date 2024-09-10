import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: '#351401',
      },
      headerTintColor: '#fff',
      sceneContainerStyle: {
        backgroundColor: '#3f2f25',
      },
      drawerContentStyle: { backgroundColor: '#351301' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351301',
      drawerActiveBackgroundColor: '#e4baa1',
      edgeWidth: 1000,
      swipeEdgeWidth: 300,
      drawerStyle: {
        width: '70%'
      }
    }}>
      <Drawer.Screen name="Categories" component={CategoryScreen} options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='list' />     
      }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
        title: 'Favorites',
        drawerIcon: ({ color, size }) => <Ionicons color={color} size={size} name='star' />     
      }}/>
    </Drawer.Navigator>
  )
}

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
            name="Drawer" 
            component={DrawerNavigator} 
            options={{
              headerShown: false
          }}/>

          {/* MEALS OVERVIEW PAGE */}
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen}
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
