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
      <form>
        <input placeholder="Name" name="Name" />
        <input placeholder="Address" name="Address" />
        <input placeholder="Postcode" name="Postcode" />
        <input placeholder="Notes" name="Notes" />
      </form>
      <button>Submit</button>
    </div>
  );
};

export default Contact;
