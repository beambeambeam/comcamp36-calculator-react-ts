import { useState } from "react";
import Key from "./key";

// Define calculator keys
const keys = [
  "AC",
  "C",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  ".",
  "0",
  "EQUALS",
];

const Calculator = () => {
  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState("");
  const maxLimit = 15;

  const calculateResult = () => {
    if (display.length === 0) {
      setDisplay("");
      return;
    }

    try {
      const calcResult = parseFloat(eval(display).toFixed(3));
      // TODO: ?
      setShowResult(true);
    } catch {
      // TODO: if error then?
    }
  };

  const handleButtonClick = (value: string) => {
    setShowResult(false);

    switch (value) {
      case "AC":
        // TODO: ?
        break;
      case "C":
        setDisplay(display.slice(0, -1));
        break;
      case "EQUALS":
        //TODO: ?
        break;
      default:
        handleInput(value);
    }
  };

  const handleInput = (value: string) => {
    if (display.length >= maxLimit) {
      alert(`Maximum characters allowed: ${maxLimit}`);
      return;
    }

    if (
      isOperator(value) &&
      (display === "" || isOperator(display.slice(-1)))
    ) {
      return;
    }

    setDisplay(display + value);
  };

  const isOperator = (char: string): boolean => {
    return ["*", "/", "%"].includes(char);
  };

  const operationClass =
    "text-[1.2rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255,255,255,0.5)] justify-end";
  const resultClass = "text-[1.7rem]";

  return (
    <div className="min-w-[320px] bg-black flex flex-col gap-4 p-4">
      <div className="overflow-x-auto bg-[#141414] min-h-[100px] flex items-end justify-end flex-col p-4">
        <div
          className={`${showResult ? resultClass : operationClass} text-white`}
        >
          x
        </div>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]">
        {keys.map((item, index) => (
          <Key
            // TODO: fix what label?
            label={"X"}
            key={index}
            keyClass={item === "EQUALS" ? "equals" : ""}
            onButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
