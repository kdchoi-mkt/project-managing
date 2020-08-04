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
import { openDatabase } from 'react-native-sqlite-storage';
import { FlatList } from 'react-native-gesture-handler';
import SemiRibbon from './SemiRibbon';

var db = openDatabase({ name: 'UserDatabase.db' });

export default class DescriptionView extends Component{
    constructor(){
        super();
        
        this.state = {
            text: 'asasa',
            displayText: '',
            data: [{schedule_name: 'ssss'}]
        }
    }

    inputText = (value) => {
        this.setState({text: value})
    }

    sendMessage = () => {
        console.log(this.state.text)
        let text = this.state.text
        db.transaction(async function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS schedules(id INTEGER PRIMARY KEY AUTOINCREMENT, schedule_name VARCHAR(100), is_completed INTEGER)', 
                         [], 
                         (tx, result) => {
                             console.log('DB 생성')
                        });
            }
        )
        async () => await db.transaction(function (tx) {
            tx.executeSql('INSERT INTO schedules (schedule_name, is_completed) VALUES (?, ?)', 
                    [text, 0], 
                    async (tx, result) => {
                    await tx.executeSql('SELECT * FROM schedules', [],  (tx, result2) => {
                        const templeteData = result2.rows.raw();
                        this.setState({data: templeteData}, () => console.log("새 state", this.state.text))
                    })
                });
            }
        );
        console.log("데이터", this.state.data)
        this.setState({displayText: this.state.text})
        this.setState({text: 'asasa'})
    }
    
    log = () => {
        console.log("DB 내용")
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM schedules', [], (tx, result) => {console.log(result.rows.raw())})
        })
        console.log("데이터: ",  this.state.data)
    }

    delete = () => {
        console.log("DB 삭제")
        db.transaction(tx => {
            tx.executeSql('DROP TABLE schedules', [], (tx, result) => {console.log(result)})
        })
    };

    renderItem = ({item}) => {
        console.log("render")
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
                        onSubmitEditing={this.sendMessage}/>
            <Button title = "새 스케쥴 만들기" onPress={this.sendMessage}></Button>
            <Button title = "확인" onPress={this.log}></Button>
            <Button title = "삭제" onPress={this.delete}></Button>
            <FlatList data = {this.state.data}
                      renderItem = {this.renderItem} />
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