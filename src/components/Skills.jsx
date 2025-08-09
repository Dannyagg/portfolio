import React from "react";
import aplus from "../images/aplus.png";
import netplus from "../images/netplus.png";
import securityplus from "../images/securityplus.png";
import itil4 from "../images/ITIL4.png";
import ccna from "../images/CCNA.jpg";
import resume2023 from "../resume/resume2003.pdf";
import Button from "react-bootstrap/Button";

export default function Skills() {
  return (
    <>
      <div
        className="SkillsContainer"
        style={{
          display: "flexStart",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          //height: '100vh',
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>

        <div
          className="SkillsIcons"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "20px",
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
            }}
          >
            <img src={ccna} alt="comptia-nplus" width="100" className="Certs" />

            <Button
              className="verify"
              style={{
                color: "white",
                border: "none",
                borderRadius: "25px",
              }}
              variant="outline-primary"
              href="https://www.credly.com/badges/3012c4e6-ecc0-444c-ac62-e3dcb7e08b5a/public_url"
            >
              Verify on credly.com
            </Button>
          </div>

          {/* Security plus */}

          {/*Net plus */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <img
              src={netplus}
              alt="comptia-nplus"
              width="110"
              className="Certs"
            />

            <Button
              className="verify"
              style={{
                color: "white",
                border: "none",
                borderRadius: "25px",
              }}
              variant="outline-primary"
              href="https://www.credly.com/earner/earned/badge/7f28163b-1219-4e2e-87f8-0a05b410cc8d"
              target="_blank"
              rel="noopener"
            >
              Verify on credly.com
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
            }}
          >
            <img
              src={securityplus}
              alt="comptia-aplus"
              width="110"
              className="Certs"
            />

            <Button
              className="verify"
              style={{
                color: "white",
                border: "none",
                borderRadius: "25px",
              }}
              variant="outline-primary"
              href="https://www.credly.com/badges/c81d53d0-28f5-46d4-9d6d-3d4737040ec1/public_url"
              target="_blank"
              rel="noopener"
            >
              Verify on credly.com
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
            }}
          >
            <img
              src={aplus}
              alt="comptia-aplus"
              width="110"
              className="Certs"
            />

            <Button
              className="verify"
              style={{
                color: "white",
                border: "none",
                borderRadius: "25px",
              }}
              variant="outline-primary"
              href="https://www.credly.com/badges/316e572c-a299-416e-b155-25314a859555/public_url"
              target="_blank"
              rel="noopener"
            >
              Verify on credly.com
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
            }}
          >
            <img src={itil4} alt="itil" width="100" className="Certs" />

            <Button
              className="verify"
              style={{
                color: "white",
                border: "none",
                borderRadius: "25px",
              }}
              variant="outline-primary"
              href="https://candidate.peoplecert.org/ReportsSORLink.aspx?argType=1&id=DCB031175DAEA1E2B4060EA5547DC2B5E0C0BB173B0B89D284EAB800C06EC8FCE737AF8D3B2B34454455E845AB0670964FEA50F8D538687D"
              target="_blank"
              rel="noopener"
            >
              Verify on PeopleCert
            </Button>
          </div>
        </div>
        <hr />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            border: "none",
          }}
        >
          <h6
            style={{
              textShadow: "4px 4px 4px #000a06",
            }}
          >
            Application Programming Skills
          </h6>
        </div>
        <div
          className="SkillsIcons"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
          <i class="devicon-nodejs-plain colored"></i>
          <i class="devicon-express-original-wordmark colored"></i>
          <i class="devicon-git-plain-wordmark colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-bootstrap-plain-wordmark colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i>
        </div>

        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>

        {/* Resume */}

        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>

        <div
          className="SkillsIcons"
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "20px",
            // border: '1px solid red'
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              borderBottom: "2px solid white",
              borderRight: "2px solid white",
              borderRadius: "10px",
            }}
          >
            <Button
              target="_blank"
              className="resume"
              style={{
                color: "white",
                border: "none",
                borderRadius: "25px",
              }}
              href={resume2023}
              _blank
            >
              {" "}
              View my resume
            </Button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
}
