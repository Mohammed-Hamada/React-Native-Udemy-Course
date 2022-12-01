import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { dummyUsers } from '../utils';

const ListScreen = () => {
  return (
    <FlatList
      keyExtractor={(user) => {
        return `${user.gender}${user.ip_address}${user.last_name}`;
      }}
      data={dummyUsers}
      renderItem={({ item }) => {
        return (
          <View style={styles.itemView}>
            <Text>Name: {item.first_name}</Text>
            <Text>{item.last_name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.gender}</Text>
            <Text>{item.ip_address}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemView: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    height: 130,
  },
});
export default ListScreen;
