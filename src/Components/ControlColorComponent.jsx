import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ControlColorComponent = ({
  colorName = 'None',
  onIncrease,
  onDecrease,
}) => {
  return (
    <View>
      <Text style={styles.text}>{colorName}</Text>
      <Button
        color={colorName.toLowerCase()}
        title={`Increase ${colorName}`}
        onPress={() => onIncrease()}
      />
      <Button
        color={colorName.toLowerCase()}
        title={`Decrease ${colorName}`}
        onPress={() => onDecrease()}
      />
    </View>
  );
};

export default ControlColorComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});
