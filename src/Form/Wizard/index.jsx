import { useState } from "react";
import { Wrapper, WizardButton } from "./styles.jsx";

export default function Wizard({ steps }) {
  const [stepIndex, setStepIndex] = useState(5);

  return (
    <>
      <Wrapper>
        {steps.map((step) => step)}
        <WizardButton setStepIndex={setStepIndex} stepsLenght={10} />
      </Wrapper>
    </>
  );
}
