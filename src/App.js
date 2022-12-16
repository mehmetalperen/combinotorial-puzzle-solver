import "./App.css";
import { useEffect, useState } from "react";
import Solution from "./componenets/Solution";

function App() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [isSolutionFound, setIsSolutionFound] = useState(true);
  const [mathOperation, setMathOperation] = useState("+");

  return (
    <div className="App">
      <div className="pt-5 pb-2 mb-5 text-center">
        <h1 className="">COMBINATION PUZZLE SOLVER</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="">
              <h4 className="mt-3">What is it?</h4>
              <p>
                This program solves combinatorial puzzles for summation,
                division, subtraction, and multiplication. <br /> <br /> In a
                summation puzzles, you are given three strings in the the form
                of POT + PAN = BIB; this can also be in division, subtraction,
                and multiplication. Each letter in the inputs represent a number
                from 0 to 9. The goal is to find out whether it is possible to
                assign a distinct digit to each letter in the equation that
                would make the input equation true. For example, if the puzzle
                is POT + PAN = BIB, the mapping P:4, O:8, T:7, A:5, N:2, B:9,
                I:3 will solve this, as 487 + 452 = 939. <br /> <br /> There are
                often multiple solutions to a given summation puzzle and this
                program will list out all the possible solutions for the given
                input. The Combinatorial Puzzle Solver uses recursion to find
                permutations of letter-digit pairings, then it checks the
                validity of the map of permutations.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 border-left">
            <div className="">
              <h4 className="mt-3">Try it!</h4>

              <div className="input-style input-group pt-1 pb-1 pl-2 pr-2">
                <input
                  placeholder="1st combination"
                  type="text"
                  className="input-style form-control mt-1 mb-1"
                  aria-label="Text input with dropdown button"
                />
                <div className="input-style input-group-append mt-1 mb-1">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Math Operation
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Addition(+)
                    </a>
                    <a className="dropdown-item" href="#">
                      Subtraction(-)
                    </a>
                    <a className="dropdown-item" href="#">
                      Division(/)
                    </a>
                    <a className="dropdown-item" href="#">
                      Multiplication(*)
                    </a>
                  </div>
                </div>

                <input
                  placeholder="2nd combination"
                  type="text"
                  className="input-style form-control mt-1 mb-1"
                  aria-label="Text input with dropdown button"
                />

                <div className="input-group-append mt-1 mb-1">
                  <button className="btn btn-secondary disabled" type="button">
                    =
                  </button>
                </div>

                <input
                  placeholder="3rd combination"
                  type="text"
                  className="input-style form-control mt-1 mb-1"
                  aria-label="Text input with dropdown button"
                />
              </div>
            </div>
            <div className="col-12 m-3 d-flex justify-content-center">
              <button className="btn btn-outline-secondary" type="submit">
                <img src="../iconcalculator-icon.svg" alt="" />
              </button>
            </div>

            {isSolutionFound ? (
              <div className="col-12">
                <h5 className="mt-3">## Solutions Found:</h5>
                <div className="d-flex flex-wrap justify-content-between">
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                  <Solution />
                </div>
              </div>
            ) : (
              <div className="col-12">
                <h5 className="mt-3">No Solution Found</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
