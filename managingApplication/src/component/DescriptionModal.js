import React, { useState } from 'react'
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const DescriptionModal = (props) => {
    return(
        <View>
            <Modal animationType='slide'
                   transparent={true}
                   visible={props.modalVisible}>
                <View style={styles.viewStyle}>
                    <TouchableOpacity style={styles.touchStyle}>
                        <Text style={styles.textStyle}>{props.description}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 30
    },
    touchStyle: {
        backgroundColor: 'blue',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white'
    }
})

export default DescriptionModal