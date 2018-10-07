import React, {Component} from 'react';
import {Platform, StyleSheet, View, ScrollView, Image, AsyncStorage, Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';
import PopupDialog, {DialogButton} from 'react-native-popup-dialog';


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
    constructor(props) {
      super(props);
      this.state = {
        voted: false,
        spinner: false,
        trasnactionId: null,
      };
    }
    _onYes = function(id, handler) {
        var formData = new FormData();
        formData.append('vote_id', 'vote-'+id);
        formData.append('voter_id', '7');
        formData.append('vote', '1');
        fetch('http://54.93.233.13', {
          method: 'POST',
          body: formData,
        }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({spinner: false, trasnactionId:responseJson.result });
        AsyncStorage.getItem('@MySuperStore:points').then(function (item) {
                    if (!item) {
                        item = 0;
                    }
                    item = parseInt(item) + 5;
                     AsyncStorage.setItem('@MySuperStore:points', ""+item).then(function () {
                        handler()
                    })
                })
      })
      .catch((error) => {
        console.error(error);
      });
      this.popupDialog.show();
    }
    _onNo = function(id, handler) {
        var formData = new FormData();
        formData.append('vote_id', 'vote-'+id);
        formData.append('voter_id', '7');
        formData.append('vote', '0');
        fetch('http://54.93.233.13', {
          method: 'POST',
          body: formData,
        }).then((response) => response.json())
                .then((responseJson) => {
                  this.setState({spinner: false, trasnactionId:responseJson.result });
                  AsyncStorage.getItem('@MySuperStore:points').then(function (item) {
                              if (!item) {
                                  item = 0;
                              }
                              item = parseInt(item) + 5;
                               AsyncStorage.setItem('@MySuperStore:points', ""+item).then(function () {
                                  handler()
                              })
                          })
                })
                .catch((error) => {
                  console.error(error);
                });
                this.popupDialog.show();
    }

    render() {
      const { navigate } = this.props.navigation;
      //this.props.navigation.state.params.id
      return (
      <View>
      <PopupDialog height={270} ref={(popupDialog) => { this.popupDialog = popupDialog; }}
      actions={[
                  <DialogButton
                    text="Close"
                    onPress={() => {
                      this.popupDialog.dismiss();
                    }}
                    key="button-1"
                  />,
                ]}
      >
                                      <Image style={{height: 194, width: "100%", resizeMode:'contain' }} source={require('../img/exp_points_2.png')} />
                         </PopupDialog>
        <ScrollView>
          <Image style={{ height: 150, width: '100%' }} source={require('../img/detail1.png')} />
          <Text style={ styles.text }>SUPPORT for Patients and Communities Act</Text>
          <Card>
            <CardItem>
              <Left>
                <Body>
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

          {!this.state.voted ?
          <Card>
            <CardItem>
              <Body style={{ flext: 1, flexDirection: 'row', justifyContent:'space-evenly' }}>
                   <Button onPress={() => { let self = this; this.setState({voted: true, spinner: true}); this._onYes(this.props.navigation.state.params.id, this.props.navigation.state.params.handler); setTimeout(function(){ self.setState({spinner: false}) }, 3000); }} full success style={{ width: '40%'}}><Text>YES</Text></Button>
                   <Button onPress={() => { let self = this; this.setState({voted: true, spinner: true}); this._onNo(this.props.navigation.state.params.id, this.props.navigation.state.params.handler); setTimeout(function(){ self.setState({spinner: false}) }, 3000); }}  full danger style={{ width: '40%'}}><Text>NO</Text></Button>
              </Body>
            </CardItem>
          </Card>
          : null}

          {this.state.spinner ? <Spinner /> : null}

          {this.state.voted && !this.state.spinner ?
          <Card>
            <CardItem>
              <Body style={{ flext: 1, flexDirection: 'row', justifyContent:'space-evenly' }}>
                <Image style={{ height: 150, width: '100%' }} source={require('../img/plot.png')} />
              </Body>
            </CardItem>
          </Card>
          : null}

          {this.state.trasnactionId ?
            <Card>
              <CardItem>
                <Body style={{ flext: 1, flexDirection: 'row', justifyContent:'space-evenly' }}>
                  <Text>Blockchain transaction id: {this.state.trasnactionId}</Text>
                </Body>
              </CardItem>
            </Card>
            : null}


        </ScrollView>
</View>
      );
    }
  }