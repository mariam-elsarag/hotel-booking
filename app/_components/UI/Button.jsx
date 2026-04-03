"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";
import Spinner from "../feadback/Spinner";

const Button = ({
  variant = "white",
  hasFullWidth = false,
  hasCenterContent = true,
  onClick,
  to,
  arialLabel,
  type = "button",
  text,
  className,
  size = "lg",
  loading,
  disabled,
  icon,
  iconDirection = "right",
}) => {
  const router = useRouter();
  const t = useTranslations();
  const base = ` rounded-full font-medium transition-all duration-300 ease-in-out  ${
    loading || disabled ? "cursor-default" : "cursor-pointer"
  } ${hasFullWidth ? "w-full" : ""} flex items-center gap-2 ${
    hasCenterContent ? "justify-center text-center" : ""
  } `;
  const sizes = {
    lg: "h-11 px-4",
    sm: "h-9  px-4 py-2",
    xs: "w-8 h-8 ",
  };
  const styles = {
    white:
      "bg-white text-black border border-transparent hover:border-white hover:text-white hover:bg-white/5 hover:backdrop-blur-md ",
    transparent: "",
    black: "bg-black text-white",
  };
  return (
    <button
      type={type}
      aria-label={arialLabel}
      onClick={() => {
        if (to) {
          router.push(to);
        }
        if (onClick) {
          onClick();
        }
      }}
      className={`${base} ${sizes[size]} ${styles[variant ?? "light"]} ${
        className ?? ""
      } `}
    >
      {iconDirection === "left" ? (
        icon ? (
          icon
        ) : loading ? (
          <Spinner size="sm" />
        ) : null
      ) : null}
      {text && <span>{t(text)}</span>}
      {iconDirection === "right" ? (
        icon ? (
          icon
        ) : loading ? (
          <Spinner size="sm" />
        ) : null
      ) : null}
    </button>
  );
};

export default Button;
