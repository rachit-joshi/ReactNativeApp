import React, { useState } from 'react';
import { Button, Alert, Modal, StyleSheet, Text, Pressable, SafeAreaView, TextInput, Image, View, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function tasksScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [date, setDate] = useState(new Date());
    return(
        <>
        {/* <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
        <SafeAreaView>
            {/* <Text>Tasks Screen (still under development)</Text> */}
            <View style={styles.pageLayout}>
                <View style={styles.pageHeader}>
                    <Text style={styles.headerText}>Tasks</Text>
                    <Button title="Create new task" onPress={() => setModalVisible(true)}/>
                </View>
                <ScrollView style={{paddingBottom: 10}}>
                    
                    {/* ---------------------------------------------------------------------------------- */}
                    <View style={[styles.taskLayout, styles.shadow]}>
                        <View style={styles.taskInfo}>
                            <View><Text style={styles.tasksTitle}>TASK 1</Text></View>
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
                            <View><Text style={styles.tasksTitle}>TASK 2</Text></View>
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
                            <View><Text style={styles.tasksTitle}>TASK 3</Text></View>
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
                            <View><Text style={styles.tasksTitle}>TASK 1</Text></View>
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
    },
    headerText: {
        fontSize: 45
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
        fontSize: 30
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