import React from "react";
import { BiTime } from "react-icons/bi";
import playlistStyles from "./Playlist.module.css";

export default function SonglistHeader() {
  return (
    <div className={playlistStyles.songlistHeader}>
      <div className={playlistStyles.index}>#</div>
      <div className={playlistStyles.songTitle}>TITLE</div>
      <div className={playlistStyles.duration}>
        <BiTime />
      </div>
    </div>
  );
}
