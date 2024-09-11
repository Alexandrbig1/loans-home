import { Suspense } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { MainContainer } from "../components/layout";
import Loader from "../components/UI/Loader/Loader";
import MenuBurger from "../components/Header/MenuBurger";
// import ScrollBtn from "../components/UI/ScrollBtn/ScrollBtn";

function RootLayout() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <MenuBurger />
      {/* <ScrollBtn /> */}
      <MainContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default RootLayout;
