//#region > Imports
//> Redux
import { combineReducers } from "redux";
//> Firestore reducer
import { firestoreReducer } from "redux-firestore";
//> Firebase reducer
import { firebaseReducer } from "react-redux-firebase";

//> Reducers
// Authentication
import authReducer from "./authReducer";
//#endregion

//#region > Functions
const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  /* Authentication */
  auth: authReducer,
});
//#endregion

//#region > Exports
export default rootReducer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
