import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import button from './style';

const Botton = ({disable, boton, ico, colortext, title}) => {
  return (
    <TouchableOpacity disabled={disable} style={boton}>
      <View style={button.image}>
           <Icon 
            name={ico} size={22} color="#07A004"
          /> 
      </View>
      <View style={button.content}>
        <Text style={colortext}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Botton;
