"use client";
import React, { use, useState } from "react";
import Logo from "../UI/Logo";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../UI/LanguageSwitcher";
import { usePathname } from "next/navigation";
import Button from "../UI/Button";
import { BurgerIcon } from "@/app/_assets/icons/Icon";
import MobileNavigaition from "./MobileNavigaition";

const navList = [
  {
    id: 1,
    label: "home",
    path: "/",
  },
  { id: 2, label: "explore", path: "/explore" },
  { id: 3, label: "blogs", path: "/blogs" },
];
const Navigaition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const pathname = usePathname();
  const localeFreePath = pathname?.replace(/^\/(en|ar)/, "") || "/";
  const isHome = localeFreePath === "/";
  console.log(pathname);
  return (
    <>
      <header
        className={` max-w-[1536px] ${
          isHome
            ? "absolute px-2  z-10 flex top-3 w-[calc(100%-16px)] left-1/2 -translate-x-1/2"
            : " pt-4 px-2"
        }`}
      >
        <nav
          className={`container w-full py-3 flex items-center justify-between gap-4 ${
            isHome ? "" : "bg-black   rounded-full backdrop-blur-lg"
          } `}
        >
          <Logo />
          <ul className="hidden sm:flex items-center gap-6">
            {navList?.map((item) => {
              const isActive =
                item.path === "/"
                  ? localeFreePath === "/"
                  : localeFreePath.startsWith(item.path);

              return (
                <Link
                  key={item?.id}
                  href={item?.path}
                  className={`transition duration-150 ease-in-out ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {t(item?.label)}
                </Link>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <LanguageSwitcher className="hidden sm:flex" />
            <Button
              icon={<BurgerIcon />}
              size="xs"
              className="flex sm:hidden"
              onClick={() => setIsOpen(true)}
            />
            <Button text="signIn" size="sm" className="hidden sm:flex" />
          </div>
        </nav>
      </header>
      <MobileNavigaition
        list={navList}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navigaition;
