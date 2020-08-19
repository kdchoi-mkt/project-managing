import React from 'react'
import {
    FlatList,
    View,
    StyleSheet
} from 'react-native'
import ScheduleItem from './ScheduleItem'
import HeaderText from './HeaderText'
import AppText from './AppText'
import AddItem from './AddItem'
import * as globalStyles from '../global/styles'

const ScheduleList = (props) => {
    const renderItem = ({item}) => {
        return (
            <ScheduleItem navigation={props.navigation}
                      description={item.description}
                      title={item.title} />
        )
    }

    return (
        <View style = {styles.viewStyle}>
            <HeaderText>{props.title}</HeaderText>
            <FlatList style = {styles.scheduleListStyle}
                      data = {props.data}
                      renderItem = {(item) => renderItem(item)}
                      keyExtractor = {(item) => `schedule-id-${item.id}`}/>

            <AddItem style={styles.addScheduleItemStyle}
                     title={"+를 눌러서 새로운 스케줄을 추가하세요"}
                     type={"스케줄"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        margin: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: globalStyles.LIGHT_TEXT_COLOR,
        padding: 20
    },
    scheduleListStyle: {
        marginTop: 10
    },
    addScheduleItemStyle: {
        marginTop: 10
    }
})

export default ScheduleList