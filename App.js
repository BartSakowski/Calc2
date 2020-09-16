import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Header from './components/Header';
import String from './components/String';
import SelectBass from './components/SelectBass';

const AppButton = ({ onPress, title}) => {
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}> {title}</Text>
  </TouchableOpacity>;
};

const App = () => {
  state = {
    string: 'E',
  }
  return (
    <View style={styles.container}>
      <Header />
      {/* <Button title="Hey there!" size="sm" backgroundColor="#007bff" /> */}
      {/* <SelectBass /> */}
      <String string={this.state.string}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
