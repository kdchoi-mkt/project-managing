import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import * as globalStyles from '../global/styles'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class SemiRibbon extends Component {
    render(){
    return(
        <View style = {style.groupStyle}>
            <TouchableOpacity style = {style.square} />
            <View style = {style.ribbonStyle}>
                <Text style = {style.headerStyle}>
                    {this.props.children}
                </Text>
            </View>
        </View>
    )}
};

const style = StyleSheet.create({
    groupStyle: {
        margin: 10,
        marginBottom: 0,
        flexDirection: 'row'
    },
    square: {
        width: 47.8,
        height: 47.8,
        backgroundColor: 'red',
        marginRight: 10
    },
    ribbonStyle: {
        backgroundColor: globalStyles.BG_COLOR,
        padding: 12,
        width: 1000,
    },
    headerStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: globalStyles.HEADER_TEXT_COLOR
    }
})