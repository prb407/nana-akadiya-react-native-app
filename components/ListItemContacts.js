import React, { Component } from 'react';
import { Platform } from 'react-native'
import { ListItem, Left, Body, Right, Icon, Button, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import call from 'react-native-phone-call'
class ListItemContacts extends Component {
    _call = number => {
        //handler to make a call
        const args = {
            number: number,
            prompt: false,
        };

        call(args).catch(console.error);
    };
    render() {
        const { data } = this.props
        console.log('listitem contacts : ', data.name_display + ' ' + data.family_id.family_display)
        const navigation = this.props.navigation
        return (
            <ListItem style={{ borderBottomWidth: 1, borderRadius: 4, marginRight: 10, marginTop: 5, borderColor: '#c2c2c2', shadowColor: '#c2c2c2', shadowRadius: 10, shadowOpacity: 100 }} onPress={() => {
                navigation.navigate('Details', {
                    name: data.name_display + ' ' + data.family_id.family_display,
                    id: data._id
                })
            }}>
                <Body style={{ paddingTop: 5, paddingBottom: 5 }} >
                    <Text style={{ textTransform: 'capitalize', fontSize: 20 }}>{data.name_display + ' ' + data.family_id.family_display}</Text>
                    {
                        data.phone_number
                            ? <Text note>{data.phone_number}</Text>
                            : <></>
                    }
                </Body>
                {
                    data.phone_number
                        ? <Right>
                            <Button onPress={() => { this._call(data.phone_number) }} style={{ borderRadius: 50 }}>
                                <Icon name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} style={{ fontSize: 25 }} />
                            </Button>
                        </Right>
                        : <></>
                }

            </ListItem >
        );
    }
}


export default withNavigation(ListItemContacts)