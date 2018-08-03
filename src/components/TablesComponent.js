import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import {
    Container, Header, Title, Content,
    Button, Left, Right, Body, Icon, Card, CardItem, Footer, FooterTab,Thumbnail
} from 'native-base';
import { apiUrl } from './config';
import HeaderComponent from './HeaderComponent';

const backgroundColor = '#607D8B';

export default class InfoComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = 'Tables';
        let drawerIcon = () => {
            <Image
            source={require('../components/icons/home.png')}
            style={{ width: 26, tintColor: backgroundColor }}
            />
        }
        return { drawerLabel, drawerIcon };
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            tables: []
        }
    }
    
    componentDidMount() { // Executes after mouting
        return fetch(apiUrl + '/tables')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                tables: responseJson,
            })
        });
    }
    
    
    render() {
        const {tables} = this.state;
        
        return (<Container>
            <Content>
            <HeaderComponent {...this.props} />
            
            {
                tables.map(table => {
                    return(
                        // <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>{table.code}</Text>
                        <Card key={table._id}>
                        <CardItem>
                        <Left>
                        <Thumbnail source={require('./icons/clouds.png')} />
                        <Body>
                        <Text> {table.code} </Text>
                        <Text note>Seat : {table.seat}</Text>
                        </Body>
                        </Left>
                        </CardItem>
                        <CardItem cardBody>
                        <Image source={require('./images/bg1.png')} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                        <Left>
                        <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                        </Button>
                        </Left>
                        <Body>
                        <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                        </Button>
                        </Body>
                        <Right>
                        <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                        </Card>
                    )
                })
            }
            </Content>
            </Container>);
        }
    }