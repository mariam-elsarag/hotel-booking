import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import Logo from "../UI/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../UI/Button";
import LanguageSwitcher from "../UI/LanguageSwitcher";

const MobileNavigaition = ({ isOpen, onClose, list }) => {
  const t = useTranslations();
  const pathname = usePathname();
  const localeFreePath = pathname?.replace(/^\/(en|ar)/, "") || "/";

  const locale = useLocale();
  const isRtl = locale === "ar";
  const asideRef = useOutsideClick(onClose);
  return (
    <div
      className={`fixed p-4 bg-black/20 backdrop-blur-md inset-0  ${
        isOpen ? "visible z-20" : "invisible z-[-1]"
      } `}
    >
      <aside
        ref={asideRef}
        className={` py-8 px-6 transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0"
            : isRtl
            ? "translate-x-full"
            : "-translate-x-full"
        } bg-white w-[290px] flex flex-col gap-10 justify-between h-full rounded-lg`}
      >
        <button onClick={onClose}>
          <Logo variant="dark" />
        </button>
        <nav className="flex-1 flex flex-col gap-4">
          {list?.map((navLink) => {
            const isActive =
              navLink.path === "/"
                ? localeFreePath === "/"
                : localeFreePath.startsWith(navLink?.path);

            return (
              <Link
                key={navLink?.id}
                href={navLink?.path}
                onClick={onClose}
                className={`text-lg font-medium transition duration-150 ease-in-out ${
                  isActive ? "text-black" : "text-black/50 hover:text-black"
                } `}
              >
                {t(navLink?.label)}
              </Link>
            );
          })}
        </nav>
        <footer className="flex flex-col gap-4">
          <LanguageSwitcher className="text-black!" />
          <Button text="signIn" variant="black" hasFullWidth size="lg" />
        </footer>
      </aside>
    </div>
  );
};

export default MobileNavigaition;
