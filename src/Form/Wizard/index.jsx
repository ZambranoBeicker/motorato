import { Wrapper, WizardButton } from "./styles.jsx";

export default function Wizard({ steps }) {
  return (
    <>
      <Wrapper>
        {steps.map((step) => step)}
        <WizardButton />
      </Wrapper>
    </>
  );
}
