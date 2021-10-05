import Head from "next/head";
import { FC } from "react";

const Container: FC = ({ children }) => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Let us help you find exceptional talent to augment your team
        </title>
        <meta
          name="title"
          content="Let us help you find exceptional talent to augment your team"
        />
        <meta
          name="description"
          content="Our L&D professionals are experienced, vetted, available, and ready to augment your team in any roles you need. Contact us to find your perfect fit!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://talent-solutions.sweetrush.com/"
        />
        <meta
          property="og:title"
          content="Let us help you find exceptional talent to augment your team"
        />
        <meta
          property="og:description"
          content="Our L&D professionals are experienced, vetted, available, and ready to augment your team in any roles you need. Contact us to find your perfect fit!"
        />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://talent-solutions.sweetrush.com/"
        />
        <meta
          property="twitter:title"
          content="Let us help you find exceptional talent to augment your team"
        />
        <meta
          property="twitter:description"
          content="Our L&D professionals are experienced, vetted, available, and ready to augment your team in any roles you need. Contact us to find your perfect fit!"
        />
        <meta property="twitter:image" content="" />
      </Head>
      {children}
    </>
  );
};

export default Container;
