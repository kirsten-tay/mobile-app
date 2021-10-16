import React from 'react'
import {View, Text, Image} from "react-native"


export default function Login() {
    return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center", backgroundcolor: 'red'}}>
            <View style={{flex:2}}>
                <image style={{width:150, height:150}} 
                source={{URL:"http"}}/>
            
            <Text style= {{color: "rgba(0,0,0,0,6)", fontSize:24}}> Welcome to </Text>
            <Text style={{color:"black", fontSize: 30, fontWeight:"600" }}>Power Bike Shop</Text>
            </View>
            <View style={{flex:1, backgroundColor: "red"}}></View>
        </View>
    )
}