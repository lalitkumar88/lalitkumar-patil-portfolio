import React from "react";

const socials = [
  {
    platform: "linkedin",
    link: "https://www.linkedin.com/in/lalitkumar-m-patil/",
    type: "bi",
    title: "linkedIn",
  },
  {
    platform: "twitter-x",
    link: "https://x.com/LKPatil88",
    type: "bi",
    title: "X",
  },
  {
    platform: "github",
    link: "https://github.com/lalitkumar88",
    type: "bi",
    title: "github",
  },
  {
    iconLink: "https://logo.svgcdn.com/simple-icons/codechef-dark.png",
    link: "https://www.codechef.com/users/lalitkumar88",
    type: "img",
    title: "codechef",
  },
  {
    iconLink: "https://logo.svgcdn.com/simple-icons/codeforces-dark.png",
    link: "https://codeforces.com/profile/lalitkumar88",
    type: "img",
    title: "codeforces",
  },
];
function Social() {
  return (
    <div className="social">
      <h3>My Social Accounts</h3>
      <hr className="customHr" />

      <div className="icons">
        {socials.map((icon, index) => (
          <div className="icon" key={index}>
            <a
              href={icon.link}
              target="_blank"
              rel="noreferrer"
              title={`${icon.title}`}
            >
              {icon.type === "bi" ? (
                <i className={`bi bi-${icon.platform}`} />
              ) : (
                <img
                  src={icon.iconLink}
                  alt="social"
                  title={`${icon.title}`}
                  style={{
                    width: "50px",
                    height: "28px",
                    objectFit: "contain",
                  }}
                />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Social;
