import React, {useState} from 'react'
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Alert
} from 'react-native'
import AddButton from './AddButton'
import AppText from './AppText'
import HeaderText from './HeaderText'
import * as globalStyles from '../global/styles'

import connectFromServer from '../server/connectFromServer'

const AddItem = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const {route, format} = props.addInfo

    const onPressAddButton = () => {
        setModalVisible(true)
    }

    const onPressModalButton = () => {
        if (title.length === 0) {
            Alert.alert(`${props.type} 이름이 작성되지 않았습니다!`)
            return ;
        }
        if (description.length === 0) {
            Alert.alert(`${props.type} 설명이 작성되지 않았습니다!`)
            return ;
        }
        console.log(route, format, title, description)

        connectFromServer(route, {...format, title, description})
        .then(() => props.loading())
        
        closeModal()
    }

    const closeModal = () => {
        setModalVisible(!modalVisible)
        setTitle("")
        setDescription("")
    }

    return (
        <View style={[styles.taskStyle, props.styles]}>
            <AddButton onPress={() => onPressAddButton()}/>
            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}>
                <View style={styles.viewStyle}>
                    <View style={styles.taskTitleViewStyle}>
                        <HeaderText theme='light'>{`새 ${props.type} 작성하기`}</HeaderText>
                    </View>
                    <View style={styles.descriptionViewStyle}>
                        <AppText theme='light'>{`새 ${props.type} 이름 작성하기`}</AppText>
                        <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle]}
                                   placeholder={`새 ${props.type} 이름을 적으세요`}
                                   placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                                   onSubmitEditing={() => onPressModalButton()}
                                   onChangeText={(text) => setTitle(text)}
                                   value={title}
                                   />
                        <AppText theme='light'>{`새 ${props.type} 설명 작성하기`}</AppText>
                        <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle, styles.inputLongTextStyle]}
                                   placeholder={`새 ${props.type} 설명을 적으세요`}
                                   placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                                   multiline={true}
                                   onSubmitEditing={() => onPressModalButton()}
                                   onChangeText={(text) => setDescription(text)}
                                   value={description}
                                   />
                    </View>
                    <View style={styles.buttonLayStyle}>
                        <TouchableOpacity style={[styles.ModalCloseButtonStyle, {borderBottomLeftRadius: 10}]} 
                                            onPress={() => onPressModalButton()}>
                            <HeaderText theme="dark">완료</HeaderText>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.ModalCloseButtonStyle, {borderBottomRightRadius: 10}]} 
                                            onPress={() => closeModal()}>
                            <HeaderText theme="dark">취소</HeaderText>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <AppText style={{color: globalStyles.PLACEHOLDER_TEXT_COLOR}}>{props.title}</AppText>
        </View>
    )

}

const styles = StyleSheet.create({
    taskStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    textWrapperStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    viewStyle: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 30,
        padding: 10,
    },
    buttonLayStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    taskTitleViewStyle: {
        backgroundColor: '#3B3648',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    descriptionViewStyle: {
        backgroundColor: '#3B3648',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    ModalCloseButtonStyle: {
        backgroundColor: '#E7BDB3',
        height: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputTextStyle: {
        height: '15%',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderColor: '#F8F9F9',
        borderWidth: 1
    },
    inputLongTextStyle: {
        height: '45%',
    },
    ModalDescriptionTextStyle: {
        color: globalStyles.LIGHT_TEXT_COLOR
    }
})

export default AddItem