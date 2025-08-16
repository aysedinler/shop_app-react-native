import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:"#eeeeee",
        borderColor:"#bdbdbd",
        borderWidth:1,
        margin:10,
        flexDirection: "row",
    },
    image:{
        width:100,
        height:100,
        resizeMode:"contain",
        // backgroundColor:"#fff"

    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:"space-between"
      
    },
    title:{
        fontWeight:"bold",
        fontSize:15,
    },
    price:{
        textAlign:"right",
        fontSize:16,
        fontStyle:"italic"
    },
})