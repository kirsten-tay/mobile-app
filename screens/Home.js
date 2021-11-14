import React from 'react'
import {View,Text, Image, StyleSheet, ScrollView} from "react-native"
import {Ionicons ,FontAwesome ,AntDesign,Foundation,FlatList} from '@expo/vector-icons';


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
           flex:1,
           justifyContent:"space-between",
            alignItems:"center",
            }}>
                <Ionicons name="ios-menu-outline" size={24} color="black"/>
               <FontAwesome name="motorcycle" size={24} color="black"/>
               <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                  <AntDesign name="search1" size={20} color="black"/>
                  <Ionicons name="notifications-outline" size={20} color="black"/> 
               </View>
            </View>
           <View style={{
               flexDirection:"row",
               flex:3,
               justifyContent:"space-between",
                alignItems:"center",
           }}>
                <FlatList data={[{
                    title: 'bike', key: 'item1'}]}
                renderItem={({item}) => <ListItem title={item.title} />}
/>
           </View>
        </View>
        
        
    )
}