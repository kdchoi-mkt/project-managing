import React, { useState } from 'react'
import {
    TouchableOpacity, StyleSheet
} from 'react-native'
import * as globalStyles from '../global/styles'

const confirmButton = (props) => {
    const [overwriteButtonStyle, setButtonStyle] = useState({backgroundColor: props.activate ? globalStyles.DARK_COLOR : 'white'})

    const onPressButton = () => {
        // props.press()

        // 밑의 내용은 모두 DB에서 가져오는 것으로 처리해야함
        let modifier = overwriteButtonStyle.backgroundColor === globalStyles.DARK_COLOR ? 'white' : globalStyles.DARK_COLOR
        setButtonStyle({backgroundColor: modifier})
    }   

    return (
        <TouchableOpacity style = {[props.styles, globalStyles.rectangularButton, overwriteButtonStyle]}
                          onPress = {() => onPressButton()} />
    )
}

export default confirmButton