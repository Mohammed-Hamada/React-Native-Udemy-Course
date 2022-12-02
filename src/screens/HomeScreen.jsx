import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hi There!</Text>
      <Button
        color={'#25b3a2'}
        onPress={() => {
          navigation.navigate('Components');
        }}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title="Go To List Demo"
      />
      <Button
        color={'red'}
        onPress={() => {
          navigation.navigate('AnimalsList');
        }}
        title="Go To AnimalsList Demo"
      />
      <Button
        color={'purple'}
        onPress={() => {
          navigation.navigate('Counter');
        }}
        title="Go To Counter Demo"
      />
       <Button
        color={'#ff00f7'}
        onPress={() => {
          navigation.navigate('RandomColors');
        }}
        title="Go To RandomColors Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
