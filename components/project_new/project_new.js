import React from 'react';
import { TextInput, View } from 'react-native';

class ProjectNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Add project title"
          style={{padding:20, paddingTop: 20, fontSize:24}}
          onChangeText={(title) => this.setState({title})}
        />
      </View>
    );
  }
}

export default ProjectNew;
