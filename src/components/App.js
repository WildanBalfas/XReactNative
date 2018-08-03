import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import {
  Container, Header, Title, Content,
  Button, Left, Right, Body, Icon, Card, CardItem, Footer, FooterTab
} from 'native-base';

import { Info } from '../../../screenNames';
import HeaderComponent from './layout/appHeader';

const backgroundColor = '#006717';

export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    let drawerLabel = 'Home';
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

        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>This is Home Screen</Text>
        <TouchableHighlight style={{
          margin: 20,
          width: 200,
          height: 45,
          backgroundColor:  'darkviolet',
          alignItems: 'center',
        }}
        onPress={() => {
          const { navigate } = this.props.navigation;
          navigate(Info);
      }}>
      <Text style={{color: 'white', fontSize:18}}>Navigate to Info</Text>
      </TouchableHighlight>
      </View>
    </View>);
  }
}