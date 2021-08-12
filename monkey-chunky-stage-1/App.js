import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image, Alert
} from 'react-native';
import { Header } from 'react-native-elements';
import db from "./localdb";
import PhonicSound from "./components/phonicsSound";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks:[],
      phonics:[],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Monkey-Chunky',
            style: { fontWeight: 'bold', fontSize: 20 },
          }}
          leftComponent={{
            icon: 'menu',
            style: { fontWeight: 'bold', fontSize: 20 },
          }}
          rightComponent={{
            icon: 'home',
            style: { fontWeight: 'bold', fontSize: 20 },
          }}
        />
        <Image source={require("./assets/monkey.png")} style={{width:100, height:100, alignSelf:"center", marginTop:20}} />
        <TextInput
          style={{
            borderColor: 'red',
            borderWidth:5,
            borderRadius: 15,
            width: 200,
            height: 50,
            backgroundColor: 'cyan',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 30,
            textAlign:"center",
            fontWeight:"bold",
            fontSize:20,
          }}
          onChangeText={(abc) => {
            this.setState({chunks:[]})
            this.setState({ text: abc });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'pink',
            width: 50,
            height: 50,
            alignSelf: 'flex-end',
            alignItems: 'right',
            justifyContent: 'center',
            marginTop:-50,
            marginRight:10,
          }}
          onPress={()=>{
            var word = this.state.text.toLowerCase()
            db[word]?(this.setState({chunks:db[word].chunks}),
           this.setState({phonics:db[word].phones})):alert("Try some other word")
          }}>
          <Text style={{alignItems:"center",textAlign:"center"}}>search</Text>
        </TouchableOpacity>

        <View>
          {this.state.chunks.map((chunk1,i) =>{
            return (
              <PhonicSound wordChunk={this.state.chunks[i]}
               soundChunks={this.state.phonics[i]} buttoni={i}
               
              />
              /*<TouchableOpacity style={{backgroundColor:"red",borderWidth:5,width:60,height:60,alignSelf:"center",marginBottom:5,justifyContent:"center"}}>
              <Text style={{alignSelf:"center", fontSize:20,}}>{chunk1}</Text>
              
              </TouchableOpacity>*/
              )
               
           })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
});
