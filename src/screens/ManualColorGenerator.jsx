import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import ControlColorComponent from '../Components/ControlColorComponent';

const COLOR_INCREMENT = 20;

const ManualColorGenerator = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color  => "red", "green", "blue"
    // change => +15, -15

    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
    }
  };

  const COLORS = [
    {
      color: 'Red',
      onIncrease: () => setColor('red', COLOR_INCREMENT),
      onDecrease: () => setColor('red',  -COLOR_INCREMENT),
    },
    {
      color: 'Green',
      onIncrease: () => setColor('green', COLOR_INCREMENT),
      onDecrease: () => setColor('green', -COLOR_INCREMENT),
    },
    {
      color: 'Blue',
      onIncrease: () => setColor('blue', COLOR_INCREMENT),
      onDecrease: () => setColor('blue', -COLOR_INCREMENT),
    },
  ];

  return (
    <View>
      <FlatList
        data={COLORS}
        renderItem={({ item }) => (
          <ControlColorComponent
            onIncrease={item.onIncrease}
            onDecrease={item.onDecrease}
            colorName={item.color}
          />
        )}
      />
      <View
        style={{
          width: 200,
          heigh: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      >
        <Text></Text>
      </View>
    </View>
  );
};

export default ManualColorGenerator;
