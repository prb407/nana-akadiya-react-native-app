import React from 'react';
import { Spinner, Container, Text, List, ListItem, Body } from 'native-base'
import ListContacts from '../components/ListContacts'
import axios from '../api'
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import { gradiantColors } from '../assets/styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NoItem from '../components/noList'
class FamilyScreen extends React.Component {
    static navigationOptions = {
        title: 'પરિવારો',
    };
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            list: [],
            error: false,
            page: 1
        }
        this.fetchData.bind(this)
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        const url = `allfamily`
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res.data)
                const familyList = res.data.familyList
                if (familyList.length > 0) {
                    this.setState((state) => ({
                        list: familyList,
                        error: false,
                        page: state.page + 1
                    }))
                } else {
                    this.setState({
                        loading: false
                    })
                }
            })
            .catch(error => {
                this.setState((state) => ({
                    error: true,
                    loading: false
                }))
                console.log(error);
            })
        // .finally(() => {
        //     console.log('done')
        // });
    }
    render() {

        const navigation = this.props.navigation
        if (this.state.loading && this.state.list.length === 0) {
            return (
                <Spinner color='#f4511e' />
            )
        } else if (!this.state.loading && this.state.list.length === 0) {
            return (
                <NoItem text="done" />
            )
        } else if (this.state.error && this.state.list.length === 0) {
            return (
                <Container>
                    <Text>error....</Text>
                </Container>
            );
        }
        return (
            <List style={{ marginTop: 30 }}>
                {this.state.list.map((listItem, index) => {
                    const color = gradiantColors[3]
                    return (
                        <ListItem key={listItem._id}
                            onPress={() => {
                                navigation.navigate('Contacts', {
                                    family: listItem.family_display,
                                    id: listItem._id,
                                })
                            }}
                            style={{
                                borderBottomWidth: 0,
                                borderRadius: 4,
                                marginRight: 10,
                                marginVertical: -5
                            }}>
                            <Body>
                                <LinearGradient
                                    colors={color}
                                    style={{ marginHorizontal: 20, paddingVertical: 10, borderBottomLeftRadius: 25, borderTopRightRadius: 25 }}>
                                    <Text style={{ textTransform: 'capitalize', fontSize: 30, color: 'white', textAlign: 'center', textAlignVertical: "center" }}>{listItem.family_display}</Text>
                                </LinearGradient>
                            </Body>
                        </ListItem>
                    )
                }

                )}

            </List>
        );
    }
}


export default withNavigation(FamilyScreen)