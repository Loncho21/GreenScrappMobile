import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import button from '@components/Botton/style';

import Botton from '@components/Botton';
import { ScrollView } from 'react-native-gesture-handler';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text style={{fontFamily: 'SpaceGrotesk-Medium', fontSize: 32}}>
          SplashScreen
        </Text>
        <Icon name={'visibility-off'} size={20} color={'#000'} />
        <Botton
          boton={button.solid}
          colortext={button.textsolid}
          title={'Boton'}
        />
        <Botton
          boton={button.basic}
          // ico={'facebook'}
          colortext={button.textbasic}
          title={'Boton'}
        />
        <Botton
          boton={button.disable}
          colortext={button.textsolid}
          title={'Boton'}
          disable={true}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default SplashScreen;
