import { useMediaContext } from "@/context/MediaContext";
import React from "react";
import HomeButton from "./HomeButton";

const MediaControlButtons = () => {
  const {
    recording,
    mediaUrl,
    recordingPaused,
    resumeRecording,
    pauseRecording,
    stopRecording,
  } = useMediaContext();

  const downloadVideo = () => {
    const a = document.createElement("a");
    a.href = mediaUrl;
    a.download = "recorderd-video.mp4";
    a.click();
  };

  if (!recording) {
    return (
      <div className="flex gap-4 w-full sm:w-1/2 flex-col xs:flex-row">
        <HomeButton />
        <button
          className="bg-primary font-2xl w-full sm:w-1/2 py-3 font-bold text-white rounded-xl"
          onClick={downloadVideo}
        >
          Download Video
        </button>
      </div>
    );
  }

  return (
    <div>
      {recordingPaused ? (
        <button
          className="bg-warning font-2xl w-full sm:w-1/2 py-3 font-bold text-white rounded-xl"
          onClick={resumeRecording}
        >
          Resume Recording
        </button>
      ) : (
        <button
          className="bg-primary font-2xl w-full sm:w-1/2 py-3 font-bold text-white rounded-xl"
          onClick={pauseRecording}
        >
          Pause Recording
        </button>
      )}

      <button
        className="bg-danger font-2xl w-full sm:w-1/2 py-3 font-bold text-white rounded-xl"
        onClick={stopRecording}
      >
        Stop Recording
      </button>
    </div>
  );
};

export default MediaControlButtons;
