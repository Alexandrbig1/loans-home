import { Helmet } from "react-helmet-async";
import { NotFoundText, NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Neighborhood Loans</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to the Neighborhood Loans homepage to explore our community, events, and projects."
        />
        <meta
          name="keywords"
          content="404 page not found, Neighborhood Loans, missing page, error page"
        />
        <meta name="robots" content="noindex, follow" />

        <meta
          property="og:title"
          content="404 - Page Not Found | Neighborhood Loans"
        />
        <meta
          property="og:description"
          content="Sorry, the page you were looking for couldn't be found. Head back to Neighborhood Loans homepage to explore more."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:url"
          content="https://opencodechicago.netlify.app/404"
        /> */}
        {/* <meta property="og:image" content="/logo.png" /> */}
        {/* <meta property="og:site_name" content="Open Code Chicago" /> */}

        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="404 - Page Not Found | Neighborhood Loans"
        />
        <meta
          name="twitter:description"
          content="The page you're looking for doesn't exist. Visit the Neighborhood Loans homepage to find what you're looking for."
        />
        <meta name="twitter:image" content="/logo.png" />
      </Helmet>
      <NotFoundWrapper>
        <NotFoundText>404 Page Not Found</NotFoundText>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
