import { I18nextProvider } from "react-i18next";
import i18n from "../core/config/i18n"

import 'animate.css';
import '../styles/globals.css'
// import '../styles/bootstrap.css'
// import '../styles/slicker.css'
// import '../styles/animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default MyApp
