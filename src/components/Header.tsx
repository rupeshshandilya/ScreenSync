import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="text-center py-6 space-y-5">
      <h1 className="text-3xl sm:text-4xl font-bold text-light-text flex gap-2 items-end">
        <Image
          src="/images/recordedVideo.png"
          width={0}
          height={0}
          alt="Record Screen"
          sizes="100vw"
          className="w-16"
          priority={true}
        />
        ScreenSync
      </h1>
      <p className="text-light-text">Share Instantly, Save Effortlessly.</p>
    </header>
  );
};

export default Header;
