import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
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
  margin-top: 2rem;
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
