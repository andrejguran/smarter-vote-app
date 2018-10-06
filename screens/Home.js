import React, {Component} from 'react';
import {Platform, StyleSheet, Image} from 'react-native';
import {Button, Text, View, Form, Item, Input, Label} from 'native-base';

export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
            <Image source={require('../img/logo.png')} style={{marginTop: 100, width: 171, height: 200, marginLeft: 100}} />
            <Text style={{marginLeft: 130, marginTop: 20}}>smarter.vote</Text>

        <Form style={{marginTop: 50, width: '90%'}}>
            <Item stackedLabel>
              <Label>Phone number</Label>
              <Input placeholder='+49123 456 789' />
            </Item>
          <Button style={{marginLeft: 150, marginTop: 100}} onPress={() =>
              navigate('Votes', { id: 2 })
            }>
            
            <Text>Log in</Text>
          </Button>
          </Form>
        </View>
      );
    }
  }