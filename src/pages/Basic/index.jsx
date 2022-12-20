import { Link } from "react-router-dom";

const Basic = () => {
  return (
    <div>
      <h1>Basic Modules</h1>
      <Link
        to={{
          pathname: "/basic/01_basic_scene",
        }}
      >
        <button>Basic Scene</button>
      </Link>
      <Link
        to={{
          pathname: "/basic/02_basic_transform",
        }}
      >
        <button>Basic Transform</button>
      </Link>
      <Link
        to={{
          pathname: "/basic/03_basic_controls",
        }}
      >
        <button>Basic Controls</button>
      </Link>
    </div>
  );
};

export default Basic;
