import React from 'react'
import {
    StyleSheet, View, Modal
} from 'react-native'
import HeaderText from './HeaderText'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ScheduleItem = (prop) => {
    const navigationInformation = {
        title: prop.title,
        description: prop.description
    }

    return (
        <View style={styles.taskStyle}>
            <TouchableOpacity onPress={() => {
                prop.navigation.navigate('TaskList', navigationInformation)
                }}>
                <HeaderText style={styles.ScheduleStyle}
                            theme='dark'>
                    {prop.title}
                </HeaderText>
            </TouchableOpacity>
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
    ScheduleStyle: {
        marginBottom: 10
    }
})

export default ScheduleItem