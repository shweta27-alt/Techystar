import React from "react";
import vg from "../assests/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
              <div style={{animationDelay: "0.3s"}}>
                <AiFillGoogleCircle/>
                <p>Google</p>
              </div>

              <div style={{animationDelay: "0.5s"}}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
              </div>

              <div style={{animationDelay: "0.7s"}}>
                <AiFillYoutube/>
                <p>Youtube</p>
              </div>

              <div style={{animationDelay: "0.9s"}}>
                <AiFillInstagram/>
                <p>Instagram</p>
              </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
