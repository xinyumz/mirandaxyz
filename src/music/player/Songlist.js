import React from "react";
import playlistStyles from "./Playlist.module.css";

export default function Songlist({ index, title, duration }) {
  return (
    <div className={playlistStyles.songlist}>
      <div className={playlistStyles.index}>{index + 1}</div>
      <div className={playlistStyles.songTitle}>{title}</div>
      <div className={playlistStyles.duration}>{duration}</div>
    </div>
  );
}
