import "styles/globals.css";
import TopBar from "./components/top-bar";
import Header from "./components/header";
import Footer from "./components/footer";
// import useLocalStorage from 'use-local-storage';

import { i18n } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  // const [theme] = useLocalStorage('theme', 'light')

  return (
    <html lang={params.lang}>
      <body>
        {/* data-theme={theme} */}
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: "Papanikos Plexiglas",
  description: "",
};
