import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


const styles = {
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    marginTop: -50,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10
  }
}

export default class Votes extends React.Component {
    static navigationOptions = {
      title: 'Vote',
    };
    _onYes = function(id) {
        var formData = new FormData();
        formData.append('vote_id', 'vote-'+id);
        formData.append('voter_id', '7');
        formData.append('vote', '1');

        fetch('http://54.93.233.13', {
          method: 'POST',
          body: formData,
        }).then((response) => response.json())
      .then((responseJson) => {
        Alert.alert('You vote Yes! This is your transaction id: '+responseJson.result);
        console.warn(responseJson.result);
      })
      .catch((error) => {
        console.error(error);
      });
     }
    _onNo = function(id) {
        var formData = new FormData();
        formData.append('vote_id', 'vote-'+id);
        formData.append('voter_id', '7');
        formData.append('vote', '0');

        fetch('http://54.93.233.13', {
          method: 'POST',
          body: formData,
        }).then((response) => response.json())
                .then((responseJson) => {
                  Alert.alert('You vote No! This is your transaction id: '+responseJson.result);
                  return responseJson;
                })
                .catch((error) => {
                  console.error(error);
                });
     }
    render() {
      console.warn(this.props)
      const { navigate } = this.props.navigation;
      //this.props.navigation.state.params.id
      return (
        <View>
          <Image style={{ height: 150, width: '100%' }} source={require('../img/detail1.png')} />
          <Text style={ styles.text }>SUPPORT for Patients and Communities Act</Text>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>H.R. 302</Text>
                  <Text note>A bill to provide protections for certain sports medicine professionals who provide certain medical services in a secondary State.</Text>
                  <Button style={{alignSelf: 'flex-end'}} small transparent><Text>learn more</Text></Button>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>27 votes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>2 Articles</Text>
                </Button>
              </Body>
              <Right>
                <Text note>2 days remaining</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body style={{ flext: 1, flexDirection: 'row', justifyContent:'space-evenly' }}>
                   <Button onPress={() => this._onYes(this.props.navigation.state.params.id)} full success style={{ width: '40%'}}><Text>YES</Text></Button>
                   <Button onPress={() => this._onNo(this.props.navigation.state.params.id)} full danger style={{ width: '40%'}}><Text>NO</Text></Button>
              </Body>
            </CardItem>
          </Card>
        </View>
      );
    }
  }