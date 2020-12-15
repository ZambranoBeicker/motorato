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

const InputElement = styled.input``;

const InputWrapper = styled.div`
  max-width: 50%;
  margin-top: 1rem;
`;

export const Input = ({ type, placeholder }) => {
  return (
    <InputWrapper>
      <InputElement type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};
