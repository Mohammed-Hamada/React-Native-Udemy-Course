import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Enter Your Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder={'Type your name here!'}
        onChangeText={(newText) => {
          setName(newText);
        }}
        defaultValue={name}
      />
      <Text>Counter Is: {counter}</Text>
      <Text>Name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#7faeff',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default CounterScreen;
