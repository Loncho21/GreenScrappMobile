import { StyleSheet } from "react-native";

export const HEADER_MAX_HEIGHT = 130;
export const HEADER_MIN_HEIGHT = 70;

const styleHeader = StyleSheet.create(
    {
        container:{
            width:'100%',
            height:HEADER_MAX_HEIGHT,
            backgroundColor:'#FFFFFF'
        },
        background:{
            width:'100%',
            height:'80%',
            flexDirection:'row',
            backgroundColor:'#FFFFFF'
        },
        title:{
            height:'20%',
            fontFamily:'SpaceGrotesk-Medium',
            fontSize:24,
            marginLeft:'5%',
        },
        textalternative:{
            marginRight:'3%',
            fontFamily:'SpaceGrotesk-Medium',
            color: '#07A004'
        },
        logocontainer:{
            width:'50%',
            alignItems:"center",
            justifyContent:"center"
        },
        back:{
            marginTop:'2%',
            width:'20%',
            marginLeft:'5%'
        },
        plus:{
            marginTop:'2%',
            width:'30%',
            alignItems:"center",
        }

    }
)

export default styleHeader;
