import React from 'react'
import {
    StyleSheet
} from 'react-native'
import AppText from './AppText'

const HeaderText = (props) => {
    return (
        <AppText style={[styles.headerStyle, props.style]}
                 theme={props.theme}>
            {props.children}
        </AppText>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18,
        fontWeight: '700'
    }
})

export default HeaderText