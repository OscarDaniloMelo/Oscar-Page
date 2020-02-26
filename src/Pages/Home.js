import React from "react";
import "./Styles/Home.css";
import Canvas from "../Components/Canvas";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="container_home">
          <div className="canvas">
            <Canvas />
          </div>
          <div className="proyectos_home">
            <Link className="link" to="/proyectos">
               Proyectos
            </Link>
          </div>
          <div className="badges_home">
            <Link className="link" to="/badges">
              Badges
            </Link>
          </div>
        </div>
        <div className="footer">footer</div>
      </div>
    );
  }
}
export default Home;
