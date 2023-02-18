import { useCallback } from "react";

import { useTranslation } from "react-i18next";

import { Dropdown } from "primereact/dropdown";

import EN from "../assets/UK.png";
import ES from "../assets/ES.png";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const langOptions = [
    { value: "en", label: "EN", icon: EN },
    { value: "es", label: "ES", icon: ES },
  ];

  const langItemTemplate = (langOptions) => {
    return (
      <div className="country-flag">
        <img alt={langOptions.label} src={langOptions.icon} />
        <span className="ml-2">{langOptions.label}</span>
      </div>
    );
  };

  const selectedLangTemplate = (langOptions) => {
    if (langOptions) {
      return (
        <div className="country-flag">
          <img alt={langOptions.label} src={Poland} />
          <div>{langOptions.label}</div>
        </div>
      );
    }
  };

  const handleLanguageChange = useCallback(() => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  }, [i18n, langOptions]);

  return (
    <div className="lang_switch">
      <Dropdown
        options={langOptions}
        value={i18n.language}
        itemTemplate={langItemTemplate}
        valueTemplate={langItemTemplate || selectedLangTemplate}
        onChange={handleLanguageChange}
      />
    </div>
  );
};

export default LanguageSwitch;
