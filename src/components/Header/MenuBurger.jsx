import { motion } from "framer-motion";
import {
  BurgerContainer,
  CloseBurgerMenu,
  Menu,
  BurgerMenuItems,
  BurgerLogoWrapper,
  MenuBurgerText,
  MenuBurgerLinkIcon,
  MenuBurgerItems,
  BurgerMenuFooterWrapper,
  CloseBurgerIcon,
  CloseBurgerWrapper,
} from "./MenuBurger.styled";
import { useMenu } from "../../context/ToggleMenuContext";
import SocialIcons from "../UI/SocialIcons/SocialIcons";
import FooterRightsText from "../UI/FooterRightsText/FooterRightsText";
import menuItems from "../../data/menuLists";

// eslint-disable-next-line react/prop-types
export default function MenuBurger() {
  const { toggleMenu, menuOpen } = useMenu();

  const menuVars = (index) => ({
    initial: {
      x: "-100%",
      opacity: 0,
    },
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5 * index,
        ease: [0.12, 0, 0.39, 0],
        type: "spring",
      },
    },
  });

  return (
    <Menu $isOpen={menuOpen}>
      <CloseBurgerWrapper>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            <CloseBurgerMenu
              type="button"
              aria-label="Close Menu"
              onClick={toggleMenu}
            >
              <CloseBurgerIcon />
            </CloseBurgerMenu>
          </motion.div>
        )}
      </CloseBurgerWrapper>
      <BurgerContainer>
        <nav>
          <BurgerMenuItems>
            {menuItems.map(({ to, list, id }, idx) => (
              <MenuBurgerItems
                key={id}
                onClick={toggleMenu}
                variants={menuVars(idx)}
                initial="initial"
                animate="animate"
              >
                <MenuBurgerText to={to} end>
                  <MenuBurgerLinkIcon />
                  {list}
                </MenuBurgerText>
              </MenuBurgerItems>
            ))}
          </BurgerMenuItems>
        </nav>
      </BurgerContainer>
      <BurgerMenuFooterWrapper>
        <BurgerLogoWrapper>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              <SocialIcons color="#7289d9" />
            </motion.div>
          )}
        </BurgerLogoWrapper>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", delay: 1 }}
          >
            <FooterRightsText burger />
          </motion.div>
        )}
      </BurgerMenuFooterWrapper>
    </Menu>
  );
}
