import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 12,
    duration: 10,
  });
  const validDuration = userInput.duration >= 1;
  function handleUserInput(inputIdenitifier, newValue) {
    setUserInput((prevUserInputState) => {
      return {
        ...prevUserInputState,
        [inputIdenitifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header></Header>;
      <UserInput whenChange={handleUserInput} userInput={userInput}></UserInput>
      {validDuration && <Results inputObject={userInput}></Results>}
      {!validDuration && <p className="center"> Enter a positive Duration </p>}
    </>
  );
}

export default App;
