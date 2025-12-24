import React from "react";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import YouTube from "react-youtube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "../context/ThemeContext";

export default function Spacex(props) {
  const { theme } = useTheme();
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          borderRadius: "16px",
          boxShadow:
            "0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow =
            "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow =
            "0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)";
        }}
      >
        <div
          style={{
            width: "100%",
            flex: 1,
            minHeight: "400px",
            position: "relative",
            backgroundColor: "#000",
          }}
        >
          <YouTube
            videoId="uCGkNDkwoO0"
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {
                autoplay: 0,
                controls: 1,
              },
            }}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div
          className="description-container"
          style={{
            flex: 1,
            backgroundColor: theme.cardBackground,
            padding: "2rem",
            maxWidth: "40rem",
            transition: 'background-color 0.3s ease',
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: theme.primaryText,
              marginTop: 0,
              marginBottom: "1rem",
              transition: 'color 0.3s ease',
            }}
          >
            Space X Launch Tracker
          </h3>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              color: theme.primaryText,
              marginBottom: "1.5rem",
              transition: 'color 0.3s ease',
            }}
          >
            Developed user interface for a front-end web application that tracks
            SpaceX's past and future space launches. Technologies used include
            JavaScript, HTML, and CSS SpaceX API, Bootstrap.
          </p>

          <div
            className="site-links"
            style={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button
              onClick={() =>
                window.open(
                  "https://laughing-rosalind-85b6a0.netlify.app/index.html"
                )
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                backgroundColor: "#453737",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#5a4a4a";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#453737";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <OpenInNewSharpIcon fontSize="small" /> Visit Site
            </button>

            <button
              onClick={() =>
                window.open("https://github.com/logancooper/SpaceXFanSite")
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                backgroundColor: "#453737",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.95rem",
                fontWeight: "500",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#5a4a4a";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#453737";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GitHubIcon fontSize="small" /> GitHub Repo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
