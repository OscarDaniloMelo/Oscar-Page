import React from "react";
import "./Styles/Home.css";
import Canvas from "../Components/Canvas";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container_">
          <div className="canvas">
            <Canvas />
          </div>
          <div className="proyectos">
               <h1>proyectos</h1>
          </div>
          <div className="badges">
              <h1>badges</h1>
          </div>
        </div>
        <div className="footer">footer</div>
      </div>
    );
  }
}
export default Home;
