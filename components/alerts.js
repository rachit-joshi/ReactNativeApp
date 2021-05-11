import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-swipeable-row';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function alertScreen() {

    const rightButtons = [
        <TouchableHighlight><Icon name="trash" size={28} color="#900"/></TouchableHighlight>,
        <TouchableHighlight><Icon name="history" size={28} color="blue"/></TouchableHighlight>
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
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</Text>
                </Swipeable>
            </View>
            <View style={styles.alertsBox}>
                <Swipeable rightButtons={rightButtons}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
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
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>
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
        paddingTop: 8,
        paddingBottom: 8
    }
  })