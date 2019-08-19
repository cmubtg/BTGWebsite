import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import AboutPage from "./../about";
import FaqPage from "./../faq";
import ContactPage from "./../contact";
import { Switch, Route, Router } from "./../../util/router.js";
import Divider from "./../../components/Divider";
import Footer from "./../../components/Footer";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import btgLogo from "./btg-logo-white.svg";
import btgLogoGray from "./btg-logo-gray.svg";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar color="primary" spaced={true} logo={btgLogo} />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Divider color="light" />
          <Footer
            color="white"
            size="medium"
            logo={btgLogoGray}
            description="We build the cutting edge."
            copyright="© Carnegie Mellon Business Technology Group 2019"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
