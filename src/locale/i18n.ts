import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

import en from "./en.json";
import pl from "./pl.json";

export const deviceLanguage = getLocales()?.[0]?.languageCode ?? "en";

export const i18n = new I18n({ en, pl });

export function changeLanguage(lang: string) {
  i18n.locale = lang;
}

i18n.defaultLocale = deviceLanguage;
i18n.locale = deviceLanguage;
