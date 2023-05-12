import MainLayout from "@/src/Components/layout/main-layout";
import "@/styles/globals.css";
import "@/styles/globals.scss";

import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
