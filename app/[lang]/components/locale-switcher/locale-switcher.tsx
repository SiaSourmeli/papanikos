"use client";

import styles from "./locale-switcher.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../../i18n-config";

export default function LocaleSwitcher({activeLang}) {
  
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul className={styles.languagesUl}>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                className={activeLang === locale ? styles.activeLanguage : ''}
                href={redirectedPathName(locale)}
              > {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
