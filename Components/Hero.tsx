"use client";
import Image from "next/image";
import { CustomButton } from "./index";
const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight / 2.5,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car — quickly and super easily!
        </h1>
        <p className="hero__subtitle">
          Optimize your car rental experience with our easy booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero3.png" alt="hero" fill className="object-contain " />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
