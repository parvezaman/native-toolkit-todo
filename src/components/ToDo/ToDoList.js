import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';

const ToDoList = (props) => {
    const myTasks = useSelector((state) => state.tasks)

    const dispath = useDispatch()

    const deleteItem = (id) => {
        dispath(
            deleteTask({
                id: id
            })
        )
    }

    const itemToRender = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.individualButton}
                        onPress={() => deleteItem(item.id)}
                    >
                        <Ionicons name="trash" size={24} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.individualButton}
                        onPress={() => {
                            props.setIsEdit(true)
                            props.setTaskId(item.id)
                        }}
                    >
                        <Feather name="edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={myTasks}
                renderItem={itemToRender}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ToDoList

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#91bfc2",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    taskTitle: {
        fontSize: 24
    },
    taskDelete: {
        fontSize: 24,
        color: "red"
    },
    individualButton: {
        paddingHorizontal: 8
    },
    buttonContainer: {
        flexDirection: 'row',
    }
})