/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <>
      <div 
        className="footer"
        style={{
          backgroundColor: theme.background,
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className="social">
          <h5 style={{ color: theme.primaryText, transition: 'color 0.3s ease' }}> Let's Connect </h5>

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
            title="X"
            className="fa fa-twitter"
            rel="noreferrer"
          ></a>
          <h6
            style={{
              padding: "10px",
              fontSize: "10px",
              color: theme.primaryText,
              transition: 'color 0.3s ease',
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
