import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Pressable,
    StyleSheet,
    Modal
} from 'react-native'
import ConfirmButton from './ConfirmButton'

const TaskItem = (props) => {
    const [overwriteTextStyle, setTextStyle] = useState({textDecorationLine: props.activate ? 'line-through' : 'none'})
    const [modalVisible, setModalVisible] = useState(false)

    const onPressText = () => {
        console.log(props.description)
        setModalVisible(true)
    }

    const onPressModalButton = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.taskStyle}>
            <ConfirmButton activate={props.activate}/>
            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}>
                <View style={styles.viewStyle}>
                    <View style={styles.taskTitleViewStyle}>
                        <Text style={styles.ModalTextStyle}>{props.taskTitle}</Text>
                    </View>
                    <View style={styles.descriptionViewStyle}>
                        <Text style={styles.ModalDescriptionTextStyle}>{props.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.ModalCloseButtonStyle} 
                                        onPress={() => onPressModalButton()}>
                        <Text style={styles.ModalCloseButtonTextStyle}>닫기</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Pressable style={styles.textWrapperStyle}
                       onPress={() => onPressText()}>
                <Text style={[styles.textStyle, overwriteTextStyle]}>{props.taskTitle}</Text>
            </Pressable>
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
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
    },
    viewStyle: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 30,
        padding: 10,
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
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    ModalCloseButtonStyle: {
        backgroundColor: '#E7BDB3',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    ModalTextStyle: {
        color: '#FBF9F9',
        fontWeight: 'bold'
    },
    ModalDescriptionTextStyle: {
        color: '#FBF9F9',
    },
    ModalCloseButtonTextStyle: {
        color: '#3B3648',
        fontWeight: 'bold'
    }
})

export default TaskItem