import {
  HeroContainer,
  HeroText,
  HeroTitle,
  HeroTitleWrapper,
  HeroWrapper,
} from "./Hero.styled";

function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTitleWrapper>
          <HeroTitle>Your Mortgage</HeroTitle>
          <HeroText>Powered by your neighbor</HeroText>
        </HeroTitleWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;
