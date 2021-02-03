import { useState } from "react";
import { FlexWrapper, Wrapper, WizardButton } from "./styles.jsx";
import Firebase from "../../firebaseConfig.js";
import { Transition } from "react-transition-group";

export default function Wizard({ steps, data }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [inProp, setInProp] = useState(false);
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

    data.files.forEach((image) => {
      firebase.storageRef("vehicles/" + image.name, image);
    });
  };

  return (
    <>
      <Wrapper>
        <FlexWrapper position={stepIndex} step={stepIndex}>
          {steps.map((step) => (
            <div style={{ width: "25%" }}>{step}</div>
          ))}
        </FlexWrapper>
        {stepIndex === steps.length - 1 ? (
          <WizardButton
            saveButton
            setStepIndex={setStepIndex}
            onClick={() => {
              clickHandler(data);
            }}
            stepsLenght={steps.length}
          />
        ) : (
          <WizardButton
            onClick={() => {
              setInProp(true);
            }}
            setStepIndex={setStepIndex}
            stepsLenght={steps.length}
          />
        )}
      </Wrapper>
    </>
  );
}
