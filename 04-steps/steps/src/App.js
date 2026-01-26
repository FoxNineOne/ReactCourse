import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}

      <StepMessage step={2}>
        <p> Read child prop</p>
        <p>🦊</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Jiji" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); //Always best use callback when wanting to update state, based on current value of that state
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // This works but it is bad practise
    // setTest({ name: "Jiji" });
  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColour="#eb8901"
                textColour="#fff"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              textColour="#fff"
              bgColour="#7950f2"
              onClick={handlePrevious}
            >
              <span>⏮️</span> Previous
            </Button>
            <Button bgColour="#7950f2" TextColour="#fff" onClick={handleNext}>
              Next <span>⏭️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} </h3>
      {children}
    </div>
  );
}

function Button({ textColour, bgColour, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColour, Color: textColour }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
