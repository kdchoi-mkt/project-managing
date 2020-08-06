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
    constructor(props){
        super(props);
        this.state = {
            is_completed: 0
        };
    }

    changeColor = () => {
        console.log(this.state.is_completed)
        if (this.state.is_completed === 0){
            this.setState({is_completed: 1})
         }
         else {
             this.setState({is_completed: 0})
        }
    }

    render(){
    return(
        <View style = {style.groupStyle}>
            <TouchableOpacity style = {this.state.is_completed === 0? style.square: style.completed_square} 
                              onPress = {this.changeColor}/>
            <View style = {style.ribbonStyle}>
                <Text style = {style.headerStyle}>
                    {this.props.children}
                </Text>
            </View>
        </View>
    )}
};

const style = StyleSheet.create({
    completed_square: {
        width: 47.8,
        height: 47.8,
        backgroundColor: 'blue',
        marginRight: 10
    },
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