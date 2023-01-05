import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import threejsLogo from "../assets/threejs.svg";
import "./home.css";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={threejsLogo} className="logoThree" alt="Threejs logo" />
          </li>
          <li>
            <Link to={{ pathname: "/" }}>Home</Link>
          </li>
          <li>
            <Link to={{ pathname: "basic" }}>Basics</Link>
          </li>
          <li>
            <Link to={{ pathname: "classic_techniques" }}>
              Classic Techniques
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "examples" }}>Examples</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
