import styled from "styled-components";
import heroImg from "@/assets/hero.jpg";
import heroImgWebp from "@/assets/hero.webp";
import { cursiveFont, primaryFont } from "../fonts";
import { GiSwapBag } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2.4rem;
  display: flex;
  padding: 0 1.2rem;
  padding: 12.8rem 0;
  margin: 8.4rem auto 14.8rem;
  margin: 0 auto;

  @supports (background-image: url(${heroImgWebp})) {
    background-image: url(${heroImgWebp});
  }

  @media (min-width: 768px) {
    /* margin: 8.4rem auto; */
  }

  @media (min-width: 1440px) {
    margin: 0 1.2rem;
    padding: 10.8rem 9.6rem 12.8rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: end;
  gap: 5.4rem;
  padding: 0 1.2rem;

  @media (min-width: 768px) {
    gap: 2.4rem;
    padding: 3.6rem 1.2rem;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    padding: 2.4rem 0 3.6rem;
  }
`;

export const HeroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1.2rem 0 2.4rem;

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
  color: ${({ theme }) => theme.colors.whiteColor};
  text-align: center;
  color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.blackTextColor};

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1440px) {
    font-size: 4.2rem;
    text-align: start;
    line-height: 0.58;
  }
`;

export const HeroText = styled.p`
  font-family: ${primaryFont};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4.2rem;
  line-height: 0.88;
  color: ${({ theme }) => theme.colors.blackTextColor};
  padding: 1.2rem;
  border-radius: 1.2rem;

  @media (min-width: 1440px) {
    font-size: 4.2rem;
    margin-left: -1.2rem;
  }
`;

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
`;

export const ApplyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ApplyTodayText = styled.span`
  font-family: ${cursiveFont};
  text-transform: capitalize;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const WhereWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: #f8f9fa;
  padding: 1.2rem;
  padding-left: 2.4rem;
  text-transform: uppercase;
`;

export const WhereTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const GoWrapper = styled(Link)`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.colors.accentColor};
  padding: 1.2rem;
  font-family: ${primaryFont};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 1.6rem;
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColorHover};
  }
`;

export const WhereIcon = styled(GiSwapBag)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.blackTextColor};
  color: #e09f3e;
`;

export const WhereArrow = styled(IoMdArrowDropdown)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.accentColor};
`;
