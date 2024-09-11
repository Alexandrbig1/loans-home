import Logo from "../UI/Logo/Logo";
import {
  ArrowIcon,
  BurgerWrapper,
  HeaderButton,
  HeaderItems,
  HeaderNavLink,
  HeaderNavMenu,
  HeaderNavWrapper,
  HeaderWrapper,
} from "./Header.styled";
import MenuLists from "../../data/menuLists";
import MemoizedThemeSwitcher from "../UI/ThemeSwitcher/ThemeSwitcher";
import { motion } from "framer-motion";
import MenuBurgerIcon from "./MenuBurgerIcon";
import { useMenu } from "../../context/ToggleMenuContext";
import ApprovedModal from "../UI/ApprovedModal/ApprovedModal";

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
            {MenuLists.map(({ to, list, arrow }) => {
              return (
                <HeaderItems key={to}>
                  <HeaderNavLink to={to}>
                    {arrow ? (
                      <>
                        {list}
                        <ArrowIcon />
                      </>
                    ) : (
                      `${list}`
                    )}
                  </HeaderNavLink>
                </HeaderItems>
              );
            })}
          </HeaderNavMenu>
          {/* <MobileHeader /> */}
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
