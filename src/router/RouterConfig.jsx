import { lazy } from "react";
import RootLayout from "../layouts/RootLayout";
import { createRoutesFromElements, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const OfficerSearch = lazy(() =>
  import("../pages/OfficerSearch/OfficerSearch")
);
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

export const RouterConfig = () =>
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="search" element={<OfficerSearch />} />
      <Route path="blog" element={<Blog />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  );
