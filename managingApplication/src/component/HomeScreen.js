import React from 'react'
import DescriptionView from './DescriptionView'
import Ribbon from './Ribbon'
import {
  SafeAreaView
} from 'react-native'

const HomeScreen = () => (
    <SafeAreaView>
        <Ribbon>홈 연습하기</Ribbon>
        <DescriptionView></DescriptionView>
    </SafeAreaView>
)
export default HomeScreen;