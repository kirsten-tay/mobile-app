import React from 'react'
import {View,  TouchableOpacity} from 'react-native';
import { Entypo, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


export  default  function({homeActive,navigation}){
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "#e6e6e6", position: 'fixed', bottom: 0, left: 0, right: 0, paddingVertical: 20, paddingHorizontal: '15%'}}>
    <TouchableOpacity 
                onPress={() => {
                   navigation.navigate("Home")
                }}
                activeOpacity={0,8}
                >
    <Entypo name="home" size={24} color={homeActive ? '#f17827' : '#a3a3a3'} />
    </TouchableOpacity>
    <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'center', top: '-50%', left: '50%', transform: [{translate: '-50%'}], backgroundColor: '#000', borderRadius: '50%', width: 65, height: 65}}>
        <MaterialCommunityIcons name="microphone-outline" size={24} color="white"/>
    </View>
    <TouchableOpacity 
                onPress={() => {
                   navigation.navigate("Cart")
                }}
                activeOpacity={0,8}
                >
    <SimpleLineIcons name="handbag" size={24} color={!homeActive ? '#f17827' : '#a3a3a3'} />
     </TouchableOpacity>
</View>
)
}