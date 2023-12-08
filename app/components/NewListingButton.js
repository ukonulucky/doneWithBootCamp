import { TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {View} from "react-native"

import colors from '../config/colors'


const NewListingButton = ({size, color, onPress}) => {
  return (
  
   <View style={styles.container}>
   <TouchableOpacity
   activeOpacity={0.3}
   onPress={() => onPress()}
   >
   <MaterialCommunityIcons  size={40} color={colors.white}  name="plus-circle"/>
   </TouchableOpacity>
   </View>
  
  )
}
 const styles = StyleSheet.create({
   container: {
    width:60,
    height: 60,
    borderRadius: 30,
    backgroundColor:colors.primary,
    borderColor:colors.white,
    borderWidth: 3,
    justifyContent:"center",
    alignItems:"center",
    bottom: 30,


    
   }
 })
export default NewListingButton