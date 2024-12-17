"use client";

import { useRouter } from "next/navigation";
import React from "react";

const HomeButton = () => {
  const router = useRouter();

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <button
      onClick={redirectToHome}
      className="bg-warning font-2xl w-full sm:w-1/2 py-3 font-bold text-white rounded-xl"
    >
      Record Another Video
    </button>
  );
};

export default HomeButton;
