import { HeroImg } from "@/app/_assets/images/Image";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import HomeFilter from "./HomeFilter";

const Hero = () => {
  const t = useTranslations("home");
  return (
    <div className=" max-w-[1536px] w-full mx-auto min-h-[500px] sm:min-h-[680px] relative after:content[''] after:bg-black/60 after:inset-0 after:absolute after:z-1 after:rounded-lg  ">
      <Image
        src={HeroImg}
        alt="Home hero image"
        fill
        className="object-cover rounded-lg"
        placeholder="blur"
      />
      <HomeFilter />
    </div>
  );
};

export default Hero;
