import React from 'react'
import DescriptionView from './DescriptionView'
import Ribbon from './Ribbon'
import {
  SafeAreaView
} from 'react-native'

const HomeScreen = () => (
    <SafeAreaView>
        <Ribbon>Header 1입니다.</Ribbon>
        <DescriptionView></DescriptionView>
    </SafeAreaView>
)
export default HomeScreen;