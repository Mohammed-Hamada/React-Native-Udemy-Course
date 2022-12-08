import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  AnimalsListScreen,
  ComponentsScreen,
  CounterScreen,
  HomeScreen,
  ListScreen,
  ManualColorGenerator,
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
    ManualColor: ManualColorGenerator,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
