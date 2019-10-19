import React from 'react';
import { Spinner, Container, Text } from 'native-base'
import axios from '../api'
import { withNavigation } from 'react-navigation';
import Details from '../components/details';
class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('name'),
        };
    }
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            details: null,
            title: 'Detail',
            work: {},
            childPersons: [],
            id: props.navigation.state.params.id
        }
        this.fetchData.bind(this)
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData = () => {
        const url = `person/${this.state.id}`
        console.log(url)
        axios.get(url)
            .then(res => {
                console.log(res.data)
                this.setState((state) => ({
                    details: res.data.personDetails,
                    work: res.data.parentWork,
                    childPersons: res.data.childPersons,
                    loading: false,
                    error: false
                }))
            })
            .catch(error => {
                this.setState((state) => ({
                    error: true
                }))
                console.log(error);
            })
    }
    render() {
        if (this.state.loading && this.state.details === null) {
            return (
                <Spinner color='#f4511e' />
            )
        } else if (this.state.error && this.state.details === null) {
            return (
                <Container>
                    <Text>error....</Text>
                </Container>
            );
        }
        return (
            <Details data={this.state.details} child={this.state.childPersons} />
        );
    }
}


export default withNavigation(DetailsScreen)