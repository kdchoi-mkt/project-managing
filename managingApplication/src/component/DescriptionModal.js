import React, { useState } from 'react'
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import HeaderText from './HeaderText'

const DescriptionModal = (props) => {
    return(
        <Modal animationType='slide'
            transparent={true}
            visible={props.modalVisible}>
            <View style={styles.viewStyle}>
                <View style={[styles.taskTitleViewStyle]}>
                        <HeaderText theme='light'>{`새 ${props.type} 작성하기`}</HeaderText>
                </View>
                <View style={[styles.descriptionViewStyle, props.descriptionStyle]}>
                    {props.children}
                </View>
                {props.button}       
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
})

export default DescriptionModal