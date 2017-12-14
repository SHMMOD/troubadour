// todo: decide if this file is needed
import { connect } from 'react-redux';
import { receiveCurrentUser } from '../../actions/auth_actions';
import Auth0View from './auth0_view';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
    // login: () => dispatch(login()),
    // logout: () => dispatch(logout()),
    // getUserProfile: (accessToken) => dispatch(getUserProfile(accessToken))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth0View);
