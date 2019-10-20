import React, { Component } from 'react';
import { View, TextInput, Platform } from 'react-native'
import { List, ListItem, Thumbnail, Text, Right, Icon, Body, Button } from 'native-base';
import call from 'react-native-phone-call';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import axios from '../api'
class EditContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            work: '',
            work_address: '',
            work_info: ''
        }
    }
    submit = () => {
        const url = "putwork/" + this.props.navigation.getParam('id', 'null')
        const data = this.state
        axios.post(url, data)
            .then(res => {
                console.log(res)
                this.setState({
                    work: 'inserted'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const navigation = this.props.navigation
        const name = navigation.getParam('name', 'null')
        const id = navigation.getParam('id', 'null')
        return (
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    marginTop: 20
                }}>
                    <Text style={{
                        textTransform: 'capitalize',
                        fontSize: 28
                    }}>{name + "\n" + id}</Text>
                </View>

                <View style={{ marginTop: 5 }}>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 5 }}
                        onChangeText={(work) => {
                            this.setState({
                                work
                            })
                        }}
                        value={this.state.work}
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 5 }}
                        onChangeText={(work_info) => {
                            this.setState({
                                work_info
                            })
                        }}
                        value={this.state.work_info}
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 5 }}
                        onChangeText={(work_address) => {
                            this.setState({
                                work_address
                            })
                        }}
                        value={this.state.work_address}
                    />
                    <Button onPress={this.submit}><Icon name={Platform.OS === 'ios' ? 'ios-call' : 'md-call'} style={{ fontSize: 25 }} /></Button>
                </View>
            </ScrollView>
        )
    }
}

export default withNavigation(EditContact)