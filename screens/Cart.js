import React from 'react'
import {View, Text, Image, TouchableOpacity, Pressable} from "react-native"
import {AntDesign} from '@expo/vector-icons';

export default function Cart()) {
    return(
        <View style={{
        backgroundColor:"white",
        flex:1,
        paddingTop:55,
        paddingHorizontal:20,
        }}>
             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            <View style={{
           flexDirection:"row",
           flex:1,
           justifyContent:"space-between",
            alignItems:"center",
            }}>
                
            </View>

        </View>
    )

}