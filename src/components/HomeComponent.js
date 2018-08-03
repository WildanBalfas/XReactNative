import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon, Card, CardItem, Footer, FooterTab
} from 'native-base';

import { Info } from '../../screenNames';
import HeaderComponent from './HeaderComponent';
import { backgroundContentColor } from './config'

const backgroundColor = backgroundContentColor;

export default class HomeComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Home';
    let drawerIcon = () => {
      <Image 
      source={require('../components/icons/home-blue.png')}
      style={{ width:26, height:26, tintColor: backgroundColor }}
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
        backgroundColor: '#192a56',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>Home Screen</Text>
        <TouchableHighlight style={{
          margin: 40,
          width: 160,
          height: 45,
          backgroundColor:  '#353b48',
          alignItems: 'center',
          padding: 10,
          borderRadius: 10
        }}
        onPress={() => {
          const { navigate } = this.props.navigation;
          navigate(Info);
      }}>
      <Text style={{color: 'white', fontSize:18}}>Go to Info Screen</Text>
      </TouchableHighlight>
      </View>
    </View>);
  }
}