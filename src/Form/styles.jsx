import { useState, createRef, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

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
  position: ${({ position }) => (position ? position : "static")};
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
  margin-left: 20%;
  width: 60%;
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

export const Checkbox = ({ name, onChange, label }) => {
  const [hover, setHover] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const checkboxRef = createRef();

  useEffect(() => {
    checkboxRef.current.checked = isChecked;
  }, [isChecked]);

  const CheckboxContainer = styled.div`
    position: relative;
    cursor: pointer;
    font-size: 22px;
    user-select: none;
    width: fit-content;
    margin-right: 0.625rem;
    margin-bottom: 1rem;
    z-index: 100;
    transition: 0.5s;
  `;

  const borderWrapperEnter = keyframes`

    0%{
      background: white;
      padding:0.3125rem 0.625rem 0.3125rem 1.875rem;
    }
    100%{
      background: var(--azuloscuro);
      padding:0.3125rem 1.925rem 0.3125rem 0.575rem;
    }
  `;
  /*const borderWrapperLeave = keyframes`

    0%{
      background: var(--azuloscuro);
      padding:0.3125rem 1.925rem 0.3125rem 0.575rem;
    }
    100%{
      background: white;
      padding:0.3125rem 0.625rem 0.3125rem 1.875rem;
    }
  `;*/

  const checkMarkEnter = keyframes`

    0%{
      opacity: 0;
      transform: translateX(135px);
    }
    100%{
      opacity: 1;
      transform: translateX(135px);
    }
  `;
  const BorderWrapper = styled.div`
    border: solid 1px #666;
    border-radius: 62.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.8125rem;
    padding: 0.3125rem 0.625rem 0.3125rem 1.875rem;
    ${({ animation }) =>
      animation &&
      css`
        animation: ${borderWrapperEnter} 0.5s forwards;
      `}
  `;

  const InputCheckbox = styled.input`
    opacity: 0;
    position: absolute;
  `;
  const CheckboxLabel = styled(Label)`
    cursor: pointer;
    transition: 0.5s;
    ${isClicked && "color: white;"}
  `;
  const CheckMark = styled.span`
    position: absolute;
    left: 0.3125rem;
    height: 1.0625rem;
    width: 1.0625rem;
    background-color: var(--azul);
    border-radius: 62.5rem;
    background-size: 0.5625rem;
    background-color: #fff;
    border: solid 2px;
    background-position: center center;
    background-repeat: no-repeat;
    border: solid 1px #ccc;
    background-image: ${hover &&
    "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQxN3B0IiB2aWV3Qm94PSIwIC00NiA0MTcuODEzMzMgNDE3IiB3aWR0aD0iNDE3cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE1OS45ODgyODEgMzE4LjU4MjAzMWMtMy45ODgyODEgNC4wMTE3MTktOS40Mjk2ODcgNi4yNS0xNS4wODIwMzEgNi4yNXMtMTEuMDkzNzUtMi4yMzgyODEtMTUuMDgyMDMxLTYuMjVsLTEyMC40NDkyMTktMTIwLjQ2ODc1Yy0xMi41LTEyLjUtMTIuNS0zMi43Njk1MzEgMC00NS4yNDYwOTNsMTUuMDgyMDMxLTE1LjA4NTkzOGMxMi41MDM5MDctMTIuNSAzMi43NS0xMi41IDQ1LjI1IDBsNzUuMTk5MjE5IDc1LjIwMzEyNSAyMDMuMTk5MjE5LTIwMy4yMDMxMjVjMTIuNTAzOTA2LTEyLjUgMzIuNzY5NTMxLTEyLjUgNDUuMjUgMGwxNS4wODIwMzEgMTUuMDg1OTM4YzEyLjUgMTIuNSAxMi41IDMyLjc2NTYyNCAwIDQ1LjI0NjA5M3ptMCAwIi8+PC9zdmc+)"};
    ${({ animation }) =>
      animation &&
      css`
        animation: ${checkMarkEnter} 0.5s forwards;
      `}
  `;

  return (
    <CheckboxContainer
      onClick={(e) => {
        setIsClicked((state) => !state);
        setIsChecked((state) => !state);
      }}
    >
      <InputCheckbox
        ref={checkboxRef}
        name={name}
        type="checkbox"
        onChange={onChange}
      />
      <BorderWrapper
        animation={isClicked}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          if (!isClicked) {
            //setHover(false);
            console.info("hovered");
          }
        }}
      >
        <CheckMark animation={isClicked} />
        <CheckboxLabel>{label}</CheckboxLabel>
      </BorderWrapper>
    </CheckboxContainer>
  );
};
