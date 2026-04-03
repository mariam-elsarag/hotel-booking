"use client";

import { LanguageIcon } from "@/app/_assets/icons/Icon";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Button from "./Button";

export default function LanguageSwitcher({ className }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      className={`cursor-pointer text-white flex items-center gap-2 ${
        className ?? ""
      } `}
      onClick={() => router.push(`/${switchLocale}${pathname.slice(3)}`)}
    >
      <Button icon={<LanguageIcon width="18" hight="18" />} size="xs" />
      {switchLocale.toUpperCase()}
    </button>
  );
}
