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
        <button>basic scene</button>
      </Link>
    </div>
  );
};

export default Basic;
