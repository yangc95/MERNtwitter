import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated
});

// const mDTP = dispatch => ({
//     logout: () => dispatch(logout())
// })

export default connect(mapStateToProps, { logout })(NavBar);