import { LogoDarkImg, LogoImg } from "@/app/_assets/images/Image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ variant = "light" }) => {
  return (
    <Link href="/">
      <Image
        src={variant === "light" ? LogoImg : LogoDarkImg}
        alt="Booking logo"
        width="24px"
      />
    </Link>
  );
};

export default Logo;
