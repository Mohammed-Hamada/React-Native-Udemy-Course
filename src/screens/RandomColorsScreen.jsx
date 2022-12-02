import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { RandomColor } from '../Components';

const RandomColorsScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Generate a random color"
        onPress={() => {
          const color = generateRandomColor();
          setColors([...colors, color]);
        }}
      />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return <RandomColor color={item} />;
        }}
        keyExtractor={(item, index) => `${item}${index}`}
      />
    </View>
  );
};

const generateRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; i++) {
    const color = Math.floor(Math.random() * 256);
    rgb.push(color);
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

export default RandomColorsScreen;

const styles = StyleSheet.create({});
