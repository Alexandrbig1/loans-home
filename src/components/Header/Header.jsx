import Logo from "../UI/Logo/Logo";
import MenuLists from "../../data/menuLists";
import MemoizedThemeSwitcher from "../UI/ThemeSwitcher/ThemeSwitcher";
import { motion } from "framer-motion";
import MenuBurgerIcon from "./MenuBurgerIcon";
import { useMenu } from "../../context/ToggleMenuContext";
import ApprovedModal from "../UI/ApprovedModal/ApprovedModal";
import {
  ArrowIcon,
  BurgerWrapper,
  HeaderButton,
  HeaderDropDown,
  HeaderDropDownBtn,
  HeaderDropDownBtnWrapper,
  HeaderDropDownCallBtn,
  HeaderDropDownImg,
  HeaderDropDownItem,
  HeaderDropDownLink,
  HeaderDropDownMenu,
  HeaderDropDownRight,
  HeaderItems,
  HeaderMailIcon,
  HeaderNavLink,
  HeaderNavMenu,
  HeaderNavWrapper,
  HeaderPhoneIcon,
  HeaderWrapper,
  RightDropDownLink,
  RightDropDownMenu,
} from "./Header.styled";

function Header() {
  const { approvedModal } = useMenu();

  const handleApprovedClick = () => {
    approvedModal();
  };

  return (
    <HeaderWrapper>
      <Logo />
      <HeaderNavWrapper>
        <nav>
          <HeaderNavMenu>
            {MenuLists.map(({ to, list, arrow, start }) => {
              return arrow ? (
                <HeaderItems key={to}>
                  <HeaderDropDownLink>
                    {list}
                    <ArrowIcon />
                  </HeaderDropDownLink>
                  {start ? (
                    <HeaderDropDown>
                      <HeaderDropDownMenu>
                        <HeaderDropDownItem>
                          <HeaderDropDownBtnWrapper>
                            <HeaderDropDownBtn
                              href="mailto:contact@alexsmagin.dev"
                              aria-label="Send an email to support"
                              title="Send us an email"
                            >
                              Text Us
                              <HeaderMailIcon />
                            </HeaderDropDownBtn>
                            <HeaderDropDownCallBtn
                              href="tel:+1234567890"
                              aria-label="Call our support number"
                              title="Call us now"
                            >
                              Call Us
                              <HeaderPhoneIcon />
                            </HeaderDropDownCallBtn>
                          </HeaderDropDownBtnWrapper>
                        </HeaderDropDownItem>
                        <HeaderDropDownItem>
                          <picture>
                            <source
                              srcSet="public/images/contact.webp"
                              type="image/webp"
                            />
                            <HeaderDropDownImg
                              src="public/images/contact.jpg"
                              alt="placeholder"
                            />
                          </picture>
                        </HeaderDropDownItem>
                      </HeaderDropDownMenu>
                    </HeaderDropDown>
                  ) : (
                    <HeaderDropDownRight>
                      <RightDropDownMenu>
                        <li>
                          <RightDropDownLink to="/about">
                            About Us
                          </RightDropDownLink>
                        </li>
                        <li>
                          <RightDropDownLink to="/careers">
                            Careers
                          </RightDropDownLink>
                        </li>
                        <li>
                          <RightDropDownLink to="/partnerships">
                            Partnerships
                          </RightDropDownLink>
                        </li>
                        <li>
                          <RightDropDownLink to="/community">
                            Community
                          </RightDropDownLink>
                        </li>
                        <li>
                          <RightDropDownLink to="/learning">
                            Learning Resources
                          </RightDropDownLink>
                        </li>
                      </RightDropDownMenu>
                    </HeaderDropDownRight>
                  )}
                </HeaderItems>
              ) : (
                <HeaderItems key={to}>
                  <HeaderNavLink to={to}>{list}</HeaderNavLink>
                </HeaderItems>
              );
            })}
          </HeaderNavMenu>
        </nav>
        <BurgerWrapper>
          <HeaderButton type="button" onClick={handleApprovedClick}>
            Get Pre-Approved
          </HeaderButton>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1.25 }}
          >
            <MemoizedThemeSwitcher />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1.5 }}
          >
            <MenuBurgerIcon />
          </motion.div>
        </BurgerWrapper>
        <ApprovedModal />
      </HeaderNavWrapper>
    </HeaderWrapper>
  );
}

export default Header;
