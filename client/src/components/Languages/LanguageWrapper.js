import React, { useState } from "react";
import { IntlProvider } from "react-intl";
//Languages
import Spanish from "../../languages/en-Mx.json";
import English from "../../languages/en-US.json";

export const Context = React.createContext();
//Get Local language being used
const local = navigator.language;
let lang;
if (local !== "es") {
  lang = English;
} else {
  lang = Spanish;
}

const LanguageWrapper = (props) => {
  const [locale, setLocale] = useState("es");
  const [messages, setMessages] = useState(lang);

  function setLang(newLanguage) {
    setLocale(newLanguage);
    if (newLanguage === "es-MX") {
      setMessages(Spanish);
    } else {
      setMessages(English);
    }
  }

  console.log("locale", locale);

  return (
    <Context.Provider value={{ locale, setLang }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default LanguageWrapper;
