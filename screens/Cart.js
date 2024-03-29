import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Pressable} from "react-native"
import {AntDesign} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Tab from '../components/tab'
import CartItem from '../components/CartItem'
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';


export default function Cart({navigation}) {
    return(
<View>
        <View style={{
        backgroundColor:"white",
        flex:1,
        paddingTop:55,
        paddingHorizontal:10,
        }}>
             <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            <View style={{
           flexDirection:"column",
           flex:1,
           justifyContent:"center",
            alignItems:"center",
            }}>            
                <Text style={{fontWeight: "700", fontSize: 20, color: 'rgba(0,0,0, .8)'}}>Cart list</Text>
                    <Text style={{fontWeight: "600", fontSize: 15, color: 'rgba(0,0,0, .4)', textAlign: 'center'}}>(3 items)</Text>
            </View>
            </View>

        <View>
        <CartItem name={"Pinerallo"} type={"Mountain"} price={"1700.00"}/>
        <CartItem name={"Brompton"} type={"Road"} price={"4200.69"}/>
        <CartItem name={"Norco"} type={"Urban"} price={"666.00"}/>
    </View>

    <View style={{backgroundColor: 'rgba(0,0,0,.05)', borderRadius: 15, paddingVertical: 20, paddingHorizontal: 20, marginVertical: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 17, color: 'rgba(0,0,0,.5)', fontWeight: "500"}}>Subtotal</Text>
                    <Text style={{fontSize: 17, fontWeight: "600", color: '#f17827'}}>$<Text style={{color: '#000', fontSize: 18}}>6,566.69</Text></Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 17, color: 'rgba(0,0,0,.5)', fontWeight: "500"}}>Shipping</Text>
                    <Text style={{fontSize: 17, fontWeight: "600", color: '#f17827'}}>$<Text style={{color: '#000', fontSize: 18}}>1,000.00</Text></Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15, borderTop: '2px dashed rgba(0,0,0,.4)', paddingTop: 10}}>
                    <Text style={{fontSize: 17, fontWeight: "700"}}>Total</Text>
                    <Text style={{fontSize: 17, fontWeight: "700", color: '#f17827'}}>$ <Text style={{color: '#000', fontSize: 18}}>7,566.69.00</Text></Text>
                </View>
            </View>

            <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 50, flexdirection:"row", backgroundColor: '#fa6401', borderRadius: 5, width: "min-content %", marginHorizontal: 'auto', marginTop: 5, marginBottom:120}}>
                <Text style={{fontSize: 18,fontWeight: "700", textAlign: 'center' ,color: 'white'}}>Proceed to Checkout</Text>
            </TouchableOpacity>
            <Tab homeActive={false} />
  </View>
    )

}