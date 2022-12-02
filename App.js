import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  AnimalsListScreen,
  ComponentsScreen,
  CounterScreen,
  HomeScreen,
  ListScreen,
  RandomColorsScreen,
} from './src/screens';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    AnimalsList: AnimalsListScreen,
    Counter: CounterScreen,
    RandomColors: RandomColorsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
