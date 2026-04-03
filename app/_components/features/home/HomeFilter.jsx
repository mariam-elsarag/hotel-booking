import { useTranslations } from "next-intl";
import React from "react";

const HomeFilter = () => {
  const t = useTranslations();
  return (
    <section className="absolute z-10 bottom-6 container">
      <h1 className="text-white font-semibold text-2xl sm:text-[48px] capitalize">
        {t("findYourStayction")}
      </h1>
      {/* search */}
    </section>
  );
};

export default HomeFilter;
