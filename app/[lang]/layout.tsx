import { Cousine, Roboto } from 'next/font/google'

import "styles/globals.css";
import TopBar from "./components/top-bar";
import Header from "./components/header";
import Footer from "./components/footer";
import { getDictionary } from "../../get-dictionary";

import { Locale, i18n } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const cousine = Cousine({ weight: "400", subsets: ['latin', 'greek'], display: 'swap', })
export const headerFont = Roboto({ weight: "700", subsets: ['latin', 'greek'], display: 'swap', })


export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {

  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={cousine.className}> 
      <body> 
        <TopBar />
        <Header dictionary={dictionary.Header} locale={params.lang} />
        <main>{children}</main>
        <Footer dictionary={dictionary.Footer} locale={params.lang}/>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Papanikos Plexiglas",
  description: "",
};
