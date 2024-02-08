import React from "react";
import vg from "../assets/2.webp";
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
    </>
  );
};

export default Home;
