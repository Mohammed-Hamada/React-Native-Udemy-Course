import { View } from 'react-native';
import React from 'react';

const ColorViewComponent = ({ color }) => {
  console.log('color: ', color);

  return (
    <View
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
      }}
    ></View>
  );
};

export default ColorViewComponent;
