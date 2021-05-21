import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function alertScreen() {

    const rightButtons = [
        <TouchableHighlight style={{paddingLeft: 25, backgroundColor: "#FF5733", height: 50, paddingTop: 10}}><Icon  name="trash" size={28} color="white"/></TouchableHighlight>,
        <TouchableHighlight style={{paddingLeft: 25, backgroundColor: "#691BE5", height: 50, paddingTop: 10}}><Icon name="history" size={28} color="white"/></TouchableHighlight>
    ];

    return(
    //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Alert Screen</Text>
    //   </View> 
    <SafeAreaView>
        <View style={styles.pageLayout}> 
            <View style={styles.alertTitleBox}>
                <Text style={styles.alertTitle}>Alerts</Text>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text style={{height: 50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text>Lorem ipsum dolor empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  veniam</Text>
                </Swipeable>
            </View>
            {/* ----------------------- */}
            <View style={styles.alertTitleBox}>
                <Text style={styles.alertTitle}>Notifications</Text>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text style={{height: 50}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text>Lorem ipsum dolor empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  veniam</Text>
                </Swipeable>
            </View>
        </View>
    </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    pageLayout: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
      },
    alertTitleBox:{
        paddingLeft: 15,
        paddingTop: 5
    },
    alertTitle: {
        fontSize: 45
    },
    alertsBox: {
        paddingLeft: 8,
        paddingTop: 10,
        paddingBottom: 8,
        //height: 50,
    }
  })