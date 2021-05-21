import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { color } from 'react-native-reanimated';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function infoScreen() {
    const [members, setMembers] = useState([{name: 'Rohan', role: 'Admin'},{name: 'Mick', role:'Member'},
                                                {name: 'Saicharan', role:'Admin'},
                                                {name: 'Vic', role:'Member'},
                                                {name: 'Han', role:'Member'},
                                            ]);

    React.useEffect(() => {},[members]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
    
    return(
        <SafeAreaView>
        {/* <Text>Group info Screen</Text> */}
        <View styles={styles.pageLayout}>
            <View style={styles.DPbox}>
                <Image style={styles.DPimg} source={{ 
                         width: 175,
                        height: 175,
                        uri: "https://picsum.photos/175/175"}}/>
                <Text style={styles.groupTitle}>NAME</Text>
            </View> 
            <View style={styles.MemberBox}>
                {members.map( (x) => (
                    // console.log(x);
                    <View key={x.name} style={styles.MemberContainer}>
                        <View style={styles.MemPicContainer}>
                            <Image style={styles.MemPic} source={{ 
                                    width: 30,
                                    height: 30,
                                    uri: "https://picsum.photos/30/30?random="+ getRandomInt(1,10).toString()}}/>
                        </View>
                        <View  style={styles.MemName}>
                            <Text>{x.name}</Text>
                            <Text>{x.role}</Text>
                        </View>
                        <View style={styles.MemOptions}>
                            <Icon name="ellipsis-v" size={28} />
                        </View>
                    </View>
                ))} 
            </View>
            <View style={styles.OptionsBox}>
            <View style={styles.options} />
                <View style={styles.options}>
                    <Icon name="user-plus" size={30} />
                </View>
                <View style={styles.options} />
                <View style={styles.optionsplus} />
                <View style={styles.options}>
                    <Icon name="cogs" size={30} />
                </View>
                <View style={styles.options} />
            </View>
        </View>
      </SafeAreaView> 
    )
};
const styles = StyleSheet.create({
    pageLayout: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
      },
    DPbox: {
      padding: 25,
      //backgroundColor: '#3B6CD4',
      margin: 5,
      alignItems: 'center',
    },
    DPimg: {
        width: 175,
        height: 175,
        borderRadius: 175 / 2,
        overflow: "hidden",
    },
    groupTitle: {
        paddingTop: 15,
        fontSize: 40,
    },
    MemberBox:{
        padding: 25,
        //backgroundColor: '#3B6CD4',
        margin: 5,
    },
    MemberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    MemPicContainer: {
        flex: 1,
    },
    MemPic: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        overflow: "hidden",
    },
    MemName: {
        flex: 8,
        alignItems: 'flex-start'
    },
    MemOptions: {
        flex: 1,
        alignItems: 'flex-end'
    },
    OptionsBox: {
        padding: 25,
        margin: 5, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
      },
    options: {
        flex: 1,
    },
    optionsplus: {
        flex: 4,
    }
  })