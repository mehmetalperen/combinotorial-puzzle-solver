import "./App.css";
import { useEffect, useState } from "react";
import Solution from "./componenets/Solution";
import { puzzleSolver } from "./PuzzleSolver";

/*
TODOS:
loading animation when algoritm runs
*/

function App() {
  const [s1, setS1] = useState("");
  const [s2, setS2] = useState("");
  const [s3, setS3] = useState("");
  const [puzzleSolution, setPuzzleSolution] = useState([]);
  const [isSolutionFound, setIsSolutionFound] = useState(false);
  const [mathOperation, setMathOperation] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loadingSolution, setLoadingSolution] = useState(false);

  const reset = () => {
    setS1("");
    setS2("");
    setS3("");
    setIsSolutionFound(false);
    setMathOperation("");
    setPuzzleSolution([]);
    setIsSolutionFound(false);
    setAlertMsg("");
    setShowAlert(false);
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
                division, subtraction, and multiplication. <br /> <br /> In
                combination puzzles, you are given three strings in the form of
                SEND + MORE = MONEY; this can also be in division, subtraction,
                and multiplication. Each letter in the inputs represents a
                number from 0 to 9. The goal is to find out whether it is
                possible to assign a distinct digit to each letter in the
                equation that would make the input equation true. For example,
                if the puzzle is SEND + MORE = MONEY, the mapping S:2, E:8, N:1,
                D:7, M:0, O:3, R: 6, Y:5 will solve this, as 2817 + 0368 =
                03185.
                <br /> <br /> There are often multiple solutions to a given
                summation puzzle and this program will list out all the possible
                solutions for the given input. The Combinatorial Puzzle Solver
                uses recursion to find permutations of letter-digit pairings,
                then it checks the validity of the map of permutations.
              </p>
            </div>

            <div id="contact-section-id" className="contact">
              <div className="section-divider" />

              <div className="contact-wrapper">
                <a
                  href="mailto:mnadi@uci.edu"
                  className="contact-href"
                  data-splitbee-event="Button Click"
                  data-splitbee-event-planType="email btn"
                >
                  <img src="email 1.svg" alt="" className="contact-icon" />
                </a>
                <a
                  data-splitbee-event="Button Click"
                  data-splitbee-event-planType="linkedin btn"
                  href="https://www.linkedin.com/in/mehmet-nadi-03372a1b1/"
                  target="_blank"
                  className="contact-href"
                >
                  <img src="linkedin 1.svg" alt="" className="contact-icon" />
                </a>
                <a
                  data-splitbee-event="Button Click"
                  data-splitbee-event-planType="github btn"
                  href="https://github.com/mehmetalperen"
                  target="_blank"
                  className="contact-href"
                >
                  <img src="github.svg" alt="" className="contact-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 border-left">
            <div className="">
              <h4 className="mt-3">Try it!</h4>
              {showAlert ? (
                <div class="alert alert-danger" role="alert">
                  {alertMsg}
                  <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAlert(false);
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : (
                <div />
              )}

              <div className="input-style input-group pt-1 pb-1 pl-2 pr-2">
                <input
                  placeholder="1st combination"
                  type="text"
                  className="input-style form-control mt-1 mb-1"
                  aria-label="Text input with dropdown button"
                  onChange={(e) => {
                    setS1(e.target.value.toUpperCase().replace(/\s/g, ""));
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
                    setS2(e.target.value.toUpperCase().replace(/\s/g, ""));
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
                    setS3(e.target.value.toUpperCase().replace(/\s/g, ""));
                  }}
                  value={s3}
                />
              </div>
            </div>
            <div className="col-12 mb-5 mt-3 d-flex justify-content-center">
              <button
                className="mr-3 ml-3 btn btn-outline-secondary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  if (s1 === "") {
                    setAlertMsg("Missing an input for the first combination");
                    setShowAlert(true);
                  } else if (mathOperation === "") {
                    setAlertMsg("Must select a math operation");
                    setShowAlert(true);
                  } else if (s2 === "") {
                    setAlertMsg("Missing an input for the second combination");
                    setShowAlert(true);
                  } else if (s3 === "") {
                    setAlertMsg("Missing an input for the third combination");
                    setShowAlert(true);
                  } else {
                    setAlertMsg("");
                    setShowAlert(false);
                    setLoadingSolution(true);
                    setTimeout(() => {
                      setPuzzleSolution(
                        puzzleSolver(s1, s2, s3, mathOperation)
                      );
                      setLoadingSolution(false);
                    }, 1000);
                  }
                }}
              >
                <img
                  src="../iconcalculator-icon.svg"
                  className="mr-5 ml-5"
                  alt=""
                />
              </button>
              <button
                className="mr-3 ml-3 btn btn-outline-secondary"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  reset();
                }}
              >
                <img src="../trash-2.svg" className="mr-5 ml-5" alt="" />
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
            {loadingSolution ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
