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
      <div
        type="button"
        className={playlistStyles.prev}
        aria-label="Previous"
        onClick={onPrevClick}
        onTouchStar={onPrevClick}
      >
        <SkipPreviousIcon fontSize="inherit" />
      </div>
      {isPlaying ? (
        <div
          type="button"
          className={playlistStyles.pause}
          onClick={() => onPlayPauseClick(false)}
          onTouchStar={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <PauseCircleIcon fontSize="inherit" />
        </div>
      ) : (
        <div
          type="button"
          className={playlistStyles.play}
          onClick={() => onPlayPauseClick(true)}
          onTouchStar={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <PlayCircleIcon fontSize="inherit" />
        </div>
      )}
      <div
        type="button"
        className={playlistStyles.next}
        aria-label="Next"
        onClick={onNextClick}
        onTouchStar={onNextClick}
      >
        <SkipNextIcon fontSize="inherit" />
      </div>
    </div>
  );
}
