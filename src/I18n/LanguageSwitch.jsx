import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import EN from "../assets/UK.png";
import ES from "../assets/ES.png";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const langOptions = [
    { value: "en", label: "EN", icon: EN },
    { value: "es", label: "ES", icon: ES },
  ];

  const formatOptionLabel = ({ label, icon }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={icon}
        alt={label}
        style={{ marginRight: 10, width: 25, height: 20 }}
      />
      <span>{label}</span>
    </div>
  );

  const handleLanguageChange = useCallback(
    (option) => {
      i18n.changeLanguage(option.value);
    },
    [i18n]
  );

  return (
    <div className="lang_switch">
      <Select
        options={langOptions}
        getOptionLabel={(option) => option.label}
        getOptionValue={(option) => option.value}
        formatOptionLabel={formatOptionLabel}
        onChange={handleLanguageChange}
        value={langOptions.find((option) => option.value === i18n.language)}
      />
    </div>
  );
};

export default LanguageSwitch;
