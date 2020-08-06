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
import AsyncStorage from '@react-native-community/async-storage'
import { FlatList } from 'react-native-gesture-handler';
import SemiRibbon from './SemiRibbon';

class DescriptionView extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            displayText: '스케줄을 작성해보세요',
            data: []
        }
    }

    async componentDidMount() {
        const data = await this.getAllValue();
        this.setState({data});
    }

    constructDataJSON = (text, index) => {
        return {
            schedule_name: text,
            index: index,
            is_completed: 0
        }
    }

    setStringValue = async (value) => {
        let index = await this.getUniqueId()
        if (!(typeof(index) === 'string')){
            await AsyncStorage.setItem('index', '1')
            index = '1'
        }

        const data = this.constructDataJSON(this.state.text, index)
        try {
            var previousValues = await this.getAllValue()
            previousValues.push(data)
            await AsyncStorage.setItem('key', JSON.stringify(previousValues))
        } catch(e) {
            var previousValues = [data]
            await AsyncStorage.setItem('key', JSON.stringify(previousValues))
        } finally {
            await this.addUniqueId()
            this.setState({data: await this.getAllValue(), text: ''})
        }
    }

    getAllValue = async () => {
        try {
            const values = JSON.parse(await AsyncStorage.getItem('key'))
            return values
        } catch(e) {
            console.log(e)
            console.log('ERROR!')
        }
        console.log('get all values')
    }

    getStringValue = async () => {
        try { 
            const item = await AsyncStorage.getItem('key')
            console.log(item)
        } catch(e){
            console.log(e)
        }
    }

    getUniqueId = async() => {
        try {
            const uniqueId = await AsyncStorage.getItem('index')
            return uniqueId
        } catch(e) {
            await AsyncStorage.setItem('index', '1')
            return '1'
        }
    }

    addUniqueId = async() => {
        try {
            var uniqueId = parseInt(await AsyncStorage.getItem('index')) + 1
            await AsyncStorage.setItem('index', uniqueId.toString())
        } catch(e) {
            console.log(e)
            await AsyncStorage.setItem('index', '2')
        }
    }

    deleteStringValue = async () => {
        try{
            await AsyncStorage.removeItem('key')
            await AsyncStorage.removeItem('index')
            await AsyncStorage.setItem('index', '1')
            this.setState({data: this.getAllValue()})
        } catch(e) {
            console.log(e)
        }
    }

    inputText = (value) => {
        this.setState({text: value})
    }

    sendMessage = () => {
        console.log(this.state.text)
        let text = this.state.text

        console.log("데이터", this.state.data)
        this.setState({displayText: text})
        this.setState({text: 'asasa'})
    }
    
    confirmData = () => {
        console.log(this.state.data)
    }

    renderItem = ({item}) => {
        // console.log(item.is_completed, typeof(item.is_completed))
        return (
            <SemiRibbon>{item.schedule_name}</SemiRibbon>
        )
    }

    render(){
        return(
            <View>
            <TextInput style={style.inputStyle} 
                        onChangeText={this.inputText} 
                        placeholder={'할 일을 작성하세요'}
                        value={this.state.text} 
                        onSubmitEditing={this.setStringValue}/>
            <Button title = "새 스케줄 만들기" onPress={this.setStringValue}></Button>
            <Button title = "지금까지 스케줄 모두 비우기" onPress={this.deleteStringValue}></Button>
            <FlatList data = {this.state.data}
                      renderItem = {this.renderItem} />
            </View>
        )
    }
}

export default DescriptionView;

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