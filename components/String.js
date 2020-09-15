import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Content} from 'native-base';

class String extends Component {
  render() {
    return (
      <View style={styles.screenContainer}>
        <Button title="Hey" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default String;
