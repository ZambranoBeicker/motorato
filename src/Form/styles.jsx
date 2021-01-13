import styled from "styled-components";

const getRedundantStyles = () => {
  return `
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  border: solid 1px #b9b9b9;
  margin-top: 1rem;
  color: #616161;
  border-radius: 0.4rem;
  font-size: 1.8rem;
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
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
`;

export const InputElement = styled.input`
  ${({ margin }) => (margin ? `margin: ${margin};` : "margin-top: 0.5rem;")}
  ${getRedundantStyles()}
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
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius};` : ""}
  background: ${({ background }) => (background ? background : "blue")};
  color: ${({ color }) => (color ? color : "white")};
  margin: ${({ margin }) => (margin ? margin : "0")};
`;

const InputWrapper = styled.div`
  max-width: 50%;
  margin-top: 1rem;
`;

export const SeparationWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
`;

export const Select = styled.select`
  ${getRedundantStyles()}
`;
export const SelectElement = ({ options }) => {
  return (
    <Select name="" id="">
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
          <Button margin="0 0 0 auto">{button}</Button>
          <InputElement
            margin="0.5rem auto 0 0"
            type={type}
            placeholder={placeholder}
          />
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
