import React from "react";
import "./index.scss";

export const Experience = () => {
  return (
    <section className="Experience">
      <div className="Experience_TextBlock">
        <h2 className="Experience_Title">Experience</h2>
        <h2 className="Experience_Paragraph">
          These are some of the Experience I've made over the years. Most of my
          work at Rightpoint is not public knowledge, so my portfolio is
          currently the Experience that are public knowledge and personal
          Experience I've made over the years
        </h2>
        <ul className="Experience_Links">
          <li>
            <h3>Idexx</h3>
            <p>
              Idexx is a global leader in pet healthcare innovation with a wide
              variety of products to help veterinarians work with pets and
              manage information in their practice. I worked for Idexx as a
              contract application developer. From November 2023 to December
              2024 I built out an application to replace an internal
              administrative app using React, Next.js, and Tailwind.css.
            </p>
          </li>
          <li>
            <h3>Rightpoint</h3>
            <p>
              Rightpoint, a Genpact company, is a global total experience leader
              working to create seamless digital experiences driven by data,
              insights, strategy, technology, and design. My work as a
              consultant involved joining client teams and developing components
              using React and Angular.
            </p>
          </li>
          <li>
            <h3>Mass General Hospital for Children</h3>
            <p>
              I worked as a web development intern for Mass General Hospital for
              Children from 2018 to 2019. My responsibilities were to update web
              pages using copy and images given to me by the staff with small edits to improve SEO.
            </p>
          </li>
        </ul>
      </div>
      <div className="Experience_Gradient"/>
    </section>
  );
};
