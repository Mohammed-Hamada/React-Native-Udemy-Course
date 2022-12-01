import { StyleSheet, Text, View } from 'react-native';


const ComponentsScreen = () => {
  const name = 'Mohammed'
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started With React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name in {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
