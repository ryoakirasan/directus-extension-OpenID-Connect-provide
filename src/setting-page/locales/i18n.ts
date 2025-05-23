import { createI18n } from "vue-i18n";
import parser from "accept-language-parser";
import en from "./en.json";
import zh_Hans from "./zh-Hans.json";
import zh_Hant from "./zh-Hant.json"
import ja from "./ja.json"
import ko from "./ko.json"
import de from "./de.json"
import fr from "./fr.json"
import it from "./it.json"
import vi from "./vi.json"
const messages = {
  en,
  ja,
  ko,
  de,
  fr,
  it,
  vi,
  "zh-CN":zh_Hans,
  "zh-TW":zh_Hant,
  "zh-Hans":zh_Hans,
  "zh-Hant":zh_Hant,
  "zh-Hans-HK":zh_Hans,
  "zh-Hant-HK":zh_Hant,
};
const globalLocales = [
  "en",
  "ja",
  "ko",
  "de",
  "fr",
  "it",
  "vi",
  "zh-Hans",
  "zh-Hant",
  "zh-CN",
  "zh-TW",
  "zh-Hans-HK",
  "zh-Hant-HK",
]
const i18n = createI18n({
  locale: "en",
  fallbackLocale: globalLocales,
  messages,
});
const globalI18n = i18n.global;
export const getTranslate = ()=>{
  const languages = navigator.languages || [navigator.language];
  const preferred = parser.pick(globalLocales, languages.join(","));
  //@ts-ignore
  globalI18n.locale.value = preferred || "en"
  return globalI18n.t;
}

