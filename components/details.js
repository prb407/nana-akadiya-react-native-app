import React, { Component } from 'react';
import { View, Platform } from 'react-native'
import { List, ListItem, Thumbnail, Text, Right, Icon, Body, Button } from 'native-base';
import call from 'react-native-phone-call';
import { ScrollView } from 'react-native-gesture-handler';
class Details extends Component {
    _call = number => {
        //handler to make a call
        const args = {
            number: number,
            prompt: false,
        };

        call(args).catch(console.error);
    };
    _map = () => {
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${lat},${lng}`;
        const label = this.props.data.name;
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });


        Linking.openURL(url);
    }
    render() {
        const { data, child } = this.props
        console.log(data)
        return (
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    marginTop: 20
                }}>
                    <Thumbnail large source={require('../assets/images/male2.png')} />
                </View>
                <View style={{
                    marginTop: 20,
                    marginBottom: 20,
                    alignContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                    <Text style={{
                        textTransform: 'capitalize',
                        fontSize: 28
                    }}>{data.name_display + ' ' + data.family_id.family_display}</Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <List>
                        <ListItem itemDivider>
                            <Text style={{ fontSize: 20 }}>વિગત</Text>
                        </ListItem>
                        {data.phone_number && <ListItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>મોબાઇલ : <Text style={{ fontWeight: 'normal', fontSize: 20 }}>{data.phone_number}</Text></Text>
                            </Body>
                            <Right>
                                <Button onPress={() => { this._call(data.phone_number) }} style={{ borderRadius: 50 }}>
                                    <Icon name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} style={{ fontSize: 25 }} />
                                </Button>
                            </Right>
                        </ListItem>}

                        <ListItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>ઉંમર : <Text style={{ fontWeight: 'normal', fontSize: 20 }}>{data.age}</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>સરનામું : <Text style={{ fontWeight: 'normal', fontSize: 20 }}>{data.address_display + ', ' + data.city_display}</Text></Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>વ્યવસાય : <Text style={{ fontWeight: 'normal', fontSize: 20 }}>{data.work}</Text></Text>
                            </Body>
                        </ListItem>


                    </List>
                </View>
                {
                    child
                    && child.length !== 0
                    && <List>
                        <ListItem itemDivider>
                            <Text>Family members</Text>
                        </ListItem>
                        {child.map((listItem) => {
                            return (
                                <ListItem key={listItem._id} >
                                    <Body style={{ paddingTop: 5, paddingBottom: 5 }} >
                                        <Text style={{ textTransform: 'capitalize', fontSize: 20 }}>{listItem.name_display + ' ' + data.family_id.family_display}</Text>
                                        {listItem.phone_number ? <Text note style={{ fontWeight: 'bold' }}>મોબાઇલ : <Text style={{ fontWeight: 'normal' }}>{listItem.phone_number}</Text></Text> : <></>}

                                        <Text note style={{ fontWeight: 'bold' }}>સંબંધ : <Text style={{ fontWeight: 'normal' }}>{listItem.relation_display}</Text></Text>
                                        <Text note style={{ fontWeight: 'bold' }}>વ્યવસાય : <Text style={{ fontWeight: 'normal' }}>{listItem.work}</Text></Text>
                                    </Body>
                                    {listItem.phone_number ? <Right>
                                        <Button onPress={() => { this._call(listItem.phone_number) }} style={{ borderRadius: 50 }}>
                                            <Icon name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} style={{ fontSize: 25 }} />
                                        </Button>
                                    </Right> : <></>}

                                </ListItem>
                            )
                        }
                        )}
                    </List>

                }
            </ScrollView>
        )
    }
}

export default Details