import React from "react";
import { WiTime3 } from "react-icons/wi";
import playlistStyles from "./Playlist.module.css";

export default function SonglistHeader() {
  return (
    <div className={playlistStyles.songlistHeader}>
      <div className={playlistStyles.index}>#</div>
      <div className={playlistStyles.songTitle}>TITLE</div>
      <div className={playlistStyles.durationLogo}>
        <WiTime3 />
      </div>
    </div>
  );
}
