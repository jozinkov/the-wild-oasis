import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.$type === "horizontal" &&
    css`
      align-items: center;
      justify-content: space-between;
      /* gap: 2rem; */
    `}
  ${(props) =>
    props.$type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  $type: "vertical",
};

export default Row;
