import React from "react"
import "./home.scss"
// import Image from "../../image"
import PairProgramming from "../../../images/pairProgramming.svg"

const HomeDescription = () => {
  return (
    <div style={{ backgroundColor: "rebeccapurple", color: "white" }}>
      <div className="homeDescriptionWrapper">
        <div className="descriptionText">
          <h3>Focused on Knowledge Sharing</h3>
          <p>
            An <b>Online mentorship 🤝 programme </b> focused on sharing tech Knowledge between mentor and mentees. 
            We believe in the Knowledge we have and would like it to benefit others too. We currently focus on Web development(backend & Frontend).
            Check back for other areas in the near future 🚀.  
          </p>
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
