import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home'
import ContactScreen from '../screens/contacts'
import DetailsScreen from '../screens/detailsScreen';
import FamilyScreen from '../screens/family';
import EditContact from '../screens/edit';
const fadeAnimation = (index, position) => {
    const sceneRange = [index - 1, index]
    const outputRange = [0, 1]
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange
    })

    return {
        opacity: transition
    }
}
const bottomAnimation = (index, position, height) => {
    const sceneRange = [index - 1, index]
    const outputRange = [height, 0]
    const transition = position.interpolate({
        inputRange: sceneRange,
        outputRange
    })

    return {
        transform: [{
            translateX: transition
        }]
    }
}

const transitionConfig = () => {
    return {
        screenInterpolator: sceneProps => {
            const { position, scene } = sceneProps
            const index = scene.index
            const height = sceneProps.layout.initHeight
            return fadeAnimation(index, position)
        }
    }
}


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Contacts: {
        screen: ContactScreen,
    },
    Details: {
        screen: DetailsScreen,
    },
    Family: {
        screen: FamilyScreen,
    },
    Edit: {
        screen: EditContact,
    }
}, {
    transitionConfig,
    initialRouteName: 'Family',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#368EB9',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});


export default RootNavigator = createAppContainer(AppNavigator)