import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Header = () => {
    const [myTask, setMyTask] = useState()
    return (
        <View >
            <Text style={styles.headerText}>
                Plan My Day
            </Text>

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
                    onPress={() => { }}
                >
                    <Text style={styles.touchableTextStyle}>Add</Text>
                </TouchableOpacity>
            </View>
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