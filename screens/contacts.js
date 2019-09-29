import React from 'react';
import { Spinner, Container, Text } from 'native-base'
import ListContacts from '../components/ListContacts'
import axios from '../api'
import { ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation';
class ContactScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params !== undefined ? navigation.state.params.family + ' પરિવાર' : 'બધા સંપર્કો',
        };
    }
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            list: [],
            error: false,
            page: 1,
            fetch: true,
            canFetch: true,
            id: props.navigation.state.params !== undefined ? props.navigation.state.params.id : undefined,
        }
        this.fetchData.bind(this)
    }
    componentWillUnmount() {
        this.setState({
            canFetch: false
        })
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        let url
        if (!this.state.fetch || !this.state.canFetch) {
            console.log('cant fecth')
            return
        }
        if (this.state.id !== undefined) {
            url = `allperson/family/${this.state.id}/${this.state.page}`
        } else {
            url = `allperson/${this.state.page}`
        }
        console.log(url)
        axios.get(url)
            .then(res => {
                const listOfPerson = res.data.allPersons
                if (listOfPerson.length > 0) {
                    this.setState((state) => ({
                        list: state.list.concat(listOfPerson),
                        error: false,
                        page: state.page + 1,
                        fetch: true
                    }), () => {
                        console.log('fetching new data of page : ', this.state.page)
                        this.fetchData()
                    })
                } else {
                    this.setState((state) => ({
                        fetch: false,
                        loading: false
                    }))
                }
            })
            .catch(error => {
                this.setState((state) => ({
                    error: true,
                    loading: false,
                    fetch: false
                }))
                console.log(error);
            })
        // .finally(() => {
        //     console.log('done')
        // });
    }
    render() {
        if (this.state.loading && this.state.list.length === 0) {
            return (
                <Spinner color='#f4511e' />
            )
        } else if (this.state.error && this.state.list.length === 0) {
            return (
                <Container>
                    <Text>error....</Text>
                </Container>
            );
        } else if (!this.state.loading && this.state.list.length === 0) {
            <Container>
                <Text>No Contacts</Text>
            </Container>
        }
        return (
            <ScrollView>
                <ListContacts list={this.state.list} />
                {this.state.loading && <Spinner color='#f4511e' />}
            </ScrollView>
        );
    }
}


export default withNavigation(ContactScreen)