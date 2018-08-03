import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon, Card, CardItem, Footer, FooterTab
} from 'native-base';

import HeaderComponent from './HeaderComponent';

const backgroundColor = '#FF9800';

export default class InfoComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Info';
    let drawerIcon = () => {
      <Image 
      source={require('../components/icons/info-blue.png')}
      style={{ width:26, tintColor: backgroundColor }}
      />
    }
    return {drawerLabel, drawerIcon};
  }

  render() {
    return (<View style={{
      flex: 1,
      flexDirection: 'column',
    }}>
      <HeaderComponent {...this.props} />
      <View style={{
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>Thanks!</Text>
        <TouchableHighlight style={{
          margin: 40,
          width: 180,
          height: 45,
          backgroundColor:  '#262829',
          alignItems: 'center',
          padding: 10,
          borderRadius: 10
        }}
        onPress={() => {
          this.props.navigation.goBack();
      }}>
      <Text style={{color: 'white', fontSize:18}}>Back to Home</Text>
      </TouchableHighlight>
      </View>
    </View>);
  }
}