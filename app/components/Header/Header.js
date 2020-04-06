import React, {useState, useEffect} from 'react';
import {Text,View,TouchableOpacity,Image,ImageBackground, Animated, StatusBar} from 'react-native'


//stules
import styleHeader from '@components/Header/style';



export default function Header({back,icoback,logo,icoplus,alternativeButton,alternativeText,title,changingHeight}) {

    // console.warn(changingHeight)
    return (
       <Animated.View style={styleHeader.container}>
             <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <ImageBackground  source={require('../../assets/fondo.png')} style={styleHeader.background}>
                <TouchableOpacity  style={styleHeader.back} onPress={back}>
                    <Image source={icoback} style={{width: 20, height: 20}}/>
                </TouchableOpacity>
                <View style={styleHeader.logocontainer}>
                    <Image source={logo} style={{width: 94, height: 50}}/>
                </View>
                <TouchableOpacity style={styleHeader.plus} onPress={alternativeButton}>
                    <Image source={icoplus}/>
                    <Text style={styleHeader.textalternative}>{alternativeText}</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Text style={styleHeader.title}>{title}</Text>
       </Animated.View>
    )
}
