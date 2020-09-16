import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, Container, Header, Content, Card, CardItem} from 'native-base';
import {ButtonGroup} from 'react-native-elements';

class String extends Component {
  render() {
    const buttons = ['Hello', 'World', 'Buttons']
    const buttons2 = ['Hey', 'Whats up', 'Hello']
    return (
      <View>


        <ButtonGroup
         buttons={buttons}
         />
        <ButtonGroup 
         buttons={buttons2}
         />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '60%',
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '60%',
  },
  button: {
    width: '40%',
    marginRight: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '60%',
  },
  card: {
    width: '40%',
    marginRight: 5
  }
});

export default String;

{/* <View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button}><Text>Hey</Text></Button>
          <Button style={styles.button} ><Text>There</Text></Button>
          <Button style={styles.button}><Text>You</Text></Button>
        </View>
        <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <CardItem>
            <Text>{this.props.string}</Text>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Text>Card</Text>
          </CardItem>
        </Card>
        <Card style={styles.card}>
          <CardItem>
            <Text>Card</Text>
          </CardItem>
        </Card>
        </View>

        <View style={styles.buttonContainer2}>
          <Button style={styles.button}><Text>Hey</Text></Button>
          <Button style={styles.button}><Text>There</Text></Button>
          <Button style={styles.button}><Text>You</Text></Button>
        </View>
      </View> */}