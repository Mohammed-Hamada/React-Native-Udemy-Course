import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return (
    <FlatList
      data={buttonsData}
      renderItem={({ item: { color, screen } }) => (
        <Button
          color={color}
          onPress={() => {
            navigation.navigate(screen);
          }}
          title={`Go To ${screen} Demo`}
        />
      )}
    />
  );
};

const buttonsData = [
  {
    color: '#25b3a2',
    screen: 'Components',
  },
  {
    color: '#a39d70',
    screen: 'List',
  },
  {
    color: '#ff0000',
    screen: 'AnimalsList',
  },
  {
    color: '#22a349',
    screen: 'Counter',
  },
  {
    color: '#091487',
    screen: 'RandomColors',
  },
  {
    color: '#013d3c',
    screen: 'ManualColor',
  },
];

export default HomeScreen;
