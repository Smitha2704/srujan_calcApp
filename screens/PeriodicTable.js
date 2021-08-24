import * as React from 'react'
import { View,Text, Image} from 'react-native'

export default class PeriodicTable extends React.Component{
   render(){
    return(
     <View style={{flex:1, background:'grey'}}>
        <Image
         style={{width:1000, height:570, justifyContent:'center',marginLeft:130}}
         source = {require('../assets/PeriodicTable.png')}   
      />   
     </View>   
    )   
   } 
}