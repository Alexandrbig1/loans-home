import { Helmet } from "react-helmet-async";
import { NotFoundText, NotFoundWrapper } from "./NotFound.styled";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Neighborhood Loans</title>
        <meta
          name="description"
          content="Oops! The page you’re looking for doesn’t exist. Please return to the Neighborhood Loans homepage to explore our services and get the help you need."
        />
        <meta
          name="keywords"
          content="404 error, page not found, Neighborhood Loans, missing page, error page"
        />
        <meta name="robots" content="noindex, follow" />
        <meta
          property="og:title"
          content="404 - Page Not Found | Neighborhood Loans"
        />
        <meta
          property="og:description"
          content="We’re sorry, but the page you were trying to reach doesn’t exist. Visit the Neighborhood Loans homepage for more information and services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://neighborhoodloans.netlify.app"
        />
        <meta property="og:image" content="/neighborhood.png" />
        <meta property="og:site_name" content="Neighborhood Loans" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@alexsmagin29" />
        <meta name="twitter:site" content="@alexsmagin29" />
        <meta
          name="twitter:title"
          content="404 - Page Not Found | Neighborhood Loans"
        />
        <meta
          name="twitter:description"
          content="The page you’re looking for cannot be found. Head back to the Neighborhood Loans homepage to find what you need."
        />
        <meta name="twitter:image" content="/neighborhood.png" />
      </Helmet>
      <NotFoundWrapper>
        <NotFoundText>
          <h1>Oops! We Can’t Find That Page.</h1>
          <p>
            It looks like the page you’re looking for doesn’t exist or has been
            moved. Don’t worry, though—our homepage has everything you need to
            get back on track.
          </p>
        </NotFoundText>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;
