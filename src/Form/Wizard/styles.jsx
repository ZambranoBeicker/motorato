import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 1rem 1.75rem;
  background: ${({ next }) => (next ? "red" : "lightgray")};
  color: ${({ next }) => (next ? "white" : "black")};
  border: 1px solid black;
  ${({ next }) => (next ? "margin-left: auto" : "margin-right:auto")};
`;

export const Wrapper = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonsWrapper = styled(Wrapper)`
  margin-top: 1.5rem;
  width: 100%;
`;

export const WizardButton = () => {
  return (
    <ButtonsWrapper>
      <Button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Previous
      </Button>
      <Button
        next
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Next
      </Button>
    </ButtonsWrapper>
  );
};
