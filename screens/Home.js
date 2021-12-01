import React from 'react'
import {View,Text, Image, StyleSheet , ScrollView} from "react-native"
import {Ionicons ,FontAwesome ,AntDesign,Foundation,FlatList} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import Card from '../components/Card.js'
import Tab from '../components/tab'

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
                    <Text style={styles.categoryItem}>Roadster</Text>
                    <Text style={styles.categoryItem}>Mountain</Text>
                    <Text style={styles.categoryItem}>Urban</Text>
                    <Text style={styles.categoryItem}>Casual</Text>
           </View>
        </ScrollView>
        <View style={{marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', rowGap: 20, columnGap: 20, width: 92 , marginHorizontal: 'auto'}}> 
            <Card name={"Pinarello"} price={"1700.00"} wishlist={true}/>
            <Card name={"Brompton"} price={"2300.00"} wishlist={false} />
            <Card name={"Schwinn"} price={"5500.00"} wishlist={false}/>
            <Card name={"Norco"} price={"1000.00"} wishlist={false}/>

         </View>

         <Tab homeActive={true}/>
        

         </View>
            
        
        
    )
}

   
const styles = StyleSheet.create({
    categoryItem: {
        color: 'rgba(0,0,0, .5)',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: '1rem',
        marginHorizontal: 7,
        fontWeight: 500
    }

}
)
