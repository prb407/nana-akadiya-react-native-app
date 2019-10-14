import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center' // if you want to fill rows left to right
    },
    homeItem: {
        marginTop: '5%',
        width: '42%', // is 50% of container width
        alignContent: 'center'
    },
    homeItemLeft: {
        marginLeft: '6%',
    },
    homeItemRight: {
        marginRight: '6%',
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
})