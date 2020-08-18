import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

const AddButton = (prop) => {
    return (
        <TouchableOpacity style={[prop.style, styles.addButtonStyle]}
                          onPress={prop.onPress}>
            <Text style={styles.addButtonTextStyle}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButtonStyle: {
        height: 30,
        width: 30,
        borderColor: 'black',
    },
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