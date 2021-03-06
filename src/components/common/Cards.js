import styled from "styled-components";

export const CardInfo = styled.h4`
  font-weight: 700;
  text-align: center;
  line-height: 5rem;
  font-size: 4rem;
  margin: 0 3.2rem;
  margin-bottom: 2.4rem;
  letter-spacing: 1px;
`;
export const CardItem = styled.article`
  border: 1px solid #dfe0eb;
  align-items: center;
  flex: 0 1 20rem;
  border-radius: 8px;
  background: #ffffff;
  transition: all 0.5s;
  &:hover {
    color: #3751ff;
    cursor: pointer;
    border: 1px solid #3751ff;
    transform: scale(1.02);
  }
`;
export const CardTitle = styled(CardInfo)`
  color: #9fa2b4; // не подходит по контрасту
  letter-spacing: 0.4px;
  text-transform: capitalize;
  margin-bottom: 1.2rem;
  line-height: 2.3rem;
  font-size: 1.9rem;
  margin-top: 2.4rem;
  transition: 0.5s;
  ${CardItem}:hover & {
    color: #3751ff;
  }
`;
