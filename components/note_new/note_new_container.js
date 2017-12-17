import React from 'react';
import { connect } from 'react-redux';

import { AppRegistry,StyleSheet, textInput, View } from 'react-native';
import NoteNew from 'note_new';
import {createSingleIdea} from '../../actions/idea_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createSingleIdea: (ideaObject) => dispatch(createSingleIdea(ideaObject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteNew);
