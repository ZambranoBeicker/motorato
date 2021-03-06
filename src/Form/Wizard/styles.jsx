import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background: ${({ next }) => (next ? "var(--azul)" : "transparent")};
  color: ${({ next }) => (next ? "white" : "var(--azul)")};
  text-decoration: ${({ next }) => (next ? "none" : "underline")};
  font-weight: ${({ next }) => (next ? "bold" : "normal")};
  border: 1px solid black;
  ${({ next }) => (next ? "margin-left: auto" : "margin-right:auto")};
  border: none;
  border-radius: 0.3125rem;
  padding: 1.25rem 3.125rem;
  display: inline-block;
  width: auto;
  box-shadow: 0.025rem 0.025rem 0.1875rem rgba(6, 23, 121, 0.18);
  transition: all ease 0.3s;
  float: right;
  font-size: 1.125rem;
  &:hover {
    box-shadow: 0.025rem 0.025rem 0.1875rem #0617798f;
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100%;
  position: relative;
`;
export const FlexWrapper = styled.div`
  width: 400%;
  display: flex;
  transition: 0.5s;
  height: ${({ step }) => {
    if (step === 1) {
      return "1600px";
    } else if (step === 2) {
      return "500px";
    } else if (step === 3) {
      return "600px";
    } else {
      return "550px";
    }
  }};
  transform: translateX(
    -${({ position }) => {
        return position * 25;
      }}%
  );
`;

const ButtonsWrapper = styled(Wrapper)`
  display: flex;
  margin-top: 1.5rem;
  width: 100%;
`;

export const WizardButton = ({
  setStepIndex,
  stepsLenght,
  saveButton,
  onClick,
}) => {
  return (
    <ButtonsWrapper>
      <Button
        onClick={(e) => {
          e.preventDefault();
          setStepIndex((index) => {
            if (index <= 0) {
              return 0;
            }

            return index - 1;
          });
        }}
      >
        Previous
      </Button>
      {!saveButton ? (
        <Button
          next
          onClick={(e) => {
            e.preventDefault();
            setStepIndex((index) => {
              if (index >= stepsLenght - 1) {
                return stepsLenght - 1;
              }

              return index + 1;
            });
          }}
        >
          Next
        </Button>
      ) : (
        <Button
          next
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          Save
        </Button>
      )}
    </ButtonsWrapper>
  );
};
