import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import ConfirmButton from './ConfirmButton'

const TaskItem = (props) => {
    return (
        <View style={styles.taskStyle}>
            <ConfirmButton />
            <View style={styles.textWrapperStyle}>
                <Text style={styles.textStyle}>{props.children}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        marginTop: 5
    },
    textWrapperStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        textDecorationLine: 'line-through'
    }
})

export default TaskItem