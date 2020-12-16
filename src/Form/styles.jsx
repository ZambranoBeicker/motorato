import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
`;

export const FormElement = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
`;

const InputElement = styled.input`
  margin-top: 0.5rem;
`;

export const Submit = styled.input`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0.75rem 1.75rem;
  border-radius: 1.5rem;
  border: 1px solid black;
  background: transparent;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  max-width: 50%;
  margin-top: 1rem;
`;

export const Input = ({ type, placeholder, label }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputElement type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};
