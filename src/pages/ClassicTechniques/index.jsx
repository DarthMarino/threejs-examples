import { Link } from "react-router-dom";

const ClassicTechniques = () => {
  return (
    <div>
      <h1>Classic Techniques</h1>
      <Link
        to={{
          pathname: "/classic_techniques/01_lights",
        }}
      >
        <button>Lights and Physics</button>
      </Link>
      <Link
        to={{
          pathname: "/classic_techniques/02_controls",
        }}
      >
        <button>Controls and labels</button>
      </Link>
    </div>
  );
};

export default ClassicTechniques;
