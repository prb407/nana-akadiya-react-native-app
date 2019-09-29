import React, { Component } from 'react';
import { List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import ListItemContacts from './ListItemContacts'
export default class ListContacst extends Component {
    render() {
        const { list, family } = this.props
        return (
            <List>
                {list.map((listItem) =>
                    <ListItemContacts data={listItem} family={family} key={listItem._id} />
                )}
            </List>
        );
    }
}