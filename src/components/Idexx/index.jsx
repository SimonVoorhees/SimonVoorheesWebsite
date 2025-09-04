import React, { useState } from "react";
import "./index.scss";
//import IdexxLogo from "../../assets/IDXX.png";

export const Idexx = () => {
  const [hideParagraph, setHideParagraph] = useState(true);
  const readMoreOnClick = () => {
    setHideParagraph(!hideParagraph);
  };
  return (
    <section className="Idexx">
      <div className="Idexx_TextBlock">
        <h2 className="Idexx_Title">Idexx</h2>
        <h2 className="Idexx_Summary">
          Idexx is a global leader in pet healthcare innovation with a wide variety of products to help veterinarians work with pets and manage information in their practice.
          I worked for Idexx as a contract application developer. From November 2023 to December 2024 I built out an application to replace an internal administrative app using React, Next.js, and Tailwind.css.
        </h2>
        {hideParagraph ? (
          ""
        ) : (
          <p className="Idexx_Paragraph">
          I was brought in to finish a hackathon project built using React, Next.js, and Tailwind.css.
          The app was inteded to replace an existing angular.js app used internally to edit data.
          When I started there was a homepage, a few functional pages, and a basic router structure.
          Hackathon projects have a lot of different developers using new technologies which can lead to a wide variety of styles and solutions to similar problems.
          An important part of the project was setting a consistent structure and style.
          <br/>
          <br />
          I participated in scrum meetings with the team of back end developers who started the project.
          This meant participating in the agile process, receiving direct feedback,
          and using their QA resources while they continued their work on other tasks.
          The developers on that team couldn't allocate much time to the application I was working on.
          As a result, I had to make some small edits to the existing APIs in the Java Spring backend and use Next.js server actions.
          <br /><br/>
          I found this work to be very rewarding. For each story I had to learn what the component did in the original app and ask the team if there were any changes I should make for functionality or convenience.
          Working directly with the end users in that way was a new experience for me.
          The back end work I had to do was very small but I learned a lot about back end development through that work and being on the back end team.
          I really liked the people on that team. they were all very passionate about their work and supportive of everyone on the team, including me.
          </p>
        )}
        <button className="Idexx_ReadMore" onClick={readMoreOnClick}>
          {hideParagraph ? "Read more" : "Hide"}
        </button>
      </div>
      <img
        className="Idexx_Logo"
        src={"IDXX.png"}
        alt="Idexx logo"
      />
    </section>
  );
};
