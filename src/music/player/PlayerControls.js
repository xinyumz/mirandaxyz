import React from "react";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
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
        <MdSkipPrevious />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className={playlistStyles.pause}
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <IoPauseSharp />
        </button>
      ) : (
        <button
          type="button"
          className={playlistStyles.play}
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <IoPlaySharp />
        </button>
      )}
      <button
        type="button"
        className={playlistStyles.next}
        aria-label="Next"
        onClick={onNextClick}
      >
        <MdSkipNext />
      </button>
    </div>
  );
}
