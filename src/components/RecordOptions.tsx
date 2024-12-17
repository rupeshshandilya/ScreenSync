"use client";
import { useMediaContext } from "@/context/MediaContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const RecordOptions = () => {
  const { recording, startRecording, selectedOption, setSelectedOption } =
    useMediaContext();

  const handleOptionClick = (e: any) => {
    setSelectedOption(e.currentTarget.dataset.name);
  };

  const router = useRouter();

  useEffect(() => {
    if (recording) {
      router.push("/record-preview");
    }
  }, [recording, router]);

  const optionClassNames = (option: string) =>
    `flex flex-col items-center justify-center border-2 aspect-square rounded-xl overflow-hidden w-full sm:w-[200px] cursor-pointer select-none ${
      selectedOption === option ? "border-primary" : "border-white"
    }`;

  return (
    <div className="flex flex-col items-center gap-8 py-4 justify-center w-full">
      <h2 className="text-xl sm:text-2xl text-light-text">
        What Do You Want to Capture Today?
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-col-2 xs:gap-8 w-full sm:w-auto">
        <div
          className={optionClassNames("screenWithAudio")}
          onClick={handleOptionClick}
          data-name="screenWithAudio"
        >
          <Image
            src="/images/screenWithAudio.png"
            alt="Record Screen"
            width={0}
            height={0}
            className="w-2/3"
            sizes="100vw"
            priority={true}
          />
          <p className="font-semibold pb-2">Screen and Audio</p>
        </div>
        {/* Screen only */}
        <div
          className={optionClassNames("screenOnly")}
          onClick={handleOptionClick}
          data-name="screenOnly"
        >
          <Image
            src="/images/screenOnly.png"
            alt="Record Screen Only"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
            className="w-2/3"
          />
          <p className="font-semibold pb-2">Screen Only</p>
        </div>
      </div>
      <button
        onClick={startRecording}
        className="bg-primary font-2xl w-full sm:w-1/2 py-3 font-bold text-white rounded-xl"
      >
        Start Recording
      </button>
    </div>
  );
};

export default RecordOptions;
