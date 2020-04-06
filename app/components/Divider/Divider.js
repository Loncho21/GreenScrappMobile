import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = ({text}) => {
    return(
        <View style={styles.container}>
            <View style={styles.line}></View>
                <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
         width:'100%',
        marginTop:0,
        marginHorizontal: 2,
        marginVertical: 12
    },
    line: {
        backgroundColor: '#9C9C9C',
        height: 2,
        flex: 1,
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center',
        paddingHorizontal: 5,
        fontSize: 16,
        color: '#9C9C9C',
        fontFamily: 'SpaceGrotesk-Medium'
    }
})

export default Divider;