import React from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
import * as globalStyles from '../global/styles'

const AppText = (props) => {
    const fontColor = {color: props.theme === 'light'? globalStyles.LIGHT_TEXT_COLOR : globalStyles.DARK_COLOR}
    return (
        <Text style={[styles.appTextStyle, fontColor, props.style]}>
            {props.children}
        </Text>
    )
}

const styles = StyleSheet.create({
    appTextStyle: {
        fontSize: 15
    }
})

export default AppText