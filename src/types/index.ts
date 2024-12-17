export interface MediaContextProps {
  recording: boolean;
  stream: MediaStream | null;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  selectedOption: string
  setSelectedOption: (options: string) => void
  mediaUrl: string
  pauseRecording: () => void
  resumeRecording: () => void
  recordingPaused: boolean
}
