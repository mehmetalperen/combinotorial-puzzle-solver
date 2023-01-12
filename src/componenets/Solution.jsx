import React from "react";
import "../App.css";

export default function Solution(probs) {
  const [num1, num2, num3] = probs.numbers;
  const operation = probs.mathOperation;

  return (
    <div className="mr-5 mb-2">
      → {num1} {operation} {num2} = {num3}
    </div>
  );
}
