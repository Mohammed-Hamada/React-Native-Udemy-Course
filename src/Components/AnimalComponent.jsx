import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const AnimalComponent = ({ name, imageSrc, stars }) => {
  const rating = (stars) => '★★★★★☆☆☆☆☆'.slice(5 - stars, 10 - stars);

  return (
    <View style={styles.outerView}>
      <View style={styles.innerView}>
        <Image source={{ uri: imageSrc }} style={styles.image} />
        <Text style={styles.starsText}>{rating(stars)}</Text>
      </View>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

export default AnimalComponent;

const styles = StyleSheet.create({
  outerView: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  innerView: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginBottom: 5,
  },
  nameText: {
    fontSize: 25,
  },
  starsText: {
    color: '#11ff00',
    fontSize: 20
  }
});
