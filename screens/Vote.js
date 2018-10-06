import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Votes extends React.Component {
    static navigationOptions = {
      title: 'Votes',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>I am vote {this.props.navigation.state.params.id }</Text>
        </View>
      );
    }
  }