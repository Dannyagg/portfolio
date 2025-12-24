import React from "react";
import aplus from "../images/aplus.png";
import netplus from "../images/netplus.png";
import securityplus from "../images/securityplus.png";
import itil4 from "../images/ITIL4.png";
import ccna from "../images/CCNA.jpg";
import resume2023 from "../resume/resume2003.pdf";
import Button from "react-bootstrap/Button";
import { useTheme } from "../context/ThemeContext";

export default function Skills() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className="SkillsContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          minHeight: "auto",
          backgroundColor: theme.background,
          transition: 'background-color 0.3s ease',
        }}
      >
        {/* Page Title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: theme.primaryText,
              margin: "0 0 0.5rem 0",
              transition: 'color 0.3s ease',
            }}
          >
            Certifications & Skills
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: theme.secondaryText,
              margin: "0",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              transition: 'color 0.3s ease',
            }}
          >
            Industry-recognized certifications and technical expertise
          </p>
        </div>

        {/* Certifications Section */}
        <div
          style={{
            width: "100%",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              color: theme.primaryText,
              textAlign: "center",
              marginBottom: "2rem",
              transition: 'color 0.3s ease',
            }}
          >
            Professional Certifications
          </h2>

          <div
            className="SkillsIcons"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* CCNA */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2.5rem",
                backgroundColor: theme.cardBackground,
                borderRadius: "16px",
                boxShadow: `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`;
              }}
            >
              <img src={ccna} alt="CCNA" width="100" className="Certs" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: theme.primaryText,
                  margin: "0.5rem 0",
                  transition: 'color 0.3s ease',
                }}
              >
                CCNA
              </h3>
              <Button
                className="verify"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#453737",
                }}
                href="https://www.credly.com/badges/3012c4e6-ecc0-444c-ac62-e3dcb7e08b5a/public_url"
                target="_blank"
                rel="noopener"
              >
                Verify
              </Button>
            </div>

            {/* Net plus */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2.5rem",
                backgroundColor: theme.cardBackground,
                borderRadius: "16px",
                boxShadow: `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`;
              }}
            >
              <img src={netplus} alt="CompTIA Network+" width="110" className="Certs" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: theme.primaryText,
                  margin: "0.5rem 0",
                  transition: 'color 0.3s ease',
                }}
              >
                Network+
              </h3>
              <Button
                className="verify"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#453737",
                }}
                href="https://www.credly.com/earner/earned/badge/7f28163b-1219-4e2e-87f8-0a05b410cc8d"
                target="_blank"
                rel="noopener"
              >
                Verify
              </Button>
            </div>

            {/* Security plus */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2.5rem",
                backgroundColor: theme.cardBackground,
                borderRadius: "16px",
                boxShadow: `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`;
              }}
            >
              <img src={securityplus} alt="CompTIA Security+" width="110" className="Certs" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: theme.primaryText,
                  margin: "0.5rem 0",
                  transition: 'color 0.3s ease',
                }}
              >
                Security+
              </h3>
              <Button
                className="verify"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#453737",
                }}
                href="https://www.credly.com/badges/c81d53d0-28f5-46d4-9d6d-3d4737040ec1/public_url"
                target="_blank"
                rel="noopener"
              >
                Verify
              </Button>
            </div>

            {/* A plus */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2.5rem",
                backgroundColor: theme.cardBackground,
                borderRadius: "16px",
                boxShadow: `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`;
              }}
            >
              <img src={aplus} alt="CompTIA A+" width="110" className="Certs" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: theme.primaryText,
                  margin: "0.5rem 0",
                  transition: 'color 0.3s ease',
                }}
              >
                A+
              </h3>
              <Button
                className="verify"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#453737",
                }}
                href="https://www.credly.com/badges/316e572c-a299-416e-b155-25314a859555/public_url"
                target="_blank"
                rel="noopener"
              >
                Verify
              </Button>
            </div>

            {/* ITIL */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2.5rem",
                backgroundColor: theme.cardBackground,
                borderRadius: "16px",
                boxShadow: `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`;
              }}
            >
              <img src={itil4} alt="ITIL 4" width="100" className="Certs" />
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: theme.primaryText,
                  margin: "0.5rem 0",
                  transition: 'color 0.3s ease',
                }}
              >
                ITIL 4
              </h3>
              <Button
                className="verify"
                style={{
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  backgroundColor: "#453737",
                }}
                href="https://candidate.peoplecert.org/ReportsSORLink.aspx?argType=1&id=DCB031175DAEA1E2B4060EA5547DC2B5E0C0BB173B0B89D284EAB800C06EC8FCE737AF8D3B2B34454455E845AB0670964FEA50F8D538687D"
                target="_blank"
                rel="noopener"
              >
                Verify
              </Button>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div
          style={{
            width: "100%",
            marginBottom: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "600",
              color: theme.primaryText,
              textAlign: "center",
              marginBottom: "2rem",
              transition: 'color 0.3s ease',
            }}
          >
            Technical Skills
          </h2>

          <div
            className="SkillsIcons"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
              maxWidth: "1000px",
              margin: "0 auto",
              fontSize: "4rem",
            }}
          >
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-react-original-wordmark colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
            <i className="devicon-express-original-wordmark colored"></i>
            <i className="devicon-git-plain-wordmark colored"></i>
            <i className="devicon-html5-plain-wordmark colored"></i>
            <i className="devicon-css3-plain-wordmark colored"></i>
            <i className="devicon-bootstrap-plain-wordmark colored"></i>
            <i className="devicon-postgresql-plain-wordmark colored"></i>
          </div>
        </div>

        {/* Resume Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            padding: "2.5rem",
            backgroundColor: theme.cardBackground,
            borderRadius: "16px",
            boxShadow: `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`,
            marginTop: "2rem",
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
              `0 10px 40px ${theme.shadowColor}, 0 0 0 1px ${theme.cardBorder}`;
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: theme.primaryText,
              margin: "0",
              transition: 'color 0.3s ease',
            }}
          >
            Download My Resume
          </h3>
          <Button
            target="_blank"
            className="resume"
            style={{
              color: "white",
              border: "none",
              borderRadius: "25px",
              backgroundColor: "#453737",
              padding: "10px 30px",
              fontSize: "1rem",
            }}
            href={resume2023}
          >
            View Resume
          </Button>
        </div>
      </div>
    </>
  );
}
