import "@/styles/globals.scss";
import "@/styles/components/header.scss";
import "@/styles/pages/Home.scss";
import "@/styles/pages/login.scss";
import "@/styles/pages/signup.scss";
import "@/styles/pages/item.scss";
import "@/styles/pages/profile.scss";
import "@/styles/pages/dashboard.scss";
import "@/styles/pages/item-type.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { appWithTranslation } from "next-i18next";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ENVIROMENTS } from "@/utils/login";
import { SessionProvider } from "next-auth/react";
import { store } from "@/redux/store";

const counter = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ASSIGN":
      return action.payload;
    default:
      return state;
  }
};

const menuIndex = (state = 0, action: any) => {
  switch (action.type) {
    case "MENU_INDEX":
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  counter,
  menuIndex,
  // add more reducers here
});

function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={ENVIROMENTS.GG_CLIENT_ID}>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </GoogleOAuthProvider>
  );
}
export default appWithTranslation(App);
