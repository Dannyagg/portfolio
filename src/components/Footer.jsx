/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social">
          <h5> Let's Connect </h5>

          <a
            href="https://github.com/Dannyagg"
            target="_blank"
            title="my github repo"
            className="fa fa-github"
            rel="noreferrer"
          ></a>
          <a
            href="https://www.linkedin.com/in/daniel-agbenu/"
            target="_blank"
            title="linkedin"
            className="fa fa-linkedin"
            rel="noreferrer"
          ></a>
          <a
            href="https://twitter.com/Jayborga"
            target="_blank"
            title="twitter"
            className="fa fa-twitter"
            rel="noreferrer"
          ></a>
          <h6
            style={{
              padding: "10px",
              fontSize: "10px",
            }}
          >
            {" "}
            &copy; {new Date().getFullYear()} Daniel Agbenu{" "}
          </h6>
        </div>
      </div>
    </>
  );
}
