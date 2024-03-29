import WorkPage from "../components/workPage";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function Work({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <WorkPage title={dictionary.Work.title} locale={lang} />;
}
