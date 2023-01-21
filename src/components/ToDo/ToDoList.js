import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const data = [
    {
        id: 1,
        title: "learn native"
    },
    {
        id: 2,
        title: "learn redux"
    },
    {

        id: 3,
        title: "learn thunk"
    }
]

const ToDoList = () => {

    const itemToRender = ({ item }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => { }}
                >
                    {/* <Text style={styles.taskDelete}>Delete</Text> */}
                    <Ionicons name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={data}
                renderItem={itemToRender}
                keyExtractor={(item) => item.id.toString()}
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
    deleteButton: {

    }
})