import React, { useState } from "react";
import Page1 from '../../Pages/Page1'
import Page2 from '../../Pages/Page2'
import Page3 from '../../Pages/Page3'
import Page4 from '../../Pages/Page4'
import './Home.css'
import Footer from '../Footer/Footer'

const Home = () => {
  const [participants, setParticipants] = useState("1");
  return (
    <div>
      <div className="navbar-position">
        <div>
          <img
            src="https://choira.io/static/media/choria.96439620.svg"
            alt=""
          ></img>
        </div>
        <div className="heading">Friday Night 2AM</div>
        <div>
        <select
          name="participants"
          className="dropdown-button"
          onChange={(e) => {
            setParticipants(e.target.value);
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="invite-button">invite</button>
        </div>
        
      </div>
      <div className="homeSection-position">
        {participants === "1" ? (
          <Page1 />
        ) : participants === "2" ? (
          <Page2 />
        ) : participants === "3" ? (
          <Page3 />
        ) : participants === "4" && (
          <Page4 />
        )}
      </div>
      <Footer />

    </div>
  )
}

export default Home