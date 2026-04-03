import React from "react";
import Logo from "../UI/Logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { InstagramIcon, XIcon } from "@/app/_assets/icons/Icon";

const links = [
  {
    id: 1,
    title: "pages",
    links: [
      { id: 1, label: "home", path: "/" },
      { id: 2, label: "explore", path: "/explore" },
      { id: 3, label: "blogs", path: "/blogs" },
    ],
  },
  {
    id: 2,
    title: "cookies",
    links: [
      { id: 1, label: "terms_conditions", path: "/terms" },
      { id: 2, label: "privacy_policy", path: "/privacy" },
    ],
  },
];
const socialLinks = [
  { id: 1, icon: <InstagramIcon />, path: "/" },
  { id: 2, icon: <XIcon />, path: "/" },
];
const Footer = () => {
  const t = useTranslations();
  return (
    <footer className=" px-2 pb-2">
      <div className=" container bg-black rounded-lg py-6 flex flex-col gap-6   ">
        {/* top */}
        <section className="flex  flex-col sm:flex-row sm:items-start justify-between gap-6 sm:gap-4">
          {/* logo and slogon */}
          <div className="flex flex-col gap-4 max-w-[345px]">
            <Logo />
            <p className="text-natural-500 text-sm">{t("slogen")}</p>
          </div>
          {/* links */}
          <div className="flex sm:items-start sm:max-w-[300px] w-full justify-between sm:px-4">
            {links?.map((item) => (
              <div key={item?.id} className="flex flex-col gap-6">
                <h2 className="text-white">{t(item?.title)}</h2>
                <nav className="flex flex-col gap-3">
                  {item?.links?.map((links) => (
                    <Link
                      key={links?.id}
                      href={links?.path}
                      className="text-natural-500 capitalize"
                    >
                      {t(links?.label)}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full bg-white/20 h-px" />
        {/* bottom (copy right and social links) */}
        <div className="flex items-center justify-between">
          <p className="text-natural-500 ">&copy;2026 {t("copy_right")}</p>
          <div className="flex items-center gap-4">
            {socialLinks?.map((item) => {
              return (
                <span
                  className={` w-9 h-9 rounded-full flex items-center justify-center bg-white/15 `}
                  key={item?.id}
                >
                  {item?.icon}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
