import styled from "styled-components";
import { primaryFont } from "../../fonts";

export const LogoWrapper = styled.a`
  display: flex;
  gap: 0.6rem;
  align-items: center;
`;

export const LogoText = styled.span`
  color: ${(p) => p.theme.colors.mainTextColor};
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.16667;
  letter-spacing: -0.02em;

  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const LogoTextSpan = styled.span`
  color: ${(p) => p.theme.colors.whiteColor};
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.16667;
  letter-spacing: -0.02em;
  z-index: 2;
`;

export const LogoTextHome = styled.span`
  width: 100%;
  /* width: 10rem; */
  height: 3.2rem;
  display: flex;
  align-items: end;
  justify-content: center;
  position: absolute;
  right: -90%;
  bottom: 0;
  z-index: 1;

  clip-path: polygon(
    50% 0%,
    100% 46%,
    91% 46%,
    91% 100%,
    11% 100%,
    10% 48%,
    0 48%
  );
  background-color: green;
`;
