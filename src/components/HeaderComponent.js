import React, { Component } from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

export default class HeaderComponent extends Component{
    render(){
        return (
            <View style={{
                height: 90,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor:'#273c75'
            }}>

            <TouchableHighlight style={{
                marginLeft: 10,
                marginTop: 10
            }}
            onPress = {() => {
                const { navigate } = this.props.navigation;
                navigate('DrawerOpen');
            }}>
            <Image style={{
                width:52, height:52
            }} source={require('../components/icons/menus.png')} />
            </TouchableHighlight>
            <Text style={{ color:'white', fontSize:26, fontWeight:'bold'}} >  X Kitchen</Text>
        </View>);
    }
}