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
  WhereArrow,
  WhereIcon,
  WhereTextWrapper,
  WhereWrapper,
} from "./Hero.styled";

function Hero() {
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
            <WhereWrapper>
              <WhereTextWrapper>
                <WhereIcon />
                <span>Where to?</span>
              </WhereTextWrapper>
              <WhereArrow />
            </WhereWrapper>
            <GoWrapper to="about">Go!</GoWrapper>
          </ApplyWrapper>
        </CTAWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default Hero;
