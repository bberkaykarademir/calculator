import React, { useState } from "react";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const addToText = (val) => {
    setText((text) => [...text, val]);
  };
  const clear = () => {
    setText("");
    setResult("");
  };

  const calculate = () => {
    setText("");
    setResult(math.evaluate(text.join("")));
  };

  const del = () => {
    setText(text.slice(0, text.length - 1));
  };
  return (
    <div className="calculator">
      <div className="output">
        <div className="text">{text}</div>
        <div className="result">{result}</div>
      </div>
      <button
        onClick={() => {
          clear();
        }}
        className="span-two"
      >
        AC
      </button>
      <button
        onClick={() => {
          del();
        }}
      >
        DEL
      </button>
      <button
        onClick={() => {
          addToText("/");
        }}
      >
        ÷
      </button>
      <button
        onClick={() => {
          addToText("1");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          addToText("2");
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          addToText("3");
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          addToText("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          addToText("4");
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          addToText("5");
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          addToText("6");
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          addToText("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          addToText("7");
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          addToText("8");
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          addToText("9");
        }}
      >
        9
      </button>
      <button
        onClick={() => {
          addToText("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          addToText(".");
        }}
      >
        .
      </button>
      <button
        onClick={() => {
          addToText("0");
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          calculate();
        }}
        className="span-two"
      >
        =
      </button>
    </div>
  );
};

export default App;
