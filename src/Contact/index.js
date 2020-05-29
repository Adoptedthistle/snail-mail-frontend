import React from "react";
import css from "./contact.module.css";

const Contact = () => {
  return (
    <div>
      <h3 id={css.contactInfo}>
        At SnailMail, we love the simplicity of sending old-fashioned mail
        postcards, letter and other papery goodness! <br></br>Add your addresses
        below to keep a log of all of the people in your circle. All you need to
        do then is get sending!
      </h3>
    </div>
  );
};

export default Contact;
