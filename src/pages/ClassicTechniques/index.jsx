import { Link } from "react-router-dom";

const ClassicTechniques = () => {
  return (
    <div>
      <h1>Basic Modules</h1>
      <Link
        to={{
          pathname: "/classic_techniques/01_lights",
        }}
      >
        <button>Lights and Physics</button>
      </Link>
    </div>
  );
};

export default ClassicTechniques;
