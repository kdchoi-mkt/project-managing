import React, { Component } from 'react'
import {
    NavigatorIOS,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import IntroScreen from './IntroScreen'
import HomeScreen from './HomeScreen'

const HOME_ROUTE = {
    title: 'HOME',
    component: HomeScreen
};
const INTRO_ROUTE = {
    title: 'Welcome',
    component: IntroScreen,
    props: {
        nextScene: HOME_ROUTE
    }
}

export default class Nav extends Component{
    renderScene(route, navigator){
        return (
            <route.component 
                {...route.props}
                navigator={navigator}
            />
        );
    }

    render(){
        return(
            <NavigatorIOS
                initialRoute={INTRO_ROUTE}
                renderScene={this.renderScene}
            />
        )
    }
}