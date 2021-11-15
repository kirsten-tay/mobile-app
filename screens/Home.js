import React from 'react'
import {View,Text, Image, StyleSheet, ScrollView} from "react-native"
import {Ionicons ,FontAwesome ,AntDesign,Foundation,FlatList} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

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

            <Text style={{marginVertical: 10, fontSize: 18, fontWeight: "500", color: "rgba(0,0,0, .4)"}}>The world's <Text style={{fontSize: 20, fontWeight: "700", color:'#f17827'}}>Best Bikes</Text></Text>
            <Text style={{fontSize: 18, fontWeight: "700", color: "rgba(0,0,0, .8)"}}>Categories</Text>
         <ScrollView horizontal={true}>
           <View style={{
               flexDirection:"row",
               flex:3,
               justifyContent:"space-between",
                alignItems:"center",
           }}>
                <Text style={[styles.categoryItem, styles.categoryItemActive]}>All</Text>
                    <Text style={style.categoryItem}>Roadster</Text>
                    <Text style={style.categoryItem}>Mountain</Text>
                    <Text style={style.categoryItem}>Urban</Text>
                    <Text style={style.categoryItem}>Casual</Text>
           </View>
        </ScrollView>
        </View>
        
        
    )
}