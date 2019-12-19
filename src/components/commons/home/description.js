import React from "react"
import "./home.scss"
import PairProgramming from "../../../images/pairProgramming.svg"

const HomeDescription = (props) => {
  return (
    <div style={{ backgroundColor: "rebeccapurple", color: "white" }}>
      <div className="homeDescriptionWrapper">
        <div className="descriptionText">
          <h3>{props.title}</h3>
           {props.content}  
        </div>
        <div className="imageText">
          <center>
            <img src={PairProgramming} alt="Pair Programming" width="400" />
          </center>
        </div>
      </div>
      <div id="wave">
        <div id="wave-dots"></div>
        <div id="wave-dot-2"></div>
        <div id="wave-dot-3">
          <div id="internal-wave-dot"></div>
        </div>
        <div id="wave-dot-4"></div>
        <div id="wave-dot-5"></div>
      </div>
    </div>
  )
}

export default HomeDescription
