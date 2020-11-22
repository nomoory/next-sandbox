import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

const globalStyles = `
#__next {
    height: 100%;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

h1 {
    max-width: 100%;
    font-weight: unset;
    font-size: 20px;
    line-height: 28px;
    color: rgb(61, 61, 61);
}

h1, h2, h3, h4, h5, p {
    margin: 0;
}

*:focus {
    outline:0 !important;
}

[type=radio] {
    width: 24px;
}

[type=checkbox] {
    width: 24px;

}

label {
    font-size: 1.2em !important; 
    font-weight: 500 !important;
    line-height: 1.2em !important;
    margin: 0 0 .4rem 0 !important;
}

form {
    margin: 0 auto !important;
    max-width: 840px !important;
    flex: 1 !important;
    justify-content: center !important;
    display: flex !important;
    flex-direction: column !important;
}

input {
    font-size: 17px !important;
}

textarea {
    font-size: 17px !important;
}

.ui.form .fields .field { 
    margin: 1em 0 !important;
}

`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <style type="text/css">{globalStyles}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
