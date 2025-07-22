import { useState } from "react";

function Assignment2() {
  const [counter, setCounter] = useState(0);

  return (
    <div
      className="d-flex flex-column align-items-center mt-5"
      id="counter-container"
    >
      <h1 className="title">Counter</h1>
      <div className="card shadow-lg mt-3" style={{ width: "18rem" }}>
        <div className="card-body d-flex flex-row justify-content-between align-items-center">
          <button
            className="btn btn-primary"
            onClick={() => setCounter(counter - 1)}
          >
            -
          </button>
          <h1 classNameName="counter-display">{counter}</h1>
          <button
            className="btn btn-primary"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button
            className="btn btn-primary flex-grow-1"
            onClick={() => setCounter(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assignment2;
