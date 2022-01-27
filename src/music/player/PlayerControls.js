import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
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
        onTouchEnd={onPrevClick}
      >
        <SkipPreviousIcon fontSize="inherit" />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className={playlistStyles.pause}
          onClick={() => onPlayPauseClick(false)}
          onTouchEnd={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <PauseCircleIcon fontSize="inherit" />
        </button>
      ) : (
        <button
          type="button"
          className={playlistStyles.play}
          onClick={() => onPlayPauseClick(true)}
          onTouchEnd={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <PlayCircleIcon fontSize="inherit" />
        </button>
      )}
      <button
        type="button"
        className={playlistStyles.next}
        aria-label="Next"
        onClick={onNextClick}
        onTouchEnd={onNextClick}
      >
        <SkipNextIcon fontSize="inherit" />
      </button>
    </div>
  );
}
