import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./index.css";

const HomePageContent = () => {
  const getTime = new Date().getHours();
  let greeting;
  let greetingIcon;
  if (getTime >= 5 && getTime < 12) {
    greeting = "Good Morning";
    greetingIcon = "./icons8-sun.gif";
  } else if (getTime >= 12 && getTime < 18) {
    greeting = "Good Afternoon";
    greetingIcon = "./icons8-sun.gif";
  } else {
    greeting = "Good Evening";
    greetingIcon = "./icons8-night.gif";
  }

  const Resume = `${process.env.PUBLIC_URL}/Resume/Resume.pdf`;

  const onclickResume = () => {
    window.open(Resume, "_blank");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="d-lg-flex justify-content-lg-between custom-profile-bg rounded shadow p-3 p-lg-5">
          <div className="col-lg-4 text-center">
            <div>
              <img
                src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1685355397/311431796_1181249342758752_3664529721297008871_n_xxa8d4.jpg"
                alt="profile"
                className="img-fluid profile-logo"
              />
            </div>
            <div className="my-5">
              <TypeAnimation
                sequence={[
                  `Hi ${greeting}`,
                  5000,
                  "Welcome to my portfolio.",
                  5000,
                ]}
                wrapper="span"
                repeat={Infinity}
                style={{
                  fontSize: "1em",
                  display: "inline-block",
                }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <h3>
              Hello {greeting}
              <img src={greetingIcon} alt="Sun" className="greeting-icon" />
            </h3>

            <p>
              This is Ravichandra Kadavakuti
              <span> React.Js Developer</span> located in Andhra Pradesh,
              looking for working around the globe.
            </p>

            <button
              type="button"
              className="btn btn-warning custom-resume-btn"
              onClick={onclickResume}
            >
              Resume
              <i className="fa-solid fa-circle-down ms-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
