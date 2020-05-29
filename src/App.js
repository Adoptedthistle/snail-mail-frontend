import React from "react";
import css from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Address from "../src/AddressBook/index";
import Contact from "../src/Contact/index";
import Status from "../src/Status/index";
import snailPic from "../src/images/Snaillogo.PNG";
import snailText from "../src/images/smText.png";

function App() {
  return (
    <Router>
      <div id={css.header}>
        <img src={snailText} id={css.snailText} alt="Snail Logo" />
        <img src={snailPic} id={css.snailPic} alt="Snail" />
      </div>

      <div>
        <ul id={css.navbar}>
          <li className={css.nav}>
            <Link to="/address" class={css.link}>
              ADDRESS BOOK
            </Link>
          </li>
          <li className={css.nav}>
            <Link to="/contact" class={css.link}>
              ADD CONTACT
            </Link>
          </li>
          <li className={css.nav}>
            <Link to="/status" class={css.link}>
              STATUS
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/address">
            <Address />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
