import React, {Component} from 'react';
import {Container, Icon, Content, Picker, Form} from 'native-base';

class SelectBass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  };

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form style={{alignItems: 'center'}}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 130 }}
              iosIcon={<Icon name="arrow-down" />}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="Fender Bass" value="key0" />
              <Picker.Item label="5 String Bass" value="key1" />
              <Picker.Item label="Dingwall" value="key2" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
};

export default SelectBass;
