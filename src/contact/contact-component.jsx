import React from "react";
import "./contact-component.scss";

const Contact = () => {
  return (
    <div id="contact">
      <div className="header">Contact</div>
      <br />
      <br />
      <br />
      <div className="content-container">
        <img
          className="icon"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png?20210306055547"
        ></img>
        <br />

        <div>(843) 996-7485</div>

        <br />
        <br />
        <img
          className="icon"
          alt=""
          src="https://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/email-icon.png"
        ></img>
        <br />
        <div>jadencook.us@gmail.com</div>
        <br />
        <br />
        <img
          className="icon"
          alt=""
          src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
        ></img>
        <br />
        <div>
          <a
            className="link"
            href="https://www.linkedin.com/in/jaden-cook-3a37b6233/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
