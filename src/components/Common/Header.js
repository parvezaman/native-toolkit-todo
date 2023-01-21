import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../redux/taskSlice';

const Header = (props) => {
    const [myTask, setMyTask] = useState();
    const [updatedTitle, setUpdatedTitle] = useState()
    const dispath = useDispatch()

    const onSubmitTask = () => {
        if (myTask.trim().length === 0) {
            alert("Please add a task")
            setMyTask("")
            return
        }

        dispath(
            addTask({
                task: myTask
            })
        )
        setMyTask("")
    }

    const onUpdateTask = () => {

        dispath(
            updateTask(
                {
                    id: props.taskId,
                    title: updatedTitle
                }
            )
        )

        props.setIsEdit(false)
    }

    return (
        <View >
            <Text style={styles.headerText}>
                Plan My Day
            </Text>

            {props.isEdit != true ? (
                <View
                    style={styles.textBoxContainer}
                >
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Add a task"
                        onChangeText={setMyTask}
                        value={myTask}
                    />

                    <TouchableOpacity
                        style={styles.touchableStyle}
                        onPress={onSubmitTask}
                    >
                        <Text style={styles.touchableTextStyle}>Add</Text>
                    </TouchableOpacity>
                </View>
            )
                :
                (
                    <View
                        style={styles.textBoxContainer}
                    >
                        <TextInput
                            style={styles.inputBox}
                            placeholder="type new title..."
                            onChangeText={setUpdatedTitle}
                            value={updatedTitle}
                        />

                        <TouchableOpacity
                            style={styles.touchableStyle}
                            onPress={onUpdateTask}
                        >
                            <Text style={styles.touchableTextStyle}>Update</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20
    },
    inputBox: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: '100%',
        borderRadius: 5
    },
    textBoxContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    touchableStyle: {
        backgroundColor: "#007478",
        padding: 10,
        margin: 10,
        width: "100%",
        borderRadius: 5,
        alignItems: "center"
    },
    touchableTextStyle: {
        color: 'white',
        fontWeight: "bold"
    }
})