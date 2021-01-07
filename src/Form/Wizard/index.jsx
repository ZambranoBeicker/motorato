import { useState } from "react";
import { Wrapper, WizardButton } from "./styles.jsx";
import Firebase from "../../firebaseConfig.js";

export default function Wizard({ steps, data }) {
  const [stepIndex, setStepIndex] = useState(0);
  const firebase = new Firebase();

  const clickHandler = (data) => {
    firebase
      .getRef("usuarios")
      .add(data.user)
      .then((res) => console.info("data sent successfully usuarios", res))
      .catch((err) => console.error(err));

    firebase
      .getRef("vehiculos")
      .add(data.vehicle)
      .then((res) => console.info("data sent successfully vehiculos", res))
      .catch((err) => console.error(err));

    firebase.storageRef("vehicles/" + data.files.name, data.files);
  };

  return (
    <>
      <Wrapper>
        {steps[stepIndex]}
        {stepIndex === steps.length - 1 ? (
          <WizardButton
            saveButton
            setStepIndex={setStepIndex}
            onClick={() => clickHandler(data)}
            stepsLenght={steps.length}
          />
        ) : (
          <WizardButton
            setStepIndex={setStepIndex}
            stepsLenght={steps.length}
          />
        )}
      </Wrapper>
    </>
  );
}
