import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("home");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
};

export default Hero;
