import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import playlistStyles from "./Playlist.module.css";

export default function PlayerControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className={playlistStyles.controls}>
      <button
        type="button"
        className={playlistStyles.prev}
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <SkipPreviousIcon fontSize="inherit" />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className={playlistStyles.pause}
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <PauseIcon fontSize="inherit" />
        </button>
      ) : (
        <button
          type="button"
          className={playlistStyles.play}
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <PlayArrowIcon fontSize="inherit" />
        </button>
      )}
      <button
        type="button"
        className={playlistStyles.next}
        aria-label="Next"
        onClick={onNextClick}
      >
        <SkipNextIcon fontSize="inherit" />
      </button>
    </div>
  );
}
