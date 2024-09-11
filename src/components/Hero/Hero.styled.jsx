import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";
import heroImgWebp from "@/assets/hero.webp";
import { primaryFont } from "../fonts";

export const HeroContainer = styled.div`
  width: 85%;
  height: 100%;

  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.2rem;
  margin: 8.4rem auto 14.8rem;

  @supports (background-image: url(${heroImgWebp})) {
    background-image: url(${heroImgWebp});
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 8.4rem auto;
  }

  @media (min-width: 1440px) {
    margin: 0 auto;
    width: 80%;
    padding: 4.8rem 9.6rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 5.4rem;
  padding: 3.6rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.4rem;
    padding: 3.6rem 1.2rem;
  }

  @media (min-width: 1440px) {
    padding: 2.4rem 0 3.6rem;
  }
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1.2rem 0 2.4rem;
  width: 50%;

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const HeroTitle = styled.h1`
  font-family: ${primaryFont};
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 1.15;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blackTextColor};
  text-align: center;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.2rem;
    text-align: start;
    line-height: 1.2;
  }
`;

export const HeroText = styled.p`
  font-family: ${primaryFont};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4.2rem;
  line-height: 1.6;
  width: 85%;
  color: ${({ theme }) => theme.colors.blackTextColor};
  padding: 1.2rem;
  border-radius: 1.2rem;
  width: 95%;

  @media (min-width: 1440px) {
    font-size: 4.2rem;
    margin-left: -1.2rem;
  }
`;
