import React, { useState } from 'react'
import {
    TouchableOpacity, StyleSheet
} from 'react-native'

const AddButton = (props) => {
    const [overwriteButtonStyle, setButtonStyle] = useState({backgroundColor: 'white'})

    const onPressButton = () => {
        // props.press()

        // 밑의 내용은 모두 DB에서 가져오는 것으로 처리해야함
        let modifier = overwriteButtonStyle.backgroundColor === 'green' ? 'white' : 'green'
        setButtonStyle({backgroundColor: modifier})
    }   

    return (
        <TouchableOpacity style = {[props.styles, styles.buttonStyle, overwriteButtonStyle]}
                          onPress = {onPressButton} />
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 30,
        width: 30,
        borderColor: 'black',
        borderWidth: 5        
    }
})

export default AddButton