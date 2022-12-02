import { FlatList } from 'react-native';
import React from 'react';
import { dummyAnimals } from '../utils';
import { AnimalComponent } from '../Components';

const AnimalsListScreen = () => {
  return (
    <FlatList
      data={dummyAnimals}
      renderItem={({ item }) => {
        return (
          <AnimalComponent
            imageSrc={item.image}
            name={item.name}
            stars={item.stars}
          />
        );
      }}
    />
  );
};

export default AnimalsListScreen;
