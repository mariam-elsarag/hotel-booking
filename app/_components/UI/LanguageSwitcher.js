"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = locale === "en" ? "ar" : "en";

  return (
    <button onClick={() => router.push(`/${switchLocale}${pathname.slice(3)}`)}>
      {switchLocale.toUpperCase()}
    </button>
  );
}
