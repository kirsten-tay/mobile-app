import React from 'react'
import {View, text} from "react-native"


export default function Home() {
    return(
        <View style={{
        backgroundColor:"white",
        flex:1,
        paddingTop:55,
        paddingHorizontal:20,
        }}>
            <View style={{
           flexDirection:"row",
           justifyContent:"space-between",
            alignItems:"center",
            }}>
                <Ionicons name="ios-menu-outline" size={24} color="black"

            </View>

        </View>
    )
}