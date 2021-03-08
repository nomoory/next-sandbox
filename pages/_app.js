import "antd/dist/antd.css";
import "styles/global.css";
import { Provider } from "mobx-react";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { useStore } from "../stores/stores";
import { useEffect } from "react";
import { appWithTranslation, i18n } from "../i18n";
import { ServerStyleSheet } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

function App({ Component, pageProps, ...props }) {
  const store = useStore(pageProps.initialState);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    i18n.changeLanguage(locale);
    store.languageStore.setLanguage(locale || "ko");
  }, [locale]);
  return (
    <Provider {...store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}


export default appWithTranslation(App, i18n);
