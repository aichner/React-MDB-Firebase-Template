//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Redirect, withRouter } from "react-router-dom";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signOut } from "../../../store/actions/authActions";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBBtn } from "mdbreact";
//> Components
// To be added here

//> CSS
// To be added here

//> Images
// To be added here
//#endregion

//#region > Components
class ProfilePage extends React.Component {
  state = {};

  render() {
    const { auth, profile } = this.props;
    // Check if firebase has loaded profile data
    if (!profile.isLoaded) {
      return (
        <MDBContainer className="flex-center my-5 py-5">
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </MDBContainer>
      );
    } else {
      // Check if logged in
      if (auth.uid === undefined) return <Redirect to="/login" />;

      return (
        <MDBContainer className="text-center my-5 py-5">
          <h2>Logged in</h2>
          <MDBBtn color="elegant" onClick={() => this.props.signOut()}>
            Logout
          </MDBBtn>
        </MDBContainer>
      );
    }
  }
}
//#endregion

//#region > Functions
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
//#endregion

//#region > Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
