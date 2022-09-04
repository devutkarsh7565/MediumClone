import MediumProvider from "../context/MediumProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}

export default MyApp;
