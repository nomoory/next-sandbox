import "antd/dist/antd.css";
import "../styles/global.css";
import { Provider } from "mobx-react";
import { ThemeProvider } from "styled-components";
import { useStore } from "../stores/stores";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider {...store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
