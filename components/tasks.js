import React, { useState } from 'react';
import { Button, Alert, Modal, StyleSheet, Text, Pressable, SafeAreaView, TextInput, Image, View, ScrollView, TouchableNativeFeedback, TouchableNativeFeedbackComponent} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function tasksScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [dmodalVisible, setDmodalVisible] = useState(false);
    return(
        <>
        {/* <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
        <SafeAreaView style={{flex: 1}}>
            {/* <Text>Tasks Screen (still under development)</Text> */}
            <View style={styles.pageLayout}>
                <View style={styles.pageHeader}>
                    <Text style={styles.headerText}>Tasks</Text>
                    <TouchableNativeFeedback style={styles.addButton} onPress={() => setModalVisible(true)}><Icon style={{backgroundColor: "#FF451D", width: 50, height: 50, borderRadius: 50 / 2,overflow: "hidden",elevation: 2,paddingTop: 11, paddingLeft: 13.5}}name="plus" size={30} color="white" /></TouchableNativeFeedback>
                </View>
                <ScrollView>
                    {/* ---------------------------------------------------------------------------------- */}
                    <View style={[styles.taskLayout, styles.shadow]}>
                        <View style={styles.taskInfo}>
                            <TouchableNativeFeedback onPress={() => setDmodalVisible(true)}><Text style={styles.tasksTitle}>TASK 1</Text></TouchableNativeFeedback>
                            <View><Text style={styles.tasksDayCount}>3</Text><Text>Days</Text></View>
                        </View>
                        <View style={styles.taskGraph}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Mon 3/27</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Rohan</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Wed 3/29</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Mick</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Sat 4/1</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Vic</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        </View>
                    </View>
                    {/* ---------------------------------------------------------------------------------- */}
                    <View style={[styles.taskLayout, styles.shadow]}>
                        <View style={styles.taskInfo}>
                        <TouchableNativeFeedback onPress={() => setDmodalVisible(true)}><Text style={styles.tasksTitle}>TASK 2</Text></TouchableNativeFeedback>
                            <View><Text style={styles.tasksDayCount}>5</Text><Text>Days</Text></View>
                        </View>
                        <View style={styles.taskGraph}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Tue 3/28</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Rohan</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Thu 3/30</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Mick</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            
                        </View>
                    </View>
                    {/* ---------------------------------------------------------------------------------- */}
                    <View style={[styles.taskLayout, styles.shadow]}>
                        <View style={styles.taskInfo}>
                        <TouchableNativeFeedback onPress={() => setDmodalVisible(true)}><Text style={styles.tasksTitle}>TASK 3</Text></TouchableNativeFeedback>
                            <View><Text style={styles.tasksDayCount}>1</Text><Text>Days</Text></View>
                        </View>
                        <View style={styles.taskGraph}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Wed 3/29</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Rohan</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Fri 3/31</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Sai</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Sun 4/2</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Han</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        </View>
                    </View>
                    {/* ---------------------------------------------------------------------------------- */}
                    <View style={[styles.taskLayout, styles.shadow]}>
                        <View style={styles.taskInfo}>
                        <TouchableNativeFeedback onPress={() => setDmodalVisible(true)}><Text style={styles.tasksTitle}>TASK 4</Text></TouchableNativeFeedback>
                            <View><Text style={styles.tasksDayCount}>6</Text><Text>Days</Text></View>
                        </View>
                        <View style={styles.taskGraph}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Sun 4/2</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Vic</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        </View>
                    </View>
                    {/* ---------------------------------------------------------------------------------- */}
                    <View style={[styles.taskLayout, styles.shadow]}>
                        <View style={styles.taskInfo}>
                        <TouchableNativeFeedback onPress={() => setDmodalVisible(true)}><Text style={styles.tasksTitle}>TASK 5</Text></TouchableNativeFeedback>
                            <View><Text style={styles.tasksDayCount}>3</Text><Text>Days</Text></View>
                        </View>
                        <View style={styles.taskGraph}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Mon 3/27</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Rohan</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Wed 3/29</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Mick</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                            <View style={styles.MemPicContainer}>
                                    <Text style={{paddingBottom: 3}}>Sat 4/1</Text>
                                    <Image style={styles.MemPic} source={{ 
                                            width: 30,
                                            height: 30,
                                            uri: "https://picsum.photos/30/30?random=1"}}/>
                                    <Text style={{paddingTop: 3}}>Vic</Text>
                                </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        </View>
                    </View>
                    {/* ---------------------------------------------------------------------------------- */}
                </ScrollView>
            </View>
        </SafeAreaView> 
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



        <View>
            <Modal
                animationType="slide"
                visible={dmodalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setDmodalVisible(!dmodalVisible);
                }}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle} >Task Details</Text>
                    <View style={styles.modalForm}>
                        
                    </View>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setDmodalVisible(!dmodalVisible)}
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
      elevation: 5,
    },
    addButton: {
        backgroundColor: "red",
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        overflow: "hidden",
        elevation: 2,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
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
        padding: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    MemPic: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        overflow: "hidden",
    },
    pageHeader: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 30,
        paddingTop: 25
    },
    headerText: {
        fontSize: 45
    },
    pageLayout:{
        flex: 1
    },
    taskLayout:{
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        shadowColor: "#000"
    },
    taskInfo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    tasksTitle: {
        fontSize: 30
    },
    tasksDayCount: {
        fontSize: 30,
        paddingLeft: 5
    },
    taskGraph: {
        flexDirection: "row",
        alignItems: "center",
    },
    shadow: {
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 5,
        shadowColor: "#000",
        elevation: 5,
    }
  });