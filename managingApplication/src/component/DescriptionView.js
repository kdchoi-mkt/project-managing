import React, {Component} from 'react'
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    Alert,
    Button
} from 'react-native'
import PropTypes from 'prop-types'

export default class DescriptionView extends Component{
    constructor(){
        super();
        
        this.state = {
            text: '텍스트를 작성하세요',
            displayText: ''
        }
    }

    inputText = (value) => {
        this.setState({text: value})
    }

    sendMessage = () => {
        this.setState({displayText: this.state.text})
        this.setState({text: ''})
    }

    render(){
        return(
            <View>
            <TextInput style={style.inputStyle} 
                        onChangeText={this.inputText} 
                        value={this.state.text} 
                        onSubmitEditing={this.sendMessage}/>
            <Button title = "메시지 전송하기" onPress={this.sendMessage}></Button>
            <Text>{this.state.displayText}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 2,
        color: "black"
    }
})