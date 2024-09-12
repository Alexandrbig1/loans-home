import { useState } from "react";
import HeroSelectData from "../../data/heroSelect.json";
import {
  ApplyTodayText,
  ApplyWrapper,
  CTAWrapper,
  GoWrapper,
  HeroContainer,
  HeroText,
  HeroTitle,
  HeroTitleWrapper,
  HeroWrapper,
  SelectedHeroText,
  SelectedOption,
  SelectedOptionText,
  WhereArrowDown,
  WhereArrowUp,
  WhereIcon,
  WhereTextWrapper,
  WhereWrapper,
} from "./Hero.styled";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHeroText, setSelectedHeroText] = useState("");

  const handleOptionClick = (text) => {
    setSelectedHeroText(text);
    setIsOpen(false);
  };

  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTitleWrapper>
          <HeroTitle>Your Mortgage</HeroTitle>
          <HeroText>
            Powered by <br /> your neighbor
          </HeroText>
        </HeroTitleWrapper>
        <CTAWrapper>
          <ApplyTodayText>Apply Today</ApplyTodayText>
          <ApplyWrapper>
            <WhereWrapper onClick={() => setIsOpen(!isOpen)}>
              <WhereTextWrapper>
                <WhereIcon />
                <SelectedHeroText>
                  {selectedHeroText || "Where to?"}
                </SelectedHeroText>
              </WhereTextWrapper>
              {isOpen ? <WhereArrowUp /> : <WhereArrowDown />}
              {isOpen && (
                <SelectedOption>
                  {HeroSelectData.map(({ id, heroSelect }) => (
                    <SelectedOptionText
                      key={id}
                      onClick={() => handleOptionClick(heroSelect)}
                    >
                      {heroSelect}
                    </SelectedOptionText>
                  ))}
                </SelectedOption>
              )}
            </WhereWrapper>
            <GoWrapper to="about">Go!</GoWrapper>
          </ApplyWrapper>
        </CTAWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;
