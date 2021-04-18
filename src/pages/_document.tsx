import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Sunny Golovine</title>

          <link rel="shortcut icon" href="/img/favicon.ico" />

          <meta
            name="description"
            content="Personal Website of Sunny Golovine"
          />

          <meta name="robots" content="follow,index" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
