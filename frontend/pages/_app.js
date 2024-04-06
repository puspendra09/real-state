import React, { useEffect } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { appWithTranslation } from "../i18n";
import "./../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
// Store Strapi Global object in context
export const GlobalContext = createContext({});

function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <title>Find a Job | Snaprecruit Job</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Snaprecruit",
            url: "https://snaprecruit.com/",
            logo: "https://snaprecruit.com/images/logo.png",
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
                "@type": "ListItem", 
                "position": 1, 
                "name": "Search Jobs",
                "item": "https://snaprecruit.com/job-search-detail.html"  
            },{
                "@type": "ListItem", 
                "position": 2, 
                "name": "Post a Job",
                "item": "https://snaprecruit.com/public/post-job.html"  
            },{
                "@type": "ListItem", 
                "position": 3, 
                "name": "Snaprecruit Employer Help",
                "item": "https://snaprecruit.com/article/help-list.html"  
            },{
                "@type": "ListItem", 
                "position": 4, 
                "name": "Snaprecruit for Employer",
                "item": "https://snaprecruit.com/employer-home.html"  
            },{
                "@type": "ListItem", 
                "position": 5, 
                "name": "Job Description",
                "item": "https://snaprecruit.com/article/jobdescription-list.html"  
            },{
                "@type": "ListItem", 
                "position": 6, 
                "name": "Register",
                "item": "https://snaprecruit.com/register.html"  
            }]
            `,
          }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <NextNProgress color="#008E76" />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default appWithTranslation(MyApp);
