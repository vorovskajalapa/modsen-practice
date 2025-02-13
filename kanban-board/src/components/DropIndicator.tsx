import styled from "styled-components";

const Indicator = styled.div`
  margin: 2px 0;
  height: 2px;
  width: 100%;
  background-color: #a78bfa; /* bg-violet-400 */
  opacity: 0;
`;

const DropIndicator = ({ beforeId, column }) => {
  return <Indicator data-before={beforeId || "-1"} data-column={column} />;
};

export default DropIndicator;
