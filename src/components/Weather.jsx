import React from "react";
import ReactPlayer from "react-player";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Weather() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(241, 233, 233, 0.411) 0px 0px 0px 1px inset",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "30rem",
            aspectRatio: "16/9",
            backgroundSize: "auto",
          }}
        >
          <ReactPlayer
            src="https://youtu.be/M9i57csh6Es"
            controls={true}
            preload={true}
            playing={false}
            volume={1}
            muted={true}
            pip={true}
            stopOnUnmount={false}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "40rem",
              aspectRatio: "16/9",
              backgroundSize: "auto",
            }}
          />
        </div>

        <div
          className="description-container"
          style={{
            flex: 1,
            backgroundColor: "white",
            padding: "10px",
            maxWidth: "40rem",
          }}
        >
          <h3> Weather Watch</h3>

          <p>
            A weather application developed in ReactJS, CSS, and HTML. The
            application allows users to search and retrieve weekly weather
            information by zip code within the United States. Accomplished all
            tasks needed to successfully develop and deploy the weather watch
            application.
          </p>

          <div
            className="site-links"
            style={{
              display: "flex",
              flexFlow: "row-wrap",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div>
              <OpenInNewSharpIcon
                onClick={() =>
                  window.open("https://myweatherwatch.netlify.app/")
                }
              />{" "}
              website
            </div>

            <div>
              <GitHubIcon
                onClick={() =>
                  window.open("https://github.com/Dannyagg/weatherwatch")
                }
              />{" "}
              github repo
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
