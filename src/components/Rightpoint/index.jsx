import React, { useState } from "react";
import "./index.scss";
import RightpointLogo from "../../assets/rightpoint_logo.jpg";

export const Rightpoint = () => {
  const [hideParagraph, setHideParagraph] = useState(true);
  const readMoreOnClick = () => {
    setHideParagraph(!hideParagraph);
  };
  return (
    <section className="Rightpoint">
      <div className="Rightpoint_TextBlock">
        <h2 className="Rightpoint_Title">Rightpoint</h2>
        <h2 className="Rightpoint_Summary">
          Rightpoint, a Genpact company, is a global total experience leader
          working to create seamless digital experiences driven by data,
          insights, strategy, technology, and design. My work as a consultant
          involved joining client teams and developing components using React
          and Angular.
        </h2>
        <p
          className={`Rightpoint_Paragraph${
            hideParagraph ? "" : "_expanded"
          }`}
        >
          Working as a consultant for Rightpoint meant I was able to grow a lot
          as a developer in a short amount of time. I worked with different
          teams, clients, technologies, and requirements so I was always
          learning and improving.
          <br />
          <br />
          I worked with React and Angular on client projects. I used libraries
          like redux to manage state. Outside of the frameworks I was always
          using HTML and CSS. I learned to pay close attention to accessibility
          issues through the requirements on some of the projects I was on. It
          was a requirement that we meet WCAG standards and that was a
          responsibility shared by the whole team. That meant using semantic
          HTML, using the proper aria tags, testing with a screen reader, and
          checking color contrasts.
          <br />
          <br />I worked at Rightpoint until I was laid off in march 2023. I
          really enjoyed my time at the company and I'm very grateful for the
          chance I was given to learn from so many great developers, designers,
          and project managers.
        </p>
        <button className="Rightpoint_ReadMore" onClick={readMoreOnClick}>
          {hideParagraph ? "Read more" : "Hide"}
        </button>
      </div>
      <img
        className="Rightpoint_Logo"
        src={RightpointLogo}
        alt="Rightpoint logo"
      />
    </section>
  );
};
