import { Link } from "react-router-dom";

const Examples = () => {
  return (
    <div>
      <h1>Examples</h1>
      <Link
        to={{
          pathname: "/examples/01_portal",
        }}
      >
        <button>The Portal</button>
      </Link>
    </div>
  );
};

export default Examples;
