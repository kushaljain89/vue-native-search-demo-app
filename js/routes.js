import React from 'react'
import {TabNavigator, StackNavigator} from "vue-native-router"
import HomeScreen from './screens/home.vue'
import AboutScreen from './screens/about.vue'
import SearchScreen from './screens/search.vue'


const HomeNavigation = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            title: 'Search'
        }
    }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Roboto'
        }
    }
});

export const AppNavigation = TabNavigator({
    Home: HomeNavigation,
    About: {
        screen: AboutScreen
    }
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        style: {
            backgroundColor: '#000000',
            borderTopWidth: 1,
            borderTopColor: '#5F5F5F'
        },
        activeTintColor: 'white'
    }
});
