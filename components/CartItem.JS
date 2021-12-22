import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import photobike from '../assets/photobike.png'


export default function({name, price, type}) {
    return (
        <View style={{flexDirection: 'row', gap: 10, marginVertical: 20}}>
            <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#e3e3e3', width: 80, height: 80, borderRadius: 10}}>
                <Image source={photobike} style={{width: '80%', height: '50%'}}/>
            </View>

            <View style={{ flexGrow: 1}}>
                <View style={{flexDirection: 'row', flexGrow: 1, justifyContent: 'space-between',}}>
                    <Text style={{fontWeight: 500, fontSize: 17, color: 'rgba(0,0,0, .8)'}}>{name} Bike</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 30, height: 30, borderRadius: '50%', border: '1px solid rgba(0,0,0, .2)'}}>
                    <FontAwesome5 name="trash-alt" size={18} color="#f17827" />
                    </View>
                </View>
 

)
}