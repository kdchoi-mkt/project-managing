import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
    StyleSheet,
    Modal,
    Alert
} from 'react-native'
import AddButton from './AddButton'
import AppText from './AppText'
import HeaderText from './HeaderText'
import * as globalStyles from '../global/styles'

const AddTaskItem = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

    const onPressAddButton = () => {
        setModalVisible(true)
    }

    const onPressModalButton = () => {
        if (taskTitle.length === 0) {
            Alert.alert("작업 이름 미지정!")
            return ;
        }
        if (taskDescription.length === 0) {
            Alert.alert("작업 설명 미지정!")
            return ;
        }
        console.log(taskTitle)
        console.log(taskDescription)
        closeModal()
    }

    const closeModal = () => {
        setModalVisible(!modalVisible)
        setTaskTitle("")
        setTaskDescription("")
    }

    return (
        <View style={[props.styles, styles.taskStyle]}>
            <AddButton onPress={() => onPressAddButton()}/>
            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}>
                <View style={styles.viewStyle}>
                    <View style={styles.taskTitleViewStyle}>
                        <HeaderText theme='light'>새 작업 추가하기</HeaderText>
                    </View>
                    <View style={styles.descriptionViewStyle}>
                        <AppText theme='light'>새 작업 이름</AppText>
                        <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle]}
                                   placeholder="새 작업 이름을 적으세요"
                                   placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                                   onSubmitEditing={() => onPressModalButton()}
                                   onChangeText={(text) => setTaskTitle(text)}
                                   value={taskTitle}
                                   />
                        <AppText theme='light'>작업 설명</AppText>
                        <TextInput style={[styles.ModalDescriptionTextStyle, styles.inputTextStyle, styles.inputLongTextStyle]}
                                   placeholder="새 작업 설명을 적으세요"
                                   placeholderTextColor={globalStyles.PLACEHOLDER_TEXT_COLOR}
                                   multiline={true}
                                   onSubmitEditing={() => onPressModalButton()}
                                   onChangeText={(text) => setTaskDescription(text)}
                                   value={taskDescription}
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

export default AddTaskItem