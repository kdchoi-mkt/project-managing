import React from 'react'
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import AppText from './AppText'
import * as globalStyles from '../global/styles'

const AddButton = (prop) => {
    return (
        <TouchableOpacity style={[prop.style, globalStyles.rectangularButton, {borderWidth: 0}]}
                          onPress={prop.onPress}>
            <AppText style={styles.addButtonTextStyle}>+</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButtonTextStyle: {
        fontSize: 30,
        marginTop: -5,
        marginLeft: 2,
        textAlign:'center',
        textAlignVertical: 'center',
        fontWeight: '900'
    }
})

export default AddButton