import { I18nextProvider } from "react-i18next";
import i18n from "./i18";

const LanguageWrapper = ({ children }) => {
  return (
    <>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </>
  );
};

export default LanguageWrapper;
