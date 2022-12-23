import "./App.css";
import { useEffect, useState } from "react";
import Solution from "./componenets/Solution";
import { puzzleSolver } from "./PuzzleSolver";

function App() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [puzzleSolution, setPuzzleSolution] = useState([]);
  const [isSolutionFound, setIsSolutionFound] = useState(false);
  const [mathOperation, setMathOperation] = useState("");

  const reset = () => {
    setS1("");
    setS2("");
    setS3("");
    setIsSolutionFound(false);
    setMathOperation("");
  };

  useEffect(() => {
    puzzleSolution.length > 0
      ? setIsSolutionFound(true)
      : setIsSolutionFound(false);
  }, [puzzleSolution]);

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
                  onChange={(e) => {
                    setS1(e.target.value.toUpperCase());
                  }}
                  value={s1}
                />
                <div className="input-style input-group-append mt-1 mb-1">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Math Operation: {mathOperation}
                  </button>

                  <div className="dropdown-menu">
                    <option
                      className={`dropdown-item ${
                        mathOperation === "+" ? "active" : ""
                      }`}
                      onClick={() => setMathOperation("+")}
                    >
                      Addition(+)
                    </option>
                    <option
                      className={`dropdown-item ${
                        mathOperation === "-" ? "active" : ""
                      }`}
                      onClick={() => setMathOperation("-")}
                    >
                      subtraction(-)
                    </option>
                    <option
                      className={`dropdown-item ${
                        mathOperation === "*" ? "active" : ""
                      }`}
                      onClick={() => setMathOperation("*")}
                    >
                      Multiplication(*)
                    </option>
                    <option
                      className={`dropdown-item ${
                        mathOperation === "/" ? "active" : ""
                      }`}
                      onClick={() => setMathOperation("/")}
                    >
                      Division(/)
                    </option>
                  </div>
                </div>

                <input
                  placeholder="2nd combination"
                  type="text"
                  className="input-style form-control mt-1 mb-1"
                  aria-label="Text input with dropdown button"
                  onChange={(e) => {
                    setS2(e.target.value.toUpperCase());
                  }}
                  value={s2}
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
                  onChange={(e) => {
                    setS3(e.target.value.toUpperCase());
                  }}
                  value={s3}
                />
              </div>
            </div>
            <div className="col-12 mb-5 mt-3 d-flex justify-content-center">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (mathOperation === "") {
                    alert("Must select a math operation");
                  } else if (s1 === "") {
                    alert("Missing an input for the first combination");
                  } else if (s2 === "") {
                    alert("Missing an input for the second combination");
                  } else if (s3 === "") {
                    alert("Missing an input for the third combination");
                  } else {
                    setPuzzleSolution(puzzleSolver(s1, s2, s3, mathOperation));

                    // reset();
                  }
                }}
              >
                <img
                  src="../iconcalculator-icon.svg"
                  className="mr-5 ml-5"
                  alt=""
                />
              </button>
            </div>

            {isSolutionFound ? (
              <div className="col-12">
                <h5 className="mt-3">
                  {puzzleSolution.length} Solution
                  {puzzleSolution.length <= 1 ? "" : "s"} Found:
                </h5>
                <div className="d-flex flex-wrap justify-content-between">
                  {puzzleSolution.map((solution, index) => {
                    return <Solution numbers={solution} key={index + 1} />;
                  })}
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
