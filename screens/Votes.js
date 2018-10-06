import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ImageBackground, ScrollView, TouchableHighlight} from 'react-native';


const styles = {
  text: {
    color: 'white',
    marginTop: 165,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    textShadowColor: 'rgba(0, 0, 0, 1)',
  textShadowOffset: {width: -2, height: 2},
  textShadowRadius: 10
  }
}

export default class Votes extends React.Component {
    static navigationOptions = {
      title: 'Votes',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <ScrollView>
   
   <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly', marginTop: 20}}>
          
          <TouchableHighlight onPress={() => navigate('Vote', { id: 1 })}>
          <ImageBackground  source={require('../img/law1.jpg')}style={{width: 170, height: 250}}>
          <Text  style={styles.text}>H.R.302: FAA Reauthorization Act of 2018</Text>
          </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Vote', { id: 2 })}>
          <ImageBackground  source={require('../img/law5.png')}style={{width: 170, height: 250}}>
          <Text style={styles.text}>H.R.6157: Department of Defense</Text>
          </ImageBackground>
          </TouchableHighlight>

</View>
<View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly', marginTop: 20}}>
          
          <TouchableHighlight onPress={() => navigate('Vote', { id: 1 })}>
          <ImageBackground  source={require('../img/law6.png')}style={{width: 170, height: 250}}>
          <Text style={styles.text}>H.R.6: SUPPORT for Patients and Communities Act</Text>
          </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Vote', { id: 1 })}>
          <ImageBackground  source={require('../img/law4.png')}style={{width: 170, height: 250}}>
          <Text style={styles.text}>H.R.6147 - Making appropriations for the Department</Text>
          </ImageBackground>
          </TouchableHighlight>

</View>
<View style={{flex: 1, flexDirection: 'row', justifyContent:'space-evenly', marginTop: 20}}>
          
          <TouchableHighlight onPress={() => navigate('Vote', { id: 1 })}>
          <ImageBackground  source={require('../img/law2.png')}style={{width: 170, height: 250}}>
          <Text style={styles.text}>H.R.303: FAA Reauthorization Act of 2018</Text>
          </ImageBackground>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigate('Vote', { id: 1 })}>
          <ImageBackground  source={require('../img/law3.png')}style={{width: 170, height: 250}}>
          <Text style={styles.text}>H.R.304: FAA Reauthorization Act of 2018</Text>
          </ImageBackground>
          </TouchableHighlight>

</View>
        </ScrollView>
      );
    }
  }