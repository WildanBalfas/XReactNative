import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon, Card, CardItem, Footer, FooterTab
} from 'native-base';

import HeaderComponent from './HeaderComponent';

const backgroundColor = '#607D8B';

export default class InfoComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Settings';
    let drawerIcon = () => {
      <Image 
      source={ require('./icons/home.png')}
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

        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>This is Settings Screen</Text>
      </View>
    </View>);
  }
}