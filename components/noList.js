import React, { Component } from 'react';
import { ListItem, Left, Body, Right, Icon, Button, Text } from 'native-base';
class NoItem extends Component {
    render() {
        return (
            <Text>{this.props.text}</Text>
        );
    }
}


export default NoItem