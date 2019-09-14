import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    title,
    cannonical
  } = props;
  const headerType = props.headerType || 'default';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="My name is Andrew Rhee and I am an experienced software
                  engineer and freelance developer. I have over 10 years of experience working on a wide range of
                  technologies and proecjts from a variety of programming
                  languages and frameworks."
        />
        <meta
          name="keywords"
          content="andrew rhee portfolio, andrew rhee developer, andrew rhee freelancing, andrew rhee programming"
        />
        <meta
          property="og:title"
          content="Andrew Rhee - programmer, developer, bloger"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="My name is Andrew Rhee and I am an experienced software engineer and freelance developer."
        />
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`} />}

      </Head>
      <div className="layout-container">
        {
          <Header
            className={`port-nav-${headerType}`}
            isAuthenticated={isAuthenticated}
            isSiteOwner={isSiteOwner}
            user={user}
          />
        }
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default BaseLayout;