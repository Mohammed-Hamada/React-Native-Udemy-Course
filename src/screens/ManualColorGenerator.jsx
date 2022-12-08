import { Text, View } from 'react-native';
import React, { useReducer } from 'react';
import ControlColorComponent from '../Components/ControlColorComponent';

const reducer = (state, action) => {
  // state: {red: number, green: number, blue: number}
  // action: { type: 'red' || 'green' || 'blue', payload: 15 || -15}
  switch (action.type) {
    case 'change_red':
      // Never going to do: state.red = state.red + 15;
      return state.red + action.payload >= 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload >= 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload >= 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
  }
};

const ManualColorGenerator = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const { red, green, blue } = state;
  console.log(state);
  return (
    <View>
      <ControlColorComponent
        onIncrease={() => dispatch({ type: 'change_red', payload: 20 })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -20 })}
        colorName="Red"
      />
      <ControlColorComponent
        onIncrease={() => dispatch({ type: 'change_green', payload: 20 })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -20 })}
        colorName="Green"
      />
      <ControlColorComponent
        onIncrease={() => dispatch({ type: 'change_blue', payload: 20 })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -20 })}
        colorName="Blue"
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
