import React from 'react'
import {
    FlatList,
    View,
    StyleSheet
} from 'react-native'
import TaskItem from './TaskItem'
import AddTaskItem from './AddTaskItem'

const TaskList = (props) => {
    const renderItem = ({item}) => {
        return (
            <TaskItem activate={item.is_completed}
                      description={item.description}
                      taskTitle={item.title} />
        )
    }

    return (
        <View style = {styles.taskListStyle}>
            <FlatList data = {props.data}
                    renderItem = {(item) => renderItem(item)}
                    keyExtractor = {(item) => `task-id-${item.id}`}/>

            <AddTaskItem style={styles.addTaskItemStyle}
                         title={"+를 눌러서 새로운 작업을 추가하세요"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    taskListStyle: {
        margin: 10,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    addTaskItemStyle: {
        marginTop: 10
    }
})

export default TaskList