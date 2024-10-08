// import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <StyledWrapper>
      <div className="container-input">
        <input type="text" placeholder="Search" name="text" className="input" />
        <svg
          fill="#000000"
          width="20px"
          height="20px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container-input {
    position: relative;
  }

  .input {
    width: 150px;
    padding: 10px 0px 10px 40px;
    border-radius: 9999px;
    border: solid 1px #333;
    transition: all 0.2s ease-in-out;
    outline: none;
    opacity: 0.8;
  }

  .container-input svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
  }

  .input:focus {
    opacity: 1;
    width: 250px;
  }
`;

export default SearchBar;
