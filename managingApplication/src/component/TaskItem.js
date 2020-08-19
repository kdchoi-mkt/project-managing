import React, {useState} from 'react'
import {
    View,
    TouchableOpacity,
    Pressable,
    StyleSheet,
    Modal
} from 'react-native'
import ConfirmButton from './ConfirmButton'
import HeaderText from './HeaderText'
import AppText from './AppText'
import * as globalStyles from '../global/styles'
import DescriptionModal from './DescriptionModal'
// 나중에 바꿔야함

const TaskItem = (props) => {
    const [overwriteTextStyle, setTextStyle] = useState({textDecorationLine: props.activate ? 'line-through' : 'none'})
    const [modalVisible, setModalVisible] = useState(false)

    const onPressText = () => {
        const lineDecoration = overwriteTextStyle.textDecorationLine
        setTextStyle({
            textDecorationLine: lineDecoration === 'none'? 'line-through': "none" 
        })
    }

    const onPressModalButton = () => {
        setModalVisible(!modalVisible)
    }

    const CloseButton = () => {
        return (
            <TouchableOpacity style={styles.ModalCloseButtonStyle} 
                        onPress={() => onPressModalButton()}>
            <HeaderText theme='dark'>닫기</HeaderText>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.taskStyle}>
            <ConfirmButton activate={props.activate}
                           onPress={() => onPressText()}/>
            
            <Modal animationType='slide'
                transparent={true}
                visible={modalVisible}>
                <View style={styles.viewStyle}>
                    <View style={styles.taskTitleViewStyle}>
                        <HeaderText theme='light'>{props.taskTitle}</HeaderText>
                    </View>
                    <View style={styles.descriptionViewStyle}>
                        <AppText theme='light'>{props.description}</AppText>
                    </View>
                    <CloseButton />
                </View>
            </Modal>
            <Pressable style={styles.textWrapperStyle}
                       onPress={() => onPressModalButton()}>
                <HeaderText style={overwriteTextStyle}>{props.taskTitle}</HeaderText>
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
    viewStyle: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 30,
        padding: 10,
    },
    taskTitleViewStyle: {
        backgroundColor: globalStyles.DARK_COLOR,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    descriptionViewStyle: {
        backgroundColor: globalStyles.DARK_COLOR,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    ModalCloseButtonStyle: {
        backgroundColor: globalStyles.LIGHT_COLOR,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }
})

export default TaskItem