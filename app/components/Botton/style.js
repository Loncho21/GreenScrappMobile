import { StyleSheet } from "react-native";

const button = StyleSheet.create(
    {
        textbasic:{
            fontFamily:'SpaceGrotesk-Bold',
            color:'#07A004',
            fontWeight:'bold',
            fontSize:17,
            marginRight: '20%'
        },
        basic:{
            flexDirection:'row',
            backgroundColor:'#FFFFFF',
            height: 40,
            width: '100%' ,
            borderColor:'#07A004',
            borderRadius:8,
            borderWidth:1.5,
            marginBottom:20
        },
        content:{
            width:'80%',
            justifyContent: 'center',
            alignItems:'center'
        },
        image:{
            width:'20%',
            justifyContent: 'center',
            alignItems:'center'
        },
        solid:{
            flexDirection:'row',
            backgroundColor:'#07A004',
            height: 40,
            width: '100%' ,
            borderColor:'#07A004',
            borderRadius:8,
            borderWidth:1.5,
            marginBottom:20
        },
        textsolid:{
            fontFamily:'SpaceGrotesk-Bold',
            color:'#FFFFFF',
            fontWeight:'bold',
            fontSize:17,
            marginRight: '20%'
        },
        disable:{
            flexDirection:'row',
            backgroundColor:'#E0E0E0',
            height: 40,
            width: '100%' ,
            borderColor:'#E0E0E0',
            borderRadius:8,
            borderWidth:1.5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
            marginBottom:20
        }


    }
)

export default button;
