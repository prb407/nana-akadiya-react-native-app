import React from 'react';
import { View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Thumbnail } from 'native-base'
import styles from '../assets/styles/index'
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'નાના આંકડિયા ગામ',
    };
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.homeContainer}>
                    <View style={[styles.homeItem, styles.homeItemLeft]} style={{ backgroundColor: 'red', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Contacts') }}>
                            <Image
                                // style={{ width: 150, height: 150 }}
                                source={require('../assets/images/ic_contact.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.homeItem, styles.homeItemRight]} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Family') }}>
                            <Image
                                // style={{ width: 150, height: 150 }}
                                source={require('../assets/images/ic_sanstha.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.homeItem, styles.homeItemLeft, { marginTop: 20 }]} onPress={() => { navigation.navigate('About') }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Family') }}>
                            <Image
                                // style={{ width: 150, height: 150 }}
                                source={require('../assets/images/ic_other.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


export default withNavigation(HomeScreen)