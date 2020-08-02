import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import * as globalStyles from '../global/styles'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

export default class Ribbon extends Component {
    render(){
    return(
        <View style = {style.ribbonStyle}>
            <Text style = {style.headerStyle}>
                {this.props.children}
            </Text>
        </View>
    )}
};

const style = StyleSheet.create({
    ribbonStyle: {
        backgroundColor: globalStyles.BG_COLOR,
        padding: 12,
        marginBottom: 10,
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: globalStyles.HEADER_TEXT_COLOR
    }
})