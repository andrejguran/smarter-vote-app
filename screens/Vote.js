import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image} from 'react-native';
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
    render() {
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
                  <Button style={{alignSelf: 'flex-end'}} right small transparent><Text>learn more</Text></Button>
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
                   <Button full success style={{ width: '40%'}}><Text>YES</Text></Button>
                   <Button full danger style={{ width: '40%'}}><Text>NO</Text></Button>
              </Body>
            </CardItem>
          </Card>
        </View>
      );
    }
  }