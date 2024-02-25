import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Single Page</h1>
          <p>A single page application which is my first React Application</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            This is my first React application. It is a simple single page web
            application. Further I will make more complex application day by
            day.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who am I?</h1>
          <p>
            This is S. M. Mahmudul Hasan Rudra recently completed undergrad from
            BRAC University and eager to embark on the dynamic Job Industry. I
            think my analytical skills will have a great impact in you sector.
            <br />
            During my undergraduation I have done a lot of projects which is
            based on React JS. Along with this projects I have also worked using
            Java, Python, C++, github. I hope these technical skills will help
            me to give the best technical support to your industry.
            <br />
            In BRAC University, I served BRAC University Entrepreneurship
            Development Forum as Assistant Director. During this time, I have
            conducted two big events which was with the CEO of Nagad and an
            Intra Case Competition where my team was the runner up.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
