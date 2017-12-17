import React from 'react';
import { connect } from 'react-redux';
import { values } from 'lodash';
import { fetchSingleUser } from '../../actions/user_actions';
import HomeScreen from './home_screen';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  fetchSingleUser: (userId) => dispatch(fetchSingleUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
