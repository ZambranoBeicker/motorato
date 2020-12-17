import { useState } from "react";
import { Wrapper, WizardButton } from "./styles.jsx";

export default function Wizard({ steps }) {
  const [stepIndex, setStepIndex] = useState(0);

  return (
    <>
      <Wrapper>
        {steps[stepIndex]}
        <WizardButton setStepIndex={setStepIndex} stepsLenght={steps.length} />
      </Wrapper>
    </>
  );
}
