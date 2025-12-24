import React from "react";
import me2 from "../images/me2.jpg";
import Email from "./Email";
import { useTheme } from "../context/ThemeContext";

export default function About() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className="AboutWrapper"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: theme.background,
          transition: 'background-color 0.3s ease',
        }}
      >
        <div className="about-photo">
          <img
            src={me2}
            alt="Daniel Agbenu"
            style={{
              width: "20rem",
              height: "20rem",
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow:
                "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 30px 80px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.5) inset";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5) inset";
            }}
          />
        </div>

        <div
          className="about-message"
          style={{
            width: "clamp(300px, 90%, 38rem)",
            padding: "2.5rem",
            borderRadius: "16px",
            backgroundColor: theme.cardBackground,
            color: theme.primaryText,
            boxShadow:
              `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
            transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.8)";
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              margin: "0 0 0.5rem 0",
              color: theme.primaryText,
              letterSpacing: "-0.5px",
            }}
          >
            Daniel Agbenu
          </h2>

          <h6
            style={{
              fontSize: "1.35rem",
              fontWeight: "700",
              color: theme.primaryText,
              margin: "0.5rem 0",
              letterSpacing: "0.5px",
            }}
          >
            IT Networking | Cybersecurity
          </h6>

          <h6
            style={{
              fontSize: "1.05rem",
              fontWeight: "600",
              color: theme.secondaryText,
              margin: "0.5rem 0 1.5rem 0",
              letterSpacing: "0.3px",
            }}
          >
            CCNA | CompTIA Net+, Sec+, A+ | ITIL4 Foundation Certified
          </h6>

          <hr style={{ borderColor: theme.dividerColor }} />

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              color: theme.primaryText,
              margin: "1.5rem 0",
              fontWeight: "500",
            }}
          >
            Information Technology professional with a passion for innovation
            and continuous learning. My goal is to implement cutting-edge
            technology solutions to enhance and safeguard IT infrastructure.
          </p>

          <hr style={{ borderColor: theme.dividerColor }} />

          <div
            className="contact-email"
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <Email />
          </div>
        </div>
      </div>
    </>
  );
}
