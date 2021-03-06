import styled from "styled-components";
export const JustifyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #dfe0eb;
  :last-child {
    border: none;
  }
`;
export const LeftText = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: #252733;
  @media (max-width: 457px) {
    font-size: 1.2rem;
  }
`;
export const RightText = styled(LeftText)`
  color: #9fa2b4;
`;
export const Wrapper = styled.article`
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  padding: 32px 32px 0 32px;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  flex-basis: 49rem;
  position: relative;
  @media (max-width: 1086px) {
    flex-basis: 44rem;
  }
  @media (max-width: 987px) {
    flex-basis: 40rem;
  }
  @media (max-width: 905px) {
    flex-basis: 75rem;
  }
  @media (max-width: 505px) {
    flex-basis: 38rem;
  }
  @media (max-width: 455px) {
    flex-basis: 30rem;
  }
`;
