import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native"
import {AntDesign} from '@expo/vector-icons'
import LoginBike from '../assets/LoginBike.jpg'

export default function Login() {
    return(
        <View style={{
            flex:1,
            justifyContent:"center", 
            alignItems:"center", 
            backgroundcolor: "white"
            }}>
            <View style={{flex:2}}>
                <image style={{
                    width:200, 
                    height:200, 
                    borderRadius:20, 
                    marginBottom:50, 
                    transform:[{rotate:"45deg"}], }}
                source={require["../assets/LoginBike.jpg"]}/>

            
            <Text style= {{color: "rgba(0,0,0,0,6)", fontSize:24}}> Welcome to </Text>
            <Text style={{color:"black", fontSize: 30, fontWeight:"600" }}>Power Bike Shop</Text>
            <TouchableOpacity style={{
                backgroundColor:"#e3e3e3",
                padding:10,
                paddingHorizontal:60,
                flexDirection:"row",
                alignItems:"center",
                borderRadius:10,
                marginTop:20,
                 }}>
                     <AntDesign name="google" size={24} color="red "></AntDesign>
                   <Text style={{fontSize:17, marginLeft:15}}>Login with Gmail</Text>
                 </TouchableOpacity>
                 
                 <TouchableOpacity 
                
                 style={{
                backgroundColor:"black",
                padding:10,
                paddingHorizontal:60,
                flexDirection:"row",
                alignItems:"center",
                borderRadius:10,
                marginTop:20,
                 }}>
                     <AntDesign name="apple1" size={24} color="white "/>
                   <Text style={{fontSize:17,color:"white" marginLeft:15}}>Login with Apple</Text>
                 </TouchableOpacity>

                 <TouchableOpacity>
                     <Text style={{marginTop:10, fontWeight:"500", color:"black"}}>
                         Not a member? {""}
                         <Text style={{color:"orange", fontWeight:"bold"}}/>
                     </Text>
                 </TouchableOpacity>
            
            </View>
            <View style={{flex:1, backgroundColor: "red"}}></View>
        </View>
    )
}     