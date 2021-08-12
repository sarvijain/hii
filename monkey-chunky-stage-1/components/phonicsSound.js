import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {Audio} from "expo-av";

export default class PhonicSound extends React.Component{
  constructor(){
    super();
    this.state={
      pressButton:"",
    }
  }
  playSounds  = async(soundChunks) => {
    console.log(soundChunks)
    var playname="https://s3-whitehatjrcontent.whjr.online/phones/" + soundChunks+".mp3"
     await Audio.Sound.createAsync(
      {uri:playname},
      {shouldPlay:true}
    )
  }
render(){
  return(
    <TouchableOpacity
    
    style= {this.state.pressButton===this.props.buttoni?[{width:"30%", height:50,justifyContent:"center", alignSelf:"center", borderRadius:10, borderWidth:4, borderColor:"white",margin:5, backgroundColor:"blue"}]:[{width:"30%", height:50,justifyContent:"center", alignSelf:"center", borderRadius:10, borderWidth:4, borderColor:"white",margin:5, backgroundColor:"red"}]} 
    
    onPress={()=>{
     this.setState({pressButton:this.props.buttoni});
      this.playSounds(this.props.soundChunks)
    }}>
    <Text style={{textAlign:"center",fontSize:20,color:"white"}}>{this.props.wordChunk}</Text>
    </TouchableOpacity>
  )
}
}