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
                        <TouchableOpacity onPress={() => { navigation.navigate('Contacts') }} style={{ width: 150 }}>
                            <Ionicons name="ios-contact" size={120} color="#368EB9" />
                            <Text>સંપર્કો</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.homeItem, styles.homeItemRight]} >
                        <TouchableOpacity onPress={() => { navigation.navigate('Family') }}>
                            <Ionicons name="ios-contacts" size={120} color="#368EB9" />
                            <Text>પરિવારો</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.homeItem, styles.homeItemLeft, { marginTop: 20 }]} onPress={() => { navigation.navigate('About') }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Family') }}>
                            <Ionicons name="ios-information-circle-outline" size={120} color="#368EB9" />
                            <Text>સંસ્થા ની મહિતી</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


export default withNavigation(HomeScreen)