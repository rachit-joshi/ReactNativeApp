import React, { useState } from 'react';
import { Button, Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function tasksScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    return(
        <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tasks Screen (still under development)</Text>
            <Button title="Create new task" onPress={() => setModalVisible(true)}/>
        </View> 
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle} >Create New Task</Text>
                    <View style={styles.modalForm}>
                        <Text>Enter a name for your Task</Text>
                        <TextInput style={styles.input} placeholderStyle={styles.placeholderStyle}/>
                        {/* <Text>Select a start date</Text> */}
                        <Text>Enter tasks frequency</Text>
                        <TextInput style={styles.input} placeholderStyle={styles.placeholderStyle}/>
                        <Text>Select Members</Text>
                        <View style={styles.MemSelect}>
                            <View style={styles.MemPicContainer}>
                                <Image style={styles.MemPic} source={{ 
                                        width: 30,
                                        height: 30,
                                        uri: "https://picsum.photos/30/30?random=1"}}/>
                            </View>
                            <View style={styles.MemPicContainer}>
                                <Image style={styles.MemPic} source={{ 
                                        width: 30,
                                        height: 30,
                                        uri: "https://picsum.photos/30/30?random=2"}}/>
                            </View>
                            <View style={styles.MemPicContainer}>
                                <Image style={styles.MemPic} source={{ 
                                        width: 30,
                                        height: 30,
                                        uri: "https://picsum.photos/30/30?random=5"}}/>
                            </View>
                            <View style={styles.MemPicContainer}>
                                <Icon name="plus" size={28}/>
                            </View>
                        </View>
                    </View>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>DONE</Text>
                    </Pressable>
                </View>
            
            </Modal> 
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    modalView: {
      margin: 20,
      marginTop: 45,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalForm: {
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 45,
        marginBottom: 15,
        textAlign: "center"
      },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderBottomColor: "gray",
        borderRadius: 50,
        justifyContent: "center"
    },
    placeholderStyle: {
        paddingLeft: 20
    },
    MemSelect: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },  
    MemPicContainer: {
        padding: 8
    },
    MemPic: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        overflow: "hidden",
    },
  });