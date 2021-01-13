import styled from "styled-components";

const getRedundantStyles = () => {
  return `
  display: block;
  width: 100%;
  padding: 0.625rem 0.9375rem;
  border: solid 1px #b9b9b9;
  margin-top: 0.625rem;
  color: #616161;
  border-radius: 0.4rem;
  font-size: 1.125rem;
  font-weight: bold;
  `;
};

export const Box = styled.div`
  display: ${({ display }) => (display ? display : "block")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-right: ${({ mr }) => (mr ? mr : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  margin-left: ${({ ml }) => (ml ? ml : "0")};
  width: ${({ w }) => (w ? w : "auto")};
  height: ${({ h }) => (h ? h : "auto")};
  max-width: ${({ mw }) => (mw ? mw : "auto")};
  max-height: ${({ mh }) => (mh ? mh : "auto")};
  ${({ flexWrap }) => (flexWrap ? `flex-wrap: ${flexWrap};` : "")}
`;

export const Wrapper = styled.div`
  margin-left: 25%;
  width: 50%;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  float: left;
`;

export const FormElement = styled.form`
  width: 100%;
  padding: 1rem 1.5rem;
  border: solid 1px #b9b9b9;
  margin-top: 1rem;
  color: #616161;
  border-radius: 0.4rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: normal;
  color: var(--azuloscuro);
`;

export const InputElement = styled.input`
  ${getRedundantStyles()}
  ${({ margin }) => (margin ? `margin: ${margin};` : "margin-top: 0.5rem;")}
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

export const Button = styled.button`
  background: ${({ background }) => (background ? background : "blue")};
  color: ${({ color }) => (color ? color : "white")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: 1.25rem 3.125rem;
  padding: ${({ padding }) => padding && padding};
  cursor: pointer;
  text-decoration: ${({ next }) => (next ? "none" : "underline")};
  font-weight: bold;
  ${({ next }) => (next ? "margin-left: auto" : "margin-right:auto")};
  border: none;
  border-radius: 0.3125rem;
  display: inline-block;
  width: auto;
  box-shadow: 0.025rem 0.025rem 0.1875rem rgba(6, 23, 121, 0.18);
  transition: all ease 0.3s;
  font-size: 1.125rem;
  &:hover {
    box-shadow: 0.025rem 0.025rem 0.1875rem #0617798f;
    transform: scale(1.1);
  }
`;

const InputWrapper = styled.div`
  max-width: 100%;
  margin-top: 1.25rem;
`;

export const SeparationWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const Textarea = styled.textarea`
  ${getRedundantStyles()}
`;

export const Select = styled.select`
  ${getRedundantStyles()}
  ${({ margin }) => (margin ? `margin: ${margin};` : "margin-top: 0.5rem;")}
`;
export const SelectElement = ({ options }) => {
  return (
    <Select margin="0.5rem 0 0 0" name="" id="">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export const Price = ({ label, button, placeholder, type }) => {
  return (
    <>
      <Box ml="auto" mr="auto" mw="100%">
        <Box>
          <Label>{label}</Label>
        </Box>
        <Box mt="1rem" mw="100%" display="flex">
          <Button
            padding="0 3.125rem"
            background="var(--azul)"
            margin="0 0 0 auto"
            next
          >
            {button}
          </Button>
          <InputElement margin="0" type={type} placeholder={placeholder} />
        </Box>
      </Box>
    </>
  );
};

export const Input = ({ name, type, placeholder, onChange, label }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputElement
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};
