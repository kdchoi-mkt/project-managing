import React from 'react'
import {
    FlatList,
    View,
    StyleSheet
} from 'react-native'
import TaskItem from './TaskItem'
import AddItem from './AddItem'
import HeaderText from './HeaderText'
import AppText from './AppText'
import * as globalStyles from '../global/styles'

const TaskList = (props) => {
    const addInfo = {
        route: 'addTask',
        format: {
            schedule_id: props.schedule_id
        }
    }

    const renderItem = ({item}) => {
        return (
            <TaskItem activate={item.is_completed}
                      description={item.description}
                      taskTitle={item.title} />
        )
    }

    return (
        <View style = {styles.viewStyle}>
            <HeaderText>{props.title}</HeaderText>
            <AppText>
                {props.description}
            </AppText>
            <FlatList style = {styles.taskListStyle}
                      data = {props.data}
                      renderItem = {(item) => renderItem(item)}
                      keyExtractor = {(item) => `task-id-${item.id}`}/>

            <AddItem style={styles.addTaskItemStyle}
                     title={"+를 눌러서 새로운 작업을 추가하세요"}
                     type={"작업"}
                     loading={props.loading}
                     addInfo={addInfo}/>
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
    taskListStyle: {
        marginTop: 10
    },
    addTaskItemStyle: {
        marginTop: 10
    }
})

export default TaskList