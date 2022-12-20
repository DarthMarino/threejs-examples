import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
export default function Home() {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Three JS Training</h1>
      <div className="card">
        <Link to="/basic">
          <button>Basic Module</button>
        </Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
