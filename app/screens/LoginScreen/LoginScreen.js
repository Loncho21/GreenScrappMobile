import React , { useState, useEffect } from 'react';
import {SafeAreaView, Text, TextInput, View,ScrollView,Animated} from 'react-native';
import Divider from '@components/Divider';
import Botton from '@components/Botton';

//Style
import loginstyle from './style';
import button from '@components/Botton/style';

const LoginScreen = () => {
   
    const [value , scrollY] = useState(new Animated.Value(0))


    useEffect (()=> {
        scrollY = new Animated.Value(0);
        this.changingHeight = scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [120, 60],
            extrapolate: "clamp"
        });
        this.props.navigation.setParams({
            changingHeight: this.changingHeight
        });
    });

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF', }}>
        <ScrollView   
            scrollEventThrottle={16}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY}}}])}
          
        >
            <View style={loginstyle.logincontent}>
                <Text style={loginstyle.textlogin}>Email ó número de telefono</Text>
                <TextInput style={loginstyle.input} placeholder={'P. ej. : 030 123 4567'}/>
                <Text style={loginstyle.textlogin} >Contraseña</Text>
                <TextInput  style={loginstyle.input} textContentType={'password'} placeholder={'Contraseña'}/>
                <Botton
                boton={button.solid}
                // image={require('../../assets/facebook.png')}
                colortext={button.textsolid}
                title={'Iniciar sesión'}
                />
            </View>  
            <View style={loginstyle.loginsocial}>
                <Divider text={'o bien continua con'}/>
                <Botton
                    boton={button.basic}
                    ico={'facebook'}
                    colortext={button.textbasic}
                    title={'Facebook'}
                />
                <Botton
                    boton={button.basic}
                    ico={'google'}
                    colortext={button.textbasic}
                    title={'Google'}
                />
            </View>
            <Text style={loginstyle.textfotter}>Al presionar continuar, Crear una cuenta o mas opciones, confirmo que estoy de acuerdo con las siguientes condiciones de GreenScrapp:
            <Text style={loginstyle.textalternative}>Terminos de servicio</Text>  y <Text style={loginstyle.textalternative}>Politicas de privacidad</Text></Text>
        </ScrollView>
    </SafeAreaView>
    );    
};
export default LoginScreen;

