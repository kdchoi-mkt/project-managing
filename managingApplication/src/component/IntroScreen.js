import React from 'react'
import PropTypes from 'prop-types'
import {
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    Text
} from 'react-native'
import Ribbon from './Ribbon'

StatusBar.setBarStyle('dark-content')

const IntroScreen = ({navigator, nextScene}) => (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigator.push(nextScene)}>
            <Ribbon>React native news reader!</Ribbon>
            <Text>
                읽기 시작
            </Text>
        </TouchableOpacity>
    </SafeAreaView>
)

export default IntroScreen;