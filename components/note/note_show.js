import React,{ Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';


export default class Note extends Component {
  constructor(props){
    super(props);
    if (this.props.note) {
      this.state = {
        title: this.props.note.title,
        body: this.props.note.body
      };
    } else {
      this.state = {title: '', body: ''};
    }
  }
  render(){

    //have access to this.props.note
    //value field in text input?
    return(
      <View>
        <TextInput
          placeholder="Add a title"
          style={{padding:20, paddingTop: 20, fontSize:24}}
          onChangeText={(title) => this.setState({title})}
           editable = {true}
          value={this.state.title}
        />
        <TextInput
          placeholder="Add a note"
          style={{padding:20, paddingTop: 20, fontSize:20}}
          onChangeText={(body) => this.setState({body})}
          multiline={true}
          editable = {true}
          value={this.state.body}
        />
    </View>


    );

  }
}
