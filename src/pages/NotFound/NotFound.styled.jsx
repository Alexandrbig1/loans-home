import styled from "styled-components";
import { primaryFont } from "../../components/fonts";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  width: 80%;
`;

export const NotFoundImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 44rem;
`;

export const NotFoundTitle = styled.h1`
  width: 60%;
  text-align: center;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.4444;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTextColor};

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const NotFoundText = styled.p`
  width: 60%;
  text-align: center;
  font-family: ${primaryFont};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.4444;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.mainTextColor};

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
