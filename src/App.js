//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { BrowserRouter as Router } from "react-router-dom";

//> Components
/**
 * Footer: Global Footer
 * Navbar: Global navigation bar
 */
import { Footer, Navbar, CookieModal } from "./components/molecules";
// Starts the page on top when reloaded or redirected
import { ScrollToTop } from "./components/atoms";

//> Routes
import Routes from "./Routes";
//#endregion

//#region > Components
class App extends React.Component {
  componentDidMount = () => {
    this.checkCookies();
  };

  saveCookie = () => {
    this.checkCookies();
  };

  checkCookies = () => {
    // Create custom user id for tracking
    let userId = localStorage.getItem("userId");

    if (!userId) {
      const sha256 = require("js-sha256");

      userId = sha256.create();
      localStorage.setItem("userId", userId);
    }
  };

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="flyout">
            <Navbar />
            <main>
              <Routes />
              <CookieModal saveCookie={this.saveCookie} />
            </main>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
//#endregion

//#region > Exports
export default App;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2021 Christian Aichner
 */
