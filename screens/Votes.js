import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

export default class Votes extends React.Component {
    static navigationOptions = {
      title: 'Votes',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <ImageBackground onPress={() =>
              navigate('Vote', { id: 1 })
            } source={{
    uri: 'https://facebook.github.io/react/logo-og.png'
  }}style={{width: 150, height: 270}}>
          <Text>laalaal</Text>
          </ImageBackground>
        </View>
      );
    }
  }